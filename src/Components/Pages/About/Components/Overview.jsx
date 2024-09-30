import myPic from '../../../../assets/img/mypic.jpg'
import mySign from '../../../../assets/img/sign.png'

const Overview = () => {
  return (
    <div>
  <section
    className="bg-secondary w-full pt-20 pb-[120px]"
    data-aos="zoom-in"
  >
    <div className="container w-[90%] mx-auto ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[60px] xl:gap-[134px]">
        <img
          alt="about me"
          className="mx-auto"
          src={myPic}
        />
        <div className="font-bold font-syne leading-none flex flex-wrap flex-col gap-y-2">
          <span className="text-orange-500 text-xl">
            About me
          </span>
          <h3 className="text-black-800 text-4xl lg:text-5xl xl:text-[64px] tracking-[-1.5px]">
            H.M.YOUSUF
          </h3>
          <h4 className="text-black-800 text-2xl mt-3 mb-4">
            Web Developer
          </h4>
          <p className="text-xl font-bold font-syne'] leading-7 mb-6">
            A Web Designer & Developer and I am in the game for over 1+ years. I am proud of my                            works and ready to face the next challenge
          </p>
          <p className="paragraph mb-6">
            That is where I come                            in.                            A lover of                            words, a wrangler of copy. Here to create copy that not                            only reflects who you are and what you stand for, but words that truly land with those that                            read them, calling your audience in and making them .
          </p>
          <div>
            <img
              alt="signature"
              className="w-52"
              src={mySign}
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
  )
}

export default Overview

