<template>
  <Layout>
    <!-- List posts -->
    <div class="columns">
      <div class="column is-8 is-offset-2">
        <PostCard
          v-for="edge in $page.posts.edges"
          :key="edge.node.id"
          :post="edge.node"
        />
        <Pagination
          :currentPage="$page.posts.pageInfo.currentPage"
          :totalPages="$page.posts.pageInfo.totalPages"
          :maxVisibleButtons="5"
          v-if="$page.posts.pageInfo.totalPages > 1"
        />
      </div>
    </div>
  </Layout>
</template>

<script>
import PostCard from '~/components/PostCard.vue'
import Pagination from '@/components/Pagination.vue'

export default {
  components: {
    PostCard,
    Pagination
  },
  metaInfo: {
    title: 'Home'
  }
}
</script>

<page-query>
  query($page: Int) {
    posts: allPost(filter: { published: { eq: true } }, perPage: 3, page: $page) @paginate {
      pageInfo {
      totalPages
      currentPage
    }
      edges {
        node {
          id
          title
          date(format: "D. MMMM YYYY")
          timeToRead
          description
          cover_image(width: 1024, height: 576, blur: 10)
          path
          tags {
            id
            title
            path
          }
        }
      }
    }
  }
</page-query>
