import Vue from 'vue'
import App from './App.vue'

new Vue({
    el: '#app',
    render: function(h) {
        h.length;
        return (
            <div>
                <p>※以下はAppコンポーネントの表示</p>
                <hr />
                <App/>
            </div>
        );
    }
});

