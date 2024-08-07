// LIBRARY //
import React, { useEffect, useRef } from 'react';
import Intersection from '../components/Insersection/intersection';
// STYLE //
// CONTEXT //
// PAGE //
// COMPONENT //
// OTHER //

export default function Projets() {
  const image1 = useRef();
  const image2 = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(callBack, { rootMargin: '-20px' });
    observer.observe(image1.current);
    observer.observe(image2.current);
  }, [])

  const callBack = (entries) => entries.forEach(el => el.isIntersecting ? el.target.classList.add("active") : el.target.classList.remove("active"));

  return (
    <div id='project' className='page'>
      <h2 id='project-title' className='title-page'>Mes projets</h2>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam dignissimos ad culpa error nobis exercitationem omnis quidem voluptates. Incidunt recusandae quae dignissimos unde sit perferendis commodi molestiae eos alias saepe.
      Tempora quisquam architecto, aut dignissimos cumque nulla deserunt ratione nisi nostrum voluptates dolorum animi esse consequuntur! Explicabo facilis doloribus ipsum atque quaerat obcaecati, quibusdam ullam debitis nam cumque nostrum neque.
      Perspiciatis consequatur odio ipsa aliquam ex reiciendis nam, ad quam saepe exercitationem ipsum illum velit eveniet eum, maiores vitae atque cum nobis nostrum consectetur! Esse itaque voluptatibus obcaecati praesentium dolore.
      Voluptates, aliquam aut! Rerum quae modi neque sit quam non similique, explicabo iusto exercitationem assumenda eum, voluptas praesentium nulla tempore, aut pariatur esse culpa voluptates labore voluptatum dolore! Dolorem, molestiae.
      Iure hic odio vero voluptatum! Reiciendis minima accusantium quasi, saepe ducimus temporibus sit tempore officia est praesentium facilis consequuntur voluptatem consectetur rerum assumenda minus unde alias! Assumenda dicta sunt ea!
      Molestias, ad earum libero maiores distinctio cumque labore tenetur rem quas vel ut sunt perferendis impedit placeat deserunt doloribus suscipit debitis veniam magnam? Necessitatibus est veniam laudantium fugiat blanditiis aliquid!
      Impedit sunt optio perspiciatis, architecto nisi quaerat animi odio hic provident, repellendus voluptatibus illum tempora unde, perferendis quisquam possimus. Delectus asperiores officiis iure architecto pariatur tempore odit quod molestias voluptas?
      Dolores autem facilis nesciunt, praesentium recusandae obcaecati, quaerat qui ad voluptates eum aut id temporibus veritatis nobis sunt quo. Voluptate aut ad magni quibusdam expedita voluptates illum unde in cupiditate.
      Saepe ex, beatae voluptatem magni maxime quo reiciendis, numquam repudiandae eligendi unde quod autem? Eum porro accusantium sed consequatur corrupti est, recusandae, eius, adipisci unde nostrum quaerat temporibus tempora magnam.
      Beatae, placeat iure eaque perferendis est sint consequatur ut optio nihil voluptatem vel laudantium quaerat. Rem neque voluptatibus, vitae qui nobis facilis tempora dignissimos soluta nihil molestias, dolorum architecto consectetur?
      Beatae, architecto iste? Animi temporibus deserunt explicabo laborum deleniti neque itaque veniam enim doloribus qui hic officiis dicta voluptates eveniet ipsa obcaecati quam, rerum quis, culpa sint accusantium. Quod, mollitia!
      Optio unde debitis minus temporibus excepturi voluptates nesciunt consequatur dolores id quam eligendi quae, labore amet fugiat iste nemo! Cumque aperiam accusantium eligendi eaque expedita voluptatum nostrum delectus fuga est!
      Sapiente nihil error rem, eum quae explicabo. Corrupti, corporis ut in repellendus neque, labore sit ratione minima incidunt nisi nemo autem. Reiciendis deleniti tenetur dolores facere at nisi quo accusantium!
      Ea velit eveniet totam eligendi similique temporibus quasi repellat nam eius tenetur aspernatur rem minima expedita recusandae ratione labore repudiandae mollitia id veniam asperiores suscipit, laboriosam aliquid voluptatum. Sint, corporis.
      Ea soluta reprehenderit perspiciatis expedita temporibus magnam recusandae fuga veniam quas, aperiam deleniti eligendi quae itaque tenetur velit perferendis nemo. Ab voluptatem quisquam mollitia doloribus expedita vero beatae cumque omnis!
      Aut quasi iure nisi vitae mollitia architecto consequuntur ut inventore. Molestiae odio expedita facilis sunt, neque cum deserunt, perspiciatis, rem corporis culpa laboriosam eligendi voluptate. Modi ullam eos impedit nesciunt!
      Quam at, quisquam veritatis adipisci praesentium reprehenderit fugiat nostrum aspernatur nisi rerum quis harum reiciendis sunt non repudiandae corrupti omnis? Omnis expedita accusantium facere repellendus ipsum aspernatur error, velit perferendis!
      Praesentium ipsum temporibus nobis tempore rerum laborum cumque vero, voluptas itaque excepturi ipsam animi, omnis voluptates eum nemo dolorem et! Cum dicta labore quo, sint accusamus alias debitis possimus asperiores?
      Temporibus modi voluptate nam alias officia sint facilis iste fugiat, esse vel voluptatem unde, similique tempore non cum consequatur, fuga in! Voluptate suscipit totam atque quaerat error eaque temporibus animi.
      Dolore tenetur fugiat ab dolorum, nemo quidem consectetur delectus corporis illum doloribus magni adipisci totam qui. Quaerat odit repellat quia velit ea tempora quae modi perspiciatis, delectus minima est harum?</p>

      <Intersection refObserver={image1} animation={"left"}>
        <img src={require("../assets/images/shiraoshi.jpg")} style={{ height: "50vh", width: "80vw" }} alt='' />
      </Intersection>

      <Intersection refObserver={image2} animation={"right"}>
        <img src={require("../assets/images/sukuna.jpeg")} style={{ height: "50vh", width: "80vw" }} alt='' />
      </Intersection>

    </div>
  )
}
