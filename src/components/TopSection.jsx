import React, { useState } from 'react'


export default function TopSection() {
  const [count, setCount] = useState(0)

  return (
    <div className="top_section top_about">
		<img className="top_bg" src="/images/top_about.jpg" alt="" />
		<div className="container">
			<div className="top_inner">
                <div className="top_info">
                    <a className="top_category more_link" href="#">About</a>
                    <h1 className="top_title bottom_line hidden" data-aos="animation">Lorem ipsum dolor sit amet sed consectetur adipiscing elit irure eiusmod ipsam</h1>
                </div>
            </div>
		</div>
	</div>
  )
}
