/* tslint:disable */

/* A date string, such as 2007-12-03, compliant with the ISO 8601 standard  for representation of dates and times using the Gregorian calendar. */
export type Date = any;
/* An object with an id, parent, and children */
export interface Node {
  id: string /* The id of the node. */;
  parent?: Node | null /* The parent of this node. */;
  children?: Node[] | null /* The children of this node. */;
}

export interface RootQueryType {
  allSitePage?: SitePageConnection | null /* Connection to all SitePage nodes */;
  allSitePlugin?: SitePluginConnection | null /* Connection to all SitePlugin nodes */;
  allDirectory?: DirectoryConnection | null /* Connection to all Directory nodes */;
  allFile?: FileConnection | null /* Connection to all File nodes */;
  allTrainersJson?: TrainersJsonConnection | null /* Connection to all TrainersJson nodes */;
  allCoursesJson?: CoursesJsonConnection | null /* Connection to all CoursesJson nodes */;
  allLocationsJson?: LocationsJsonConnection | null /* Connection to all LocationsJson nodes */;
  allSessionsJson?: SessionsJsonConnection | null /* Connection to all SessionsJson nodes */;
  allOfferingsJson?: OfferingsJsonConnection | null /* Connection to all OfferingsJson nodes */;
  sitePage?: SitePage | null;
  sitePlugin?: SitePlugin | null;
  site?: Site | null;
  directory?: Directory | null;
  file?: File | null;
  trainersJson?: TrainersJson | null;
  coursesJson?: CoursesJson | null;
  locationsJson?: LocationsJson | null;
  sessionsJson?: SessionsJson | null;
  offeringsJson?: OfferingsJson | null;
}
/* A connection to a list of items. */
export interface SitePageConnection {
  pageInfo: PageInfo /* Information to aid in pagination. */;
  edges?: SitePageEdge[] | null /* A list of edges. */;
  totalCount?: number | null;
  distinct?: string[] | null;
  group?: sitePageGroupConnectionConnection[] | null;
}
/* Information about pagination in a connection. */
export interface PageInfo {
  hasNextPage: boolean /* When paginating, are there more items? */;
}
/* An edge in a connection. */
export interface SitePageEdge {
  node?: SitePage | null /* The item at the end of the edge */;
  next?: SitePage | null /* The next edge in the connection */;
  previous?: SitePage | null /* The previous edge in the connection */;
}
/* Node of type SitePage */
export interface SitePage extends Node {
  id: string /* The id of this node. */;
  parent?: Node | null /* The parent of this node. */;
  children?: Node[] | null /* The children of this node. */;
  layout?: string | null;
  jsonName?: string | null;
  internalComponentName?: string | null;
  path?: string | null;
  component?: string | null;
  componentChunkName?: string | null;
  context?: context | null;
  pluginCreator?: SitePlugin | null;
  pluginCreatorId?: string | null;
  componentPath?: string | null;
  internal?: internal_11 | null;
}

export interface context {
  offeringId?: string | null;
  courseId?: string | null;
  sessionId?: string | null;
}
/* Node of type SitePlugin */
export interface SitePlugin extends Node {
  id: string /* The id of this node. */;
  parent?: Node | null /* The parent of this node. */;
  children?: Node[] | null /* The children of this node. */;
  resolve?: string | null;
  name?: string | null;
  version?: string | null;
  pluginOptions?: pluginOptions_2 | null;
  nodeAPIs?: string[] | null;
  ssrAPIs?: string[] | null;
  pluginFilepath?: string | null;
  packageJson?: packageJson_2 | null;
  internal?: internal_12 | null;
}

export interface pluginOptions_2 {
  name?: string | null;
  path?: string | null;
  pathCheck?: boolean | null;
}

export interface packageJson_2 {
  name?: string | null;
  description?: string | null;
  version?: string | null;
  main?: string | null;
  license?: string | null;
  dependencies?: dependencies_2[] | null;
  devDependencies?: devDependencies_2[] | null;
  peerDependencies?: peerDependencies_2[] | null;
  keywords?: string[] | null;
}

export interface dependencies_2 {
  name?: string | null;
  version?: string | null;
}

export interface devDependencies_2 {
  name?: string | null;
  version?: string | null;
}

export interface peerDependencies_2 {
  name?: string | null;
  version?: string | null;
}

export interface internal_12 {
  contentDigest?: string | null;
  type?: string | null;
  owner?: string | null;
}

export interface internal_11 {
  type?: string | null;
  contentDigest?: string | null;
  description?: string | null;
  owner?: string | null;
}
/* A connection to a list of items. */
export interface sitePageGroupConnectionConnection {
  pageInfo: PageInfo /* Information to aid in pagination. */;
  edges?: sitePageGroupConnectionEdge[] | null /* A list of edges. */;
  field?: string | null;
  fieldValue?: string | null;
  totalCount?: number | null;
}
/* An edge in a connection. */
export interface sitePageGroupConnectionEdge {
  node?: SitePage | null /* The item at the end of the edge */;
  next?: SitePage | null /* The next edge in the connection */;
  previous?: SitePage | null /* The previous edge in the connection */;
}
/* A connection to a list of items. */
export interface SitePluginConnection {
  pageInfo: PageInfo /* Information to aid in pagination. */;
  edges?: SitePluginEdge[] | null /* A list of edges. */;
  totalCount?: number | null;
  distinct?: string[] | null;
  group?: sitePluginGroupConnectionConnection[] | null;
}
/* An edge in a connection. */
export interface SitePluginEdge {
  node?: SitePlugin | null /* The item at the end of the edge */;
  next?: SitePlugin | null /* The next edge in the connection */;
  previous?: SitePlugin | null /* The previous edge in the connection */;
}
/* A connection to a list of items. */
export interface sitePluginGroupConnectionConnection {
  pageInfo: PageInfo /* Information to aid in pagination. */;
  edges?: sitePluginGroupConnectionEdge[] | null /* A list of edges. */;
  field?: string | null;
  fieldValue?: string | null;
  totalCount?: number | null;
}
/* An edge in a connection. */
export interface sitePluginGroupConnectionEdge {
  node?: SitePlugin | null /* The item at the end of the edge */;
  next?: SitePlugin | null /* The next edge in the connection */;
  previous?: SitePlugin | null /* The previous edge in the connection */;
}
/* A connection to a list of items. */
export interface DirectoryConnection {
  pageInfo: PageInfo /* Information to aid in pagination. */;
  edges?: DirectoryEdge[] | null /* A list of edges. */;
  totalCount?: number | null;
  distinct?: string[] | null;
  group?: directoryGroupConnectionConnection[] | null;
}
/* An edge in a connection. */
export interface DirectoryEdge {
  node?: Directory | null /* The item at the end of the edge */;
  next?: Directory | null /* The next edge in the connection */;
  previous?: Directory | null /* The previous edge in the connection */;
}
/* Node of type Directory */
export interface Directory extends Node {
  id: string /* The id of this node. */;
  parent?: Node | null /* The parent of this node. */;
  children?: Node[] | null /* The children of this node. */;
  internal?: internal_13 | null;
  sourceInstanceName?: string | null;
  absolutePath?: string | null;
  relativePath?: string | null;
  extension?: string | null;
  size?: number | null;
  prettySize?: string | null;
  modifiedTime?: Date | null;
  accessTime?: Date | null;
  changeTime?: Date | null;
  birthTime?: Date | null;
  root?: string | null;
  dir?: string | null;
  base?: string | null;
  ext?: string | null;
  name?: string | null;
  relativeDirectory?: string | null;
  dev?: number | null;
  mode?: number | null;
  nlink?: number | null;
  uid?: number | null;
  gid?: number | null;
  rdev?: number | null;
  blksize?: number | null;
  ino?: number | null;
  blocks?: number | null;
  atimeMs?: number | null;
  mtimeMs?: number | null;
  ctimeMs?: number | null;
  birthtimeMs?: number | null;
  atime?: Date | null;
  mtime?: Date | null;
  ctime?: Date | null;
  birthtime?: Date | null;
}

export interface internal_13 {
  contentDigest?: string | null;
  type?: string | null;
  description?: string | null;
  owner?: string | null;
}
/* A connection to a list of items. */
export interface directoryGroupConnectionConnection {
  pageInfo: PageInfo /* Information to aid in pagination. */;
  edges?: directoryGroupConnectionEdge[] | null /* A list of edges. */;
  field?: string | null;
  fieldValue?: string | null;
  totalCount?: number | null;
}
/* An edge in a connection. */
export interface directoryGroupConnectionEdge {
  node?: Directory | null /* The item at the end of the edge */;
  next?: Directory | null /* The next edge in the connection */;
  previous?: Directory | null /* The previous edge in the connection */;
}
/* A connection to a list of items. */
export interface FileConnection {
  pageInfo: PageInfo /* Information to aid in pagination. */;
  edges?: FileEdge[] | null /* A list of edges. */;
  totalCount?: number | null;
  distinct?: string[] | null;
  group?: fileGroupConnectionConnection[] | null;
}
/* An edge in a connection. */
export interface FileEdge {
  node?: File | null /* The item at the end of the edge */;
  next?: File | null /* The next edge in the connection */;
  previous?: File | null /* The previous edge in the connection */;
}
/* Node of type File */
export interface File extends Node {
  id: string /* The id of this node. */;
  parent?: Node | null /* The parent of this node. */;
  children?: Node[] | null /* The children of this node. */;
  childCoursesJson?: CoursesJson | null /* The child of this node of type coursesJson */;
  childrenOfferingsJson?:
    | OfferingsJson[]
    | null /* The children of this node of type offeringsJson */;
  childrenLocationsJson?:
    | LocationsJson[]
    | null /* The children of this node of type locationsJson */;
  childrenSessionsJson?:
    | SessionsJson[]
    | null /* The children of this node of type sessionsJson */;
  childTrainersJson?: TrainersJson | null /* The child of this node of type trainersJson */;
  internal?: internal_14 | null;
  sourceInstanceName?: string | null;
  absolutePath?: string | null;
  relativePath?: string | null;
  extension?: string | null;
  size?: number | null;
  prettySize?: string | null;
  modifiedTime?: Date | null;
  accessTime?: Date | null;
  changeTime?: Date | null;
  birthTime?: Date | null;
  root?: string | null;
  dir?: string | null;
  base?: string | null;
  ext?: string | null;
  name?: string | null;
  relativeDirectory?: string | null;
  dev?: number | null;
  mode?: number | null;
  nlink?: number | null;
  uid?: number | null;
  gid?: number | null;
  rdev?: number | null;
  blksize?: number | null;
  ino?: number | null;
  blocks?: number | null;
  atimeMs?: number | null;
  mtimeMs?: number | null;
  ctimeMs?: number | null;
  birthtimeMs?: number | null;
  atime?: Date | null;
  mtime?: Date | null;
  ctime?: Date | null;
  birthtime?: Date | null;
  publicURL?:
    | string
    | null /* Copy file to static directory and return public url to it */;
}
/* Node of type CoursesJson */
export interface CoursesJson extends Node {
  id: string /* The id of this node. */;
  parent?: Node | null /* The parent of this node. */;
  children?: Node[] | null /* The children of this node. */;
  code?: string | null;
  version?: string | null;
  length?: string | null;
  price?: number | null;
  order?: number | null;
  flavors?: string[] | null;
  label?: string | null;
  title?: string | null;
  subtitle?: string | null;
  descriptionHtml?: string | null;
  prerequisites?: string | null;
  products?: products_2[] | null;
  audience?: audience_2[] | null;
  curriculum?: curriculum_2[] | null;
  internal?: internal_15 | null;
}

export interface products_2 {
  title?: string | null;
}

export interface audience_2 {
  title?: string | null;
}

export interface curriculum_2 {
  id?: number | null;
  title?: string | null;
  description?: string | null;
  topics?: topics_2[] | null;
  labsHtml?: string | null;
}

export interface topics_2 {
  id?: number | null;
  title?: string | null;
}

export interface internal_15 {
  contentDigest?: string | null;
  type?: string | null;
  owner?: string | null;
}
/* Node of type OfferingsJson */
export interface OfferingsJson extends Node {
  id: string /* The id of this node. */;
  parent?: Node | null /* The parent of this node. */;
  children?: Node[] | null /* The children of this node. */;
  order?: number | null;
  title?: string | null;
  img?: string | null;
  imgSmall?: string | null;
  icon?: string | null;
  summary?: string | null;
  introHtml?: string | null;
  descriptionHtml?: string | null;
  sections?: sections_2[] | null;
  internal?: internal_16 | null;
}

export interface sections_2 {
  id?: string | null;
  title?: string | null;
  contentHtml?: string | null;
}

export interface internal_16 {
  contentDigest?: string | null;
  type?: string | null;
  owner?: string | null;
}
/* Node of type LocationsJson */
export interface LocationsJson extends Node {
  id: string /* The id of this node. */;
  parent?: Node | null /* The parent of this node. */;
  children?: Node[] | null /* The children of this node. */;
  title?: string | null;
  facilityTitle?: string | null;
  facilityDescHtml?: string | null;
  address?: string | null;
  city?: string | null;
  state?: string | null;
  country?: string | null;
  internal?: internal_17 | null;
}

export interface internal_17 {
  contentDigest?: string | null;
  type?: string | null;
  owner?: string | null;
}
/* Node of type SessionsJson */
export interface SessionsJson extends Node {
  id: string /* The id of this node. */;
  parent?: Node | null /* The parent of this node. */;
  children?: Node[] | null /* The children of this node. */;
  order?: number | null;
  title?: string | null;
  descriptionHtml?: string | null;
  trainerId?: string | null;
  locationId?: string | null;
  courseId?: string | null;
  dateStart?: string | null;
  dateEnd?: string | null;
  timeStart?: string | null;
  timeEnd?: string | null;
  price?: number | null;
  registerLink?: string | null;
  internal?: internal_18 | null;
}

export interface internal_18 {
  contentDigest?: string | null;
  type?: string | null;
  owner?: string | null;
}
/* Node of type TrainersJson */
export interface TrainersJson extends Node {
  id: string /* The id of this node. */;
  parent?: Node | null /* The parent of this node. */;
  children?: Node[] | null /* The children of this node. */;
  name?: string | null;
  title?: string | null;
  picture?: string | null;
  bio?: string | null;
  twitter?: string | null;
  internal?: internal_19 | null;
}

export interface internal_19 {
  contentDigest?: string | null;
  type?: string | null;
  owner?: string | null;
}

