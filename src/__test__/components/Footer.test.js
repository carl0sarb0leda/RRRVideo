import React from 'react'
import { mount } from 'enzyme'
import Footer from '../../client/components/Footer'

describe('Testing <Footer/>', () => {
    const footer = mount(<Footer />)
    test('Render Footer Component', () => {
        expect(footer.length).toEqual(1)
    })
    test('Render titles', () => {
        let globalFooter = 'Terms and Conditions Privacy Policy Help Center'
        expect(footer.find(".footer").text().replace(/\s/g, '')).toEqual(globalFooter.replace(/\s/g, ''))
    })
})