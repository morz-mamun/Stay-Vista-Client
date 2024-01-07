import Categories from "../../components/Categories/Categories"
import Rooms from "../../components/Rooms/Rooms"
import Container from "../../components/Shared/Container"

const Home = () => {
  return (
    <Container>
      {/* categories section */}
      <Categories></Categories>
      {/* rooms section */}
      <Rooms></Rooms>
    </Container>

  )
}

export default Home