export interface internal_14 {
  contentDigest?: string | null;
  mediaType?: string | null;
  type?: string | null;
  description?: string | null;
  owner?: string | null;
}
/* A connection to a list of items. */
export interface fileGroupConnectionConnection {
  pageInfo: PageInfo /* Information to aid in pagination. */;
  edges?: fileGroupConnectionEdge[] | null /* A list of edges. */;
  field?: string | null;
  fieldValue?: string | null;
  totalCount?: number | null;
}
/* An edge in a connection. */
export interface fileGroupConnectionEdge {
  node?: File | null /* The item at the end of the edge */;
  next?: File | null /* The next edge in the connection */;
  previous?: File | null /* The previous edge in the connection */;
}
/* A connection to a list of items. */
export interface TrainersJsonConnection {
  pageInfo: PageInfo /* Information to aid in pagination. */;
  edges?: TrainersJsonEdge[] | null /* A list of edges. */;
  totalCount?: number | null;
  distinct?: string[] | null;
  group?: trainersJsonGroupConnectionConnection[] | null;
}
/* An edge in a connection. */
export interface TrainersJsonEdge {
  node?: TrainersJson | null /* The item at the end of the edge */;
  next?: TrainersJson | null /* The next edge in the connection */;
  previous?: TrainersJson | null /* The previous edge in the connection */;
}
/* A connection to a list of items. */
export interface trainersJsonGroupConnectionConnection {
  pageInfo: PageInfo /* Information to aid in pagination. */;
  edges?: trainersJsonGroupConnectionEdge[] | null /* A list of edges. */;
  field?: string | null;
  fieldValue?: string | null;
  totalCount?: number | null;
}
/* An edge in a connection. */
export interface trainersJsonGroupConnectionEdge {
  node?: TrainersJson | null /* The item at the end of the edge */;
  next?: TrainersJson | null /* The next edge in the connection */;
  previous?: TrainersJson | null /* The previous edge in the connection */;
}
/* A connection to a list of items. */
export interface CoursesJsonConnection {
  pageInfo: PageInfo /* Information to aid in pagination. */;
  edges?: CoursesJsonEdge[] | null /* A list of edges. */;
  totalCount?: number | null;
  distinct?: string[] | null;
  group?: coursesJsonGroupConnectionConnection[] | null;
}
/* An edge in a connection. */
export interface CoursesJsonEdge {
  node?: CoursesJson | null /* The item at the end of the edge */;
  next?: CoursesJson | null /* The next edge in the connection */;
  previous?: CoursesJson | null /* The previous edge in the connection */;
}
/* A connection to a list of items. */
export interface coursesJsonGroupConnectionConnection {
  pageInfo: PageInfo /* Information to aid in pagination. */;
  edges?: coursesJsonGroupConnectionEdge[] | null /* A list of edges. */;
  field?: string | null;
  fieldValue?: string | null;
  totalCount?: number | null;
}
/* An edge in a connection. */
export interface coursesJsonGroupConnectionEdge {
  node?: CoursesJson | null /* The item at the end of the edge */;
  next?: CoursesJson | null /* The next edge in the connection */;
  previous?: CoursesJson | null /* The previous edge in the connection */;
}
/* A connection to a list of items. */
export interface LocationsJsonConnection {
  pageInfo: PageInfo /* Information to aid in pagination. */;
  edges?: LocationsJsonEdge[] | null /* A list of edges. */;
  totalCount?: number | null;
  distinct?: string[] | null;
  group?: locationsJsonGroupConnectionConnection[] | null;
}
/* An edge in a connection. */
export interface LocationsJsonEdge {
  node?: LocationsJson | null /* The item at the end of the edge */;
  next?: LocationsJson | null /* The next edge in the connection */;
  previous?: LocationsJson | null /* The previous edge in the connection */;
}
/* A connection to a list of items. */
export interface locationsJsonGroupConnectionConnection {
  pageInfo: PageInfo /* Information to aid in pagination. */;
  edges?: locationsJsonGroupConnectionEdge[] | null /* A list of edges. */;
  field?: string | null;
  fieldValue?: string | null;
  totalCount?: number | null;
}
/* An edge in a connection. */
export interface locationsJsonGroupConnectionEdge {
  node?: LocationsJson | null /* The item at the end of the edge */;
  next?: LocationsJson | null /* The next edge in the connection */;
  previous?: LocationsJson | null /* The previous edge in the connection */;
}
/* A connection to a list of items. */
export interface SessionsJsonConnection {
  pageInfo: PageInfo /* Information to aid in pagination. */;
  edges?: SessionsJsonEdge[] | null /* A list of edges. */;
  totalCount?: number | null;
  distinct?: string[] | null;
  group?: sessionsJsonGroupConnectionConnection[] | null;
}
/* An edge in a connection. */
export interface SessionsJsonEdge {
  node?: SessionsJson | null /* The item at the end of the edge */;
  next?: SessionsJson | null /* The next edge in the connection */;
  previous?: SessionsJson | null /* The previous edge in the connection */;
}
/* A connection to a list of items. */
export interface sessionsJsonGroupConnectionConnection {
  pageInfo: PageInfo /* Information to aid in pagination. */;
  edges?: sessionsJsonGroupConnectionEdge[] | null /* A list of edges. */;
  field?: string | null;
  fieldValue?: string | null;
  totalCount?: number | null;
}
/* An edge in a connection. */
export interface sessionsJsonGroupConnectionEdge {
  node?: SessionsJson | null /* The item at the end of the edge */;
  next?: SessionsJson | null /* The next edge in the connection */;
  previous?: SessionsJson | null /* The previous edge in the connection */;
}
/* A connection to a list of items. */
export interface OfferingsJsonConnection {
  pageInfo: PageInfo /* Information to aid in pagination. */;
  edges?: OfferingsJsonEdge[] | null /* A list of edges. */;
  totalCount?: number | null;
  distinct?: string[] | null;
  group?: offeringsJsonGroupConnectionConnection[] | null;
}
/* An edge in a connection. */
export interface OfferingsJsonEdge {
  node?: OfferingsJson | null /* The item at the end of the edge */;
  next?: OfferingsJson | null /* The next edge in the connection */;
  previous?: OfferingsJson | null /* The previous edge in the connection */;
}
/* A connection to a list of items. */
export interface offeringsJsonGroupConnectionConnection {
  pageInfo: PageInfo /* Information to aid in pagination. */;
  edges?: offeringsJsonGroupConnectionEdge[] | null /* A list of edges. */;
  field?: string | null;
  fieldValue?: string | null;
  totalCount?: number | null;
}
/* An edge in a connection. */
export interface offeringsJsonGroupConnectionEdge {
  node?: OfferingsJson | null /* The item at the end of the edge */;
  next?: OfferingsJson | null /* The next edge in the connection */;
  previous?: OfferingsJson | null /* The previous edge in the connection */;
}
/* Node of type Site */
export interface Site extends Node {
  id: string /* The id of this node. */;
  parent?: Node | null /* The parent of this node. */;
  children?: Node[] | null /* The children of this node. */;
  siteMetadata?: siteMetadata_2 | null;
  port?: Date | null;
  host?: string | null;
  pathPrefix?: string | null;
  polyfill?: boolean | null;
  buildTime?: Date | null;
  internal?: internal_20 | null;
}

export interface siteMetadata_2 {
  siteName?: string | null;
  siteUrl?: string | null;
}

export interface internal_20 {
  contentDigest?: string | null;
  type?: string | null;
  owner?: string | null;
}

export interface sitePageConnectionSort {
  fields: SitePageConnectionSortByFieldsEnum[];
  order?: sitePageConnectionSortOrderValues | null;
}
/* Filter connection on its fields */
export interface filterSitePage {
  layout?: sitePageConnectionLayoutQueryString | null;
  jsonName?: sitePageConnectionJsonNameQueryString | null;
  internalComponentName?: sitePageConnectionInternalComponentNameQueryString | null;
  path?: sitePageConnectionPathQueryString_2 | null;
  component?: sitePageConnectionComponentQueryString | null;
  componentChunkName?: sitePageConnectionComponentChunkNameQueryString | null;
  context?: sitePageConnectionContextInputObject | null;
  pluginCreator?: sitePageConnectionPluginCreatorInputObject | null;
  pluginCreatorId?: sitePageConnectionPluginCreatorIdQueryString_2 | null;
  componentPath?: sitePageConnectionComponentPathQueryString | null;
  id?: sitePageConnectionIdQueryString_2 | null;
  internal?: sitePageConnectionInternalInputObject_2 | null;
}

export interface sitePageConnectionLayoutQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionJsonNameQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionInternalComponentNameQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPathQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionComponentQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionComponentChunkNameQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionContextInputObject {
  offeringId?: sitePageConnectionContextOfferingIdQueryString | null;
  courseId?: sitePageConnectionContextCourseIdQueryString | null;
  sessionId?: sitePageConnectionContextSessionIdQueryString | null;
}

export interface sitePageConnectionContextOfferingIdQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionContextCourseIdQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionContextSessionIdQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPluginCreatorInputObject {
  resolve?: sitePageConnectionPluginCreatorResolveQueryString | null;
  id?: sitePageConnectionPluginCreatorIdQueryString | null;
  name?: sitePageConnectionPluginCreatorNameQueryString | null;
  version?: sitePageConnectionPluginCreatorVersionQueryString | null;
  pluginOptions?: sitePageConnectionPluginCreatorPluginOptionsInputObject | null;
  nodeAPIs?: sitePageConnectionPluginCreatorNodeApIsQueryList | null;
  ssrAPIs?: sitePageConnectionPluginCreatorSsrApIsQueryList | null;
  pluginFilepath?: sitePageConnectionPluginCreatorPluginFilepathQueryString | null;
  packageJson?: sitePageConnectionPluginCreatorPackageJsonInputObject | null;
  parent?: sitePageConnectionPluginCreatorParentQueryString | null;
  internal?: sitePageConnectionPluginCreatorInternalInputObject | null;
}

export interface sitePageConnectionPluginCreatorResolveQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPluginCreatorIdQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPluginCreatorNameQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPluginCreatorVersionQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsInputObject {
  name?: sitePageConnectionPluginCreatorPluginOptionsNameQueryString | null;
  path?: sitePageConnectionPluginCreatorPluginOptionsPathQueryString | null;
  pathCheck?: sitePageConnectionPluginCreatorPluginOptionsPathCheckQueryBoolean | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsNameQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsPathQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsPathCheckQueryBoolean {
  eq?: boolean | null;
  ne?: boolean | null;
}

export interface sitePageConnectionPluginCreatorNodeApIsQueryList {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: string[] | null;
}

export interface sitePageConnectionPluginCreatorSsrApIsQueryList {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: string[] | null;
}

export interface sitePageConnectionPluginCreatorPluginFilepathQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPluginCreatorPackageJsonInputObject {
  name?: sitePageConnectionPluginCreatorPackageJsonNameQueryString | null;
  description?: sitePageConnectionPluginCreatorPackageJsonDescriptionQueryString | null;
  version?: sitePageConnectionPluginCreatorPackageJsonVersionQueryString | null;
  main?: sitePageConnectionPluginCreatorPackageJsonMainQueryString | null;
  license?: sitePageConnectionPluginCreatorPackageJsonLicenseQueryString | null;
  dependencies?: sitePageConnectionPluginCreatorPackageJsonDependenciesQueryList | null;
  devDependencies?: sitePageConnectionPluginCreatorPackageJsonDevDependenciesQueryList | null;
  peerDependencies?: sitePageConnectionPluginCreatorPackageJsonPeerDependenciesQueryList | null;
  keywords?: sitePageConnectionPluginCreatorPackageJsonKeywordsQueryList | null;
}

export interface sitePageConnectionPluginCreatorPackageJsonNameQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPluginCreatorPackageJsonDescriptionQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPluginCreatorPackageJsonVersionQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPluginCreatorPackageJsonMainQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPluginCreatorPackageJsonLicenseQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPluginCreatorPackageJsonDependenciesQueryList {
  in?:
    | sitePageConnectionPluginCreatorPackageJsonDependenciesInputObject[]
    | null;
}

export interface sitePageConnectionPluginCreatorPackageJsonDependenciesInputObject {
  name?: sitePageConnectionPluginCreatorPackageJsonDependenciesNameQueryString | null;
  version?: sitePageConnectionPluginCreatorPackageJsonDependenciesVersionQueryString | null;
}

export interface sitePageConnectionPluginCreatorPackageJsonDependenciesNameQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPluginCreatorPackageJsonDependenciesVersionQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPluginCreatorPackageJsonDevDependenciesQueryList {
  in?:
    | sitePageConnectionPluginCreatorPackageJsonDevDependenciesInputObject[]
    | null;
}

export interface sitePageConnectionPluginCreatorPackageJsonDevDependenciesInputObject {
  name?: sitePageConnectionPluginCreatorPackageJsonDevDependenciesNameQueryString | null;
  version?: sitePageConnectionPluginCreatorPackageJsonDevDependenciesVersionQueryString | null;
}

export interface sitePageConnectionPluginCreatorPackageJsonDevDependenciesNameQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPluginCreatorPackageJsonDevDependenciesVersionQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPluginCreatorPackageJsonPeerDependenciesQueryList {
  in?:
    | sitePageConnectionPluginCreatorPackageJsonPeerDependenciesInputObject[]
    | null;
}

export interface sitePageConnectionPluginCreatorPackageJsonPeerDependenciesInputObject {
  name?: sitePageConnectionPluginCreatorPackageJsonPeerDependenciesNameQueryString | null;
  version?: sitePageConnectionPluginCreatorPackageJsonPeerDependenciesVersionQueryString | null;
}

export interface sitePageConnectionPluginCreatorPackageJsonPeerDependenciesNameQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPluginCreatorPackageJsonPeerDependenciesVersionQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPluginCreatorPackageJsonKeywordsQueryList {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: string[] | null;
}

export interface sitePageConnectionPluginCreatorParentQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPluginCreatorInternalInputObject {
  contentDigest?: sitePageConnectionPluginCreatorInternalContentDigestQueryString | null;
  type?: sitePageConnectionPluginCreatorInternalTypeQueryString | null;
  owner?: sitePageConnectionPluginCreatorInternalOwnerQueryString | null;
}

export interface sitePageConnectionPluginCreatorInternalContentDigestQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPluginCreatorInternalTypeQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPluginCreatorInternalOwnerQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPluginCreatorIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionComponentPathQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionInternalInputObject_2 {
  type?: sitePageConnectionInternalTypeQueryString_2 | null;
  contentDigest?: sitePageConnectionInternalContentDigestQueryString_2 | null;
  description?: sitePageConnectionInternalDescriptionQueryString | null;
  owner?: sitePageConnectionInternalOwnerQueryString_2 | null;
}

export interface sitePageConnectionInternalTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionInternalContentDigestQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionInternalDescriptionQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionInternalOwnerQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginConnectionSort {
  fields: SitePluginConnectionSortByFieldsEnum[];
  order?: sitePluginConnectionSortOrderValues | null;
}
/* Filter connection on its fields */
export interface filterSitePlugin {
  resolve?: sitePluginConnectionResolveQueryString_2 | null;
  id?: sitePluginConnectionIdQueryString_2 | null;
  name?: sitePluginConnectionNameQueryString_2 | null;
  version?: sitePluginConnectionVersionQueryString_2 | null;
  pluginOptions?: sitePluginConnectionPluginOptionsInputObject_2 | null;
  nodeAPIs?: sitePluginConnectionNodeApIsQueryList_2 | null;
  ssrAPIs?: sitePluginConnectionSsrApIsQueryList_2 | null;
  pluginFilepath?: sitePluginConnectionPluginFilepathQueryString_2 | null;
  packageJson?: sitePluginConnectionPackageJsonInputObject_2 | null;
  internal?: sitePluginConnectionInternalInputObject_2 | null;
}

export interface sitePluginConnectionResolveQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginConnectionIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginConnectionNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginConnectionVersionQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginConnectionPluginOptionsInputObject_2 {
  name?: sitePluginConnectionPluginOptionsNameQueryString_2 | null;
  path?: sitePluginConnectionPluginOptionsPathQueryString_2 | null;
  pathCheck?: sitePluginConnectionPluginOptionsPathCheckQueryBoolean_2 | null;
}

export interface sitePluginConnectionPluginOptionsNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginConnectionPluginOptionsPathQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginConnectionPluginOptionsPathCheckQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
}

