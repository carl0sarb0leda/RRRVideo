import React from 'react'
import { mount, shallow } from 'enzyme'
import ProviderMock from '../../__mocks__/providerMock'
import itemMock from '../../__mocks__/itemMock'
import CarouselItem from '../../client/components/CarouselItem'

describe('Testing <CarouselItem/>', () => {
    const carouselItem = shallow(
        <ProviderMock>
            <CarouselItem />
        </ProviderMock>
    )
    test('Render CarouselItem Component', () => {
        expect(carouselItem.length).toEqual(1)
    })
    // test('Testing setFavorite', () => {
    //     const handleSetFavorite = jest.fn();
    //     const wrapper = mount(
    //         <ProviderMock>
    //             <CarouselItem key={itemMock.id} {...itemMock} handleSetFavorite={handleSetFavorite} />
    //         </ProviderMock>
    //     );
    //     wrapper.find('img').simulate('click')
    //     expect(handleSetFavorite).toHaveBeenCalledTimes(1)
    // })

})
