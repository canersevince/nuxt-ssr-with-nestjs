<template>
  <section>
    <cover :cover-image="coverImage"></cover>
    <index-container :tab="0"></index-container>
    <sub-footer-jobs></sub-footer-jobs>
    <seeking-job-question></seeking-job-question>
    <seeking-personal-question></seeking-personal-question>
    <home-newsletter></home-newsletter>
  </section>
</template>

<script>

import Cover from "../components/cover";
import MainPageJobs from "../components/main-page-jobs";
import indexContainer from "../components/index-container";
import SubFooterJobs from "../components/sub-footer-jobs";
import SeekingJobQuestion from "../components/seeking-job-question";
import SeekingPersonalQuestion from "../components/seeking-personal-question";
import HomeNewsletter from "../components/home-newsletter";
export default {
  name: 'HomePage',
  components: {
    HomeNewsletter,
    SeekingPersonalQuestion,
    SeekingJobQuestion,
    SubFooterJobs,
    indexContainer,
    MainPageJobs,
    Cover
  },
  data(){
    return{
      coverImage: "public/cover.jpg"
    }
  }
}
</script>
