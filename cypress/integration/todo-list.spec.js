describe('to-do list', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000')
        })

    it('heading should be What needs to be done?', () => {
        cy.get('.label__lg').should('have.text', 'What needs to be done?')
    })

    it('can add task', () => {
        const newTask = 'test task' //create a test task to add in list

        cy.get('#new-todo-input').type(`${newTask}{enter}`) // add test task in list
        cy.get('.todo-label').last().should('have.text', newTask) // check if test task is added in list

    })

    it('can edit task', () => {
        const newTask = 'edit test task' //create a test task to add in list

        cy.get('#new-todo-input').type(`${newTask}{enter}`) // add test task in list
        cy.get('.btn-group #edit').last().click() //click edit button
        cy.get('.todo-text').type(' edited{enter}')//edit the task
        cy.get('.todo-label').last().should('have.text', 'edit test task edited') // check if edited task is in list
    })

    it('can delete task', () => {
        const newTask = 'delete test task' //create a test task to add in list

        cy.get('#new-todo-input').type(`${newTask}{enter}`) // add test task in list
        cy.get('.btn__danger').last().click() //delete task
        cy.get('.todo-label').should('not.have.text','delete test task') // check if task is deleted
    })

    it('can mark task as complete', () => {
        const newTask = 'completed test task' //create a test task to add in list

        cy.get('#new-todo-input').type(`${newTask}{enter}`) // add test task in list
        cy.get('input[type="checkbox"]').last().check() //mark it as complete
        cy.get('.toggle-btn').last().click() // go to completed list
        cy.get('.todo-label').last().should('have.text', newTask) // check if completed task is added in completed list
    })    
})