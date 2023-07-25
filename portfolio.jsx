import React, { Component } from "react";
import { Card, Button, Carousel, Modal } from "react-bootstrap";

class Portfolio extends Component {
  state = {
    projects: [
      {
        id: 1,
        title: "Webchat project",
        description:
          "Webchat application project involved the utilization of HTML, CSS, JavaScript, and PHP to develop a dynamic chat platform, while ensuring data persistence by implementing a CSV file storage solution for the chat records.",
        images: [
          "../../assets/images/my_projects/Webchat/webchat_first_page.jpg",
          "../../assets/images/my_projects/Webchat/chatrooms_page.jpg",
          "../../assets/images/my_projects/Webchat/chatrooms_page_inputs.jpg",
          "../../assets/images/my_projects/Webchat/chatrooms_chat_page.jpg",
        ],
        showCarousel: false,
      },
      {
        id: 2,
        title: "Šadrvan project",
        description:
          "Šadrvan is a restaurant website, which incorporated HTML, CSS, JavaScript, PHP, and MySQL as the backend.",
        images: [
          "../../assets/images/my_projects/Unikum/Unikum_first_page.jpg",
          "../../assets/images/my_projects/Unikum/Unikum_footer.jpg",
          "../../assets/images/my_projects/Unikum/Unikum_login.jpg",
          "../../assets/images/my_projects/Unikum/Unikum_registration.jpg",
          "../../assets/images/my_projects/Unikum/Unikum_registration_2.jpg",
          "../../assets/images/my_projects/Unikum/Unikum_our_menu.jpg",
          "../../assets/images/my_projects/Unikum/Unikum_our_menu_2.jpg",
        ],
        showCarousel: false,
      },
      {
        id: 3,
        title: "The Court Of Knowledge project",
        description:
          "The Court Of Knowledge project is a web application developed utilizing two REST-API's, along with HTML, CSS, JQuery, and PHP as the backend technology, with the option to incorporate MySQL when necessary.",
        images: [
          "../../assets/images/my_projects/The_Court_Of_Knowledge/The_Court_Of_Knowledge_hero.jpg",
          "../../assets/images/my_projects/The_Court_Of_Knowledge/The_Court_Of_Knowledge_player_inf.jpg",
          "../../assets/images/my_projects/The_Court_Of_Knowledge/The_Court_Of_Knowledge_player_graph.jpg",
          "../../assets/images/my_projects/The_Court_Of_Knowledge/The_Court_Of_Knowledge_quiz_and_footer.jpg",
          "../../assets/images/my_projects/The_Court_Of_Knowledge/The_Court_Of_Knowledge_quiz_overlay.jpg",
        ],
        showCarousel: false,
      },
      {
        id: 4,
        title: "DataCorp S.A project",
        description:
          "The DataCorp S.A. project was a full-stack project where I had the opportunity to create a small door in our school workshop. This door was specially designed with an RFID scanner to mimic a conference room access system. To control the process, we used a RaspberryPi controller. It was an exhilarating hands-on experience where I applied my knowledge of HTML, CSS (including LESS), JavaScript, JQuery, PHP, MySQL, and even Python for the RaspberryPi. The project also involved developing a website that allowed employees to log in, reserve conference rooms, and manage their profiles. To ensure smooth operation, I set up an Ubuntu server with Apache for hosting the website and implemented a backup system using a bash script to protect the MySQL database.",
        images: [
          "../../assets/images/my_projects/DataCorp_S.A/DataCorp_S.A_Konferenzraum_Kalendar.jpg",
          "../../assets/images/my_projects/DataCorp_S.A/DataCorp_S.A_Reservierung_hinzufügen.jpg",
          "../../assets/images/my_projects/DataCorp_S.A/DataCorp_S.A_Login.jpg",
          "../../assets/images/my_projects/DataCorp_S.A/DataCorp_S.A_Registration.jpg",
          "../../assets/images/my_projects/DataCorp_S.A/DataCorp_S.A_Registration_2.jpg",
          "../../assets/images/my_projects/DataCorp_S.A/DataCorp_S.A_Mitarbeiter_hinzufügen.jpg",
          "../../assets/images/my_projects/DataCorp_S.A/DataCorp_S.A_Mitarbeiter_Admin_Tabelle.jpg",
          "../../assets/images/my_projects/DataCorp_S.A/DataCorp_S.A_Benutzergruppen_hinzufügen_und_Admintabelle.jpg",
          "../../assets/images/my_projects/DataCorp_S.A/DataCorp_S.A_Administratorrechte.jpg",
          "../../assets/images/my_projects/DataCorp_S.A/DataCorp_S.A_Mein_Profil.jpg",
        ],
        showCarousel: false,
      },
      {
        id: 5,
        title: "Wecodelux project",
        description:
          "Wecodelux is a collaborative freelancing project that my friend and I developed using HTML, CSS (SCSS), JQuery, PHP, and MySQL.",
        images: [
          "../../assets/images/my_projects/wecodelux/wecodelux_Hero.jpg",
          "../../assets/images/my_projects/wecodelux/wecodelux_Projects.jpg",
          "../../assets/images/my_projects/wecodelux/wecodelux_Services.jpg",
          "../../assets/images/my_projects/wecodelux/wecodelux_Technologies.jpg",
          "../../assets/images/my_projects/wecodelux/wecodelux_Contact_Us.jpg",
          "../../assets/images/my_projects/wecodelux/wecodelux_Footer.jpg",
        ],
        showCarousel: false,
      },
    ],
    activeProjectId: null,
  };

