// LIBRARY //
import React, { useEffect, useRef } from 'react';
import Intersection from '../components/Insersection/intersection';
// STYLE //
// CONTEXT //
// PAGE //
// COMPONENT //
// OTHER //

export default function Projets() {
  const firstSection = useRef();
  const secondSection = useRef();
  const thirdSection = useRef();
  const image1 = useRef();
  const image2 = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach(el =>
      el.isIntersecting ? el.target.classList.add("active") : el.target.classList.remove("active")
    ));
    observer.observe(firstSection.current);
    observer.observe(secondSection.current);
    observer.observe(thirdSection.current);
    observer.observe(image1.current);
    observer.observe(image2.current);
  }, [])


  return (
    <div id='project' className='page'>
      <h1>Project</h1>

      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur voluptas, quidem deserunt optio nemo natus sed ad minima deleniti ipsum. Minus tenetur aliquam sunt quod ullam quas dolorem asperiores accusamus.
        Velit unde maiores porro natus nesciunt iusto? Impedit quo, quis omnis vitae error, nobis iste at non illo facere cumque libero laboriosam excepturi, doloremque tempore! Vitae ipsam iusto aperiam blanditiis.
        Officiis ullam, delectus sunt commodi voluptatibus, voluptatem quidem labore ut dignissimos aspernatur consectetur pariatur necessitatibus doloribus sit deleniti, possimus quae quisquam? Odio iste a in et voluptatem ullam rerum perferendis!
        Numquam enim quasi ipsam a, dolores quas illum voluptas! Inventore est officiis quod quibusdam doloremque culpa explicabo nostrum at, in, asperiores iusto voluptatum qui recusandae vero nulla nam natus dolor.
        Labore a hic, placeat quidem velit harum atque? Sequi excepturi quam odio eaque possimus odit, sint magni error tempore magnam neque. Aperiam ratione asperiores fugit illum. Deserunt consequuntur vel sint.
        Expedita veniam sapiente officiis error pariatur omnis eius. Voluptate fugiat, soluta a sequi odio nobis pariatur amet eius sunt quam ab, culpa natus nulla illum cumque corrupti eligendi reiciendis molestias?
        Natus accusamus unde est blanditiis officia praesentium dolor omnis, odit repudiandae dolorem suscipit, nobis laudantium at nemo delectus corrupti quibusdam nostrum aperiam labore? Eligendi maiores voluptatem qui reiciendis nesciunt ipsam.
        Aliquid quos unde delectus quia sunt illum, inventore cum deserunt nobis neque voluptate. Suscipit tempore atque cumque officia quos! Ducimus fugit repellendus reprehenderit voluptatibus incidunt facere ab neque consectetur id.
        Velit, eveniet aliquid doloremque, delectus, sed officiis dolorum minima consequatur iure cupiditate commodi. Voluptate laboriosam nostrum quisquam! Aperiam cupiditate maxime magni eos odit, quia, corrupti aliquam debitis id optio neque?
        Quibusdam ipsa alias necessitatibus. Quam dolorum doloribus at nisi sit veniam odio facere, quo accusantium aliquid vel molestias cupiditate dignissimos doloremque laborum enim qui illum deleniti pariatur voluptatum amet. Culpa.</p>

      <Intersection refObserver={firstSection} animation={"bottom fadein"}>
        <h2>Obervateur test 1</h2>
      </Intersection>

      <Intersection refObserver={image1}>
        <img src={require("../assets/images/shiraoshi.jpg")} style={{ height: 400, width: 800, margin: 50 }} alt=''/>
      </Intersection>

      <Intersection refObserver={secondSection} animation={"right fadein"}>
        <h2>Obervateur test 2</h2>
      </Intersection>

      <Intersection refObserver={image2}>
        <img src={require("../assets/images/sukuna.jpeg")} style={{ height: 400, width: 800, margin: 50 }} alt=''/>
      </Intersection>

      <Intersection refObserver={thirdSection} animation={"top fadein"}>
        <h2>Obervateur test 3</h2>
      </Intersection>

    </div>
  )
}
