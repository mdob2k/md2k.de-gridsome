<template>
  <Layout>
    <div class="columns">
      <div class="column is-8 is-offset-2">
        <div class="card">
          <div class="post-title has-text-centered">
            <h1 class="title is-1">
              {{ $page.post.title }}
            </h1>
            <PostMeta class="subtitle is-6" :post="$page.post" />
            <figure v-if="$page.post.cover_image" class="image is-16by9">
              <g-image alt="Cover image" :src="$page.post.cover_image" />
            </figure>
          </div>
          <div class="card-content">
            <div class="content" v-html="$page.post.content" />
          </div>
          <footer class="card-footer">
            <PostTags class="card-footer-item" :post="$page.post" />
          </footer>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import PostMeta from '~/components/PostMeta'
import PostTags from '~/components/PostTags'

export default {
  components: {
    PostMeta,
    PostTags
  },
  metaInfo() {
    return {
      title: this.$page.post.title,
      meta: [
        {
          name: 'description',
          content: this.$page.post.description
        }
      ]
    }
  }
}
</script>

<page-query>
query Post ($id: ID!) {
  post: post (id: $id) {
    title
    path
    date (format: "D. MMMM YYYY")
    timeToRead
    tags {
      id
      title
      path
    }
    description
    content
    cover_image (width: 1024, height: 576, blur: 10)
  }
}
</page-query>
