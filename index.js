import Muya from './marktext/src/muya/lib'
import './marktext/src/muya/themes/default.css'

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

function init() {
   const textarea = document.createElement('div')
   document.body.append(textarea)
   const editor = new Muya(textarea, {})
   editor.init()
   editor.on('change', console.log)
}

document.addEventListener('DOMContentLoaded', init)
if(document.readyState !== 'loading') init()
