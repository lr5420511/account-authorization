import Vue from 'vue';
import 'element-ui/lib/theme-chalk/index.css';
import {
    Container,
    Header,
    Footer,
    Aside,
    Main,
    Carousel,
    CarouselItem,
    Image,
    Progress,
    Form,
    FormItem,
    Input,
    Button,
    ButtonGroup,
    Message
} from 'element-ui';

Object.assign(Vue.prototype, {
    '$message': Message
});

[
    Container,
    Header,
    Footer,
    Aside,
    Main,
    Carousel,
    CarouselItem,
    Image,
    Progress,
    Form,
    FormItem,
    Input,
    Button,
    ButtonGroup
].reduce((rt, component) => rt.use(component), Vue);