  // Event handler for showing the carousel
  handleShowCarousel = (projectId) => {
    this.setState({
      activeProjectId: projectId,
    });
  };

  // Event handler for closing the carousel
  handleCloseCarousel = () => {
    this.setState({
      activeProjectId: null,
    });
  };

  render() {
    const { projects, activeProjectId } = this.state;
    const activeProject = projects.find(
      (project) => project.id === activeProjectId
    );

    return (
      <>
        <section id="portfolio">
          <div id="portfolio-content">
            <div className="row">
              <div className="col-md-6 py-3 w-100">
                <div className="px-5">
                  <h1>Portfolio</h1>
                </div>
                <div className="row">
                  {/* Mapping through each project */}
                  {projects.map((project) => (
                    <div key={project.id} className="col-md-6 my-3">
                      <Card rounded={true.toString()}>
                        {/* Apply rounded prop to make the border more rounded */}
                        {/* Single image displayed initially */}
                        <Card.Img
                          variant="top"
                          loading="lazy"
                          src={project.images[0]}
                        />
                        <Card.Body>
                          {/* Project title */}
                          <h3 className="mb-3">{project.title}</h3>
                          {/* Project description */}
                          <Card.Text>{project.description}</Card.Text>
                          {/* Button to show carousel */}
                          <Button
                            onClick={() => this.handleShowCarousel(project.id)}
                          >
                            Show
                          </Button>
                        </Card.Body>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* Carousel Modal */}
          <Modal
            show={activeProjectId !== null}
            onHide={this.handleCloseCarousel}
            centered
          >
            <Modal.Header closeButton>
              {/* Modal title with active project title */}
              <Modal.Title
                style={{
                  fontFamily: "Montserrat",
                  fontWeight: "700",
                }}
              >
                {activeProject?.title} images
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Carousel>
                {/* Mapping through each image of the active project */}
                {activeProject?.images.map((image, index) => (
                  <Carousel.Item key={index}>
                    {/* Image of the active project */}
                    <img
                      className="d-block w-100"
                      style={{ height: "500px", objectFit: "contain" }}
                      src={image}
                      alt={`Project ${activeProject?.id} Image ${index + 1}`}
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
            </Modal.Body>
          </Modal>
        </section>
        <div className="seperated"></div>
      </>
    );
  }
}

export default Portfolio;
