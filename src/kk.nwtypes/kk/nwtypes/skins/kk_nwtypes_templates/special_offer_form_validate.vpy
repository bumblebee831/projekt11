from Products.CMFPlone import PloneMessageFactory as _
plone_utils=context.plone_utils

name = context.REQUEST.get('name', None)
phone = context.REQUEST.get('phone', None)
street = context.REQUEST.get('street', None)
email = context.REQUEST.get('email', None)
plzort = context.REQUEST.get('plzort', None)
betreff = context.REQUEST.get('betreff', None)
email_ok = False
if not name:
   state.setError('name', _(u'Bitte geben Sie Ihren Namen ein.'), new_status='failure')
   
if not phone:
   state.setError('phone', _(u'Bitte geben Sie Ihre Telefonnummer ein.'), new_status='failure')
   
if not street:
   state.setError('street', _(u'Bitte geben Sie Ihre Strasse ein.'), new_status='failure')

if not plzort:
   state.setError('plzort', _(u'Bitte geben Sie Ihre PLZ / Ort ein.'), new_status='failure')

if not betreff:
   state.setError('betreff', _(u'Bitte geben Sie einen Betreff an.'), new_status='failure')
      
if not email:
   state.setError('email',_(u'Please submit an email address.'), new_status='failure')

else:
   if not plone_utils.validateSingleEmailAddress(email):
       state.setError('email', _(u'Bitte korrigieren Sie Ihre Eingabe.'), new_status='failure')     
         
if state.getErrors():
   context.plone_utils.addPortalMessage(_(u'Bitte korrigieren Sie die angezeigten Fehler.'), 'error')
   
return state