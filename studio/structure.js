export const singletonDocumentTypes = new Set(['homePage']);

export const singletonActions = new Set(['publish', 'discardChanges', 'restore']);

export const structure = (S) =>
  S.list()
    .title('AIRDYNAMICS Content')
    .items([
      S.listItem()
        .title('Home Page')
        .id('homePage')
        .schemaType('homePage')
        .child(S.document().schemaType('homePage').documentId('homePage')),
      ...S.documentTypeListItems().filter(
        (item) => !singletonDocumentTypes.has(item.getId() || '')
      ),
    ]);
