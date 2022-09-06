import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

type CardsTypeArray = CardsType[];

interface CardsType {
  title: string;
  text: string;
  img: string;
}

interface CardsProps extends CardsType {
  key?: any;
}

const Home: NextPage = () => {
  return (
    <div>
      <div>
        <header className="w-screen ">
          <div className="2xl:max-w-[1440px] 2xl:mx-auto w-full absolute top-0 left-0 right-0 py-5 px-4 md:px-24 text-white flex justify-between items-center">
            <div className="logo">
                <Link href="/">
                    <p className="cursor-pointer text-4xl font-medium ">
                        Voyager
                            </p>
                </Link>
            </div>
            <div className="text-md font-medium flex flex-col md:flex-row justify-between md:items-center md:space-x-12 ">
              <p className="cursor-pointer ">
                Home
                    </p>
              <p className="cursor-pointer ">
                Popular Destinations
                    </p>
              <p className="cursor-pointer ">
                Accomodations
                    </p>
              <button className="w-28 h-8 text-md border border-white rounded-3xl ">
                Sign Up
                    </button>
            </div>
          </div>
        </header>
        <section className="hero h-[768px] 2xl:h-[900px] w-full ">
          <div className="2xl:max-w-[1441px] 2xl:mx-auto pl-4 md:pl-24 pt-40">
            <h1 className="heading text-5xl text-black ">
              Discover <br />new destinations
                </h1>
            <p className="mt-8 mb-28 text-xl font-medium ">
              voyager makes it simple for even
                    <br /> the most seasoned travellers to find
                    <br /> new journeys to add to their
                    <br /> bucket lists.
                </p>
            <div className="w-1/3 h-12 flex flex-row ">
              <input type="text" className="w-3/4 rounded-l-md h-full px-12 text-xl outline-none border-none  " placeholder="Places or experiences" />
              <button className="bg-green-700 rounded-r-md text-xl text-white w-1/4 h-full ">Search</button>
            </div>
          </div>

        </section>
        <section className="">
          <div className="2xl:max-w-[1441px] 2xl:mx-auto pl-4 md:pl-24 mt-12">
            <p className="heading ">
              Featured Destinations
            </p>
            <p className="text-lg text-gray-700 mt-5 mb-14">
              Tired of the same super crowded spots?
                <br />Here you&apos;ll find unique travel destinations around the world!
                <br />Only truly amazing destinations to inspire your next trip.
            </p>
          </div>
          <div className="px-6 space-x-12 flex items-start justify-begin overflow-x-hidden ">
            {cards.slice(0, 5).map((card: CardsType, ind) => <Cards {...card} key={ind} />)}
          </div>
        </section>
        <section className="2xl:max-w-[1441px] 2xl:mx-auto pl-4 md:pl-24 mt-12">
          <p className="heading ">
            Accomodations
          </p>
          <div className="mt-14 md:space-x-4 flex flex-wrap flex-col md:flex-row items-start justify-begin ">
            {cards.slice(5).map((card, ind) => <Accomodations {...card} key={ind} />)}
          </div>
        </section>
        <section className="2xl:max-w-[1441px] 2xl:mx-auto bg-[#f4f9ff] bg-[#e5e1ef] bg-white px-24 py-24 text-center">
          <p className="heading ">
            New to travelling?
          </p>
          <p className="text-lg text-gray-700 mt-5 mb-14">
            Voyager can help you get started with talking that first trip to a new place.
							<br />Sign up for our recommended destinations newsletter and receive new
							<br />adventures each week!
					</p>
          <div className="w-full h-12 flex justify-center items-center space-x-5 ">
            <input type="text" className="w-96 rounded-md h-full px-12 text-xl outline-none border-2 border-gray-400  " placeholder="Email Address" />
            <button className="bg-green-700 rounded-md text-xl text-white w-28 h-full ">Sign up</button>
          </div>
        </section>
        <footer className="bg-[#001638]">
          <div className="2xl:max-w-[1441px] 2xl:mx-auto px-4 md:pl-24 pt-12 pb-16">
            <p className="heading text-white ">
              About us
          </p>
            <ul className="text-lg text-white mt-10 space-y-5 ">
              <li className="cursor-pointer">About</li>
              <li className="cursor-pointer">Team</li>
              <li className="cursor-pointer">Contact us</li>
            </ul>
            <p className="text-lg text-white mt-24">
              © Voyager 2022
          </p>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Home;

const Cards = (data: CardsProps) => {
  return (
    <div className="w-[350px] min-w-[350px] shadow-[0px_8px_24px_rgba(149,157,165,0.2)] ">
      <div className="w-full h-[250px] ">
        <img src={data.img} alt="" className="w-full h-full " />
      </div>
      <div className="w-full h-fit pt-5 px-5 ">
        <div className="flex items-center space-x-4 ">
          <Location />
          <p className="subheading">
            {data.title}
          </p>
        </div>
        <p className="description my-5 ">
          {data.text}
        </p>
      </div>
    </div>
  );
}

const Accomodations = (data: any) => {
  return (
    <div className="w-[350px] min-w-[350px]">
      <div className="w-full h-[250px] ">
        <img src={data.img} alt="" className="w-full h-full " />
      </div>
      <div className="w-full h-fit pt-5">
        <p className="subheading">
          {data.title}
        </p>
        <p className="description my-5 ">
          {data.text}
        </p>
      </div>
    </div>
  );
}

const Location = ({ }) => <svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24">
  <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
</svg>

const cards: CardsTypeArray = [
  {
    img: "https://media.cntraveler.com/photos/5eb4171df52f4c0911cac292/master/w_1600%2Cc_limit/Sequoia-National-Park-GettyImages-131984902.jpg",
    title: "Sequoia National Park, California",
    text: "This central-Californian park is home to some 8,000 colossal sequoia trees—the gentle giants of the tree world. “General Sherman,” a tree named for the Civil War general, is the hero of these treasured acres: It stands 275 feet tall and 25 feet wide, making it the largest known single-stem tree on the planet."
  },
  {
    img: "https://media.cntraveler.com/photos/5cf8303b6640e7d3bee1d186/master/w_1600%2Cc_limit/Amazon_manaus_GettyImages-935746242.jpg",
    title: "The Amazon",
    text: "Covering roughly 40 percent of South America, including parts of Brazil, Peru, and Colombia, the Amazon is the largest rainforest on the planet, and home to more than 40,000 plant species and 1,300 bird species alone. But be sure to visit the winding rivers and diverse wildlife while you can—climate change (along with man-made fires) is increasingly whittling away the habitat every day."
  },
  {
    img: "https://media.cntraveler.com/photos/628fd9076224b2663cdfc8d3/master/w_1600%2Cc_limit/Cameron-Highlands-Malaysia-GettyImages-566344877.jpg",
    title: "Cameron Highlands, Malaysia",
    text: "It’s hard to pick just one beautiful spot in geographically diverse Malaysia, but the Cameron Highlands might be the winner. Located in the state of Pahang, the 275-square-mile region is home to the largest tea plantations in the country—a place of fuzzy green hills rolling into the distance, where you can also explore butterfly gardens and strawberry farms."
  },
  {
    img: "https://media.cntraveler.com/photos/5cb63a2b1a7e7018aef70957/master/w_1600%2Cc_limit/Na-Pali-Coast_GettyImages-1124504102.jpg",
    title: "Na Pali Coast, Hawaii",
    text: "Kauai has one of the world’s most gorgeous coastlines, with towering waterfalls and isolated crescent beaches. Just be prepared to put in a little effort to soak up its wonders: Na Pali can only be seen from a helicopter, catamaran, or a rather grueling hike."
  },
  {
    img: "https://media.cntraveler.com/photos/605961ae7b588da524cfef44/master/w_1600%2Cc_limit/Cappadocia-GettyImages-166186583.jpg",
    title: "Cappadocia, Turkey",
    text: "Cappadocia, an area in Turkey where entire cities have been carved into rock, is pretty incredible on its own. But whenever hot air balloons pepper the sky—with many floating up right at sunrise—its beauty level literally skyrockets."
  },
  {
    img: "https://media.cntraveler.com/photos/6101c1cf964f812d9f963576/master/w_1600%2Cc_limit/La%2520Valise%2C%2520Tulum%2C%2520Mexico_La%2520Valise%2520Tulum%2520x%2520Affyrm%2520Studio%2520(1).jpg",
    title: "One-of-a-kind vacation rentals",
    text: "Vacation houses all over the planet that are far different from the traditional, offering a unique life, and a place to live that is just as much art as it is a home. "
  },
  {
    img: "https://media.cntraveler.com/photos/62d835a05c9a1adda21d9def/master/w_1600%2Cc_limit/Airbnb%2520620805407349236094.jpg",
    title: "Boutique hotels",
    text: "With close proximity to the quaint shops, delectable lobster cafes of Bar Harbor, and space for the whole family, this five-bedroom, shingle-style home harks back to the Victorian days of Mount Desert Island, when elegant east coasters would vacation in large cottages while visiting the stunning nature that would soon become Acadia National Park."
  },
  {
    img: "https://media.cntraveler.com/photos/6241e99579f8935aaa2eefa1/1:1/w_1600%2Cc_limit/Best%2520Camping%2520Oregon_Park%2520At%2520the%2520River%2C%2520Wallowa%2520Lake_GettyImages-875078484.jpg",
    title: "Camping places",
    text: "Comparatively few road-trippers venture to northeastern Oregon, where the small towns seem isolated in the most charming ways and the grand landscapes feel that much more secluded. The Wallowa Mountains sometimes get nicknamed the alps of Oregon, which gives you a sense of the big draws out here: alpine lakes, sweeping views, and outdoor adventure."
  },
];

