import { mount } from '@cypress/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

describe('Routing', () => {
  it('should navigate to LoginPage when path is "/"', () => {
    cy.visit('/');
    cy.location('pathname').should('eq', '/');
    mount(
      <Router>
        <App />
      </Router>
    );
    cy.get('LoginPage').should('be.visible');
  });

  it('should navigate to HomePage when path is "/home"', () => {
    cy.visit('/home');
    cy.location('pathname').should('eq', '/home');
    mount(
      <Router>
        <App />
      </Router>
    );
    cy.get('HomePage').should('be.visible');
  });

  it('should redirect to "/" when path is not recognized', () => {
    cy.visit('/random');
    cy.location('pathname').should('eq', '/');
    mount(
      <Router>
        <App />
      </Router>
    );
    cy.get('LoginPage').should('be.visible');
  });
});
