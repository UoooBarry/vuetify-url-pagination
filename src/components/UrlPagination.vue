<template>
  <v-pagination v-bind="$attrs" v-on="$listeners" @input="search">
  </v-pagination>
</template>

<script>
export default {
  name: 'UrlPagination',
  props: {
    event: {
      type: Function,
      default: () => {},
    },
  },
  data() {
    return {
      queryPage: this.$route.query.page,
    }
  },
  computed: {
    currentPage: {
      get() {
        return this.$parent.$data.page || this.$parent.$data.q.page
      },
      set(val) {
        if (this.$parent.$data.page) {
          this.$parent.$data.page = val
        } else {
          this.$parent.$data.q.page = val
        }
      },
    },
  },
  async created() {
    if (this.queryPage && this.queryPage) {
      this.currentPage = parseInt(this.queryPage)
    }
  },
  methods: {
    async search() {
      await this.event()

      await this.updateUrl()
    },
    updateUrl() {
      const query = Object.assign({}, this.$route.query)

      query.page = this.currentPage
      this.$router.push({
        query,
      })
    },
  },
}
</script>
