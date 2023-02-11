import { fireEvent, render, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import Body from '../Body';
import store from '../../utils/store';
import { StaticRouter } from 'react-router-dom/server';
import { RESTAURANT_DATA } from '../../mocks/data';
import "@testing-library/jest-dom";

global.fetch = jest.fn(()=> {
   return Promise.resolve({
        json: ()=> { return Promise.resolve(RESTAURANT_DATA); }
    })
});

test('Shimmer should load on Home page ', () => { 

   const body = render(
   <StaticRouter>
       <Provider store={store}>
        <Body />
       </Provider>
    </StaticRouter>);

        const shimmer = body.getByTestId("shimmer");
        console.log(shimmer);
        expect(shimmer).toBeInTheDocument();
        expect(shimmer.children.length).toBe(10);


        });


        test('Restaurant should load on Home page ', async() => { 

            const body = render(
            <StaticRouter>
                <Provider store={store}>
                 <Body />
                </Provider>
             </StaticRouter>);
         
             await waitFor(()=> expect(body.getByTestId("search-btn")));
         
                 const resList = body.getByTestId("res-list");
                 expect(resList.children.length).toBe(15);
         
         
                 });

    test('search for food on Home page ', async() => { 

                    const body = render(
                    <StaticRouter>
                        <Provider store={store}>
                         <Body />
                        </Provider>
                     </StaticRouter>);
                 
                     await waitFor(()=> expect(body.getByTestId("search-btn")));
                 
                         const searchInput = body.getByTestId("search-input");
                         fireEvent.change(searchInput, {target: {
                            value: "food",
                        }});
                        const searchBtn = body.getByTestId("search-btn");
                        fireEvent.click(searchBtn);
                        const resList = body.getByTestId("res-list");
                        expect(resList.children.length).toBe(15);
                    
          });

          test("Search for string(food) on Homepage", async () => {
            const body = render(
              <StaticRouter>
                <Provider store={store}>
                  <Body />
                </Provider>
              </StaticRouter>
            );
          
            await waitFor(() => expect(body.getByTestId("search-btn")));
          
            const input = body.getByTestId("search-input");
          
            fireEvent.change(input, {
              target: {
                value: "food",
              },
            });
          
            const searchBtn = body.getByTestId("search-btn");
          
            fireEvent.click(searchBtn);
          
            const resList = body.getByTestId("res-list");
          
            expect(resList.children.length).toBe(15);
          });
        