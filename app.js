Vue.component('bradley', {
    props: ['skills'],
    template: `
          <p class="body">
        I build beautiful interfaces with
        <span class="skill">
          {{skills[0]}}
        </span>,
        <span class="skill">
          {{skills[1]}}
        </span>, and
        <span class="skill">
          {{skills[2]}}
        </span>.
      </p>
    `
});

Vue.component('inniss', {
    props: ['skills'],
    template: `
      <p class="bio">
        My name is Bradley Inniss and I'm a front-end developer and
        UI/UX enthusiast. I'm passionate about having a hand in the design and
        creation of the next generation's online experience.
      </p>
    `
});

Vue.component('contact', {
    props: ['skills'],
    template: `
      <div class='buttons'>
        <a
          class="contactButton"
          href="mailto:bfinniss@gmail.com?Subject=Hey!"
        >
          Contact
        </a>
      <div>
        <a href="http://github.com/ratley" target='_blank'><i class="fab fa-github-alt" style='width: 5em; height: 1.5em'></i></a>
                <a href="http://linkedin.com/in/bradleyinniss" target='_blank'><i class="fab fa-linkedin-in" style='width: 1.5em; height: 1.5em; padding-bottom: 4px'></i></a>
      </div>
      </div>
    `
});

let app = new Vue({
    el: '#app',
    data: {
        x: 1
    }
})
