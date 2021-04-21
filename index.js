import Muya from './marktext/src/muya/lib'
import ComponentRelay from '@standardnotes/component-relay'

import './marktext/src/muya/themes/default.css'
import './marktext/src/renderer/assets/themes/material-dark.theme.css'
import './index.css'

import TablePicker from './marktext/src/muya/lib/ui/tablePicker'
import QuickInsert from './marktext/src/muya/lib/ui/quickInsert'
import CodePicker from './marktext/src/muya/lib/ui/codePicker'
import EmojiPicker from './marktext/src/muya/lib/ui/emojiPicker'
import ImagePathPicker from './marktext/src/muya/lib/ui/imagePicker'
import ImageSelector from './marktext/src/muya/lib/ui/imageSelector'
import ImageToolbar from './marktext/src/muya/lib/ui/imageToolbar'
import Transformer from './marktext/src/muya/lib/ui/transformer'
import FormatPicker from './marktext/src/muya/lib/ui/formatPicker'
import LinkTools from './marktext/src/muya/lib/ui/linkTools'
import FootnoteTool from './marktext/src/muya/lib/ui/footnoteTool'
import TableBarTools from './marktext/src/muya/lib/ui/tableTools'
import FrontMenu from './marktext/src/muya/lib/ui/frontMenu'

Muya.use(TablePicker)
Muya.use(QuickInsert)
Muya.use(CodePicker)
Muya.use(EmojiPicker)
Muya.use(ImagePathPicker)
// Muya.use(ImageSelector, {
//    unsplashAccessKey: process.env.UNSPLASH_ACCESS_KEY,
//    photoCreatorClick: this.photoCreatorClick
// })
Muya.use(Transformer)
Muya.use(ImageToolbar)
Muya.use(FormatPicker)
Muya.use(FrontMenu)
Muya.use(LinkTools, {
   jumpClick: console.log
})
Muya.use(FootnoteTool)
Muya.use(TableBarTools)

let currentNote

function init() {

   const textarea = document.createElement('div')
   textarea.classList.add('editor-wrapper')
   document.body.append(textarea)
   const editor = new Muya(textarea, {})
   editor.init()

   const relay = new ComponentRelay({
      targetWindow: window,
      permissions: [{name: "stream-context-item"}],
      onReady: () => {
         console.log(relay)
      }
   })

   relay.streamContextItem(note => {
      currentNote = note
      if(note.content.text === editor.getMarkdown()) return
      console.log('FROM SN', JSON.stringify(note.content.text))
      editor.setMarkdown(note.content.text)
   })

   editor.on('change', change => {
      if(currentNote) {
         const note = currentNote
         relay.saveItemWithPresave(note, () => {
            const md = editor.getMarkdown()
            if (note.content.text === md) return
            console.log('FROM MUYA', JSON.stringify(md))
            note.content.text = md
         })
      }
   })
}

document.addEventListener('DOMContentLoaded', init)
if(document.readyState !== 'loading') init()
