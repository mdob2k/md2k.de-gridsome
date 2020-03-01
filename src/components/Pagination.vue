<template>
  <nav class="pagination is-centered" role="navigation" aria-label="pagination">
    <g-link
      v-if="!isFirstPage(currentPage, totalPages)"
      :to="previousPage(currentPage, totalPages)"
      class="pagination-previous"
      tabindex="-1"
      >&laquo;</g-link
    >
    <g-link
      v-if="!isLastPage(currentPage, totalPages)"
      :to="nextPage(currentPage, totalPages)"
      class="pagination-next"
      tabindex="-1"
      >&raquo;</g-link
    >
    <ul class="pagination-list">
      <li v-for="page in pages" :key="page.name">
        <g-link
          :to="page.link"
          v-bind:class="[
            isCurrentPage(currentPage, page.name) ? 'is-current' : ''
          ]"
          class="pagination-link"
          :aria-label="page.name"
          :aria-current="page.name"
          >{{ page.name }}</g-link
        >
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    baseUrl: {
      type: String,
      default: ''
    },
    currentPage: Number,
    totalPages: Number,
    maxVisibleButtons: {
      type: Number,
      required: false,
      default: 3
    }
  },
  methods: {
    isFirstPage(currentPage, totalPages) {
      return currentPage == 1
    },
    isLastPage(currentPage, totalPages) {
      return currentPage == totalPages
    },
    isCurrentPage(currentPage, pageElement) {
      return currentPage == pageElement
    },
    nextPage(currentPage, totalPages) {
      return `${this.baseUrl}/${currentPage + 1}`
    },
    previousPage(currentPage, totalPages) {
      return currentPage === 2
        ? `${this.baseUrl}/`
        : `${this.baseUrl}/${currentPage - 1}`
    }
  },
  computed: {
    startPage() {
      if (this.currentPage === 1) {
        return 1
      }
      if (this.currentPage === this.totalPages) {
        return this.currentPage - 1
      }
      return this.currentPage - 1
    },
    pages() {
      const range = []
      for (
        let i = this.startPage;
        i <=
        Math.min(this.startPage + this.maxVisibleButtons - 1, this.totalPages);
        i += 1
      ) {
        range.push({
          name: i,
          isDisabled: i === this.currentPage,
          link: i === 1 ? `${this.baseUrl}/` : `${this.baseUrl}/${i}`
        })
      }
      return range
    }
  }
}
</script>
