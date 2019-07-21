<template>
    <div id="nba-news">
        <div class="card mb-4 mx-auto" style="max-width: 50%; "
            v-for="n in news"
            :key="n.id">
            <div class="row no-gutters">
                <div class="col-md-4">
                    <img :src="n.image_source" class="card-img">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title"> <strong> {{n.title}} </strong></h5>
                        <p class="card-text text-truncate"> {{n.content}} </p>
                        <p class="card-text"><small class="text-muted"> {{n.date_time}} </small></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'News',
    data() {
        return {
            news: []
        }
    },
    created: function() {
        axios.get('/news').then(response => {
            let tmpData = response.data.data
            tmpData.forEach(element => {
                this.news.push(element)
            });
        })
    }
}
</script>
