import React from 'react'
import './footer.css'
function Footer() {
  return (
    <div>

      <div className="footer">

      <div className="flexleft">
        <p className='usefull-para'>Useful Links</p>

        <div className="useful-flex">
          <div className="usefull-flex-first">
            <ul className="usefull-flex-first-ul">
              <li className="usefull-flex-first-li">About</li>
              <li className="usefull-flex-first-li">Careers</li>
              <li className="usefull-flex-first-li">Blog</li>
              <li className="usefull-flex-first-li">Press</li>
              <li className="usefull-flex-first-li">Lead</li>
              <li className="usefull-flex-first-li">Value</li>
            </ul>
          </div>

          <div className="usefull-flex-first">
            <ul className="usefull-flex-first-ul">
              <li className="usefull-flex-first-li">Privacy</li>
              <li className="usefull-flex-first-li">Terms</li>
              <li className="usefull-flex-first-li">FAQs</li>
              <li className="usefull-flex-first-li">Security</li>
              <li className="usefull-flex-first-li">Mobile</li>
              <li className="usefull-flex-first-li">Contact</li>
            </ul>
          </div>

          <div className="usefull-flex-first">
            <ul className="usefull-flex-first-ul">
              <li className="usefull-flex-first-li">Partner</li>
              <li className="usefull-flex-first-li">Franchise</li>
              <li className="usefull-flex-first-li">Seller</li>
              <li className="usefull-flex-first-li">Warehouse</li>
              <li className="usefull-flex-first-li">Deliver</li>
              <li className="usefull-flex-first-li">Resources</li>
            </ul>
          </div>

        </div>

      </div>

      <div className="Categories">
      <p className='usefull-para'>Categories</p>
      <div className="categories-flex">
            <div className="CategoriesChildFirst">
              <ul className="cartegiries-ul">
                <li className="categories-li">Vegetables & Fruits</li>
                <li className="categories-li">Cold Drinks & Juices</li>
                <li className="categories-li">Bakery & Biscuits</li>
                <li className="categories-li">Dry Fruits, Masala & Oil</li>
                <li className="categories-li">Paan Corner</li>
                <li className="categories-li">Pharma & Wellness</li>
                <li className="categories-li">Ice Creams & Frozen Desserts</li>
                <li className="categories-li">Beauty & Cosmetics</li>
                <li className="categories-li">Electronics & Electricals</li>
                <li className="categories-li">Toys & Games</li>
                <div className="mobile-list show-list">
                <li className="categories-li">Ice Creams & Frozen Desserts</li>
                <li className="categories-li">Beauty & Cosmetics</li>
                <li className="categories-li">Electronics & Electricals</li>
                <li className="categories-li">Toys & Games</li>
                <li className="categories-li">Books</li>
                <li className="categories-li">Print Store</li>

                </div>

              </ul>
            </div>
            <div className="CategoriesChildFirst">
              <ul className="cartegiries-ul">
                <li className="categories-li">Dairy & Breakfast</li>
                <li className="categories-li">Cold Drinks & Juices</li>
                <li className="categories-li">Bakery & Biscuits</li>
                <li className="categories-li">Dry Fruits, Masala & Oil</li>
                <li className="categories-li">Paan Corner</li>
                <li className="categories-li">Pharma & Wellness</li>
                <li className="categories-li">Ice Creams & Frozen Desserts</li>
                <li className="categories-li">Beauty & Cosmetics</li>
                <li className="categories-li">Electronics & Electricals</li>
                <li className="categories-li">Toys & Games</li>
                <div className="mobile-list show-list">
                <li className="categories-li">Vegetables & Fruits</li>
                <li className="categories-li">Pharma & Wellness</li>
                <li className="categories-li">Paan Corner</li>
                <li className="categories-li">ry Fruits, Masala & Oil</li>
                <li className="categories-li">Bakery & Biscuits</li>
                <li className="categories-li">old Drinks & Juices</li>

                </div>
              </ul>
            </div>
            <div className="CategoriesChildFirst hide">
              <ul className="cartegiries-ul">
                <li className="categories-li">Vegetables & Fruits</li>
                <li className="categories-li">Cold Drinks & Juices</li>
                <li className="categories-li">Bakery & Biscuits</li>
                <li className="categories-li">Dry Fruits, Masala & Oil</li>
                <li className="categories-li">Paan Corner</li>
                <li className="categories-li">Pharma & Wellness</li>
                <li className="categories-li">Ice Creams & Frozen Desserts</li>
                <li className="categories-li">Beauty & Cosmetics</li>
                <li className="categories-li">Electronics & Electricals</li>
                <li className="categories-li">Toys & Games</li>

              </ul>
            </div>
        </div>
        </div>
      </div>

      <div className="copyright">
            <div className="as">AS</div>
            <a href=""className='copyRght'>© 2024 Amarjeet sharma, Inc. All rights reserved</a>
            <div className="twobtn-details">
                <div className='Github'><a href="https://github.com/AmarJeetSharma6802" className='github-a'><i class="fa-brands fa-github"></i>Github</a></div>
                <div className='LinkedIn'><a href="https://www.linkedin.com/in/amarjeet-sharma-full-stack/" className='LinkedIn-a'><i class="fa-brands fa-linkedin-in"></i>LinkdIn</a></div>
            </div>
        </div>
    </div>
  )
}

export default Footer