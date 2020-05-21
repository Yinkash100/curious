<template>
  <div class="container">
    <div class="cookie-policy">
      <div class="cookie-policy__head u-center-text">
        <h3>We're in the know</h3>
      </div>
      <div class="cookie-policy__text">
        <font-awesome-icon :icon="['fab', 'youtube']" class="fa-2x" />
      </div>
      <div class="cookie-policy__icon">
        <p>
          This site is using
          <nuxt-link to="cookie-policy">cookie policy</nuxt-link>. You can
          specify the conditions of storing and accessing cookies in your
          browser.
        </p>
      </div>
    </div>
    <div class="others">
      <div class="curious-app">
        <p class="curious-app-text">Get the Curious app</p>
        <img :src="`appstore.svg`" class="curious-app-img" />
        <img :src="`playstore.svg`" class="curious-app-img" />
      </div>
      <div class="institution-specific">
        <BaseSelect
          v-model="selectedInstitution"
          :label="`Browse brainly for your school`"
          :options="curiousInstitutions"
          :defaultSelectedValue="'All'"
          class=""
          @clicked="visit"
        />
      </div>
    </div>
    <section class="footer-links">
      <div class="footer-links-group">
        <h4 class="footer-links-head">About us</h4>
        <ul class="footer-links-body">
          <li class="footer-links-each">
            <nuxt-link to="/">About us</nuxt-link>
          </li>
          <li class="footer-links-each">
            <nuxt-link to="/">Careers</nuxt-link>
          </li>
          <li class="footer-links-each">
            <nuxt-link to="/">Contact</nuxt-link>
          </li>
        </ul>
      </div>
      <div>
        <h4 class="footer-links-head">FAQ</h4>
        <ul class="footer-links-body">
          <li class="footer-links-each">
            <nuxt-link to="/">FAQ</nuxt-link>
          </li>
          <li class="footer-links-each">
            <nuxt-link to="/">Terms of Use</nuxt-link>
          </li>
          <li class="footer-links-each">
            <nuxt-link to="/">How do I receive points?</nuxt-link>
          </li>
          <li class="footer-links-each">
            <nuxt-link to="/">Privacy Policy</nuxt-link>
          </li>
          <li class="footer-links-each">
            <nuxt-link to="/">Community</nuxt-link>
          </li>
          <li class="footer-links-each">
            <nuxt-link to="/">Guidelines</nuxt-link>
          </li>
          <li class="footer-links-each">
            <nuxt-link to="/">Curious Insights</nuxt-link>
          </li>
          <li class="footer-links-each">
            <nuxt-link to="/">Become a Volunteer</nuxt-link>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      selectedInstitution: '',
      curiousInstitutions: [
        'All',
        'OAU',
        'UniLag',
        'FUTA',
        'UniIbadan',
        'UniBen',
        'UniIlorin',
        'FUTO',
      ],
      curiousInstitutionMapping: [
        {
          text: 'All',
          link: 'curious.com.ng',
        },
        {
          text: 'OAU',
          link: 'oau.curious.com.ng',
        },
        {
          text: 'Unilag',
          link: 'unilag.curious.com.ng',
        },
        {
          text: 'FUTA',
          link: 'futa.curious.com.ng',
        },
        {
          text: 'UniIbadan',
          link: 'ui.curious.com.ng',
        },
        {
          text: 'UniBen',
          link: 'ui.curious.com.ng',
        },
        {
          text: 'UniIlorin',
          link: 'uniilorin.curious.com.ng',
        },
        {
          text: 'FUTO',
          link: 'futo.curious.com.ng',
        },
      ],
    }
  },
  methods: {
    visit(institution) {
      console.log(institution)
      console.log('He selected', this.selectedInstitution)
    },
  },
}
</script>

<style scoped lang="scss">
.container {
  padding: 1rem 2rem;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
}
h3 {
  font-family: 'Poppins', sans-serif;
  text-transform: uppercase;
  font-size: 1rem;
  margin-bottom: 0.75rem;
}
.cookie-policy {
  width: 19rem;
  margin-top: 1rem;
  padding: 1rem 0;
  display: block;
  order: 1;

  &__head {
    font-family: 'Poppins', sans-serif;
  }
  &__body {
    font-size: 1.1rem;
    line-height: 1.75rem;
  }
}
.others {
  display: block;
  width: 19rem;
  margin-top: 1rem;
  padding: 1rem 0;
  order: 2;
}
.curious-app {
  margin: 1rem 0;
  &-text {
    font-family: 'Poppins', sans-serif;
    font-size: 1.05rem;
    text-transform: capitalize;
    margin-bottom: 1rem;
  }
  &-img {
    width: auto;
    height: 2rem;
  }
}
.institution-specific {
  width: 80%;
  margin: 1rem 0;
}
h4 {
  font-weight: bolder;
}
.footer-links {
  width: 19rem;
  margin-top: 1rem;
  padding: 1rem 0;
  display: flex;
  order: 3;
  &-group {
    width: 7rem;
  }
  &-head {
  }
  &-body {
  }
  &-each {
  }

  a {
    text-decoration: none;
  }
}
</style>
