import React, { useEffect, useState } from 'react'
import { FaJsSquare } from 'react-icons/fa'
import { FaChevronDown, FaCss3, FaHtml5, FaJs } from 'react-icons/fa6'
import { FcSettings } from 'react-icons/fc'
import SplitPane from 'react-split-pane'
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { vscodeDark } from '@uiw/codemirror-theme-vscode'

const NewProject = () => {
    const [html, setHtml] = useState("")
    const [css, setCss] = useState("")
    const [js, setJs] = useState("")
    const [output, setOutput] = useState("")

    useEffect(()=>{
        updateOutput()
    },[html,css,js])

    const updateOutput =() => {
        const combinedOutput = `
        <html>
        <head>
        <style>${css}</style>
        </head>
        <body>
        ${html}
        </body>
        <script>${js}</script>
        </html>
        `;

        setOutput(combinedOutput)

    }


  return (
    <>
    
    <div className='w-screen h-screen flex items-center justify-center overflow-hidden'>
    {/* alert section */}


    {/* header section */}


    {/* coding section */}
        <div className='w-screen overflow-hidden'>
        {/* horizontal spilt pane */}
        <SplitPane split='horizontal' minSize={100} maxSize={-100} defaultSize={"50%"} className='overflow-hidden'>

            {/* top coding section */}
            <SplitPane split='vertical' minSize={500} className='overflow-hidden'>

                {/* html */}
                <div className='w-full h-full flex flex-col items-start justify-start'>

                    {/* header */}
                    <div className='w-full flex items-center justify-between'>
                        {/* title */}
                        <div className='flex items-center justify-center gap-3 bg-secondary px-4 py-2 border-t-4 border-t-gray-500'>
                            <FaHtml5 className='text-xl text-red-500' />
                            <p className='text-primaryText font-semibold '>HTML</p>
                        </div>

                        {/* options/icons */}
                        <div className='cursor-pointer flex items-center justify-center gap-5 px-4'>
                            <FcSettings className='text-xl text-primaryText'/>
                            <FaChevronDown className='text-xl text-primaryText'/>
                        </div>


                    </div>
                    {/* code */}
                    <div className='w-full px-2'>
                    <CodeMirror value={html} height="600px" extensions={[javascript({ jsx: true })]} onChange={(value,viewUpdate)=>{
                        setHtml(value)
                    }} theme={vscodeDark} />
                    </div>

                </div>


                <SplitPane split='vertical' minSize={500} className='overflow-hidden'>
                    {/* css */}
                    <div className='w-full h-full flex flex-col items-start justify-start'>

                    {/* header */}
                    <div className='w-full flex items-center justify-between'>
                        {/* title */}
                        <div className='flex items-center justify-center gap-3 bg-secondary px-4 py-2 border-t-4 border-t-gray-500'>
                            <FaCss3 className='text-xl text-sky-500' />
                            <p className='text-primaryText font-semibold '>CSS</p>
                        </div>

                        {/* options/icons */}
                        <div className='cursor-pointer flex items-center justify-center gap-5 px-4'>
                            <FcSettings className='text-xl text-primaryText'/>
                            <FaChevronDown className='text-xl text-primaryText'/>
                        </div>


                    </div>
                    {/* code */}
                    <div className='w-full px-2'>
                    <CodeMirror value={css} height="600px" extensions={[javascript({ jsx: true })]} onChange={(value,viewUpdate)=>{
                        setCss(value)
                    }} theme={vscodeDark} />
                    </div>

                </div>



                    {/* js */}
                    <div className='w-full h-full flex flex-col items-start justify-start'>

                    {/* header */}
                    <div className='w-full flex items-center justify-between'>
                        {/* title */}
                        <div className='flex items-center justify-center gap-3 bg-secondary px-4 py-2 border-t-4 border-t-gray-500'>
                            <FaJs className='text-xl text-yellow-500' />
                            <p className='text-primaryText font-semibold '>JS</p>
                        </div>

                        {/* options/icons */}
                        <div className='cursor-pointer flex items-center justify-center gap-5 px-4'>
                            <FcSettings className='text-xl text-primaryText'/>
                            <FaChevronDown className='text-xl text-primaryText'/>
                        </div>


                    </div>
                    {/* code */}
                    <div className='w-full px-2'>
                    <CodeMirror value={js} height="600px" extensions={[javascript({ jsx: true })]} onChange={(value,viewUpdate)=>{
                        setCss(value)
                    }} theme={vscodeDark} />
                    </div>

                </div>



                </SplitPane>

            </SplitPane>


            {/* bottom result section */}
            <div className='bg-white' style={{overflow:"hidden",height:"100%"}}>
                    <iframe 
                    title='Result'
                    srcDoc={output}
                    style={{border:"none",width:"100%",height:"100%"}}
                    />
            </div>
        </SplitPane>
        </div>
            
    </div>

    </>
  )
}

export default NewProject