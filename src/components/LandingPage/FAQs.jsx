import Link from 'next/link'
import React from 'react'

const FAQs = () => {
  return (
    <section className="relative py-14" id='faqs'>
        <div className="landing_container">
          <div className="text-center font-heading mb-20">
            <h2
              data-title="FAQs"
              className="relative uppercase text-4xl max-lg:text-2xl font-bold z-10 before:content-[attr(data-title)]  before:absolute before:left-[50%] before:translate-x-[-50%] before:top-[50%] before:translate-y-[-50%] before:text-[100px] before:text-[#1773ea] before:-z-10 before:opacity-5 before:whitespace-nowrap"
            >
              FAQs
            </h2>
          </div>
          <div className="join join-vertical w-full">
            <div className="collapse collapse-arrow join-item border border-white">
              <input type="radio" name="my-accordion" defaultChecked />
              <div className="collapse-title font-medium">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </div>
              <div className="collapse-content">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                  sint, harum quidem necessitatibus maiores, nisi cupiditate
                  officiis officia rerum vel libero dolores adipisci provident
                  aliquid porro iste ex ea consectetur!
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border border-white">
              <input type="radio" name="my-accordion" />
              <div className="collapse-title font-medium">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </div>
              <div className="collapse-content">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic
                  natus accusamus, sunt esse libero quasi, maiores veritatis in
                  quo non dolorem corrupti! Tenetur, aspernatur quod? Dicta
                  inventore quasi vel assumenda.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border border-white">
              <input type="radio" name="my-accordion" />
              <div className="collapse-title font-medium">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </div>
              <div className="collapse-content">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic
                  natus accusamus, sunt esse libero quasi, maiores veritatis in
                  quo non dolorem corrupti! Tenetur, aspernatur quod? Dicta
                  inventore quasi vel assumenda.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border border-white">
              <input type="radio" name="my-accordion" />
              <div className="collapse-title font-medium">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </div>
              <div className="collapse-content">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic
                  natus accusamus, sunt esse libero quasi, maiores veritatis in
                  quo non dolorem corrupti! Tenetur, aspernatur quod? Dicta
                  inventore quasi vel assumenda.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border border-white">
              <input type="radio" name="my-accordion" />
              <div className="collapse-title font-medium">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </div>
              <div className="collapse-content">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deleniti reiciendis qui rerum quaerat amet ut adipisci enim
                  consectetur praesentium! Optio itaque, dolorum voluptate
                  voluptates aspernatur nam ratione architecto nesciunt
                  recusandae.
                </p>
              </div>
            </div>
          </div>
          <div className="relative text-center mt-5">
            <Link
              href="https://entylabs.gitbook.io/enterapp.io/fundamentals/faqs"
              target="_blank"
              rel="noreferrer"
              className="inline-block relative py-2 px-6 text-sm bg-white text-black rounded-badge font-medium hover:text-white hover:bg-[#1773ea] transition duration-300"
            >
              More FAQs
            </Link>
          </div>
        </div>
      </section>
  )
}

export default FAQs