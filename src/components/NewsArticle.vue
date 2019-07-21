<template>
    <div id="article">
        <div class="card mb-4 mx-auto" style="max-width: 50%; ">
            <div class="row no-gutters">
                <h2 class="card-title mx-auto"> <strong> {{news_article.title}} </strong></h2>
                <p class="card-text mx-auto"><small class="text-muted"> {{news_article.date_time}} {{news_article.author}} </small></p>
                <div class="card-body">
                    <img :src="news_article.image_source" class="card-img">
                    <p class="card-text"> {{news_article.content}} </p>
                    <div class="embed-responsive embed-responsive-16by9">
                        <iframe class="embed-responsive-item" :src="news_article.video_source" v-if="news_article.video_source !== null"></iframe>
                    </div>
                </div>    
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NewsArticle',
    props: ['news_article'],
    data() {
    return {
    }
  }
}
</script>
