import Feed from "@/components/Feed"

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">Discover & Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center"> Your Thoughts</span>
      </h1>
      <p className="desc text-center">HemNote is an open-source AI note tool for modern world to discover, create and share creative ideas </p>

      <Feed />
    </section>
  )
}

export default Home