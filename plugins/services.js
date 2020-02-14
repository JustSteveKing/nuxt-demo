import Vue from 'vue'
import PostService from '@/services/PostService'

const services = {
    posts: PostService
}

Vue.prototype.$services = services
