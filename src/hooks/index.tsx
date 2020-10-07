/* eslint-disable import/prefer-default-export */
import * as copee from 'copee'
import siteConfig from 'site-config'
import { Notyf } from 'notyf'

export const useEmail = () => {
  const notyf = new Notyf({ duration: 3500, position: { x: 'center', y: 'top' } })
  copee.toClipboard(siteConfig.email)
  return notyf.success('Email copied to clipboard')
}
