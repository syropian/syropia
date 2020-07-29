import Cloudinary, { CldImage, CldTransformation } from 'cloudinary-vue'
import Vue from 'vue'

Vue.use(Cloudinary, {
  configuration: {
    cloudName: 'syropia-blog',
    secure: true,
  },
  components: [CldImage, CldTransformation],
})
