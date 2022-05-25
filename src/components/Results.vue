<template>
  <section class="results">
    <article class="results__header">
      <img :src="data.avatar_url" />
      <div class="results__info">
        <h2 class="info__login">{{ data.login }}</h2>
        <a class="info__link" :href="data.url">{{ url }}</a>
        <p class="info__joined">{{ joined }}</p>
      </div>
    </article>
    <article class="results__bio">
      <p v-if="data.bio">{{ data.bio }}</p>
      <p v-else>This profile has no bio.</p>
    </article>
    <article class="results__dashboard">
      <div class="dashboard__box">
        <p class="dashboard__title">Repos</p>
        <p class="dashboard__data">{{ data.public_repos }}</p>
      </div>
      <div class="dashboard__box">
        <p class="dashboard__title">Followers</p>
        <p class="dashboard__data">{{ data.followers }}</p>
      </div>
      <div class="dashboard__box">
        <p class="dashboard__title">Following</p>
        <p class="dashboard__data">{{ data.following }}</p>
      </div>
    </article>
    <article class="results__social">
      <div :class="[{ social__error: !data.location }, 'social__box']">
        <i class="fa-solid fa-location-dot"></i>
        <p class="social__data" v-if="data.location">{{ data.location }}</p>
        <p class="social__not" v-else>Not Avalible</p>
      </div>
      <div :class="[{ social__error: !data.blog }, 'social__box']">
        <i class="fa-solid fa-link"></i>
        <a class="social__data" v-if="data.blog" :href="data.blog">{{ data.blog }}</a>
        <p class="social__not" v-else>Not Avalible</p>
      </div>
      <div :class="[{ social__error: !data.twitter_username }, 'social__box']">
        <i class="fa-brands fa-twitter"></i>
        <a class="social__data" v-if="data.twitter_username" :href="data.twitter_username">{{
          data.twitter_username
        }}</a>
        <p class="social__not" v-else>Not Avalible</p>
      </div>
      <div :class="[{ social__error: !data.company }, 'social__box']">
        <i class="fa-solid fa-building"></i>
        <a class="social__data" v-if="data.company" :href="data.company">{{ data.company }}</a>
        <p class="social__not" v-else>Not Avalible</p>
      </div>
    </article>
  </section>
</template>
<script>
import { computed } from 'vue';
import Moment from 'moment';

export default {
  name: 'Results',
  props: {
    data: {
      type: Object,
      required: true,
    },
  },

  setup(props) {
    const url = computed(() => `@${props.data.login}`);
    const joined = computed(() => `joined ${Moment(props.data.created_at).format('D MMM YYYY')}`);

    return {
      url,
      joined,
    };
  },
};
</script>
<style lang="scss" scoped>
@import "../_variables.scss";

.results {
  width: 90%;
  border-radius: 15px;
  background: $light_blue;
  margin: 50px 0 0 0;
  padding: 20px;

  .results__header {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    img {
      width: 100px;
      height: 100px;
      border-radius: 50px;
      margin: 0 20px 0 0;
    }

    .results__info {
      line-height: 35px;

      .info__login {
        letter-spacing: 2px;
      }

      .info__link {
        color: $text_blue;
        text-decoration: none;
      }
      .info__joined {
        color: $text_gray;
      }
    }
  }

  .results__bio {
    width: 100%;
    margin: 30px 0 0 0;
    line-height: 35px;
    color: $text_gray;
  }

  .results__dashboard {
    width: 100%;
    height: 125px;
    background: $dark_blue;
    border-radius: 15px;
    margin: 30px 0 0 0;
    display: flex;
    align-items: center;
    justify-content: space-around;

    .dashboard__box {
      text-align: center;
      line-height: 35px;

      .dashboard__title {
        color: $text_gray;
      }

      .dashboard__data {
        font-weight: bold;
        font-size: 19px;
      }
    }
  }

  .results__social {
    width: 100%;
    margin: 30px 0 0 0;

    .social__box {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 20px 0 0 0;
      color: $text_white;

      &.social__error {
        color: $text_gray;
      }

      .icon {
        width: 50px;
      }

      .social__data {
        width: 90%;
      }

      .social__not {
        width: 90%;
      }

      a {
        text-decoration: none;
        color: $text_white;
      }
    }
  }
}
</style>
