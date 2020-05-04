import React from 'react'
import { shallow } from 'enzyme'
import Header from '../../client/components/Header'
import ProviderMock from '../../__mocks__/providerMock'

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