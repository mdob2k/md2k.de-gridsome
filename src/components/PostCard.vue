<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title is-centered">
        <g-link :to="post.path" class="is-size-2">
          {{ post.title }}
        </g-link>
      </p>
    </header>

    <g-link v-if="post.cover_image" class="card-image" :to="post.path">
      <figure class="image is-16by9">
        <g-image alt="Cover image" :src="post.cover_image" />
      </figure>
    </g-link>

    <div class="card-content">
      <div class="content" v-html="post.description" />
      <PostMeta :post="post" />
    </div>

    <footer v-if="post.tags" class="card-footer">
      <PostTags class="card-footer-item" :post="post" />
    </footer>
  </div>
</template>

<script>
import PostMeta from '~/components/PostMeta'
import PostTags from '~/components/PostTags'

export default {
  components: {
    PostMeta,
    PostTags
  },
  props: ['post']
}
</script>
