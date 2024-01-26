
import MainNavBar from '../components/MainNavBar';
class DashBoardPage {

    constructor() {
        this.navBar = new MainNavBar();
    }

    visit() {
        cy.visit('/dashboard/');
    }

}
export default DashBoardPage;
