<template>
  <Layout>
    <div class="container">
      <div class="columns">
        <div class="column is-8 is-offset-2">
          <h1 class="title is-1 has-text-centered tag-title">
            # {{ $page.tag.title }}
          </h1>

          <div class="posts">
            <PostCard
              v-for="edge in $page.tag.belongsTo.edges"
              :key="edge.node.id"
              :post="edge.node"
            />
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Tag ($id: ID!) {
  tag (id: $id) {
    title
    belongsTo {
      edges {
        node {
          ...on Post {
            title
            path
            date (format: "D. MMMM YYYY")
            timeToRead
            description
            content
          }
        }
      }
    }
  }
}
</page-query>

<script>
import PostCard from '~/components/PostCard.vue'

export default {
  components: {
    PostCard
  },
  metaInfo() {
    return {
      title: this.$page.tag.title
    }
  }
}
</script>
