import { ColoredMessage } from "./components/ColoredMessage";
import './App.css';

export const App = () => {
  const onClickButton = ({ target }) => {
    console.log(target.style);
  };

  return (
    <div>
      <div className="m-8 p-4  bg-gray-600 rounded-lg">
        <h1 className="text-fuchsia-500">Hello World!</h1>
        <ColoredMessage color='blue'>Props React</ColoredMessage>
        <ColoredMessage color='pink'>React Pink</ColoredMessage>
        <button onClick={onClickButton}>Button</button>
        <div className=" text-orange-200">Hello World</div>
      </div>

      <div className=" flex gap-2 h-80 w-96 bg-slate-500 flex-none content-center flex-wrap">
        <div className=" h-10 w-10 bg-red-500">1</div>
        <div className=" h-10 w-10 bg-red-500">2</div>
        <div className=" h-10 w-10 bg-red-500">3</div>

        <div className=" h-10 w-10 bg-red-500">4</div>
        <div className=" h-10 w-10 bg-red-500">5</div>
        <div className=" h-10 w-10 bg-red-500">6</div>

      </div>
      {/* flex flex-wrap flex-1, auto, none,init order etc*/}
      <p className=" bg-slate-500 text-cyan-50">FLEX</p>
      <div className="flex  bg-yellow-500 w-auto">
        <div className=" order-3 flex-auto w-80 h-10 bg-red-400">1</div>
        <div className=" order-1 flex-auto w-80 h-10 bg-blue-500">2</div>
        <div className=" order-2 flex-auto w-80 h-10 bg-green-500">3</div>
      </div>
      <hr />
      <div className="grid grid-cols-2 gap-2 p-2 bg-yellow-500 w-auto">
        <div className=" col-span-2 h-20 bg-red-500">1</div>
        <div className=" h-20 bg-red-500">2</div>
        <div className=" h-20 bg-red-500">3</div>

        <div className=" h-20 bg-red-500">4</div>
        <div className=" h-20 bg-red-500">5</div>
        <div className=" h-20 bg-red-500">6</div>

        <div className=" h-20 bg-red-500">7</div>
        <div className=" h-20 bg-red-500">8</div>
        <div className=" h-20 bg-red-500">9</div>
      </div>
      <hr />
      {/* grid flow row col gap*/}
      <p className=" bg-slate-500 text-cyan-50">GRID flow row col gap</p>
      <div className="grid grid-flow-col grid-rows-5 gap-x-4 gap-y-1 p-2 bg-yellow-500 w-auto">
        <div className="row-span-2 h-auto bg-red-500">1</div>
        <div className=" h-20 bg-red-500">2</div>
        <div className=" h-20 bg-red-500">3</div>

        <div className=" h-20 bg-red-500">4</div>
        <div className=" h-20 bg-red-500">5</div>
        <div className=" h-20 bg-red-500">6</div>

        <div className=" h-20 bg-red-500">7</div>
        <div className=" h-20 bg-red-500">8</div>
        <div className=" h-20 bg-red-500">9</div>
      </div>
      <hr />
      {/* grid justify  item-cebter start end strethc*/}
      <p className=" bg-slate-500 text-cyan-50">GRID justify</p>
      <div className="grid grid-flow-col grid-rows-5 gap-x-4 gap-y-1 p-2 justify-items-center bg-yellow-500 w-auto">
        <div className="row-span-2 h-auto w-20 bg-red-500">1</div>
        <div className=" h-20 w-20 bg-red-500">2</div>
        <div className=" h-20 w-20 bg-red-500">3</div>

        <div className=" h-20 w-20 bg-red-500">4</div>
        <div className=" h-20 w-20 bg-red-500">5</div>
        <div className=" h-20 w-20 bg-red-500">6</div>
      </div>
      {/* grid justify  item-center start end strethc*/}
      <p className=" bg-slate-500 text-cyan-50">GRID justify indivisual items</p>
      <div className="grid grid-flow-col grid-rows-5 gap-x-4 gap-y-1 p-2 justify-items-center bg-yellow-500 w-auto">
        <div className=" justify-self-start row-span-2 h-auto w-20 bg-red-500">1</div>
        <div className=" h-20 w-20 bg-red-500">2</div>
        <div className=" justify-self-end h-20 w-20 bg-red-500">3</div>

        <div className=" h-20 w-20 bg-red-500">4</div>
        <div className=" h-20 w-20 bg-red-500">5</div>
        <div className=" h-20 w-20 bg-red-500">6</div>
      </div>
      {/* Margin Padding Text*/}
      <p className=" bg-slate-500 text-cyan-50">Margin Padding Text</p>
      <div className=" m-10 p-10 bg-blue-500">
        <div className="p-10  bg-pink-500">
          <div className=" text-6xl italic font-thin font-sans text-center text-pink-200 capitalize">This is an inner div</div>
        </div>
      </div>
      {/* Margin Padding Text*/}
      <p className=" bg-slate-500 text-cyan-50">Border Radius</p>
      <div>
        <button className=" bg-gray-400 m-10 p-3 text-white rounded-t-lg border-4 border-cyan-900 border-double">Click Here</button>
        <button className=" bg-white m-10 p-3 text-slate-600 rounded-lg shadow-lg">Click Here</button>
      </div>
      {/* Break Point*/}
      <p className=" bg-slate-500 text-cyan-50">Break Point</p>
      <div>
        <h1 className=" text-5xl 2xl:text-pink-500 xl:text-yellow-500 lg:text-blue-500 md:text-green-500 text-black selection:bg-slate-500 selection:text-white first-letter:text-8xl">Heading</h1>
      </div>
      {/* Pseudo selectors Group*/}
      <p className=" bg-slate-500 text-cyan-50">Pseudo selectors</p>
      <div>
        <button className=" text-5xl bg-slate-400 hover:bg-blue-500 hover:text-white">Click</button>
        <input placeholder="Add Your Name" className=" bg-gray-200 focus:bg-green-500" />
        <div className=" group bg-red-300">
          <p className=" group-hover:text-white">Para 1</p>
          <p>Para 2</p>
        </div>
      </div>
    </div>
  )
}