export interface sitePluginConnectionNodeApIsQueryList_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: string[] | null;
}

export interface sitePluginConnectionSsrApIsQueryList_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: string[] | null;
}

export interface sitePluginConnectionPluginFilepathQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginConnectionPackageJsonInputObject_2 {
  name?: sitePluginConnectionPackageJsonNameQueryString_2 | null;
  description?: sitePluginConnectionPackageJsonDescriptionQueryString_2 | null;
  version?: sitePluginConnectionPackageJsonVersionQueryString_2 | null;
  main?: sitePluginConnectionPackageJsonMainQueryString_2 | null;
  license?: sitePluginConnectionPackageJsonLicenseQueryString_2 | null;
  dependencies?: sitePluginConnectionPackageJsonDependenciesQueryList_2 | null;
  devDependencies?: sitePluginConnectionPackageJsonDevDependenciesQueryList_2 | null;
  peerDependencies?: sitePluginConnectionPackageJsonPeerDependenciesQueryList_2 | null;
  keywords?: sitePluginConnectionPackageJsonKeywordsQueryList_2 | null;
}

export interface sitePluginConnectionPackageJsonNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginConnectionPackageJsonDescriptionQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginConnectionPackageJsonVersionQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginConnectionPackageJsonMainQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginConnectionPackageJsonLicenseQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginConnectionPackageJsonDependenciesQueryList_2 {
  in?: sitePluginConnectionPackageJsonDependenciesInputObject_2[] | null;
}

export interface sitePluginConnectionPackageJsonDependenciesInputObject_2 {
  name?: sitePluginConnectionPackageJsonDependenciesNameQueryString_2 | null;
  version?: sitePluginConnectionPackageJsonDependenciesVersionQueryString_2 | null;
}

export interface sitePluginConnectionPackageJsonDependenciesNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginConnectionPackageJsonDependenciesVersionQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginConnectionPackageJsonDevDependenciesQueryList_2 {
  in?: sitePluginConnectionPackageJsonDevDependenciesInputObject_2[] | null;
}

export interface sitePluginConnectionPackageJsonDevDependenciesInputObject_2 {
  name?: sitePluginConnectionPackageJsonDevDependenciesNameQueryString_2 | null;
  version?: sitePluginConnectionPackageJsonDevDependenciesVersionQueryString_2 | null;
}

export interface sitePluginConnectionPackageJsonDevDependenciesNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginConnectionPackageJsonDevDependenciesVersionQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginConnectionPackageJsonPeerDependenciesQueryList_2 {
  in?: sitePluginConnectionPackageJsonPeerDependenciesInputObject_2[] | null;
}

export interface sitePluginConnectionPackageJsonPeerDependenciesInputObject_2 {
  name?: sitePluginConnectionPackageJsonPeerDependenciesNameQueryString_2 | null;
  version?: sitePluginConnectionPackageJsonPeerDependenciesVersionQueryString_2 | null;
}

export interface sitePluginConnectionPackageJsonPeerDependenciesNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginConnectionPackageJsonPeerDependenciesVersionQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginConnectionPackageJsonKeywordsQueryList_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: string[] | null;
}

export interface sitePluginConnectionInternalInputObject_2 {
  contentDigest?: sitePluginConnectionInternalContentDigestQueryString_2 | null;
  type?: sitePluginConnectionInternalTypeQueryString_2 | null;
  owner?: sitePluginConnectionInternalOwnerQueryString_2 | null;
}

export interface sitePluginConnectionInternalContentDigestQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginConnectionInternalTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginConnectionInternalOwnerQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface directoryConnectionSort {
  fields: DirectoryConnectionSortByFieldsEnum[];
  order?: directoryConnectionSortOrderValues | null;
}
/* Filter connection on its fields */
export interface filterDirectory {
  id?: directoryConnectionIdQueryString_2 | null;
  internal?: directoryConnectionInternalInputObject_2 | null;
  sourceInstanceName?: directoryConnectionSourceInstanceNameQueryString_2 | null;
  absolutePath?: directoryConnectionAbsolutePathQueryString_2 | null;
  relativePath?: directoryConnectionRelativePathQueryString_2 | null;
  extension?: directoryConnectionExtensionQueryString_2 | null;
  size?: directoryConnectionSizeQueryInteger_2 | null;
  prettySize?: directoryConnectionPrettySizeQueryString_2 | null;
  modifiedTime?: directoryConnectionModifiedTimeQueryString_2 | null;
  accessTime?: directoryConnectionAccessTimeQueryString_2 | null;
  changeTime?: directoryConnectionChangeTimeQueryString_2 | null;
  birthTime?: directoryConnectionBirthTimeQueryString_2 | null;
  root?: directoryConnectionRootQueryString_2 | null;
  dir?: directoryConnectionDirQueryString_2 | null;
  base?: directoryConnectionBaseQueryString_2 | null;
  ext?: directoryConnectionExtQueryString_2 | null;
  name?: directoryConnectionNameQueryString_2 | null;
  relativeDirectory?: directoryConnectionRelativeDirectoryQueryString_2 | null;
  dev?: directoryConnectionDevQueryInteger_2 | null;
  mode?: directoryConnectionModeQueryInteger_2 | null;
  nlink?: directoryConnectionNlinkQueryInteger_2 | null;
  uid?: directoryConnectionUidQueryInteger_2 | null;
  gid?: directoryConnectionGidQueryInteger_2 | null;
  rdev?: directoryConnectionRdevQueryInteger_2 | null;
  blksize?: directoryConnectionBlksizeQueryInteger_2 | null;
  ino?: directoryConnectionInoQueryInteger_2 | null;
  blocks?: directoryConnectionBlocksQueryInteger_2 | null;
  atimeMs?: directoryConnectionAtimeMsQueryFloat_2 | null;
  mtimeMs?: directoryConnectionMtimeMsQueryFloat_2 | null;
  ctimeMs?: directoryConnectionCtimeMsQueryFloat_2 | null;
  birthtimeMs?: directoryConnectionBirthtimeMsQueryFloat_2 | null;
  atime?: directoryConnectionAtimeQueryString_2 | null;
  mtime?: directoryConnectionMtimeQueryString_2 | null;
  ctime?: directoryConnectionCtimeQueryString_2 | null;
  birthtime?: directoryConnectionBirthtimeQueryString_2 | null;
}

export interface directoryConnectionIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface directoryConnectionInternalInputObject_2 {
  contentDigest?: directoryConnectionInternalContentDigestQueryString_2 | null;
  type?: directoryConnectionInternalTypeQueryString_2 | null;
  description?: directoryConnectionInternalDescriptionQueryString_2 | null;
  owner?: directoryConnectionInternalOwnerQueryString_2 | null;
}

export interface directoryConnectionInternalContentDigestQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface directoryConnectionInternalTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface directoryConnectionInternalDescriptionQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface directoryConnectionInternalOwnerQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface directoryConnectionSourceInstanceNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface directoryConnectionAbsolutePathQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface directoryConnectionRelativePathQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface directoryConnectionExtensionQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface directoryConnectionSizeQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface directoryConnectionPrettySizeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface directoryConnectionModifiedTimeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface directoryConnectionAccessTimeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface directoryConnectionChangeTimeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface directoryConnectionBirthTimeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface directoryConnectionRootQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface directoryConnectionDirQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface directoryConnectionBaseQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface directoryConnectionExtQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface directoryConnectionNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface directoryConnectionRelativeDirectoryQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface directoryConnectionDevQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface directoryConnectionModeQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface directoryConnectionNlinkQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface directoryConnectionUidQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface directoryConnectionGidQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface directoryConnectionRdevQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface directoryConnectionBlksizeQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface directoryConnectionInoQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface directoryConnectionBlocksQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface directoryConnectionAtimeMsQueryFloat_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface directoryConnectionMtimeMsQueryFloat_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface directoryConnectionCtimeMsQueryFloat_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface directoryConnectionBirthtimeMsQueryFloat_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface directoryConnectionAtimeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface directoryConnectionMtimeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface directoryConnectionCtimeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface directoryConnectionBirthtimeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fileConnectionSort {
  fields: FileConnectionSortByFieldsEnum[];
  order?: fileConnectionSortOrderValues | null;
}
/* Filter connection on its fields */
export interface filterFile {
  id?: fileConnectionIdQueryString_2 | null;
  internal?: fileConnectionInternalInputObject_2 | null;
  sourceInstanceName?: fileConnectionSourceInstanceNameQueryString_2 | null;
  absolutePath?: fileConnectionAbsolutePathQueryString_2 | null;
  relativePath?: fileConnectionRelativePathQueryString_2 | null;
  extension?: fileConnectionExtensionQueryString_2 | null;
  size?: fileConnectionSizeQueryInteger_2 | null;
  prettySize?: fileConnectionPrettySizeQueryString_2 | null;
  modifiedTime?: fileConnectionModifiedTimeQueryString_2 | null;
  accessTime?: fileConnectionAccessTimeQueryString_2 | null;
  changeTime?: fileConnectionChangeTimeQueryString_2 | null;
  birthTime?: fileConnectionBirthTimeQueryString_2 | null;
  root?: fileConnectionRootQueryString_2 | null;
  dir?: fileConnectionDirQueryString_2 | null;
  base?: fileConnectionBaseQueryString_2 | null;
  ext?: fileConnectionExtQueryString_2 | null;
  name?: fileConnectionNameQueryString_2 | null;
  relativeDirectory?: fileConnectionRelativeDirectoryQueryString_2 | null;
  dev?: fileConnectionDevQueryInteger_2 | null;
  mode?: fileConnectionModeQueryInteger_2 | null;
  nlink?: fileConnectionNlinkQueryInteger_2 | null;
  uid?: fileConnectionUidQueryInteger_2 | null;
  gid?: fileConnectionGidQueryInteger_2 | null;
  rdev?: fileConnectionRdevQueryInteger_2 | null;
  blksize?: fileConnectionBlksizeQueryInteger_2 | null;
  ino?: fileConnectionInoQueryInteger_2 | null;
  blocks?: fileConnectionBlocksQueryInteger_2 | null;
  atimeMs?: fileConnectionAtimeMsQueryFloat_2 | null;
  mtimeMs?: fileConnectionMtimeMsQueryFloat_2 | null;
  ctimeMs?: fileConnectionCtimeMsQueryFloat_2 | null;
  birthtimeMs?: fileConnectionBirthtimeMsQueryFloat_2 | null;
  atime?: fileConnectionAtimeQueryString_2 | null;
  mtime?: fileConnectionMtimeQueryString_2 | null;
  ctime?: fileConnectionCtimeQueryString_2 | null;
  birthtime?: fileConnectionBirthtimeQueryString_2 | null;
  publicURL?: publicUrlQueryString_4 | null;
}

export interface fileConnectionIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fileConnectionInternalInputObject_2 {
  contentDigest?: fileConnectionInternalContentDigestQueryString_2 | null;
  mediaType?: fileConnectionInternalMediaTypeQueryString_2 | null;
  type?: fileConnectionInternalTypeQueryString_2 | null;
  description?: fileConnectionInternalDescriptionQueryString_2 | null;
  owner?: fileConnectionInternalOwnerQueryString_2 | null;
}

export interface fileConnectionInternalContentDigestQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fileConnectionInternalMediaTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fileConnectionInternalTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fileConnectionInternalDescriptionQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fileConnectionInternalOwnerQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fileConnectionSourceInstanceNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fileConnectionAbsolutePathQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fileConnectionRelativePathQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fileConnectionExtensionQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fileConnectionSizeQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface fileConnectionPrettySizeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fileConnectionModifiedTimeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fileConnectionAccessTimeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fileConnectionChangeTimeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fileConnectionBirthTimeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fileConnectionRootQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fileConnectionDirQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fileConnectionBaseQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fileConnectionExtQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fileConnectionNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fileConnectionRelativeDirectoryQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fileConnectionDevQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface fileConnectionModeQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface fileConnectionNlinkQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface fileConnectionUidQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface fileConnectionGidQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface fileConnectionRdevQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface fileConnectionBlksizeQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface fileConnectionInoQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface fileConnectionBlocksQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface fileConnectionAtimeMsQueryFloat_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface fileConnectionMtimeMsQueryFloat_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface fileConnectionCtimeMsQueryFloat_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface fileConnectionBirthtimeMsQueryFloat_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface fileConnectionAtimeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fileConnectionMtimeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fileConnectionCtimeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fileConnectionBirthtimeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface publicUrlQueryString_4 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface trainersJsonConnectionSort {
  fields: TrainersJsonConnectionSortByFieldsEnum[];
  order?: trainersJsonConnectionSortOrderValues | null;
}
/* Filter connection on its fields */
export interface filterTrainersJson {
  id?: trainersJsonConnectionIdQueryString_2 | null;
  name?: trainersJsonConnectionNameQueryString_2 | null;
  title?: trainersJsonConnectionTitleQueryString_2 | null;
  picture?: trainersJsonConnectionPictureQueryString_2 | null;
  bio?: trainersJsonConnectionBioQueryString_2 | null;
  twitter?: trainersJsonConnectionTwitterQueryString_2 | null;
  internal?: trainersJsonConnectionInternalInputObject_2 | null;
}

