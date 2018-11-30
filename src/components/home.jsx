import React, { Component } from 'react';
import Gravatar from 'react-gravatar';

import '../styles/home.css';

class Home extends Component {
  state = {};

  render() {
    return (
      <div id="Home">
        <h3 id="homeTitle">SITE IS UNDER CONSTRUCTION</h3>
        <Gravatar id="gravatar" email="alex.rjudy@gmail.com" size={200} />
        <article id="homeArticle">
          <h4>SOME TEST TEXT FOR A HEADER</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non imperdiet urna. Duis
            sodales, lorem ut fringilla bibendum, sem magna pretium augue, quis posuere nisi risus
            vel dolor. Etiam cursus malesuada aliquet. Cras consequat venenatis ante, nec mattis
            orci. Proin sagittis aliquam mi nec tristique. Nam vulputate porta ipsum in pretium.
            Etiam convallis volutpat sapien a elementum. Aenean fringilla leo vel faucibus dapibus.
            Nam mollis, est sed feugiat suscipit, ante ligula rhoncus sapien, vel auctor ante sapien
            a elit. Aenean viverra semper ipsum, quis tempor velit interdum tempus. Pellentesque vel
            facilisis libero, eu interdum lectus. Sed non ultrices neque. Aenean maximus finibus
            erat, vitae laoreet metus malesuada vel. Fusce id arcu ex. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Integer ut ex vel ante molestie interdum. Sed tristique,
            leo quis imperdiet efficitur, odio ipsum aliquam felis, iaculis tincidunt metus nibh eu
            arcu. Proin cursus sollicitudin pretium. Nulla eu egestas mauris, ac euismod odio. Sed
            cursus massa arcu, non hendrerit mauris molestie a. Praesent tempor posuere feugiat.
            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos. Cras dictum iaculis nisl, quis maximus sapien. Aenean mattis dolor eu metus
            placerat sagittis. Ut ex quam, malesuada quis convallis vel, faucibus at metus. In eu
            diam aliquam, cursus sem sit amet, pellentesque felis. Integer sed sapien orci.
            Curabitur convallis pulvinar tincidunt. Curabitur nec elit vitae elit pharetra feugiat.
            Phasellus varius rhoncus malesuada. Quisque sit amet eros erat. Praesent eros urna,
            faucibus sed gravida ac, fringilla ut est. Curabitur porttitor, dolor quis elementum
            interdum, ipsum neque sagittis ipsum, a lacinia nisi mauris eu magna. Curabitur eu
            vulputate ipsum. Maecenas nisl neque, sagittis at placerat vel, rutrum id libero. Etiam
            eu lacus ante. Maecenas tempor magna eget velit pharetra fermentum. Aliquam vestibulum
            eros eleifend nisl tincidunt varius. In non neque leo. Integer fermentum justo eu
            bibendum pretium. Donec at velit eu tortor ultrices aliquet. In pharetra ipsum sit amet
            nisi euismod scelerisque. Nullam a ex quis enim placerat auctor. Integer ullamcorper
            odio eget arcu eleifend consectetur. Mauris risus magna, dignissim laoreet ipsum eget,
            mollis finibus nisl. Curabitur blandit tempus turpis eget rutrum. Maecenas eget lacus
            aliquet, suscipit enim eget, elementum quam. Vivamus cursus, neque sed egestas vehicula,
            risus sapien fermentum sem, a gravida ex nibh at arcu. Pellentesque sodales diam sed
            molestie molestie. Nulla vel dolor nunc. Maecenas luctus a diam sed blandit. Etiam
            dapibus commodo erat non elementum. Nulla id ante purus. Vestibulum porttitor consequat
            mauris non gravida. Vestibulum in lobortis metus. Phasellus et arcu est. Vestibulum
            porttitor pellentesque sem, sit amet imperdiet elit lobortis ut.
          </p>
        </article>
      </div>
    );
  }
}

export default Home;
