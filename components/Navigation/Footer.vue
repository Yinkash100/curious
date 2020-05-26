<template>
  <div class="footer-container">
    <section v-if="loggedIn" class="footer-links top-footer-link">
      <div class="footer-links-group">
        <h4 class="footer-links-head">Company</h4>
        <ul class="footer-links-body">
          <li class="footer-links-each">
            <nuxt-link to="/">About us</nuxt-link>
          </li>
          <li class="footer-links-each">
            <nuxt-link to="/">Blog</nuxt-link>
          </li>
          <li class="footer-links-each">
            <nuxt-link to="/">Careers</nuxt-link>
          </li>
          <li class="footer-links-each">
            <nuxt-link to="/">Terms of Use</nuxt-link>
          </li>
          <li class="footer-links-each">
            <nuxt-link to="/">Copyright Policy</nuxt-link>
          </li>
          <li class="footer-links-each">
            <nuxt-link to="/">Cookie Policy</nuxt-link>
          </li>
          <li class="footer-links-each">
            <nuxt-link to="/">Privacy Policy</nuxt-link>
          </li>
        </ul>
      </div>
      <div class="footer-links-group">
        <h4 class="footer-links-head">Help</h4>
        <ul class="footer-links-body">
          <li class="footer-links-each">
            <nuxt-link to="/">Signup</nuxt-link>
          </li>
          <li class="footer-links-each">
            <nuxt-link to="/">Help Center</nuxt-link>
          </li>
          <li class="footer-links-each">
            <nuxt-link to="/">Safety Center</nuxt-link>
          </li>
          <li class="footer-links-each">
            <nuxt-link to="/">Responsible</nuxt-link>
          </li>
          <li class="footer-links-each">
            <nuxt-link to="/">Disclosure</nuxt-link>
          </li>
          <li class="footer-links-each">
            <nuxt-link to="/">Agreement</nuxt-link>
          </li>
          <li class="footer-links-each">
            <nuxt-link to="/">Contact Us</nuxt-link>
          </li>
        </ul>
      </div>
    </section>
    <section v-if="loggedIn" class="footer-links top-footer-link">
      <div class="footer-links-group">
        <h4 class="footer-links-head">Community</h4>
        <ul class="footer-links-body">
          <li class="footer-links-each">
            <nuxt-link to="/">Curious Community</nuxt-link>
          </li>
          <li class="footer-links-each">
            <nuxt-link to="/">Curious for Schools & Teachers</nuxt-link>
          </li>
          <li class="footer-links-each">
            <nuxt-link to="/">Curious for Parents</nuxt-link>
          </li>
          <li class="footer-links-each">
            <nuxt-link to="/">Curious Scholarship Program</nuxt-link>
          </li>
          <li class="footer-links-each">
            <nuxt-link to="/">Honor Code</nuxt-link>
          </li>
          <li class="footer-links-each">
            <nuxt-link to="/">Community Guidelines</nuxt-link>
          </li>
          <li class="footer-links-each">
            <nuxt-link to="/">Community Insights</nuxt-link>
          </li>
          <li class="footer-links-each">
            <nuxt-link to="/">Become a Volunteer</nuxt-link>
          </li>
        </ul>
      </div>
    </section>
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
          :remote="true"
          :url="'/institutions'"
          :dataKey="'/text'"
          :defaultSelectedValue="'All'"
          class=""
          @clicked="visit"
        />
      </div>
    </div>
    <section v-if="!loggedIn" class="footer-links bottom-footer-link">
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
import { mapGetters } from 'vuex'
export default {
  name: 'Footer',
  data() {
    return {
      selectedInstitution: '',
    }
  },
  computed: {
    ...mapGetters({
      loggedIn: 'users/loggedIn',
    }),
  },
  methods: {
    visit(institution) {
      console.log('He selected', this.selectedInstitution)
    },
  },
}
</script>

<style scoped lang="scss">
.footer-container {
  padding: 2rem 1rem;
  display: flex;
  flex-wrap: wrap;
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
  order: 11;

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
  order: 12;
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

  &-group {
    margin: 0 1.5rem 0 0;
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
.top-footer-link {
  order: 1;
}
.bottom-footer-link {
  order: 21;
}
</style>