export interface trainersJsonConnectionIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface trainersJsonConnectionNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface trainersJsonConnectionTitleQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface trainersJsonConnectionPictureQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface trainersJsonConnectionBioQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface trainersJsonConnectionTwitterQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface trainersJsonConnectionInternalInputObject_2 {
  contentDigest?: trainersJsonConnectionInternalContentDigestQueryString_2 | null;
  type?: trainersJsonConnectionInternalTypeQueryString_2 | null;
  owner?: trainersJsonConnectionInternalOwnerQueryString_2 | null;
}

export interface trainersJsonConnectionInternalContentDigestQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface trainersJsonConnectionInternalTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface trainersJsonConnectionInternalOwnerQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface coursesJsonConnectionSort {
  fields: CoursesJsonConnectionSortByFieldsEnum[];
  order?: coursesJsonConnectionSortOrderValues | null;
}
/* Filter connection on its fields */
export interface filterCoursesJson {
  id?: coursesJsonConnectionIdQueryString_2 | null;
  code?: coursesJsonConnectionCodeQueryString_2 | null;
  version?: coursesJsonConnectionVersionQueryString_2 | null;
  length?: coursesJsonConnectionLengthQueryString_2 | null;
  price?: coursesJsonConnectionPriceQueryInteger_2 | null;
  order?: coursesJsonConnectionOrderQueryInteger_2 | null;
  flavors?: coursesJsonConnectionFlavorsQueryList_2 | null;
  label?: coursesJsonConnectionLabelQueryString_2 | null;
  title?: coursesJsonConnectionTitleQueryString_2 | null;
  subtitle?: coursesJsonConnectionSubtitleQueryString_2 | null;
  descriptionHtml?: coursesJsonConnectionDescriptionHtmlQueryString_2 | null;
  prerequisites?: coursesJsonConnectionPrerequisitesQueryString_2 | null;
  products?: coursesJsonConnectionProductsQueryList_2 | null;
  audience?: coursesJsonConnectionAudienceQueryList_2 | null;
  curriculum?: coursesJsonConnectionCurriculumQueryList_2 | null;
  internal?: coursesJsonConnectionInternalInputObject_2 | null;
}

export interface coursesJsonConnectionIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface coursesJsonConnectionCodeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface coursesJsonConnectionVersionQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface coursesJsonConnectionLengthQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface coursesJsonConnectionPriceQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface coursesJsonConnectionOrderQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface coursesJsonConnectionFlavorsQueryList_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: string[] | null;
}

export interface coursesJsonConnectionLabelQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface coursesJsonConnectionTitleQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface coursesJsonConnectionSubtitleQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface coursesJsonConnectionDescriptionHtmlQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface coursesJsonConnectionPrerequisitesQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface coursesJsonConnectionProductsQueryList_2 {
  in?: coursesJsonConnectionProductsInputObject_2[] | null;
}

export interface coursesJsonConnectionProductsInputObject_2 {
  title?: coursesJsonConnectionProductsTitleQueryString_2 | null;
}

export interface coursesJsonConnectionProductsTitleQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface coursesJsonConnectionAudienceQueryList_2 {
  in?: coursesJsonConnectionAudienceInputObject_2[] | null;
}

export interface coursesJsonConnectionAudienceInputObject_2 {
  title?: coursesJsonConnectionAudienceTitleQueryString_2 | null;
}

export interface coursesJsonConnectionAudienceTitleQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface coursesJsonConnectionCurriculumQueryList_2 {
  in?: coursesJsonConnectionCurriculumInputObject_2[] | null;
}

export interface coursesJsonConnectionCurriculumInputObject_2 {
  id?: coursesJsonConnectionCurriculumIdQueryInteger_2 | null;
  title?: coursesJsonConnectionCurriculumTitleQueryString_2 | null;
  description?: coursesJsonConnectionCurriculumDescriptionQueryString_2 | null;
  topics?: coursesJsonConnectionCurriculumTopicsQueryList_2 | null;
  labsHtml?: coursesJsonConnectionCurriculumLabsHtmlQueryString_2 | null;
}

export interface coursesJsonConnectionCurriculumIdQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface coursesJsonConnectionCurriculumTitleQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface coursesJsonConnectionCurriculumDescriptionQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface coursesJsonConnectionCurriculumTopicsQueryList_2 {
  in?: coursesJsonConnectionCurriculumTopicsInputObject_2[] | null;
}

export interface coursesJsonConnectionCurriculumTopicsInputObject_2 {
  id?: coursesJsonConnectionCurriculumTopicsIdQueryInteger_2 | null;
  title?: coursesJsonConnectionCurriculumTopicsTitleQueryString_2 | null;
}

export interface coursesJsonConnectionCurriculumTopicsIdQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface coursesJsonConnectionCurriculumTopicsTitleQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface coursesJsonConnectionCurriculumLabsHtmlQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface coursesJsonConnectionInternalInputObject_2 {
  contentDigest?: coursesJsonConnectionInternalContentDigestQueryString_2 | null;
  type?: coursesJsonConnectionInternalTypeQueryString_2 | null;
  owner?: coursesJsonConnectionInternalOwnerQueryString_2 | null;
}

export interface coursesJsonConnectionInternalContentDigestQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface coursesJsonConnectionInternalTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface coursesJsonConnectionInternalOwnerQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface locationsJsonConnectionSort {
  fields: LocationsJsonConnectionSortByFieldsEnum[];
  order?: locationsJsonConnectionSortOrderValues | null;
}
/* Filter connection on its fields */
export interface filterLocationsJson {
  id?: locationsJsonConnectionIdQueryString_2 | null;
  title?: locationsJsonConnectionTitleQueryString_2 | null;
  facilityTitle?: locationsJsonConnectionFacilityTitleQueryString_2 | null;
  facilityDescHtml?: locationsJsonConnectionFacilityDescHtmlQueryString_2 | null;
  address?: locationsJsonConnectionAddressQueryString_2 | null;
  city?: locationsJsonConnectionCityQueryString_2 | null;
  state?: locationsJsonConnectionStateQueryString_2 | null;
  country?: locationsJsonConnectionCountryQueryString_2 | null;
  internal?: locationsJsonConnectionInternalInputObject_2 | null;
}

export interface locationsJsonConnectionIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface locationsJsonConnectionTitleQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface locationsJsonConnectionFacilityTitleQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface locationsJsonConnectionFacilityDescHtmlQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface locationsJsonConnectionAddressQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface locationsJsonConnectionCityQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface locationsJsonConnectionStateQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface locationsJsonConnectionCountryQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface locationsJsonConnectionInternalInputObject_2 {
  contentDigest?: locationsJsonConnectionInternalContentDigestQueryString_2 | null;
  type?: locationsJsonConnectionInternalTypeQueryString_2 | null;
  owner?: locationsJsonConnectionInternalOwnerQueryString_2 | null;
}

export interface locationsJsonConnectionInternalContentDigestQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface locationsJsonConnectionInternalTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface locationsJsonConnectionInternalOwnerQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sessionsJsonConnectionSort {
  fields: SessionsJsonConnectionSortByFieldsEnum[];
  order?: sessionsJsonConnectionSortOrderValues | null;
}
/* Filter connection on its fields */
export interface filterSessionsJson {
  id?: sessionsJsonConnectionIdQueryString_2 | null;
  order?: sessionsJsonConnectionOrderQueryInteger_2 | null;
  title?: sessionsJsonConnectionTitleQueryString_2 | null;
  descriptionHtml?: sessionsJsonConnectionDescriptionHtmlQueryString_2 | null;
  trainerId?: sessionsJsonConnectionTrainerIdQueryString_2 | null;
  locationId?: sessionsJsonConnectionLocationIdQueryString_2 | null;
  courseId?: sessionsJsonConnectionCourseIdQueryString_2 | null;
  dateStart?: sessionsJsonConnectionDateStartQueryString_2 | null;
  dateEnd?: sessionsJsonConnectionDateEndQueryString_2 | null;
  timeStart?: sessionsJsonConnectionTimeStartQueryString_2 | null;
  timeEnd?: sessionsJsonConnectionTimeEndQueryString_2 | null;
  price?: sessionsJsonConnectionPriceQueryFloat_2 | null;
  registerLink?: sessionsJsonConnectionRegisterLinkQueryString_2 | null;
  internal?: sessionsJsonConnectionInternalInputObject_2 | null;
}

export interface sessionsJsonConnectionIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sessionsJsonConnectionOrderQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface sessionsJsonConnectionTitleQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sessionsJsonConnectionDescriptionHtmlQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sessionsJsonConnectionTrainerIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sessionsJsonConnectionLocationIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sessionsJsonConnectionCourseIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sessionsJsonConnectionDateStartQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sessionsJsonConnectionDateEndQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sessionsJsonConnectionTimeStartQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sessionsJsonConnectionTimeEndQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sessionsJsonConnectionPriceQueryFloat_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface sessionsJsonConnectionRegisterLinkQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sessionsJsonConnectionInternalInputObject_2 {
  contentDigest?: sessionsJsonConnectionInternalContentDigestQueryString_2 | null;
  type?: sessionsJsonConnectionInternalTypeQueryString_2 | null;
  owner?: sessionsJsonConnectionInternalOwnerQueryString_2 | null;
}

export interface sessionsJsonConnectionInternalContentDigestQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sessionsJsonConnectionInternalTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sessionsJsonConnectionInternalOwnerQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface offeringsJsonConnectionSort {
  fields: OfferingsJsonConnectionSortByFieldsEnum[];
  order?: offeringsJsonConnectionSortOrderValues | null;
}
/* Filter connection on its fields */
export interface filterOfferingsJson {
  id?: offeringsJsonConnectionIdQueryString_2 | null;
  order?: offeringsJsonConnectionOrderQueryInteger_2 | null;
  title?: offeringsJsonConnectionTitleQueryString_2 | null;
  img?: offeringsJsonConnectionImgQueryString_2 | null;
  imgSmall?: offeringsJsonConnectionImgSmallQueryString_2 | null;
  icon?: offeringsJsonConnectionIconQueryString_2 | null;
  summary?: offeringsJsonConnectionSummaryQueryString_2 | null;
  introHtml?: offeringsJsonConnectionIntroHtmlQueryString_2 | null;
  descriptionHtml?: offeringsJsonConnectionDescriptionHtmlQueryString_2 | null;
  sections?: offeringsJsonConnectionSectionsQueryList_2 | null;
  internal?: offeringsJsonConnectionInternalInputObject_2 | null;
}

export interface offeringsJsonConnectionIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface offeringsJsonConnectionOrderQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface offeringsJsonConnectionTitleQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface offeringsJsonConnectionImgQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface offeringsJsonConnectionImgSmallQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface offeringsJsonConnectionIconQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface offeringsJsonConnectionSummaryQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface offeringsJsonConnectionIntroHtmlQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface offeringsJsonConnectionDescriptionHtmlQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface offeringsJsonConnectionSectionsQueryList_2 {
  in?: offeringsJsonConnectionSectionsInputObject_2[] | null;
}

export interface offeringsJsonConnectionSectionsInputObject_2 {
  id?: offeringsJsonConnectionSectionsIdQueryString_2 | null;
  title?: offeringsJsonConnectionSectionsTitleQueryString_2 | null;
  contentHtml?: offeringsJsonConnectionSectionsContentHtmlQueryString_2 | null;
}

export interface offeringsJsonConnectionSectionsIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface offeringsJsonConnectionSectionsTitleQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface offeringsJsonConnectionSectionsContentHtmlQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface offeringsJsonConnectionInternalInputObject_2 {
  contentDigest?: offeringsJsonConnectionInternalContentDigestQueryString_2 | null;
  type?: offeringsJsonConnectionInternalTypeQueryString_2 | null;
  owner?: offeringsJsonConnectionInternalOwnerQueryString_2 | null;
}

export interface offeringsJsonConnectionInternalContentDigestQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface offeringsJsonConnectionInternalTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface offeringsJsonConnectionInternalOwnerQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageLayoutQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageJsonNameQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageInternalComponentNameQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePathQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageComponentQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageComponentChunkNameQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageContextInputObject {
  offeringId?: sitePageContextOfferingIdQueryString | null;
  courseId?: sitePageContextCourseIdQueryString | null;
  sessionId?: sitePageContextSessionIdQueryString | null;
}

export interface sitePageContextOfferingIdQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageContextCourseIdQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageContextSessionIdQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePluginCreatorInputObject {
  resolve?: sitePagePluginCreatorResolveQueryString | null;
  id?: sitePagePluginCreatorIdQueryString | null;
  name?: sitePagePluginCreatorNameQueryString | null;
  version?: sitePagePluginCreatorVersionQueryString | null;
  pluginOptions?: sitePagePluginCreatorPluginOptionsInputObject | null;
  nodeAPIs?: sitePagePluginCreatorNodeApIsQueryList | null;
  ssrAPIs?: sitePagePluginCreatorSsrApIsQueryList | null;
  pluginFilepath?: sitePagePluginCreatorPluginFilepathQueryString | null;
  packageJson?: sitePagePluginCreatorPackageJsonInputObject | null;
  parent?: sitePagePluginCreatorParentQueryString | null;
  internal?: sitePagePluginCreatorInternalInputObject | null;
}

export interface sitePagePluginCreatorResolveQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePluginCreatorIdQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePluginCreatorNameQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePluginCreatorVersionQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePluginCreatorPluginOptionsInputObject {
  name?: sitePagePluginCreatorPluginOptionsNameQueryString | null;
  path?: sitePagePluginCreatorPluginOptionsPathQueryString | null;
  pathCheck?: sitePagePluginCreatorPluginOptionsPathCheckQueryBoolean | null;
}

export interface sitePagePluginCreatorPluginOptionsNameQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePluginCreatorPluginOptionsPathQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePluginCreatorPluginOptionsPathCheckQueryBoolean {
  eq?: boolean | null;
  ne?: boolean | null;
}

export interface sitePagePluginCreatorNodeApIsQueryList {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: string[] | null;
}

export interface sitePagePluginCreatorSsrApIsQueryList {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: string[] | null;
}

export interface sitePagePluginCreatorPluginFilepathQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePluginCreatorPackageJsonInputObject {
  name?: sitePagePluginCreatorPackageJsonNameQueryString | null;
  description?: sitePagePluginCreatorPackageJsonDescriptionQueryString | null;
  version?: sitePagePluginCreatorPackageJsonVersionQueryString | null;
  main?: sitePagePluginCreatorPackageJsonMainQueryString | null;
  license?: sitePagePluginCreatorPackageJsonLicenseQueryString | null;
  dependencies?: sitePagePluginCreatorPackageJsonDependenciesQueryList | null;
  devDependencies?: sitePagePluginCreatorPackageJsonDevDependenciesQueryList | null;
  peerDependencies?: sitePagePluginCreatorPackageJsonPeerDependenciesQueryList | null;
  keywords?: sitePagePluginCreatorPackageJsonKeywordsQueryList | null;
}

export interface sitePagePluginCreatorPackageJsonNameQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePluginCreatorPackageJsonDescriptionQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePluginCreatorPackageJsonVersionQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePluginCreatorPackageJsonMainQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePluginCreatorPackageJsonLicenseQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePluginCreatorPackageJsonDependenciesQueryList {
  in?: sitePagePluginCreatorPackageJsonDependenciesInputObject[] | null;
}

export interface sitePagePluginCreatorPackageJsonDependenciesInputObject {
  name?: sitePagePluginCreatorPackageJsonDependenciesNameQueryString | null;
  version?: sitePagePluginCreatorPackageJsonDependenciesVersionQueryString | null;
}

export interface sitePagePluginCreatorPackageJsonDependenciesNameQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePluginCreatorPackageJsonDependenciesVersionQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePluginCreatorPackageJsonDevDependenciesQueryList {
  in?: sitePagePluginCreatorPackageJsonDevDependenciesInputObject[] | null;
}

export interface sitePagePluginCreatorPackageJsonDevDependenciesInputObject {
  name?: sitePagePluginCreatorPackageJsonDevDependenciesNameQueryString | null;
  version?: sitePagePluginCreatorPackageJsonDevDependenciesVersionQueryString | null;
}

export interface sitePagePluginCreatorPackageJsonDevDependenciesNameQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePluginCreatorPackageJsonDevDependenciesVersionQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePluginCreatorPackageJsonPeerDependenciesQueryList {
  in?: sitePagePluginCreatorPackageJsonPeerDependenciesInputObject[] | null;
}

export interface sitePagePluginCreatorPackageJsonPeerDependenciesInputObject {
  name?: sitePagePluginCreatorPackageJsonPeerDependenciesNameQueryString | null;
  version?: sitePagePluginCreatorPackageJsonPeerDependenciesVersionQueryString | null;
}

export interface sitePagePluginCreatorPackageJsonPeerDependenciesNameQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePluginCreatorPackageJsonPeerDependenciesVersionQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePluginCreatorPackageJsonKeywordsQueryList {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: string[] | null;
}

export interface sitePagePluginCreatorParentQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePluginCreatorInternalInputObject {
  contentDigest?: sitePagePluginCreatorInternalContentDigestQueryString | null;
  type?: sitePagePluginCreatorInternalTypeQueryString | null;
  owner?: sitePagePluginCreatorInternalOwnerQueryString | null;
}

export interface sitePagePluginCreatorInternalContentDigestQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePluginCreatorInternalTypeQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePluginCreatorInternalOwnerQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePluginCreatorIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageComponentPathQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageInternalInputObject_2 {
  type?: sitePageInternalTypeQueryString_2 | null;
  contentDigest?: sitePageInternalContentDigestQueryString_2 | null;
  description?: sitePageInternalDescriptionQueryString | null;
  owner?: sitePageInternalOwnerQueryString_2 | null;
}

export interface sitePageInternalTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageInternalContentDigestQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageInternalDescriptionQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageInternalOwnerQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginResolveQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginVersionQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginPluginOptionsInputObject_2 {
  name?: sitePluginPluginOptionsNameQueryString_2 | null;
  path?: sitePluginPluginOptionsPathQueryString_2 | null;
  pathCheck?: sitePluginPluginOptionsPathCheckQueryBoolean_2 | null;
}

export interface sitePluginPluginOptionsNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginPluginOptionsPathQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginPluginOptionsPathCheckQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
}

export interface sitePluginNodeApIsQueryList_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: string[] | null;
}

export interface sitePluginSsrApIsQueryList_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: string[] | null;
}

export interface sitePluginPluginFilepathQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginPackageJsonInputObject_2 {
  name?: sitePluginPackageJsonNameQueryString_2 | null;
  description?: sitePluginPackageJsonDescriptionQueryString_2 | null;
  version?: sitePluginPackageJsonVersionQueryString_2 | null;
  main?: sitePluginPackageJsonMainQueryString_2 | null;
  license?: sitePluginPackageJsonLicenseQueryString_2 | null;
  dependencies?: sitePluginPackageJsonDependenciesQueryList_2 | null;
  devDependencies?: sitePluginPackageJsonDevDependenciesQueryList_2 | null;
  peerDependencies?: sitePluginPackageJsonPeerDependenciesQueryList_2 | null;
  keywords?: sitePluginPackageJsonKeywordsQueryList_2 | null;
}

export interface sitePluginPackageJsonNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginPackageJsonDescriptionQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginPackageJsonVersionQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginPackageJsonMainQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginPackageJsonLicenseQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginPackageJsonDependenciesQueryList_2 {
  in?: sitePluginPackageJsonDependenciesInputObject_2[] | null;
}

export interface sitePluginPackageJsonDependenciesInputObject_2 {
  name?: sitePluginPackageJsonDependenciesNameQueryString_2 | null;
  version?: sitePluginPackageJsonDependenciesVersionQueryString_2 | null;
}

export interface sitePluginPackageJsonDependenciesNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginPackageJsonDependenciesVersionQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginPackageJsonDevDependenciesQueryList_2 {
  in?: sitePluginPackageJsonDevDependenciesInputObject_2[] | null;
}

export interface sitePluginPackageJsonDevDependenciesInputObject_2 {
  name?: sitePluginPackageJsonDevDependenciesNameQueryString_2 | null;
  version?: sitePluginPackageJsonDevDependenciesVersionQueryString_2 | null;
}

export interface sitePluginPackageJsonDevDependenciesNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginPackageJsonDevDependenciesVersionQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginPackageJsonPeerDependenciesQueryList_2 {
  in?: sitePluginPackageJsonPeerDependenciesInputObject_2[] | null;
}

export interface sitePluginPackageJsonPeerDependenciesInputObject_2 {
  name?: sitePluginPackageJsonPeerDependenciesNameQueryString_2 | null;
  version?: sitePluginPackageJsonPeerDependenciesVersionQueryString_2 | null;
}

export interface sitePluginPackageJsonPeerDependenciesNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginPackageJsonPeerDependenciesVersionQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginPackageJsonKeywordsQueryList_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: string[] | null;
}

export interface sitePluginInternalInputObject_2 {
  contentDigest?: sitePluginInternalContentDigestQueryString_2 | null;
  type?: sitePluginInternalTypeQueryString_2 | null;
  owner?: sitePluginInternalOwnerQueryString_2 | null;
}

export interface sitePluginInternalContentDigestQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginInternalTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginInternalOwnerQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface siteSiteMetadataInputObject_2 {
  siteName?: siteSiteMetadataSiteNameQueryString_2 | null;
  siteUrl?: siteSiteMetadataSiteUrlQueryString_2 | null;
}

export interface siteSiteMetadataSiteNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface siteSiteMetadataSiteUrlQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePortQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface siteHostQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePathPrefixQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePolyfillQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
}

export interface siteBuildTimeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface siteIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface siteInternalInputObject_2 {
  contentDigest?: siteInternalContentDigestQueryString_2 | null;
  type?: siteInternalTypeQueryString_2 | null;
  owner?: siteInternalOwnerQueryString_2 | null;
}

export interface siteInternalContentDigestQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface siteInternalTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface siteInternalOwnerQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface directoryIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface directoryInternalInputObject_2 {
  contentDigest?: directoryInternalContentDigestQueryString_2 | null;
  type?: directoryInternalTypeQueryString_2 | null;
  description?: directoryInternalDescriptionQueryString_2 | null;
  owner?: directoryInternalOwnerQueryString_2 | null;
}

export interface directoryInternalContentDigestQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface directoryInternalTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface directoryInternalDescriptionQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface directoryInternalOwnerQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface directorySourceInstanceNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface directoryAbsolutePathQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface directoryRelativePathQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface directoryExtensionQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface directorySizeQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface directoryPrettySizeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface directoryModifiedTimeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface directoryAccessTimeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface directoryChangeTimeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface directoryBirthTimeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface directoryRootQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface directoryDirQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface directoryBaseQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface directoryExtQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface directoryNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface directoryRelativeDirectoryQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface directoryDevQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface directoryModeQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface directoryNlinkQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface directoryUidQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface directoryGidQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface directoryRdevQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface directoryBlksizeQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface directoryInoQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface directoryBlocksQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface directoryAtimeMsQueryFloat_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface directoryMtimeMsQueryFloat_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface directoryCtimeMsQueryFloat_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface directoryBirthtimeMsQueryFloat_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface directoryAtimeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface directoryMtimeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface directoryCtimeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface directoryBirthtimeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fileIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fileInternalInputObject_2 {
  contentDigest?: fileInternalContentDigestQueryString_2 | null;
  mediaType?: fileInternalMediaTypeQueryString_2 | null;
  type?: fileInternalTypeQueryString_2 | null;
  description?: fileInternalDescriptionQueryString_2 | null;
  owner?: fileInternalOwnerQueryString_2 | null;
}

export interface fileInternalContentDigestQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fileInternalMediaTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fileInternalTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fileInternalDescriptionQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fileInternalOwnerQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fileSourceInstanceNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fileAbsolutePathQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fileRelativePathQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fileExtensionQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fileSizeQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface filePrettySizeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fileModifiedTimeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fileAccessTimeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fileChangeTimeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fileBirthTimeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fileRootQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fileDirQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fileBaseQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fileExtQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fileNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fileRelativeDirectoryQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fileDevQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface fileModeQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface fileNlinkQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface fileUidQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface fileGidQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface fileRdevQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface fileBlksizeQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface fileInoQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface fileBlocksQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface fileAtimeMsQueryFloat_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface fileMtimeMsQueryFloat_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface fileCtimeMsQueryFloat_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface fileBirthtimeMsQueryFloat_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface fileAtimeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fileMtimeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fileCtimeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fileBirthtimeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface publicUrlQueryString_3 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface trainersJsonIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface trainersJsonNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface trainersJsonTitleQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface trainersJsonPictureQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface trainersJsonBioQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface trainersJsonTwitterQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface trainersJsonInternalInputObject_2 {
  contentDigest?: trainersJsonInternalContentDigestQueryString_2 | null;
  type?: trainersJsonInternalTypeQueryString_2 | null;
  owner?: trainersJsonInternalOwnerQueryString_2 | null;
}

export interface trainersJsonInternalContentDigestQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface trainersJsonInternalTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface trainersJsonInternalOwnerQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface coursesJsonIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface coursesJsonCodeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface coursesJsonVersionQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface coursesJsonLengthQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface coursesJsonPriceQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface coursesJsonOrderQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface coursesJsonFlavorsQueryList_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: string[] | null;
}

export interface coursesJsonLabelQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface coursesJsonTitleQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface coursesJsonSubtitleQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface coursesJsonDescriptionHtmlQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface coursesJsonPrerequisitesQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface coursesJsonProductsQueryList_2 {
  in?: coursesJsonProductsInputObject_2[] | null;
}

export interface coursesJsonProductsInputObject_2 {
  title?: coursesJsonProductsTitleQueryString_2 | null;
}

export interface coursesJsonProductsTitleQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface coursesJsonAudienceQueryList_2 {
  in?: coursesJsonAudienceInputObject_2[] | null;
}

export interface coursesJsonAudienceInputObject_2 {
  title?: coursesJsonAudienceTitleQueryString_2 | null;
}

export interface coursesJsonAudienceTitleQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface coursesJsonCurriculumQueryList_2 {
  in?: coursesJsonCurriculumInputObject_2[] | null;
}

export interface coursesJsonCurriculumInputObject_2 {
  id?: coursesJsonCurriculumIdQueryInteger_2 | null;
  title?: coursesJsonCurriculumTitleQueryString_2 | null;
  description?: coursesJsonCurriculumDescriptionQueryString_2 | null;
  topics?: coursesJsonCurriculumTopicsQueryList_2 | null;
  labsHtml?: coursesJsonCurriculumLabsHtmlQueryString_2 | null;
}

export interface coursesJsonCurriculumIdQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface coursesJsonCurriculumTitleQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface coursesJsonCurriculumDescriptionQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface coursesJsonCurriculumTopicsQueryList_2 {
  in?: coursesJsonCurriculumTopicsInputObject_2[] | null;
}

export interface coursesJsonCurriculumTopicsInputObject_2 {
  id?: coursesJsonCurriculumTopicsIdQueryInteger_2 | null;
  title?: coursesJsonCurriculumTopicsTitleQueryString_2 | null;
}

export interface coursesJsonCurriculumTopicsIdQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface coursesJsonCurriculumTopicsTitleQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface coursesJsonCurriculumLabsHtmlQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface coursesJsonInternalInputObject_2 {
  contentDigest?: coursesJsonInternalContentDigestQueryString_2 | null;
  type?: coursesJsonInternalTypeQueryString_2 | null;
  owner?: coursesJsonInternalOwnerQueryString_2 | null;
}

export interface coursesJsonInternalContentDigestQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface coursesJsonInternalTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface coursesJsonInternalOwnerQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface locationsJsonIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface locationsJsonTitleQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface locationsJsonFacilityTitleQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface locationsJsonFacilityDescHtmlQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface locationsJsonAddressQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface locationsJsonCityQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface locationsJsonStateQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface locationsJsonCountryQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface locationsJsonInternalInputObject_2 {
  contentDigest?: locationsJsonInternalContentDigestQueryString_2 | null;
  type?: locationsJsonInternalTypeQueryString_2 | null;
  owner?: locationsJsonInternalOwnerQueryString_2 | null;
}

export interface locationsJsonInternalContentDigestQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface locationsJsonInternalTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface locationsJsonInternalOwnerQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sessionsJsonIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sessionsJsonOrderQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface sessionsJsonTitleQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sessionsJsonDescriptionHtmlQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sessionsJsonTrainerIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sessionsJsonLocationIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sessionsJsonCourseIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sessionsJsonDateStartQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sessionsJsonDateEndQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sessionsJsonTimeStartQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sessionsJsonTimeEndQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sessionsJsonPriceQueryFloat_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface sessionsJsonRegisterLinkQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sessionsJsonInternalInputObject_2 {
  contentDigest?: sessionsJsonInternalContentDigestQueryString_2 | null;
  type?: sessionsJsonInternalTypeQueryString_2 | null;
  owner?: sessionsJsonInternalOwnerQueryString_2 | null;
}

export interface sessionsJsonInternalContentDigestQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sessionsJsonInternalTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sessionsJsonInternalOwnerQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface offeringsJsonIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface offeringsJsonOrderQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
  gt?: number | null;
  gte?: number | null;
  lt?: number | null;
  lte?: number | null;
}

export interface offeringsJsonTitleQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface offeringsJsonImgQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface offeringsJsonImgSmallQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface offeringsJsonIconQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface offeringsJsonSummaryQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface offeringsJsonIntroHtmlQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface offeringsJsonDescriptionHtmlQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface offeringsJsonSectionsQueryList_2 {
  in?: offeringsJsonSectionsInputObject_2[] | null;
}

export interface offeringsJsonSectionsInputObject_2 {
  id?: offeringsJsonSectionsIdQueryString_2 | null;
  title?: offeringsJsonSectionsTitleQueryString_2 | null;
  contentHtml?: offeringsJsonSectionsContentHtmlQueryString_2 | null;
}

export interface offeringsJsonSectionsIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface offeringsJsonSectionsTitleQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface offeringsJsonSectionsContentHtmlQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface offeringsJsonInternalInputObject_2 {
  contentDigest?: offeringsJsonInternalContentDigestQueryString_2 | null;
  type?: offeringsJsonInternalTypeQueryString_2 | null;
  owner?: offeringsJsonInternalOwnerQueryString_2 | null;
}

export interface offeringsJsonInternalContentDigestQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface offeringsJsonInternalTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface offeringsJsonInternalOwnerQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}
export interface AllSitePageRootQueryTypeArgs {
  skip?: number | null;
  limit?: number | null;
  sort?: sitePageConnectionSort | null;
  filter?: filterSitePage | null;
}
export interface AllSitePluginRootQueryTypeArgs {
  skip?: number | null;
  limit?: number | null;
  sort?: sitePluginConnectionSort | null;
  filter?: filterSitePlugin | null;
}
export interface AllDirectoryRootQueryTypeArgs {
  skip?: number | null;
  limit?: number | null;
  sort?: directoryConnectionSort | null;
  filter?: filterDirectory | null;
}
export interface AllFileRootQueryTypeArgs {
  skip?: number | null;
  limit?: number | null;
  sort?: fileConnectionSort | null;
  filter?: filterFile | null;
}
export interface AllTrainersJsonRootQueryTypeArgs {
  skip?: number | null;
  limit?: number | null;
  sort?: trainersJsonConnectionSort | null;
  filter?: filterTrainersJson | null;
}
export interface AllCoursesJsonRootQueryTypeArgs {
  skip?: number | null;
  limit?: number | null;
  sort?: coursesJsonConnectionSort | null;
  filter?: filterCoursesJson | null;
}
export interface AllLocationsJsonRootQueryTypeArgs {
  skip?: number | null;
  limit?: number | null;
  sort?: locationsJsonConnectionSort | null;
  filter?: filterLocationsJson | null;
}
export interface AllSessionsJsonRootQueryTypeArgs {
  skip?: number | null;
  limit?: number | null;
  sort?: sessionsJsonConnectionSort | null;
  filter?: filterSessionsJson | null;
}
export interface AllOfferingsJsonRootQueryTypeArgs {
  skip?: number | null;
  limit?: number | null;
  sort?: offeringsJsonConnectionSort | null;
  filter?: filterOfferingsJson | null;
}
export interface SitePageRootQueryTypeArgs {
  layout?: sitePageLayoutQueryString | null;
  jsonName?: sitePageJsonNameQueryString | null;
  internalComponentName?: sitePageInternalComponentNameQueryString | null;
  path?: sitePagePathQueryString_2 | null;
  component?: sitePageComponentQueryString | null;
  componentChunkName?: sitePageComponentChunkNameQueryString | null;
  context?: sitePageContextInputObject | null;
  pluginCreator?: sitePagePluginCreatorInputObject | null;
  pluginCreatorId?: sitePagePluginCreatorIdQueryString_2 | null;
  componentPath?: sitePageComponentPathQueryString | null;
  id?: sitePageIdQueryString_2 | null;
  internal?: sitePageInternalInputObject_2 | null;
}
export interface SitePluginRootQueryTypeArgs {
  resolve?: sitePluginResolveQueryString_2 | null;
  id?: sitePluginIdQueryString_2 | null;
  name?: sitePluginNameQueryString_2 | null;
  version?: sitePluginVersionQueryString_2 | null;
  pluginOptions?: sitePluginPluginOptionsInputObject_2 | null;
  nodeAPIs?: sitePluginNodeApIsQueryList_2 | null;
  ssrAPIs?: sitePluginSsrApIsQueryList_2 | null;
  pluginFilepath?: sitePluginPluginFilepathQueryString_2 | null;
  packageJson?: sitePluginPackageJsonInputObject_2 | null;
  internal?: sitePluginInternalInputObject_2 | null;
}
export interface SiteRootQueryTypeArgs {
  siteMetadata?: siteSiteMetadataInputObject_2 | null;
  port?: sitePortQueryString_2 | null;
  host?: siteHostQueryString_2 | null;
  pathPrefix?: sitePathPrefixQueryString_2 | null;
  polyfill?: sitePolyfillQueryBoolean_2 | null;
  buildTime?: siteBuildTimeQueryString_2 | null;
  id?: siteIdQueryString_2 | null;
  internal?: siteInternalInputObject_2 | null;
}
export interface DirectoryRootQueryTypeArgs {
  id?: directoryIdQueryString_2 | null;
  internal?: directoryInternalInputObject_2 | null;
  sourceInstanceName?: directorySourceInstanceNameQueryString_2 | null;
  absolutePath?: directoryAbsolutePathQueryString_2 | null;
  relativePath?: directoryRelativePathQueryString_2 | null;
  extension?: directoryExtensionQueryString_2 | null;
  size?: directorySizeQueryInteger_2 | null;
  prettySize?: directoryPrettySizeQueryString_2 | null;
  modifiedTime?: directoryModifiedTimeQueryString_2 | null;
  accessTime?: directoryAccessTimeQueryString_2 | null;
  changeTime?: directoryChangeTimeQueryString_2 | null;
  birthTime?: directoryBirthTimeQueryString_2 | null;
  root?: directoryRootQueryString_2 | null;
  dir?: directoryDirQueryString_2 | null;
  base?: directoryBaseQueryString_2 | null;
  ext?: directoryExtQueryString_2 | null;
  name?: directoryNameQueryString_2 | null;
  relativeDirectory?: directoryRelativeDirectoryQueryString_2 | null;
  dev?: directoryDevQueryInteger_2 | null;
  mode?: directoryModeQueryInteger_2 | null;
  nlink?: directoryNlinkQueryInteger_2 | null;
  uid?: directoryUidQueryInteger_2 | null;
  gid?: directoryGidQueryInteger_2 | null;
  rdev?: directoryRdevQueryInteger_2 | null;
  blksize?: directoryBlksizeQueryInteger_2 | null;
  ino?: directoryInoQueryInteger_2 | null;
  blocks?: directoryBlocksQueryInteger_2 | null;
  atimeMs?: directoryAtimeMsQueryFloat_2 | null;
  mtimeMs?: directoryMtimeMsQueryFloat_2 | null;
  ctimeMs?: directoryCtimeMsQueryFloat_2 | null;
  birthtimeMs?: directoryBirthtimeMsQueryFloat_2 | null;
  atime?: directoryAtimeQueryString_2 | null;
  mtime?: directoryMtimeQueryString_2 | null;
  ctime?: directoryCtimeQueryString_2 | null;
  birthtime?: directoryBirthtimeQueryString_2 | null;
}
export interface FileRootQueryTypeArgs {
  id?: fileIdQueryString_2 | null;
  internal?: fileInternalInputObject_2 | null;
  sourceInstanceName?: fileSourceInstanceNameQueryString_2 | null;
  absolutePath?: fileAbsolutePathQueryString_2 | null;
  relativePath?: fileRelativePathQueryString_2 | null;
  extension?: fileExtensionQueryString_2 | null;
  size?: fileSizeQueryInteger_2 | null;
  prettySize?: filePrettySizeQueryString_2 | null;
  modifiedTime?: fileModifiedTimeQueryString_2 | null;
  accessTime?: fileAccessTimeQueryString_2 | null;
  changeTime?: fileChangeTimeQueryString_2 | null;
  birthTime?: fileBirthTimeQueryString_2 | null;
  root?: fileRootQueryString_2 | null;
  dir?: fileDirQueryString_2 | null;
  base?: fileBaseQueryString_2 | null;
  ext?: fileExtQueryString_2 | null;
  name?: fileNameQueryString_2 | null;
  relativeDirectory?: fileRelativeDirectoryQueryString_2 | null;
  dev?: fileDevQueryInteger_2 | null;
  mode?: fileModeQueryInteger_2 | null;
  nlink?: fileNlinkQueryInteger_2 | null;
  uid?: fileUidQueryInteger_2 | null;
  gid?: fileGidQueryInteger_2 | null;
  rdev?: fileRdevQueryInteger_2 | null;
  blksize?: fileBlksizeQueryInteger_2 | null;
  ino?: fileInoQueryInteger_2 | null;
  blocks?: fileBlocksQueryInteger_2 | null;
  atimeMs?: fileAtimeMsQueryFloat_2 | null;
  mtimeMs?: fileMtimeMsQueryFloat_2 | null;
  ctimeMs?: fileCtimeMsQueryFloat_2 | null;
  birthtimeMs?: fileBirthtimeMsQueryFloat_2 | null;
  atime?: fileAtimeQueryString_2 | null;
  mtime?: fileMtimeQueryString_2 | null;
  ctime?: fileCtimeQueryString_2 | null;
  birthtime?: fileBirthtimeQueryString_2 | null;
  publicURL?: publicUrlQueryString_3 | null;
}
export interface TrainersJsonRootQueryTypeArgs {
  id?: trainersJsonIdQueryString_2 | null;
  name?: trainersJsonNameQueryString_2 | null;
  title?: trainersJsonTitleQueryString_2 | null;
  picture?: trainersJsonPictureQueryString_2 | null;
  bio?: trainersJsonBioQueryString_2 | null;
  twitter?: trainersJsonTwitterQueryString_2 | null;
  internal?: trainersJsonInternalInputObject_2 | null;
}
export interface CoursesJsonRootQueryTypeArgs {
  id?: coursesJsonIdQueryString_2 | null;
  code?: coursesJsonCodeQueryString_2 | null;
  version?: coursesJsonVersionQueryString_2 | null;
  length?: coursesJsonLengthQueryString_2 | null;
  price?: coursesJsonPriceQueryInteger_2 | null;
  order?: coursesJsonOrderQueryInteger_2 | null;
  flavors?: coursesJsonFlavorsQueryList_2 | null;
  label?: coursesJsonLabelQueryString_2 | null;
  title?: coursesJsonTitleQueryString_2 | null;
  subtitle?: coursesJsonSubtitleQueryString_2 | null;
  descriptionHtml?: coursesJsonDescriptionHtmlQueryString_2 | null;
  prerequisites?: coursesJsonPrerequisitesQueryString_2 | null;
  products?: coursesJsonProductsQueryList_2 | null;
  audience?: coursesJsonAudienceQueryList_2 | null;
  curriculum?: coursesJsonCurriculumQueryList_2 | null;
  internal?: coursesJsonInternalInputObject_2 | null;
}
export interface LocationsJsonRootQueryTypeArgs {
  id?: locationsJsonIdQueryString_2 | null;
  title?: locationsJsonTitleQueryString_2 | null;
  facilityTitle?: locationsJsonFacilityTitleQueryString_2 | null;
  facilityDescHtml?: locationsJsonFacilityDescHtmlQueryString_2 | null;
  address?: locationsJsonAddressQueryString_2 | null;
  city?: locationsJsonCityQueryString_2 | null;
  state?: locationsJsonStateQueryString_2 | null;
  country?: locationsJsonCountryQueryString_2 | null;
  internal?: locationsJsonInternalInputObject_2 | null;
}
export interface SessionsJsonRootQueryTypeArgs {
  id?: sessionsJsonIdQueryString_2 | null;
  order?: sessionsJsonOrderQueryInteger_2 | null;
  title?: sessionsJsonTitleQueryString_2 | null;
  descriptionHtml?: sessionsJsonDescriptionHtmlQueryString_2 | null;
  trainerId?: sessionsJsonTrainerIdQueryString_2 | null;
  locationId?: sessionsJsonLocationIdQueryString_2 | null;
  courseId?: sessionsJsonCourseIdQueryString_2 | null;
  dateStart?: sessionsJsonDateStartQueryString_2 | null;
  dateEnd?: sessionsJsonDateEndQueryString_2 | null;
  timeStart?: sessionsJsonTimeStartQueryString_2 | null;
  timeEnd?: sessionsJsonTimeEndQueryString_2 | null;
  price?: sessionsJsonPriceQueryFloat_2 | null;
  registerLink?: sessionsJsonRegisterLinkQueryString_2 | null;
  internal?: sessionsJsonInternalInputObject_2 | null;
}
export interface OfferingsJsonRootQueryTypeArgs {
  id?: offeringsJsonIdQueryString_2 | null;
  order?: offeringsJsonOrderQueryInteger_2 | null;
  title?: offeringsJsonTitleQueryString_2 | null;
  img?: offeringsJsonImgQueryString_2 | null;
  imgSmall?: offeringsJsonImgSmallQueryString_2 | null;
  icon?: offeringsJsonIconQueryString_2 | null;
  summary?: offeringsJsonSummaryQueryString_2 | null;
  introHtml?: offeringsJsonIntroHtmlQueryString_2 | null;
  descriptionHtml?: offeringsJsonDescriptionHtmlQueryString_2 | null;
  sections?: offeringsJsonSectionsQueryList_2 | null;
  internal?: offeringsJsonInternalInputObject_2 | null;
}
export interface DistinctSitePageConnectionArgs {
  field?: sitePageDistinctEnum | null;
}
export interface GroupSitePageConnectionArgs {
  skip?: number | null;
  limit?: number | null;
  field?: sitePageGroupEnum | null;
}
export interface DistinctSitePluginConnectionArgs {
  field?: sitePluginDistinctEnum | null;
}
export interface GroupSitePluginConnectionArgs {
  skip?: number | null;
  limit?: number | null;
  field?: sitePluginGroupEnum | null;
}
export interface DistinctDirectoryConnectionArgs {
  field?: directoryDistinctEnum | null;
}
export interface GroupDirectoryConnectionArgs {
  skip?: number | null;
  limit?: number | null;
  field?: directoryGroupEnum | null;
}
export interface ModifiedTimeDirectoryArgs {
  formatString?:
    | string
    | null /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
  fromNow?:
    | boolean
    | null /* Returns a string generated with Moment.js&#x27; fromNow function */;
  difference?:
    | string
    | null /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
  locale?:
    | string
    | null /* Configures the locale Moment.js will use to format the date. */;
}
export interface AccessTimeDirectoryArgs {
  formatString?:
    | string
    | null /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
  fromNow?:
    | boolean
    | null /* Returns a string generated with Moment.js&#x27; fromNow function */;
  difference?:
    | string
    | null /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
  locale?:
    | string
    | null /* Configures the locale Moment.js will use to format the date. */;
}
export interface ChangeTimeDirectoryArgs {
  formatString?:
    | string
    | null /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
  fromNow?:
    | boolean
    | null /* Returns a string generated with Moment.js&#x27; fromNow function */;
  difference?:
    | string
    | null /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
  locale?:
    | string
    | null /* Configures the locale Moment.js will use to format the date. */;
}
export interface BirthTimeDirectoryArgs {
  formatString?:
    | string
    | null /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
  fromNow?:
    | boolean
    | null /* Returns a string generated with Moment.js&#x27; fromNow function */;
  difference?:
    | string
    | null /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
  locale?:
    | string
    | null /* Configures the locale Moment.js will use to format the date. */;
}
export interface AtimeDirectoryArgs {
  formatString?:
    | string
    | null /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
  fromNow?:
    | boolean
    | null /* Returns a string generated with Moment.js&#x27; fromNow function */;
  difference?:
    | string
    | null /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
  locale?:
    | string
    | null /* Configures the locale Moment.js will use to format the date. */;
}
export interface MtimeDirectoryArgs {
  formatString?:
    | string
    | null /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
  fromNow?:
    | boolean
    | null /* Returns a string generated with Moment.js&#x27; fromNow function */;
  difference?:
    | string
    | null /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
  locale?:
    | string
    | null /* Configures the locale Moment.js will use to format the date. */;
}
export interface CtimeDirectoryArgs {
  formatString?:
    | string
    | null /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
  fromNow?:
    | boolean
    | null /* Returns a string generated with Moment.js&#x27; fromNow function */;
  difference?:
    | string
    | null /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
  locale?:
    | string
    | null /* Configures the locale Moment.js will use to format the date. */;
}
export interface BirthtimeDirectoryArgs {
  formatString?:
    | string
    | null /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
  fromNow?:
    | boolean
    | null /* Returns a string generated with Moment.js&#x27; fromNow function */;
  difference?:
    | string
    | null /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
  locale?:
    | string
    | null /* Configures the locale Moment.js will use to format the date. */;
}
export interface DistinctFileConnectionArgs {
  field?: fileDistinctEnum | null;
}
export interface GroupFileConnectionArgs {
  skip?: number | null;
  limit?: number | null;
  field?: fileGroupEnum | null;
}
export interface ModifiedTimeFileArgs {
  formatString?:
    | string
    | null /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
  fromNow?:
    | boolean
    | null /* Returns a string generated with Moment.js&#x27; fromNow function */;
  difference?:
    | string
    | null /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
  locale?:
    | string
    | null /* Configures the locale Moment.js will use to format the date. */;
}
export interface AccessTimeFileArgs {
  formatString?:
    | string
    | null /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
  fromNow?:
    | boolean
    | null /* Returns a string generated with Moment.js&#x27; fromNow function */;
  difference?:
    | string
    | null /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
  locale?:
    | string
    | null /* Configures the locale Moment.js will use to format the date. */;
}
export interface ChangeTimeFileArgs {
  formatString?:
    | string
    | null /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
  fromNow?:
    | boolean
    | null /* Returns a string generated with Moment.js&#x27; fromNow function */;
  difference?:
    | string
    | null /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
  locale?:
    | string
    | null /* Configures the locale Moment.js will use to format the date. */;
}
export interface BirthTimeFileArgs {
  formatString?:
    | string
    | null /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
  fromNow?:
    | boolean
    | null /* Returns a string generated with Moment.js&#x27; fromNow function */;
  difference?:
    | string
    | null /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
  locale?:
    | string
    | null /* Configures the locale Moment.js will use to format the date. */;
}
export interface AtimeFileArgs {
  formatString?:
    | string
    | null /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
  fromNow?:
    | boolean
    | null /* Returns a string generated with Moment.js&#x27; fromNow function */;
  difference?:
    | string
    | null /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
  locale?:
    | string
    | null /* Configures the locale Moment.js will use to format the date. */;
}
export interface MtimeFileArgs {
  formatString?:
    | string
    | null /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
  fromNow?:
    | boolean
    | null /* Returns a string generated with Moment.js&#x27; fromNow function */;
  difference?:
    | string
    | null /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
  locale?:
    | string
    | null /* Configures the locale Moment.js will use to format the date. */;
}
export interface CtimeFileArgs {
  formatString?:
    | string
    | null /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
  fromNow?:
    | boolean
    | null /* Returns a string generated with Moment.js&#x27; fromNow function */;
  difference?:
    | string
    | null /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
  locale?:
    | string
    | null /* Configures the locale Moment.js will use to format the date. */;
}
export interface BirthtimeFileArgs {
  formatString?:
    | string
    | null /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
  fromNow?:
    | boolean
    | null /* Returns a string generated with Moment.js&#x27; fromNow function */;
  difference?:
    | string
    | null /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
  locale?:
    | string
    | null /* Configures the locale Moment.js will use to format the date. */;
}
export interface DistinctTrainersJsonConnectionArgs {
  field?: trainersJsonDistinctEnum | null;
}
export interface GroupTrainersJsonConnectionArgs {
  skip?: number | null;
  limit?: number | null;
  field?: trainersJsonGroupEnum | null;
}
export interface DistinctCoursesJsonConnectionArgs {
  field?: coursesJsonDistinctEnum | null;
}
export interface GroupCoursesJsonConnectionArgs {
  skip?: number | null;
  limit?: number | null;
  field?: coursesJsonGroupEnum | null;
}
export interface DistinctLocationsJsonConnectionArgs {
  field?: locationsJsonDistinctEnum | null;
}
export interface GroupLocationsJsonConnectionArgs {
  skip?: number | null;
  limit?: number | null;
  field?: locationsJsonGroupEnum | null;
}
export interface DistinctSessionsJsonConnectionArgs {
  field?: sessionsJsonDistinctEnum | null;
}
export interface GroupSessionsJsonConnectionArgs {
  skip?: number | null;
  limit?: number | null;
  field?: sessionsJsonGroupEnum | null;
}
export interface DistinctOfferingsJsonConnectionArgs {
  field?: offeringsJsonDistinctEnum | null;
}
export interface GroupOfferingsJsonConnectionArgs {
  skip?: number | null;
  limit?: number | null;
  field?: offeringsJsonGroupEnum | null;
}
export interface PortSiteArgs {
  formatString?:
    | string
    | null /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
  fromNow?:
    | boolean
    | null /* Returns a string generated with Moment.js&#x27; fromNow function */;
  difference?:
    | string
    | null /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
  locale?:
    | string
    | null /* Configures the locale Moment.js will use to format the date. */;
}
export interface BuildTimeSiteArgs {
  formatString?:
    | string
    | null /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
  fromNow?:
    | boolean
    | null /* Returns a string generated with Moment.js&#x27; fromNow function */;
  difference?:
    | string
    | null /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
  locale?:
    | string
    | null /* Configures the locale Moment.js will use to format the date. */;
}

