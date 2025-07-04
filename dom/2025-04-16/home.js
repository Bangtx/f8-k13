import {isLogin} from "./common.js";
import api from "./api.js";

const onMounted = () => {
    if (!isLogin()) window.location.href = 'index.html'

    // get posts

    const posts = api.getData('post/')
}




onMounted()