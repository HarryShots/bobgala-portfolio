import React from 'react'
import './services.css'
import { MdOutlineLibraryAddCheck } from 'react-icons/md'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className='service'>
          <div className='service__head'>
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
            <li>
            <MdOutlineLibraryAddCheck className='service__list-icon' />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum exercitationem dolor similique voluptates eligendi, corrupti totam veritatis assumenda, ipsam corporis officia nobis hic inventore esse minima doloribus ducimus excepturi ad?</p>
            </li>
            <li>
            <MdOutlineLibraryAddCheck className='service__list-icon' />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum exercitationem dolor similique voluptates eligendi, corrupti totam veritatis assumenda, ipsam corporis officia nobis hic inventore esse minima doloribus ducimus excepturi ad?</p>
            </li>
            <li>
            <MdOutlineLibraryAddCheck className='service__list-icon' />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum exercitationem dolor similique voluptates eligendi, corrupti totam veritatis assumenda, ipsam corporis officia nobis hic inventore esse minima doloribus ducimus excepturi ad?</p>
            </li>
            <li>
            <MdOutlineLibraryAddCheck className='service__list-icon' />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum exercitationem dolor similique voluptates eligendi, corrupti totam veritatis assumenda, ipsam corporis officia nobis hic inventore esse minima doloribus ducimus excepturi ad?</p>
            </li>
            <li>
            <MdOutlineLibraryAddCheck className='service__list-icon' />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum exercitationem dolor similique voluptates eligendi, corrupti totam veritatis assumenda, ipsam corporis officia nobis hic inventore esse minima doloribus ducimus excepturi ad?</p>
            </li>
          </ul>
        </article>
        { /*END OF UI/UX*/ }

        <article className='service'>
          <div className='service__head'>
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
            <MdOutlineLibraryAddCheck className='service__list-icon' />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum exercitationem dolor similique voluptates eligendi, corrupti totam veritatis assumenda, ipsam corporis officia nobis hic inventore esse minima doloribus ducimus excepturi ad?</p>
            </li>
            <li>
            <MdOutlineLibraryAddCheck className='service__list-icon' />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum exercitationem dolor similique voluptates eligendi, corrupti totam veritatis assumenda, ipsam corporis officia nobis hic inventore esse minima doloribus ducimus excepturi ad?</p>
            </li>
            <li>
            <MdOutlineLibraryAddCheck className='service__list-icon' />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum exercitationem dolor similique voluptates eligendi, corrupti totam veritatis assumenda, ipsam corporis officia nobis hic inventore esse minima doloribus ducimus excepturi ad?</p>
            </li>
            <li>
            <MdOutlineLibraryAddCheck className='service__list-icon' />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum exercitationem dolor similique voluptates eligendi, corrupti totam veritatis assumenda, ipsam corporis officia nobis hic inventore esse minima doloribus ducimus excepturi ad?</p>
            </li>
            <li>
            <MdOutlineLibraryAddCheck className='service__list-icon' />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum exercitationem dolor similique voluptates eligendi, corrupti totam veritatis assumenda, ipsam corporis officia nobis hic inventore esse minima doloribus ducimus excepturi ad?</p>
            </li>
          </ul>
        </article>
        { /*END OF WEB DEVWLOPMENT*/ }

        <article className='service'>
          <div className='service__head'>
            <h3>Photography</h3>
          </div>

          <ul className='service__list'>
            <li>
            <MdOutlineLibraryAddCheck className='service__list-icon' />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum exercitationem dolor similique voluptates eligendi, corrupti totam veritatis assumenda, ipsam corporis officia nobis hic inventore esse minima doloribus ducimus excepturi ad?</p>
            </li>
            <li>
            <MdOutlineLibraryAddCheck className='service__list-icon' />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum exercitationem dolor similique voluptates eligendi, corrupti totam veritatis assumenda, ipsam corporis officia nobis hic inventore esse minima doloribus ducimus excepturi ad?</p>
            </li>
            <li>
            <MdOutlineLibraryAddCheck className='service__list-icon' />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum exercitationem dolor similique voluptates eligendi, corrupti totam veritatis assumenda, ipsam corporis officia nobis hic inventore esse minima doloribus ducimus excepturi ad?</p>
            </li>
            <li>
            <MdOutlineLibraryAddCheck className='service__list-icon' />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum exercitationem dolor similique voluptates eligendi, corrupti totam veritatis assumenda, ipsam corporis officia nobis hic inventore esse minima doloribus ducimus excepturi ad?</p>
            </li>
            <li>
            <MdOutlineLibraryAddCheck className='service__list-icon' />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum exercitationem dolor similique voluptates eligendi, corrupti totam veritatis assumenda, ipsam corporis officia nobis hic inventore esse minima doloribus ducimus excepturi ad?</p>
            </li>
          </ul>
        </article>
        { /*END OF PHOTOGRAPHY*/ }
      </div>
    </section>
  )
}

export default Services