export enum SitePageConnectionSortByFieldsEnum {
  layout = 'layout',
  jsonName = 'jsonName',
  internalComponentName = 'internalComponentName',
  path = 'path',
  component = 'component',
  componentChunkName = 'componentChunkName',
  context___offeringId = 'context___offeringId',
  context___courseId = 'context___courseId',
  context___sessionId = 'context___sessionId',
  pluginCreator___NODE = 'pluginCreator___NODE',
  pluginCreatorId = 'pluginCreatorId',
  componentPath = 'componentPath',
  id = 'id',
  parent = 'parent',
  internal___type = 'internal___type',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___owner = 'internal___owner',
}

export enum sitePageConnectionSortOrderValues {
  ASC = 'ASC',
  DESC = 'DESC',
}

export enum sitePageDistinctEnum {
  layout = 'layout',
  jsonName = 'jsonName',
  internalComponentName = 'internalComponentName',
  path = 'path',
  component = 'component',
  componentChunkName = 'componentChunkName',
  context___offeringId = 'context___offeringId',
  context___courseId = 'context___courseId',
  context___sessionId = 'context___sessionId',
  pluginCreator___NODE = 'pluginCreator___NODE',
  pluginCreatorId = 'pluginCreatorId',
  componentPath = 'componentPath',
  id = 'id',
  parent = 'parent',
  internal___type = 'internal___type',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___owner = 'internal___owner',
}

export enum sitePageGroupEnum {
  layout = 'layout',
  jsonName = 'jsonName',
  internalComponentName = 'internalComponentName',
  path = 'path',
  component = 'component',
  componentChunkName = 'componentChunkName',
  context___offeringId = 'context___offeringId',
  context___courseId = 'context___courseId',
  context___sessionId = 'context___sessionId',
  pluginCreator___NODE = 'pluginCreator___NODE',
  pluginCreatorId = 'pluginCreatorId',
  componentPath = 'componentPath',
  id = 'id',
  parent = 'parent',
  internal___type = 'internal___type',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___owner = 'internal___owner',
}

export enum SitePluginConnectionSortByFieldsEnum {
  resolve = 'resolve',
  id = 'id',
  name = 'name',
  version = 'version',
  pluginOptions___name = 'pluginOptions___name',
  pluginOptions___path = 'pluginOptions___path',
  pluginOptions___pathCheck = 'pluginOptions___pathCheck',
  nodeAPIs = 'nodeAPIs',
  ssrAPIs = 'ssrAPIs',
  pluginFilepath = 'pluginFilepath',
  packageJson___name = 'packageJson___name',
  packageJson___description = 'packageJson___description',
  packageJson___version = 'packageJson___version',
  packageJson___main = 'packageJson___main',
  packageJson___author = 'packageJson___author',
  packageJson___license = 'packageJson___license',
  packageJson___dependencies = 'packageJson___dependencies',
  packageJson___devDependencies = 'packageJson___devDependencies',
  packageJson___peerDependencies = 'packageJson___peerDependencies',
  packageJson___keywords = 'packageJson___keywords',
  parent = 'parent',
  internal___contentDigest = 'internal___contentDigest',
  internal___type = 'internal___type',
  internal___owner = 'internal___owner',
}

export enum sitePluginConnectionSortOrderValues {
  ASC = 'ASC',
  DESC = 'DESC',
}

export enum sitePluginDistinctEnum {
  resolve = 'resolve',
  id = 'id',
  name = 'name',
  version = 'version',
  pluginOptions___name = 'pluginOptions___name',
  pluginOptions___path = 'pluginOptions___path',
  pluginOptions___pathCheck = 'pluginOptions___pathCheck',
  nodeAPIs = 'nodeAPIs',
  ssrAPIs = 'ssrAPIs',
  pluginFilepath = 'pluginFilepath',
  packageJson___name = 'packageJson___name',
  packageJson___description = 'packageJson___description',
  packageJson___version = 'packageJson___version',
  packageJson___main = 'packageJson___main',
  packageJson___author = 'packageJson___author',
  packageJson___license = 'packageJson___license',
  packageJson___dependencies = 'packageJson___dependencies',
  packageJson___devDependencies = 'packageJson___devDependencies',
  packageJson___peerDependencies = 'packageJson___peerDependencies',
  packageJson___keywords = 'packageJson___keywords',
  parent = 'parent',
  internal___contentDigest = 'internal___contentDigest',
  internal___type = 'internal___type',
  internal___owner = 'internal___owner',
}

export enum sitePluginGroupEnum {
  resolve = 'resolve',
  id = 'id',
  name = 'name',
  version = 'version',
  pluginOptions___name = 'pluginOptions___name',
  pluginOptions___path = 'pluginOptions___path',
  pluginOptions___pathCheck = 'pluginOptions___pathCheck',
  nodeAPIs = 'nodeAPIs',
  ssrAPIs = 'ssrAPIs',
  pluginFilepath = 'pluginFilepath',
  packageJson___name = 'packageJson___name',
  packageJson___description = 'packageJson___description',
  packageJson___version = 'packageJson___version',
  packageJson___main = 'packageJson___main',
  packageJson___author = 'packageJson___author',
  packageJson___license = 'packageJson___license',
  packageJson___dependencies = 'packageJson___dependencies',
  packageJson___devDependencies = 'packageJson___devDependencies',
  packageJson___peerDependencies = 'packageJson___peerDependencies',
  packageJson___keywords = 'packageJson___keywords',
  parent = 'parent',
  internal___contentDigest = 'internal___contentDigest',
  internal___type = 'internal___type',
  internal___owner = 'internal___owner',
}

export enum DirectoryConnectionSortByFieldsEnum {
  id = 'id',
  parent = 'parent',
  internal___contentDigest = 'internal___contentDigest',
  internal___type = 'internal___type',
  internal___description = 'internal___description',
  internal___owner = 'internal___owner',
  sourceInstanceName = 'sourceInstanceName',
  absolutePath = 'absolutePath',
  relativePath = 'relativePath',
  extension = 'extension',
  size = 'size',
  prettySize = 'prettySize',
  modifiedTime = 'modifiedTime',
  accessTime = 'accessTime',
  changeTime = 'changeTime',
  birthTime = 'birthTime',
  root = 'root',
  dir = 'dir',
  base = 'base',
  ext = 'ext',
  name = 'name',
  relativeDirectory = 'relativeDirectory',
  dev = 'dev',
  mode = 'mode',
  nlink = 'nlink',
  uid = 'uid',
  gid = 'gid',
  rdev = 'rdev',
  blksize = 'blksize',
  ino = 'ino',
  blocks = 'blocks',
  atimeMs = 'atimeMs',
  mtimeMs = 'mtimeMs',
  ctimeMs = 'ctimeMs',
  birthtimeMs = 'birthtimeMs',
  atime = 'atime',
  mtime = 'mtime',
  ctime = 'ctime',
  birthtime = 'birthtime',
}

export enum directoryConnectionSortOrderValues {
  ASC = 'ASC',
  DESC = 'DESC',
}

