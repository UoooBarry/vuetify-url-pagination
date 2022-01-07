
# url-pagination

Automatically update the url query when the event of search is fired. The component will also set the page data in parent to the page in url when page created.

vuetify分页，自动将page属性同步到url中。当组件创建时，组件也会自动将url的page更新到父组件的page data中。

## Project setup

```
npm install --save vuetify-url-pagination
```

or

```
yarn add vuetify-url-pagination
```

## Basic Usage

```javascript
<template>
  <url-pagination
    v-model="page"
    :event="search"
  />
</template>
<script>
import UrlPagination from "vueitfy-url-pagination";

export default {
  components:{
    UrlPagination
  },
  data() {
    return {
      page: 1
    }
  },
  methods: {
    search() {
      api.Search(this.page)
    }
  },
  created() {
    this.search()
  }
}
</script>

```
