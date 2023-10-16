import Container from "react-bootstrap/Container";
import CardSection from "../components/CardDashboard";
import IntensInfoSection from "../components/ItensInfoSection";

export default function Home() {
  return (
    <>
      <Container fluid>
        <h1 className="mb-3">DashBoard</h1>
        <CardSection />
      </Container>
      <IntensInfoSection />
    </>
  );
}