export enum directoryDistinctEnum {
  id = 'id',
  parent = 'parent',
  internal___contentDigest = 'internal___contentDigest',
  internal___type = 'internal___type',
  internal___description = 'internal___description',
  internal___owner = 'internal___owner',
  sourceInstanceName = 'sourceInstanceName',
  absolutePath = 'absolutePath',
  relativePath = 'relativePath',
  extension = 'extension',
  size = 'size',
  prettySize = 'prettySize',
  modifiedTime = 'modifiedTime',
  accessTime = 'accessTime',
  changeTime = 'changeTime',
  birthTime = 'birthTime',
  root = 'root',
  dir = 'dir',
  base = 'base',
  ext = 'ext',
  name = 'name',
  relativeDirectory = 'relativeDirectory',
  dev = 'dev',
  mode = 'mode',
  nlink = 'nlink',
  uid = 'uid',
  gid = 'gid',
  rdev = 'rdev',
  blksize = 'blksize',
  ino = 'ino',
  blocks = 'blocks',
  atimeMs = 'atimeMs',
  mtimeMs = 'mtimeMs',
  ctimeMs = 'ctimeMs',
  birthtimeMs = 'birthtimeMs',
  atime = 'atime',
  mtime = 'mtime',
  ctime = 'ctime',
  birthtime = 'birthtime',
}

export enum directoryGroupEnum {
  id = 'id',
  parent = 'parent',
  internal___contentDigest = 'internal___contentDigest',
  internal___type = 'internal___type',
  internal___description = 'internal___description',
  internal___owner = 'internal___owner',
  sourceInstanceName = 'sourceInstanceName',
  absolutePath = 'absolutePath',
  relativePath = 'relativePath',
  extension = 'extension',
  size = 'size',
  prettySize = 'prettySize',
  modifiedTime = 'modifiedTime',
  accessTime = 'accessTime',
  changeTime = 'changeTime',
  birthTime = 'birthTime',
  root = 'root',
  dir = 'dir',
  base = 'base',
  ext = 'ext',
  name = 'name',
  relativeDirectory = 'relativeDirectory',
  dev = 'dev',
  mode = 'mode',
  nlink = 'nlink',
  uid = 'uid',
  gid = 'gid',
  rdev = 'rdev',
  blksize = 'blksize',
  ino = 'ino',
  blocks = 'blocks',
  atimeMs = 'atimeMs',
  mtimeMs = 'mtimeMs',
  ctimeMs = 'ctimeMs',
  birthtimeMs = 'birthtimeMs',
  atime = 'atime',
  mtime = 'mtime',
  ctime = 'ctime',
  birthtime = 'birthtime',
}

export enum FileConnectionSortByFieldsEnum {
  id = 'id',
  children = 'children',
  parent = 'parent',
  internal___contentDigest = 'internal___contentDigest',
  internal___mediaType = 'internal___mediaType',
  internal___type = 'internal___type',
  internal___description = 'internal___description',
  internal___owner = 'internal___owner',
  sourceInstanceName = 'sourceInstanceName',
  absolutePath = 'absolutePath',
  relativePath = 'relativePath',
  extension = 'extension',
  size = 'size',
  prettySize = 'prettySize',
  modifiedTime = 'modifiedTime',
  accessTime = 'accessTime',
  changeTime = 'changeTime',
  birthTime = 'birthTime',
  root = 'root',
  dir = 'dir',
  base = 'base',
  ext = 'ext',
  name = 'name',
  relativeDirectory = 'relativeDirectory',
  dev = 'dev',
  mode = 'mode',
  nlink = 'nlink',
  uid = 'uid',
  gid = 'gid',
  rdev = 'rdev',
  blksize = 'blksize',
  ino = 'ino',
  blocks = 'blocks',
  atimeMs = 'atimeMs',
  mtimeMs = 'mtimeMs',
  ctimeMs = 'ctimeMs',
  birthtimeMs = 'birthtimeMs',
  atime = 'atime',
  mtime = 'mtime',
  ctime = 'ctime',
  birthtime = 'birthtime',
  publicURL = 'publicURL',
}

export enum fileConnectionSortOrderValues {
  ASC = 'ASC',
  DESC = 'DESC',
}

export enum fileDistinctEnum {
  id = 'id',
  children = 'children',
  parent = 'parent',
  internal___contentDigest = 'internal___contentDigest',
  internal___mediaType = 'internal___mediaType',
  internal___type = 'internal___type',
  internal___description = 'internal___description',
  internal___owner = 'internal___owner',
  sourceInstanceName = 'sourceInstanceName',
  absolutePath = 'absolutePath',
  relativePath = 'relativePath',
  extension = 'extension',
  size = 'size',
  prettySize = 'prettySize',
  modifiedTime = 'modifiedTime',
  accessTime = 'accessTime',
  changeTime = 'changeTime',
  birthTime = 'birthTime',
  root = 'root',
  dir = 'dir',
  base = 'base',
  ext = 'ext',
  name = 'name',
  relativeDirectory = 'relativeDirectory',
  dev = 'dev',
  mode = 'mode',
  nlink = 'nlink',
  uid = 'uid',
  gid = 'gid',
  rdev = 'rdev',
  blksize = 'blksize',
  ino = 'ino',
  blocks = 'blocks',
  atimeMs = 'atimeMs',
  mtimeMs = 'mtimeMs',
  ctimeMs = 'ctimeMs',
  birthtimeMs = 'birthtimeMs',
  atime = 'atime',
  mtime = 'mtime',
  ctime = 'ctime',
  birthtime = 'birthtime',
}

export enum fileGroupEnum {
  id = 'id',
  children = 'children',
  parent = 'parent',
  internal___contentDigest = 'internal___contentDigest',
  internal___mediaType = 'internal___mediaType',
  internal___type = 'internal___type',
  internal___description = 'internal___description',
  internal___owner = 'internal___owner',
  sourceInstanceName = 'sourceInstanceName',
  absolutePath = 'absolutePath',
  relativePath = 'relativePath',
  extension = 'extension',
  size = 'size',
  prettySize = 'prettySize',
  modifiedTime = 'modifiedTime',
  accessTime = 'accessTime',
  changeTime = 'changeTime',
  birthTime = 'birthTime',
  root = 'root',
  dir = 'dir',
  base = 'base',
  ext = 'ext',
  name = 'name',
  relativeDirectory = 'relativeDirectory',
  dev = 'dev',
  mode = 'mode',
  nlink = 'nlink',
  uid = 'uid',
  gid = 'gid',
  rdev = 'rdev',
  blksize = 'blksize',
  ino = 'ino',
  blocks = 'blocks',
  atimeMs = 'atimeMs',
  mtimeMs = 'mtimeMs',
  ctimeMs = 'ctimeMs',
  birthtimeMs = 'birthtimeMs',
  atime = 'atime',
  mtime = 'mtime',
  ctime = 'ctime',
  birthtime = 'birthtime',
}

export enum TrainersJsonConnectionSortByFieldsEnum {
  id = 'id',
  name = 'name',
  title = 'title',
  picture = 'picture',
  bio = 'bio',
  twitter = 'twitter',
  parent = 'parent',
  internal___contentDigest = 'internal___contentDigest',
  internal___type = 'internal___type',
  internal___owner = 'internal___owner',
}

export enum trainersJsonConnectionSortOrderValues {
  ASC = 'ASC',
  DESC = 'DESC',
}

export enum trainersJsonDistinctEnum {
  id = 'id',
  name = 'name',
  title = 'title',
  picture = 'picture',
  bio = 'bio',
  twitter = 'twitter',
  parent = 'parent',
  internal___contentDigest = 'internal___contentDigest',
  internal___type = 'internal___type',
  internal___owner = 'internal___owner',
}

export enum trainersJsonGroupEnum {
  id = 'id',
  name = 'name',
  title = 'title',
  picture = 'picture',
  bio = 'bio',
  twitter = 'twitter',
  parent = 'parent',
  internal___contentDigest = 'internal___contentDigest',
  internal___type = 'internal___type',
  internal___owner = 'internal___owner',
}

export enum CoursesJsonConnectionSortByFieldsEnum {
  id = 'id',
  code = 'code',
  version = 'version',
  length = 'length',
  price = 'price',
  order = 'order',
  flavors = 'flavors',
  label = 'label',
  title = 'title',
  subtitle = 'subtitle',
  descriptionHtml = 'descriptionHtml',
  prerequisites = 'prerequisites',
  products = 'products',
  audience = 'audience',
  curriculum = 'curriculum',
  parent = 'parent',
  internal___contentDigest = 'internal___contentDigest',
  internal___type = 'internal___type',
  internal___owner = 'internal___owner',
}

export enum coursesJsonConnectionSortOrderValues {
  ASC = 'ASC',
  DESC = 'DESC',
}

export enum coursesJsonDistinctEnum {
  id = 'id',
  code = 'code',
  version = 'version',
  length = 'length',
  price = 'price',
  order = 'order',
  flavors = 'flavors',
  label = 'label',
  title = 'title',
  subtitle = 'subtitle',
  descriptionHtml = 'descriptionHtml',
  prerequisites = 'prerequisites',
  products = 'products',
  audience = 'audience',
  curriculum = 'curriculum',
  parent = 'parent',
  internal___contentDigest = 'internal___contentDigest',
  internal___type = 'internal___type',
  internal___owner = 'internal___owner',
}

export enum coursesJsonGroupEnum {
  id = 'id',
  code = 'code',
  version = 'version',
  length = 'length',
  price = 'price',
  order = 'order',
  flavors = 'flavors',
  label = 'label',
  title = 'title',
  subtitle = 'subtitle',
  descriptionHtml = 'descriptionHtml',
  prerequisites = 'prerequisites',
  products = 'products',
  audience = 'audience',
  curriculum = 'curriculum',
  parent = 'parent',
  internal___contentDigest = 'internal___contentDigest',
  internal___type = 'internal___type',
  internal___owner = 'internal___owner',
}

export enum LocationsJsonConnectionSortByFieldsEnum {
  id = 'id',
  title = 'title',
  facilityTitle = 'facilityTitle',
  facilityDescHtml = 'facilityDescHtml',
  address = 'address',
  city = 'city',
  state = 'state',
  country = 'country',
  parent = 'parent',
  internal___contentDigest = 'internal___contentDigest',
  internal___type = 'internal___type',
  internal___owner = 'internal___owner',
}

export enum locationsJsonConnectionSortOrderValues {
  ASC = 'ASC',
  DESC = 'DESC',
}

export enum locationsJsonDistinctEnum {
  id = 'id',
  title = 'title',
  facilityTitle = 'facilityTitle',
  facilityDescHtml = 'facilityDescHtml',
  address = 'address',
  city = 'city',
  state = 'state',
  country = 'country',
  parent = 'parent',
  internal___contentDigest = 'internal___contentDigest',
  internal___type = 'internal___type',
  internal___owner = 'internal___owner',
}

export enum locationsJsonGroupEnum {
  id = 'id',
  title = 'title',
  facilityTitle = 'facilityTitle',
  facilityDescHtml = 'facilityDescHtml',
  address = 'address',
  city = 'city',
  state = 'state',
  country = 'country',
  parent = 'parent',
  internal___contentDigest = 'internal___contentDigest',
  internal___type = 'internal___type',
  internal___owner = 'internal___owner',
}

export enum SessionsJsonConnectionSortByFieldsEnum {
  id = 'id',
  order = 'order',
  title = 'title',
  descriptionHtml = 'descriptionHtml',
  trainerId = 'trainerId',
  locationId = 'locationId',
  courseId = 'courseId',
  dateStart = 'dateStart',
  dateEnd = 'dateEnd',
  timeStart = 'timeStart',
  timeEnd = 'timeEnd',
  price = 'price',
  registerLink = 'registerLink',
  parent = 'parent',
  internal___contentDigest = 'internal___contentDigest',
  internal___type = 'internal___type',
  internal___owner = 'internal___owner',
}

export enum sessionsJsonConnectionSortOrderValues {
  ASC = 'ASC',
  DESC = 'DESC',
}

export enum sessionsJsonDistinctEnum {
  id = 'id',
  order = 'order',
  title = 'title',
  descriptionHtml = 'descriptionHtml',
  trainerId = 'trainerId',
  locationId = 'locationId',
  courseId = 'courseId',
  dateStart = 'dateStart',
  dateEnd = 'dateEnd',
  timeStart = 'timeStart',
  timeEnd = 'timeEnd',
  price = 'price',
  registerLink = 'registerLink',
  parent = 'parent',
  internal___contentDigest = 'internal___contentDigest',
  internal___type = 'internal___type',
  internal___owner = 'internal___owner',
}

export enum sessionsJsonGroupEnum {
  id = 'id',
  order = 'order',
  title = 'title',
  descriptionHtml = 'descriptionHtml',
  trainerId = 'trainerId',
  locationId = 'locationId',
  courseId = 'courseId',
  dateStart = 'dateStart',
  dateEnd = 'dateEnd',
  timeStart = 'timeStart',
  timeEnd = 'timeEnd',
  price = 'price',
  registerLink = 'registerLink',
  parent = 'parent',
  internal___contentDigest = 'internal___contentDigest',
  internal___type = 'internal___type',
  internal___owner = 'internal___owner',
}

export enum OfferingsJsonConnectionSortByFieldsEnum {
  id = 'id',
  order = 'order',
  title = 'title',
  img = 'img',
  imgSmall = 'imgSmall',
  icon = 'icon',
  summary = 'summary',
  introHtml = 'introHtml',
  descriptionHtml = 'descriptionHtml',
  sections = 'sections',
  parent = 'parent',
  internal___contentDigest = 'internal___contentDigest',
  internal___type = 'internal___type',
  internal___owner = 'internal___owner',
}

export enum offeringsJsonConnectionSortOrderValues {
  ASC = 'ASC',
  DESC = 'DESC',
}

export enum offeringsJsonDistinctEnum {
  id = 'id',
  order = 'order',
  title = 'title',
  img = 'img',
  imgSmall = 'imgSmall',
  icon = 'icon',
  summary = 'summary',
  introHtml = 'introHtml',
  descriptionHtml = 'descriptionHtml',
  sections = 'sections',
  parent = 'parent',
  internal___contentDigest = 'internal___contentDigest',
  internal___type = 'internal___type',
  internal___owner = 'internal___owner',
}

export enum offeringsJsonGroupEnum {
  id = 'id',
  order = 'order',
  title = 'title',
  img = 'img',
  imgSmall = 'imgSmall',
  icon = 'icon',
  summary = 'summary',
  introHtml = 'introHtml',
  descriptionHtml = 'descriptionHtml',
  sections = 'sections',
  parent = 'parent',
  internal___contentDigest = 'internal___contentDigest',
  internal___type = 'internal___type',
  internal___owner = 'internal___owner',
}
