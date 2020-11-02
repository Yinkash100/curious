<template>
  <div>
    <p><i>finalizing authentication...</i></p>
  </div>
</template>

<script>
export default {
  beforeMount() {
    if (window.opener) {
      window.opener.focus()

      if (window.opener.loginCallBack) {
        window.opener.loginCallBack()
      }
    }
    window.close()
  },
}
</script>
