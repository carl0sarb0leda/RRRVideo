import React from 'react'
import { mount, shallow } from 'enzyme'
import { create } from 'react-test-renderer'
import Header from '../../client/components/Header'
import ProviderMock from '../../__mocks__/providerMock'
import Footer from '../../client/components/Footer'
import userMock from '../../__mocks__/userMock'

describe('Testing <Header/>', () => {
    const header = shallow(
        <ProviderMock>
            <Header />
        </ProviderMock>
    )
    test('Render Header Component', () => {
        expect(header.length).toEqual(1)
    })
})

// describe('Header Snapshot', () => {
//     const handleLogOut = jest.fn()
//     const onClick = jest.fn()
//     test('Testing UI Header', () => {
//         const header = create(
//             <ProviderMock>
//                 <Header handleLogOut={handleLogOut} onClick={onClick} user={userMock} />
//             </ProviderMock>)
//         expect(header.toJSON()).toMatchSnapshot()
//     })
// })