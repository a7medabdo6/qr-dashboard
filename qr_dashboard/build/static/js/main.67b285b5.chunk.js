(this['webpackJsonpdevias-material-kit-pro'] =
  this['webpackJsonpdevias-material-kit-pro'] || []).push([
  [10],
  {
    102: function(e, a, t) {
      'use strict';
      a.a = function() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '';
        return e
          .replace(/\s+/, ' ')
          .split(' ')
          .slice(0, 2)
          .map(function(e) {
            return e && e[0].toUpperCase();
          })
          .join('');
      };
    },
    137: function(e, a, t) {
      'use strict';
      t.d(a, 'a', function() {
        return n;
      }),
        t.d(a, 'b', function() {
          return r;
        });
      var n = 'SESSION_LOGIN',
        r = 'SESSION_LOGOUT';
    },
    16: function(e, a, t) {
      'use strict';
      t.d(a, 'a', function() {
        return k;
      }),
        t.d(a, 'b', function() {
          return W;
        }),
        t.d(a, 'c', function() {
          return te;
        }),
        t.d(a, 'd', function() {
          return je;
        }),
        t.d(a, 'e', function() {
          return Pe;
        }),
        t.d(a, 'f', function() {
          return ze;
        }),
        t.d(a, 'g', function() {
          return Le;
        }),
        t.d(a, 'h', function() {
          return Ke;
        }),
        t.d(a, 'i', function() {
          return ua;
        }),
        t.d(a, 'j', function() {
          return Fa;
        }),
        t.d(a, 'k', function() {
          return La;
        }),
        t.d(a, 'l', function() {
          return qa;
        }),
        t.d(a, 'm', function() {
          return ht;
        }),
        t.d(a, 'n', function() {
          return Et;
        }),
        t.d(a, 'o', function() {
          return St;
        }),
        t.d(a, 'p', function() {
          return pn;
        }),
        t.d(a, 'q', function() {
          return gn;
        }),
        t.d(a, 'r', function() {
          return Wn;
        }),
        t.d(a, 's', function() {
          return Kn;
        }),
        t.d(a, 't', function() {
          return Vn;
        }),
        t.d(a, 'u', function() {
          return rr;
        });
      var n = t(13),
        r = t(9),
        i = t(0),
        o = t.n(i),
        c = t(37),
        s = t(2),
        l = t(897),
        m = t(913),
        u = t(914),
        d = t(146),
        p = t(513),
        g = t(915),
        h = t(883),
        b = t(916),
        v = t(106),
        f = t.n(v),
        y = t(151),
        E = t.n(y),
        j = t(152),
        O = t.n(j),
        x = ['className'],
        N = Object(l.a)(function(e) {
          return {
            root: {},
            content: { display: 'flex', alignItems: 'center' },
            paper: { flexGrow: 1, padding: e.spacing(0.5, 2) },
            input: { width: '100%' },
            divider: { width: 1, height: 24 },
            fileInput: { display: 'none' }
          };
        }),
        k = function(e) {
          var a = e.className,
            t = Object(r.a)(e, x),
            l = N(),
            v = Object(i.useRef)(null),
            y = Object(i.useState)(''),
            j = Object(n.a)(y, 2),
            k = j[0],
            w = j[1],
            C = Object(c.d)(function(e) {
              return e.session;
            }),
            S = function() {
              v.current.click();
            };
          return o.a.createElement(
            m.a,
            Object.assign({}, t, { className: Object(s.a)(l.root, a) }),
            o.a.createElement(
              u.a,
              { className: l.content },
              o.a.createElement(
                d.a,
                { className: l.paper, elevation: 1 },
                o.a.createElement(p.a, {
                  className: l.input,
                  disableUnderline: !0,
                  onChange: function(e) {
                    e.persist(), w(e.target.value);
                  },
                  placeholder: "What's on your mind, ".concat(C.user.first_name)
                })
              ),
              o.a.createElement(
                g.a,
                { title: 'Send' },
                o.a.createElement(
                  h.a,
                  { color: k.length > 0 ? 'primary' : 'default' },
                  o.a.createElement(f.a, null)
                )
              ),
              o.a.createElement(b.a, { className: l.divider }),
              o.a.createElement(
                g.a,
                { title: 'Attach image' },
                o.a.createElement(
                  h.a,
                  { edge: 'end', onClick: S },
                  o.a.createElement(E.a, null)
                )
              ),
              o.a.createElement(
                g.a,
                { title: 'Attach file' },
                o.a.createElement(
                  h.a,
                  { edge: 'end', onClick: S },
                  o.a.createElement(O.a, null)
                )
              ),
              o.a.createElement('input', {
                className: l.fileInput,
                ref: v,
                type: 'file'
              })
            )
          );
        },
        w = t(5),
        C = t(70),
        S = t(291),
        _ = t.n(S),
        T = t(477),
        I = t.n(T),
        A = t(476),
        P = t.n(A),
        B = t(282),
        D = t.n(B),
        z = t(475),
        M = t.n(z),
        F = ['className', 'icon', 'variant', 'message', 'onClose'],
        G = Object(l.a)(function(e) {
          return {
            root: {
              display: 'flex',
              alignItems: 'center',
              padding: '6px 16px',
              borderRadius: e.shape.borderRadius
            },
            default: {
              backgroundColor: e.palette.primary.main,
              color: e.palette.primary.contrastText
            },
            success: {
              backgroundColor: w.a.green[600],
              color: e.palette.white
            },
            info: {
              backgroundColor: w.a.lightBlue[600],
              color: e.palette.white
            },
            warning: {
              backgroundColor: w.a.orange[900],
              color: e.palette.white
            },
            error: {
              backgroundColor: e.palette.error.main,
              color: e.palette.error.contrastText
            },
            message: {
              flexGrow: 1,
              display: 'flex',
              alignItems: 'center',
              padding: '8px 0'
            },
            icon: { fontSize: 20, marginRight: e.spacing(1) },
            action: {
              display: 'flex',
              alignItems: 'center',
              marginLeft: 'auto',
              paddingLeft: 16,
              marginRight: -8
            }
          };
        }),
        R = {
          default: o.a.createElement(D.a, null),
          success: o.a.createElement(_.a, null),
          info: o.a.createElement(D.a, null),
          warning: o.a.createElement(M.a, null),
          error: o.a.createElement(P.a, null)
        },
        L = Object(i.forwardRef)(function(e, a) {
          var t = e.className,
            n = e.icon,
            i = e.variant,
            c = e.message,
            l = e.onClose,
            m = Object(r.a)(e, F),
            u = G();
          return o.a.createElement(
            d.a,
            Object.assign({}, m, {
              className: Object(s.a)(u.root, u[i], t),
              component: C.a,
              elevation: 1,
              ref: a,
              variant: 'h6'
            }),
            o.a.createElement('span', { className: u.icon }, n || R[i]),
            o.a.createElement('div', { className: u.message }, c),
            l &&
              o.a.createElement(
                h.a,
                {
                  className: u.action,
                  color: 'inherit',
                  key: 'close',
                  onClick: l
                },
                o.a.createElement(I.a, null)
              )
          );
        });
      (L.displayName = 'Alert'), (L.defaultProps = { variant: 'default' });
      var W = L,
        U = t(42),
        $ = function(e) {
          var a = e.roles,
            t = e.children,
            n = Object(c.d)(function(e) {
              return e.session;
            }),
            r = Object(U.a)();
          return (
            Object(i.useEffect)(
              function() {
                n.loggedIn && n.user
                  ? a.includes(n.user.role) ||
                    r.history.push('/errors/error-401')
                  : r.history.push('/auth/login');
              },
              [r]
            ),
            o.a.createElement(i.Fragment, null, t)
          );
        };
      $.defaultProps = { roles: [] };
      var H = t(138),
        K = t.n(H),
        q = t(917),
        Y = ['async', 'source', 'language', 'className', 'component'],
        J = Object(q.a)(function() {
          return { root: {} };
        }),
        V = function(e) {
          var a = e.async,
            t = e.source,
            n = e.language,
            c = e.className,
            l = e.component,
            m = Object(r.a)(e, Y),
            u = Object(i.useRef)(null),
            d = J();
          return (
            Object(i.useEffect)(function() {
              H.highlightElement(u.current, a);
            }),
            o.a.createElement(
              'pre',
              { className: 'language-'.concat(n) },
              o.a.createElement(
                l,
                Object.assign({}, m, {
                  className: Object(s.a)(d.root, c),
                  ref: u
                }),
                (function(e) {
                  var a = e.split('\n');
                  a[0].trim() || a.shift(), a[a.length - 1].trim() || a.pop();
                  var t = a[0].search(/\S|$/),
                    n = '';
                  return (
                    a.forEach(function(e, r) {
                      (n += e.substr(t, e.length)),
                        r !== a.length - 1 && (n += '\n');
                    }),
                    n
                  );
                })(t)
              )
            )
          );
        };
      V.defaultProps = { component: 'code' };
      var Z = t(283),
        X = t.n(Z),
        Q = t(918),
        ee = t(884),
        ae = Object(l.a)(function(e) {
          return {
            root: {
              maxWidth: 420,
              position: 'fixed',
              bottom: 0,
              right: 0,
              margin: e.spacing(3),
              outline: 'none',
              zIndex: 2e3
            },
            media: {
              padding: e.spacing(1, 2),
              height: 180,
              textAlign: 'center',
              '& > img': { height: '100%', width: 'auto' }
            },
            content: { padding: e.spacing(1, 2) },
            actions: {
              display: 'flex',
              justifyContent: 'flex-end',
              padding: e.spacing(1, 2, 2, 1)
            }
          };
        }),
        te = function() {
          var e = ae(),
            a = Object(i.useState)(!1),
            t = Object(n.a)(a, 2),
            r = t[0],
            c = t[1];
          Object(i.useEffect)(function() {
            X.a.get('consent') || c(!0);
          }, []);
          return r
            ? o.a.createElement(
                d.a,
                { className: e.root, elevation: 3 },
                o.a.createElement(
                  'div',
                  { className: e.media },
                  o.a.createElement('img', {
                    alt: 'Cookies',
                    src: '/images/undraw_cookie_love_ulvn.svg'
                  })
                ),
                o.a.createElement(
                  'div',
                  { className: e.content },
                  o.a.createElement(
                    C.a,
                    { variant: 'body1' },
                    'We use Cookies to ensure that we give you the best experience on our website. Read our',
                    ' ',
                    o.a.createElement(
                      Q.a,
                      {
                        className: e.link,
                        component: 'a',
                        href: 'https://devias.io/privacy-policy',
                        target: '_blank'
                      },
                      'Privacy Policy'
                    ),
                    '.'
                  )
                ),
                o.a.createElement(
                  'div',
                  { className: e.actions },
                  o.a.createElement(
                    ee.a,
                    {
                      className: e.agreeButton,
                      color: 'primary',
                      onClick: function() {
                        X.a.set('consent', 'true'), c(!1);
                      },
                      variant: 'contained'
                    },
                    'I Agree'
                  )
                )
              )
            : null;
        },
        ne = t(24),
        re = t(94),
        ie = t(3),
        oe = t.n(ie),
        ce = t(511),
        se = t(41),
        le = t.n(se),
        me = t(885),
        ue = t(886),
        de = t(919),
        pe = t(920),
        ge = t(199),
        he = t.n(ge),
        be = t(147),
        ve = t.n(be),
        fe = t(383),
        ye = ['className'],
        Ee = Object(l.a)(function(e) {
          return {
            root: {},
            dropZone: {
              border: '1px dashed '.concat(e.palette.divider),
              padding: e.spacing(6),
              outline: 'none',
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              alignItems: 'center',
              '&:hover': {
                backgroundColor: w.a.grey[50],
                opacity: 0.5,
                cursor: 'pointer'
              }
            },
            dragActive: { backgroundColor: w.a.grey[50], opacity: 0.5 },
            image: { width: 130 },
            info: { marginTop: e.spacing(1) },
            list: { maxHeight: 320 },
            actions: {
              marginTop: e.spacing(2),
              display: 'flex',
              justifyContent: 'flex-end',
              '& > * + *': { marginLeft: e.spacing(2) }
            }
          };
        }),
        je = function(e) {
          var a,
            t = e.className,
            c = Object(r.a)(e, ye),
            l = Ee(),
            m = Object(i.useState)([]),
            u = Object(n.a)(m, 2),
            d = u[0],
            p = u[1],
            b = Object(i.useCallback)(function(e) {
              p(function(a) {
                return Object(re.a)(a).concat(e);
              });
            }, []),
            v = Object(ce.a)({ onDrop: b }),
            f = v.getRootProps,
            y = v.getInputProps,
            E = v.isDragActive;
          return o.a.createElement(
            'div',
            Object.assign({}, c, { className: Object(s.a)(l.root, t) }),
            o.a.createElement(
              'div',
              Object.assign(
                {
                  className: Object(s.a)(
                    ((a = {}),
                    Object(ne.a)(a, l.dropZone, !0),
                    Object(ne.a)(a, l.dragActive, E),
                    a)
                  )
                },
                f()
              ),
              o.a.createElement('input', y()),
              o.a.createElement(
                'div',
                null,
                o.a.createElement('img', {
                  alt: 'Select file',
                  className: l.image,
                  src: '/images/undraw_add_file2_gvbb.svg'
                })
              ),
              o.a.createElement(
                'div',
                null,
                o.a.createElement(
                  C.a,
                  { gutterBottom: !0, variant: 'h3' },
                  'Select files'
                ),
                o.a.createElement(
                  C.a,
                  {
                    className: l.info,
                    color: 'textSecondary',
                    variant: 'body1'
                  },
                  'Drop files here or click ',
                  o.a.createElement(Q.a, { underline: 'always' }, 'browse'),
                  ' ',
                  'thorough your machine'
                )
              )
            ),
            d.length > 0 &&
              o.a.createElement(
                i.Fragment,
                null,
                o.a.createElement(
                  le.a,
                  { options: { suppressScrollX: !0 } },
                  o.a.createElement(
                    me.a,
                    { className: l.list },
                    d.map(function(e, a) {
                      return o.a.createElement(
                        ue.a,
                        { divider: a < d.length - 1, key: oe()() },
                        o.a.createElement(
                          de.a,
                          null,
                          o.a.createElement(he.a, null)
                        ),
                        o.a.createElement(pe.a, {
                          primary: e.name,
                          primaryTypographyProps: { variant: 'h5' },
                          secondary: Object(fe.a)(e.size)
                        }),
                        o.a.createElement(
                          g.a,
                          { title: 'More options' },
                          o.a.createElement(
                            h.a,
                            { edge: 'end' },
                            o.a.createElement(ve.a, null)
                          )
                        )
                      );
                    })
                  )
                ),
                o.a.createElement(
                  'div',
                  { className: l.actions },
                  o.a.createElement(
                    ee.a,
                    {
                      onClick: function() {
                        p([]);
                      },
                      size: 'small'
                    },
                    'Remove all'
                  ),
                  o.a.createElement(
                    ee.a,
                    { color: 'secondary', size: 'small', variant: 'contained' },
                    'Upload files'
                  )
                )
              )
          );
        },
        Oe = t(479),
        xe = t(922),
        Ne = t(292),
        ke = t.n(Ne),
        we = t(481),
        Ce = t.n(we),
        Se = t(480),
        _e = t.n(Se),
        Te = t(166),
        Ie = t.n(Te),
        Ae = Object(l.a)(function() {
          return {};
        }),
        Pe = Object(i.memo)(function(e) {
          var a = Ae(),
            t = Object(i.useRef)(null),
            r = Object(i.useState)(!1),
            c = Object(n.a)(r, 2),
            s = c[0],
            l = c[1];
          return o.a.createElement(
            i.Fragment,
            null,
            o.a.createElement(
              g.a,
              { title: 'More options' },
              o.a.createElement(
                h.a,
                Object.assign({}, e, {
                  onClick: function() {
                    l(!0);
                  },
                  ref: t,
                  size: 'small'
                }),
                o.a.createElement(ve.a, null)
              )
            ),
            o.a.createElement(
              Oe.a,
              {
                anchorEl: t.current,
                anchorOrigin: { vertical: 'top', horizontal: 'left' },
                classes: { paper: a.menu },
                onClose: function() {
                  l(!1);
                },
                open: s,
                transformOrigin: { vertical: 'top', horizontal: 'left' }
              },
              o.a.createElement(
                xe.a,
                null,
                o.a.createElement(de.a, null, o.a.createElement(ke.a, null)),
                o.a.createElement(pe.a, { primary: 'Import' })
              ),
              o.a.createElement(
                xe.a,
                null,
                o.a.createElement(de.a, null, o.a.createElement(he.a, null)),
                o.a.createElement(pe.a, { primary: 'Copy to clipboard' })
              ),
              o.a.createElement(
                xe.a,
                null,
                o.a.createElement(de.a, null, o.a.createElement(_e.a, null)),
                o.a.createElement(pe.a, { primary: 'Export as PDF' })
              ),
              o.a.createElement(
                xe.a,
                null,
                o.a.createElement(de.a, null, o.a.createElement(Ce.a, null)),
                o.a.createElement(pe.a, { primary: 'Print' })
              ),
              o.a.createElement(
                xe.a,
                null,
                o.a.createElement(de.a, null, o.a.createElement(Ie.a, null)),
                o.a.createElement(pe.a, { primary: 'Achive' })
              )
            )
          );
        }),
        Be = t(201),
        De = Object({
          NODE_ENV: 'production',
          PUBLIC_URL: '',
          WDS_SOCKET_HOST: void 0,
          WDS_SOCKET_PATH: void 0,
          WDS_SOCKET_PORT: void 0
        }).REACT_APP_GA_MEASUREMENT_ID,
        ze = function() {
          return o.a.createElement(
            Be.Helmet,
            null,
            o.a.createElement('script', {
              async: !0,
              src: 'https://www.googletagmanager.com/gtag/js?id='.concat(De)
            }),
            o.a.createElement(
              'script',
              null,
              "\n          window.dataLayer = window.dataLayer || [];\n\n          function gtag() {\n            dataLayer.push(arguments);\n          }\n\n          gtag('js', new Date());\n          gtag('config', '".concat(
                De,
                "');\n        "
              )
            )
          );
        },
        Me = t(18),
        Fe = ['className', 'variant', 'color', 'shape', 'children', 'style'],
        Ge = Object(l.a)(function(e) {
          return {
            root: {
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexGrow: 0,
              flexShrink: 0,
              borderRadius: e.shape.borderRadius,
              lineHeight: '10px',
              fontSize: '10px',
              height: 20,
              minWidth: 20,
              whiteSpace: 'nowrap',
              padding: e.spacing(0.5, 1)
            },
            rounded: { borderRadius: 10, padding: e.spacing(0.5) }
          };
        }),
        Re = function(e) {
          var a,
            t = e.className,
            n = e.variant,
            i = e.color,
            c = e.shape,
            l = e.children,
            m = e.style,
            u = Object(r.a)(e, Fe),
            d = Ge(),
            p = Object(s.a)(
              ((a = {}),
              Object(ne.a)(a, d.root, !0),
              Object(ne.a)(a, d.rounded, 'rounded' === c),
              a),
              t
            ),
            g = Object(Me.a)({}, m);
          return (
            'contained' === n
              ? ((g.backgroundColor = i), (g.color = '#FFF'))
              : ((g.border = '1px solid '.concat(i)), (g.color = i)),
            o.a.createElement(
              C.a,
              Object.assign({}, u, {
                className: p,
                style: g,
                variant: 'overline'
              }),
              l
            )
          );
        };
      Re.defaultProps = {
        style: {},
        color: w.a.grey[600],
        variant: 'contained',
        shape: 'square'
      };
      var Le = Re,
        We = t(482),
        Ue = t.n(We),
        $e = ['className'],
        He = Object(l.a)(function(e) {
          return {
            root: {
              '& h1': Object(Me.a)(
                Object(Me.a)({}, e.typography.h1),
                {},
                { marginBottom: e.spacing(1) }
              ),
              '& h2': Object(Me.a)(
                Object(Me.a)({}, e.typography.h2),
                {},
                { marginBottom: e.spacing(1) }
              ),
              '& h3': Object(Me.a)(
                Object(Me.a)({}, e.typography.h3),
                {},
                { marginBottom: e.spacing(1) }
              ),
              '& h4': Object(Me.a)(
                Object(Me.a)({}, e.typography.h4),
                {},
                { marginBottom: e.spacing(1) }
              ),
              '& h5': Object(Me.a)(
                Object(Me.a)({}, e.typography.h5),
                {},
                { marginBottom: e.spacing(1) }
              ),
              '& h6': Object(Me.a)(
                Object(Me.a)({}, e.typography.h6),
                {},
                { marginBottom: e.spacing(1) }
              ),
              '& p': Object(Me.a)(
                Object(Me.a)({}, e.typography.subtitle1),
                {},
                { marginBottom: e.spacing(2) }
              ),
              '& ul': { marginLeft: e.spacing(3), marginBottom: e.spacing(2) },
              '& ol': { marginLeft: e.spacing(3), marginBottom: e.spacing(2) },
              '& li': Object(Me.a)(
                Object(Me.a)({}, e.typography.subtitle1),
                {},
                { marginBottom: e.spacing(1) }
              ),
              '& hr': {
                marginTop: e.spacing(3),
                marginBottom: e.spacing(3),
                backgroundColor: w.a.grey[300],
                border: 0,
                height: 1
              },
              '& a': {
                color: e.palette.link,
                '&:hover': { textDecoration: 'underline' }
              }
            }
          };
        }),
        Ke = function(e) {
          var a = e.className,
            t = Object(r.a)(e, $e),
            n = He();
          return (
            Object(i.useEffect)(function() {
              K.a.highlightAll();
            }, []),
            o.a.createElement(
              'div',
              { className: Object(s.a)(n.root, a) },
              o.a.createElement(Ue.a, t)
            )
          );
        },
        qe = t(45),
        Ye = t(19),
        Je = t(923),
        Ve = t(144),
        Ze = t.n(Ve),
        Xe = t(143),
        Qe = t.n(Xe),
        ea = [
          'title',
          'href',
          'depth',
          'children',
          'icon',
          'className',
          'open',
          'label'
        ],
        aa = Object(i.forwardRef)(function(e, a) {
          return o.a.createElement(
            'div',
            { ref: a, style: { flexGrow: 1 } },
            o.a.createElement(Ye.b, e)
          );
        }),
        ta = Object(l.a)(function(e) {
          return {
            item: {
              display: 'block',
              paddingTop: 0,
              paddingBottom: 0,
              color: 'white'
            },
            itemLeaf: { display: 'flex', paddingTop: 0, paddingBottom: 0 },
            button: {
              color: 'white',
              padding: '10px 8px',
              justifyContent: 'flex-start',
              textTransform: 'none',
              letterSpacing: 0,
              width: '100%'
            },
            buttonLeaf: {
              color: 'white',
              padding: '10px 8px',
              justifyContent: 'flex-start',
              textTransform: 'none',
              letterSpacing: 0,
              width: '100%',
              fontWeight: e.typography.fontWeightRegular,
              '&.depth-0': { fontWeight: e.typography.fontWeightMedium }
            },
            icon: {
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              marginRight: e.spacing(1)
            },
            expandIcon: {
              marginLeft: 'auto',
              height: 16,
              width: 16,
              color: 'white'
            },
            label: {
              display: 'flex',
              alignItems: 'center',
              marginLeft: 'auto'
            },
            active: {
              color: e.palette.primary.main,
              fontWeight: e.typography.fontWeightMedium,
              '& $icon': { color: e.palette.primary.main }
            }
          };
        }),
        na = function(e) {
          var a = e.title,
            t = e.href,
            c = e.depth,
            l = e.children,
            m = e.icon,
            u = e.className,
            d = e.open,
            p = e.label,
            g = Object(r.a)(e, ea),
            h = ta(),
            b = Object(i.useState)(d),
            v = Object(n.a)(b, 2),
            f = v[0],
            y = v[1],
            E = 8;
          c > 0 && (E = 32 + 8 * c);
          var j = { paddingLeft: E };
          return l
            ? o.a.createElement(
                ue.a,
                Object.assign({}, g, {
                  className: Object(s.a)(h.item, u),
                  disableGutters: !0
                }),
                o.a.createElement(
                  ee.a,
                  {
                    className: h.button,
                    onClick: function() {
                      y(function(e) {
                        return !e;
                      });
                    },
                    style: j
                  },
                  m && o.a.createElement(m, { className: h.icon }),
                  a,
                  f
                    ? o.a.createElement(Qe.a, {
                        className: h.expandIcon,
                        color: 'inherit'
                      })
                    : o.a.createElement(Ze.a, {
                        className: h.expandIcon,
                        color: 'inherit'
                      })
                ),
                o.a.createElement(Je.a, { in: f }, l)
              )
            : o.a.createElement(
                ue.a,
                Object.assign({}, g, {
                  className: Object(s.a)(h.itemLeaf, u),
                  disableGutters: !0
                }),
                o.a.createElement(
                  ee.a,
                  {
                    activeClassName: h.active,
                    className: Object(s.a)(h.buttonLeaf, 'depth-'.concat(c)),
                    component: aa,
                    exact: !0,
                    style: j,
                    to: t
                  },
                  m && o.a.createElement(m, { className: h.icon }),
                  a,
                  p &&
                    o.a.createElement(
                      'span',
                      { className: h.label },
                      o.a.createElement(p, null)
                    )
                )
              );
        };
      na.defaultProps = { depth: 0, open: !1 };
      var ra = na,
        ia = ['pages'],
        oa = ['title', 'pages', 'className', 'component'],
        ca = Object(l.a)(function(e) {
          return { root: { marginBottom: e.spacing(3) } };
        }),
        sa = function(e) {
          var a = e.pages,
            t = Object(r.a)(e, ia);
          return o.a.createElement(
            me.a,
            null,
            a.reduce(function(e, a) {
              return la(Object(Me.a)({ items: e, page: a }, t));
            }, [])
          );
        },
        la = function(e) {
          var a = e.router,
            t = e.items,
            n = e.page,
            r = e.depth;
          if (n.children) {
            var i = Object(qe.f)(a.location.pathname, {
              path: n.href,
              exact: !1
            });
            t.push(
              o.a.createElement(
                ra,
                {
                  depth: r,
                  icon: n.icon,
                  key: n.title,
                  label: n.label,
                  open: Boolean(i),
                  title: n.title
                },
                o.a.createElement(sa, {
                  depth: r + 1,
                  pages: n.children,
                  router: a
                })
              )
            );
          } else
            t.push(
              o.a.createElement(ra, {
                depth: r,
                href: n.href,
                icon: n.icon,
                key: n.title,
                label: n.label,
                title: n.title
              })
            );
          return t;
        },
        ma = function(e) {
          var a = e.title,
            t = e.pages,
            n = e.className,
            i = e.component,
            c = Object(r.a)(e, oa),
            l = ca(),
            m = Object(U.a)();
          return o.a.createElement(
            i,
            Object.assign({}, c, { className: Object(s.a)(l.root, n) }),
            a && o.a.createElement(C.a, { variant: 'overline' }),
            o.a.createElement(sa, { depth: 0, pages: t, router: m })
          );
        };
      ma.defaultProps = { component: 'nav' };
      var ua = ma,
        da = t(887),
        pa = t(925),
        ga = t(926),
        ha = t(4),
        ba = t.n(ha),
        va = t(962),
        fa = t(924),
        ya = t(50),
        Ea = t.n(ya),
        ja = t(483),
        Oa = t.n(ja),
        xa = t(139),
        Na = t.n(xa),
        ka = t(91),
        wa = t.n(ka),
        Ca = t(484),
        Sa = t.n(Ca),
        _a = t(54),
        Ta = ['notifications', 'className'],
        Ia = Object(l.a)(function(e) {
          return {
            root: {},
            listItem: {
              '&:hover': { backgroundColor: e.palette.background.default }
            },
            avatarBlue: { backgroundImage: _a.a.blue },
            avatarGreen: { backgroundImage: _a.a.green },
            avatarOrange: { backgroundImage: _a.a.orange },
            avatarIndigo: { backgroundImage: _a.a.indigo },
            arrowForwardIcon: { color: e.palette.icon }
          };
        }),
        Aa = function(e) {
          var a = e.notifications,
            t = e.className,
            n = Object(r.a)(e, Ta),
            i = Ia(),
            c = {
              order: o.a.createElement(
                va.a,
                { className: i.avatarBlue },
                o.a.createElement(Oa.a, null)
              ),
              user: o.a.createElement(
                va.a,
                { className: i.avatarOrange },
                o.a.createElement(Na.a, null)
              ),
              project: o.a.createElement(
                va.a,
                { className: i.avatarGreen },
                o.a.createElement(Sa.a, null)
              ),
              feature: o.a.createElement(
                va.a,
                { className: i.avatarIndigo },
                o.a.createElement(wa.a, null)
              )
            };
          return o.a.createElement(
            me.a,
            Object.assign({}, n, {
              className: Object(s.a)(i.root, t),
              disablePadding: !0
            }),
            a.map(function(e, t) {
              return o.a.createElement(
                ue.a,
                {
                  className: i.listItem,
                  component: Ye.a,
                  divider: t < a.length - 1,
                  key: e.id,
                  to: '#'
                },
                o.a.createElement(fa.a, null, c[e.type]),
                o.a.createElement(pe.a, {
                  primary: e.title,
                  primaryTypographyProps: { variant: 'body1' },
                  secondary: ba()(e.created_at).fromNow()
                }),
                o.a.createElement(Ea.a, { className: i.arrowForwardIcon })
              );
            })
          );
        },
        Pa = ['className'],
        Ba = Object(l.a)(function(e) {
          return {
            root: { textAlign: 'center', padding: e.spacing(3) },
            image: {
              height: 240,
              backgroundImage: 'url("/images/undraw_empty_xct9.svg")',
              backgroundPositionX: 'right',
              backgroundPositionY: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover'
            }
          };
        }),
        Da = function(e) {
          var a = e.className,
            t = Object(r.a)(e, Pa),
            n = Ba();
          return o.a.createElement(
            'div',
            Object.assign({}, t, { className: Object(s.a)(n.root, a) }),
            o.a.createElement('div', { className: n.image }),
            o.a.createElement(C.a, { variant: 'h4' }, "There's nothing here...")
          );
        },
        za = ['notifications', 'anchorEl'],
        Ma = Object(l.a)(function() {
          return {
            root: { width: 350, maxWidth: '100%' },
            actions: { backgroundColor: w.a.grey[50], justifyContent: 'center' }
          };
        }),
        Fa = function(e) {
          var a = e.notifications,
            t = e.anchorEl,
            n = Object(r.a)(e, za),
            i = Ma();
          return o.a.createElement(
            da.a,
            Object.assign({}, n, {
              anchorEl: t,
              anchorOrigin: { vertical: 'bottom', horizontal: 'center' }
            }),
            o.a.createElement(
              'div',
              { className: i.root },
              o.a.createElement(pa.a, { title: 'Notifications' }),
              o.a.createElement(b.a, null),
              a.length > 0
                ? o.a.createElement(Aa, { notifications: a })
                : o.a.createElement(Da, null),
              o.a.createElement(b.a, null),
              o.a.createElement(
                ga.a,
                { className: i.actions },
                o.a.createElement(
                  ee.a,
                  { component: Ye.a, size: 'small', to: '#' },
                  'See all'
                )
              )
            )
          );
        },
        Ga = ['title', 'children'],
        Ra = Object({
          NODE_ENV: 'production',
          PUBLIC_URL: '',
          WDS_SOCKET_HOST: void 0,
          WDS_SOCKET_PATH: void 0,
          WDS_SOCKET_PORT: void 0
        }).REACT_APP_GA_MEASUREMENT_ID,
        La = function(e) {
          var a = e.title,
            t = e.children,
            n = Object(r.a)(e, Ga),
            c = Object(U.a)();
          return (
            Object(i.useEffect)(
              function() {
                window.gtag &&
                  window.gtag('config', Ra, {
                    page_path: c.location.pathname,
                    page_name: a
                  });
              },
              [a, c]
            ),
            o.a.createElement(
              'div',
              n,
              o.a.createElement(
                Be.Helmet,
                null,
                o.a.createElement('title', null, a)
              ),
              t
            )
          );
        },
        Wa = t(485),
        Ua = t.n(Wa),
        $a = [
          'pageCount',
          'pageRangeDisplayed',
          'onPageChange',
          'className',
          'setCurrentItems',
          'itemsPerPage',
          'itemOffset',
          'setPageCount',
          'projects'
        ],
        Ha = Object(l.a)(function(e) {
          return {
            root: Object(Me.a)(
              Object(Me.a)({}, e.typography.button),
              {},
              {
                listStyle: 'none',
                userSelect: 'none',
                display: 'flex',
                alignItems: 'center'
              }
            ),
            active: {},
            activeLink: {},
            break: {},
            breakLink: {},
            disabled: {},
            next: { marginLeft: e.spacing(1) },
            nextLink: {
              padding: '6px 16px',
              outline: 'none',
              cursor: 'pointer',
              borderRadius: 4,
              '&:hover': { backgroundColor: w.a.blueGrey[50] }
            },
            page: {},
            pageLink: {
              color: e.palette.text.secondary,
              padding: e.spacing(1),
              outline: 'none',
              cursor: 'pointer',
              width: 40,
              height: 40,
              borderRadius: '50%',
              display: 'block',
              textAlign: 'center',
              '&:hover': {
                backgroundColor: w.a.blueGrey[50],
                color: e.palette.text.primary
              },
              '&$activeLink': {
                backgroundColor: w.a.blueGrey[50],
                color: e.palette.text.primary
              }
            },
            previous: { marginRight: e.spacing(1) },
            previousLink: {
              padding: '6px 16px',
              outline: 'none',
              cursor: 'pointer',
              borderRadius: 4,
              '&:hover': { backgroundColor: w.a.blueGrey[50] }
            }
          };
        }),
        Ka = function(e) {
          var a = e.pageCount,
            t = e.pageRangeDisplayed,
            n = e.onPageChange,
            c = e.className,
            l = e.setCurrentItems,
            m = e.itemsPerPage,
            u = e.itemOffset,
            d = e.setPageCount,
            p = e.projects,
            g = Object(r.a)(e, $a);
          Object(i.useEffect)(
            function() {
              var e = u + m;
              console.log('Loading items from '.concat(u, ' to ').concat(e), p),
                l(p.slice(u, e)),
                d(Math.ceil(p.length / m));
            },
            [u, m, p]
          );
          var h = Ha();
          return o.a.createElement(
            Ua.a,
            Object.assign(
              {
                activeClassName: h.active,
                activeLinkClassName: h.activeLink,
                breakClassName: h.break,
                breakLabel: '...',
                breakLinkClassName: h.breakLink,
                containerClassName: Object(s.a)(h.root, c),
                disabledClassName: h.disabled,
                marginPagesDisplayed: 2,
                nextClassName: h.next,
                nextLabel: 'next',
                nextLinkClassName: h.nextLink,
                onPageChange: n,
                pageClassName: h.page,
                pageCount: a,
                pageLinkClassName: h.pageLink,
                pageRangeDisplayed: t,
                previousClassName: h.previous,
                previousLabel: 'previous',
                previousLinkClassName: h.previousLink,
                subContainerClassName: 'pages pagination'
              },
              g
            )
          );
        };
      Ka.defaultProps = { onPageChange: function() {}, pageRangeDisplayed: 5 };
      var qa = Ka,
        Ya = t(927),
        Ja = t(928),
        Va = t(486),
        Za = t.n(Va),
        Xa = ['comment', 'className'],
        Qa = Object(l.a)(function(e) {
          return {
            root: { display: 'flex', marginBottom: e.spacing(2) },
            bubble: {
              flexGrow: 1,
              padding: e.spacing(1),
              marginLeft: e.spacing(2),
              borderRadius: e.shape.borderRadius,
              backgroundColor: e.palette.background.default
            },
            header: { display: 'flex', alignItems: 'center' },
            time: { marginLeft: 'auto' },
            message: { marginTop: e.spacing(1) }
          };
        }),
        et = function(e) {
          var a = e.comment,
            t = e.className,
            n = Object(r.a)(e, Xa),
            i = Qa();
          return o.a.createElement(
            'div',
            Object.assign({}, n, { className: Object(s.a)(i.root, t) }),
            o.a.createElement(va.a, {
              alt: 'Person',
              component: Ye.a,
              src: a.author.avatar,
              to: '/profile/1/timeline'
            }),
            o.a.createElement(
              'div',
              { className: i.bubble },
              o.a.createElement(
                'div',
                { className: i.header },
                o.a.createElement(
                  Q.a,
                  {
                    color: 'textPrimary',
                    component: Ye.a,
                    to: '/profile/1/timeline',
                    variant: 'h6'
                  },
                  a.author.name
                ),
                o.a.createElement(
                  C.a,
                  { className: i.time, variant: 'body2' },
                  ba()(a.created_at).fromNow()
                )
              ),
              o.a.createElement(
                C.a,
                { className: i.message, variant: 'body1' },
                a.message
              )
            )
          );
        },
        at = ['className'],
        tt = Object(l.a)(function(e) {
          return {
            root: { display: 'flex', alignItems: 'center' },
            paper: {
              flexGrow: 1,
              marginLeft: e.spacing(2),
              padding: e.spacing(0.5, 2)
            },
            input: { width: '100%' },
            divider: { width: 1, height: 24 },
            fileInput: { display: 'none' }
          };
        }),
        nt = function(e) {
          var a = e.className,
            t = Object(r.a)(e, at),
            c = tt(),
            l = Object(i.useRef)(null),
            m = Object(i.useState)(''),
            u = Object(n.a)(m, 2),
            v = u[0],
            y = u[1],
            j = function() {
              l.current.click();
            };
          return o.a.createElement(
            'div',
            Object.assign({}, t, { className: Object(s.a)(c.root, a) }),
            o.a.createElement(va.a, {
              alt: 'Person',
              src: '/images/avatars/avatar_11.png'
            }),
            ' ',
            o.a.createElement(
              d.a,
              { className: c.paper, elevation: 1 },
              o.a.createElement(p.a, {
                className: c.input,
                disableUnderline: !0,
                onChange: function(e) {
                  e.persist(), y(e.target.value);
                },
                placeholder: 'Leave a message'
              })
            ),
            o.a.createElement(
              g.a,
              { title: 'Send' },
              o.a.createElement(
                h.a,
                { color: v.length > 0 ? 'primary' : 'default' },
                o.a.createElement(f.a, null)
              )
            ),
            o.a.createElement(b.a, { className: c.divider }),
            o.a.createElement(
              g.a,
              { title: 'Attach image' },
              o.a.createElement(
                h.a,
                { edge: 'end', onClick: j },
                o.a.createElement(E.a, null)
              )
            ),
            o.a.createElement(
              g.a,
              { title: 'Attach file' },
              o.a.createElement(
                h.a,
                { edge: 'end', onClick: j },
                o.a.createElement(O.a, null)
              )
            ),
            o.a.createElement('input', {
              className: c.fileInput,
              ref: l,
              type: 'file'
            })
          );
        },
        rt = t(202),
        it = t.n(rt),
        ot = t(203),
        ct = t.n(ot),
        st = t(186),
        lt = t.n(st),
        mt = ['post', 'className'],
        ut = Object(l.a)(function(e) {
          return {
            root: { display: 'flex', alignItems: 'center' },
            likeButton: {},
            likedButton: { color: w.a.red[600] },
            shareButton: { marginLeft: 'auto' },
            shareIcon: { marginRight: e.spacing(1) }
          };
        }),
        dt = function(e) {
          var a = e.post,
            t = e.className,
            c = Object(r.a)(e, mt),
            l = ut(),
            m = Object(i.useState)(a.liked),
            u = Object(n.a)(m, 2),
            d = u[0],
            p = u[1],
            b = Object(i.useState)(a.likes),
            v = Object(n.a)(b, 2),
            f = v[0],
            y = v[1];
          return o.a.createElement(
            'div',
            Object.assign({}, c, { className: Object(s.a)(l.root, t) }),
            d
              ? o.a.createElement(
                  g.a,
                  { title: 'Unlike' },
                  o.a.createElement(
                    h.a,
                    {
                      className: l.likedButton,
                      onClick: function() {
                        p(!1),
                          y(function(e) {
                            return e - 1;
                          });
                      },
                      size: 'small'
                    },
                    o.a.createElement(it.a, null)
                  )
                )
              : o.a.createElement(
                  g.a,
                  { title: 'Like' },
                  o.a.createElement(
                    h.a,
                    {
                      className: l.likeButton,
                      onClick: function() {
                        p(!0),
                          y(function(e) {
                            return e + 1;
                          });
                      },
                      size: 'small'
                    },
                    o.a.createElement(ct.a, null)
                  )
                ),
            o.a.createElement(
              C.a,
              { color: 'textSecondary', variant: 'h6' },
              f
            ),
            o.a.createElement(
              ee.a,
              { className: l.shareButton, size: 'small', variant: 'contained' },
              o.a.createElement(lt.a, { className: l.shareIcon }),
              'Share'
            )
          );
        },
        pt = ['post', 'className'],
        gt = Object(l.a)(function(e) {
          return {
            root: {},
            subheader: { display: 'flex', alignItems: 'center' },
            accessTimeIcon: {
              color: e.palette.text.secondary,
              fontSize: '14px',
              height: 14,
              width: 14,
              marginRight: 6
            },
            content: { paddingTop: 0 },
            message: { marginBottom: e.spacing(2) },
            mediaArea: { marginBottom: e.spacing(2) },
            media: { height: 400, backgroundPosition: 'initial' },
            divider: { marginTop: e.spacing(2), marginBottom: e.spacing(2) }
          };
        }),
        ht = function(e) {
          var a = e.post,
            t = e.className,
            n = Object(r.a)(e, pt),
            i = gt();
          return o.a.createElement(
            m.a,
            Object.assign({}, n, { className: Object(s.a)(i.root, t) }),
            o.a.createElement(pa.a, {
              avatar: o.a.createElement(va.a, {
                alt: 'Person',
                className: i.avatar,
                component: Ye.a,
                src: a.author.avatar,
                to: '/profile/1/timeline'
              }),
              disableTypography: !0,
              subheader: o.a.createElement(
                'div',
                { className: i.subheader },
                o.a.createElement(Za.a, { className: i.accessTimeIcon }),
                o.a.createElement(
                  C.a,
                  { variant: 'body2' },
                  ba()(a.created_at).fromNow()
                )
              ),
              title: o.a.createElement(
                Q.a,
                {
                  color: 'textPrimary',
                  component: Ye.a,
                  to: '/profile/1/timeline',
                  variant: 'h6'
                },
                a.author.name
              )
            }),
            o.a.createElement(
              u.a,
              { className: i.content },
              o.a.createElement(
                C.a,
                { className: i.message, variant: 'body1' },
                a.message
              ),
              a.media &&
                o.a.createElement(
                  Ya.a,
                  { className: i.mediaArea },
                  o.a.createElement(Ja.a, {
                    className: i.media,
                    image: a.media
                  })
                ),
              o.a.createElement(dt, { className: i.reactions, post: a }),
              o.a.createElement(b.a, { className: i.divider }),
              a.comments &&
                o.a.createElement(
                  'div',
                  { className: i.comments },
                  a.comments.map(function(e) {
                    return o.a.createElement(et, { comment: e, key: e.id });
                  })
                ),
              o.a.createElement(b.a, { className: i.divider }),
              o.a.createElement(nt, null)
            )
          );
        },
        bt = (t(929), t(930)),
        vt =
          (Object(l.a)(function(e) {
            return {
              root: { width: 960 },
              header: {
                maxWidth: 600,
                margin: '0 auto',
                padding: e.spacing(3)
              },
              content: {
                marginTop: e.spacing(5),
                padding: e.spacing(2),
                maxWidth: 720,
                margin: '0 auto'
              },
              product: {
                overflow: 'unset',
                position: 'relative',
                padding: e.spacing(5, 3),
                cursor: 'pointer',
                transition: e.transitions.create('transform', {
                  easing: e.transitions.easing.sharp,
                  duration: e.transitions.duration.leavingScreen
                }),
                '&:hover': { transform: 'scale(1.1)' }
              },
              image: {
                borderRadius: e.shape.borderRadius,
                position: 'absolute',
                top: -24,
                left: e.spacing(3),
                height: 48,
                width: 48,
                fontSize: 24
              },
              divider: { margin: e.spacing(2, 0) },
              options: { lineHeight: '26px' },
              recommended: {
                backgroundColor: e.palette.primary.main,
                '& *': { color: ''.concat(e.palette.white, ' !important') }
              },
              contact: { margin: e.spacing(3, 0) },
              actions: {
                backgroundColor: w.a.grey[100],
                padding: e.spacing(2),
                display: 'flex',
                justifyContent: 'center'
              },
              startButton: {
                color: e.palette.white,
                backgroundColor: w.a.green[600],
                '&:hover': { backgroundColor: w.a.green[900] }
              }
            };
          }),
          t(102)),
        ft = ['project', 'className'],
        yt = Object(l.a)(function(e) {
          return {
            root: {},
            header: { paddingBottom: 0 },
            content: { padding: 0, '&:last-child': { paddingBottom: 0 } },
            description: { padding: e.spacing(2, 3, 1, 3) },
            tags: {
              padding: e.spacing(0, 3, 1, 3),
              '& > * + *': { marginLeft: e.spacing(1) }
            },
            learnMoreButton: { marginLeft: e.spacing(2) },
            likedButton: { color: w.a.red[600] },
            shareButton: { marginLeft: e.spacing(1) },
            details: { padding: e.spacing(1, 3) }
          };
        }),
        Et = function(e) {
          var a = e.project,
            t = e.className,
            c = Object(r.a)(e, ft),
            l = yt(),
            d = Object(i.useState)(a.liked),
            p = Object(n.a)(d, 2),
            v = p[0],
            f = p[1];
          return o.a.createElement(
            m.a,
            Object.assign({}, c, { className: Object(s.a)(l.root, t) }),
            o.a.createElement(pa.a, {
              avatar: o.a.createElement(
                va.a,
                { alt: 'Author', src: a.author.avatar },
                Object(vt.a)(a.author.name)
              ),
              className: l.header,
              disableTypography: !0,
              subheader: o.a.createElement(
                C.a,
                { variant: 'body2' },
                'by',
                ' ',
                o.a.createElement(
                  Q.a,
                  {
                    color: 'textPrimary',
                    component: Ye.a,
                    to: '/profile/1/timeline',
                    variant: 'h6'
                  },
                  a.author.name
                ),
                ' ',
                '| Updated: ',
                ba()(a.updated_at).fromNow()
              ),
              title: o.a.createElement(
                Q.a,
                {
                  color: 'textPrimary',
                  component: Ye.a,
                  to: '/projects/1/overview',
                  variant: 'h5'
                },
                a.title
              )
            }),
            o.a.createElement(
              u.a,
              { className: l.content },
              o.a.createElement(
                'div',
                { className: l.description },
                o.a.createElement(
                  C.a,
                  { colo: 'textSecondary', variant: 'subtitle2' },
                  "We're looking for experienced Developers and Product Designers to come aboard and help us build succesful businesses through softare."
                )
              ),
              o.a.createElement(
                'div',
                { className: l.tags },
                a.tags.map(function(e) {
                  return o.a.createElement(
                    Le,
                    { color: e.color, key: e.text },
                    e.text
                  );
                })
              ),
              o.a.createElement(b.a, null),
              o.a.createElement(
                'div',
                { className: l.details },
                o.a.createElement(
                  bt.a,
                  {
                    alignItems: 'center',
                    container: !0,
                    justify: 'space-between',
                    spacing: 3
                  },
                  o.a.createElement(
                    bt.a,
                    { item: !0 },
                    o.a.createElement(C.a, { variant: 'h5' }, '$', a.price),
                    o.a.createElement(C.a, { variant: 'body2' }, 'Per Project')
                  ),
                  o.a.createElement(
                    bt.a,
                    { item: !0 },
                    o.a.createElement(C.a, { variant: 'h5' }, a.location),
                    o.a.createElement(C.a, { variant: 'body2' }, 'Location')
                  ),
                  o.a.createElement(
                    bt.a,
                    { item: !0 },
                    o.a.createElement(C.a, { variant: 'h5' }, a.type),
                    o.a.createElement(C.a, { variant: 'body2' }, 'Type')
                  ),
                  o.a.createElement(
                    bt.a,
                    { item: !0 },
                    v
                      ? o.a.createElement(
                          g.a,
                          { title: 'Unlike' },
                          o.a.createElement(
                            h.a,
                            {
                              className: l.likedButton,
                              onClick: function() {
                                f(!1);
                              },
                              size: 'small'
                            },
                            o.a.createElement(it.a, null)
                          )
                        )
                      : o.a.createElement(
                          g.a,
                          { title: 'Like' },
                          o.a.createElement(
                            h.a,
                            {
                              className: l.likeButton,
                              onClick: function() {
                                f(!0);
                              },
                              size: 'small'
                            },
                            o.a.createElement(ct.a, null)
                          )
                        ),
                    o.a.createElement(
                      g.a,
                      { title: 'Share' },
                      o.a.createElement(
                        h.a,
                        { className: l.shareButton, size: 'small' },
                        o.a.createElement(lt.a, null)
                      )
                    ),
                    o.a.createElement(
                      ee.a,
                      {
                        className: l.learnMoreButton,
                        component: Ye.a,
                        size: 'small',
                        to: '/projects/1/overview'
                      },
                      'Learn more'
                    )
                  )
                )
              )
            )
          );
        },
        jt = t(298),
        Ot = t.n(jt),
        xt = t(299),
        Nt = t.n(xt),
        kt = ['value', 'starCount', 'className'],
        wt = Object(l.a)(function(e) {
          return {
            root: { display: 'inline-flex', alignItems: 'center' },
            starIcon: { fontSize: 18, height: 18, width: 18 },
            starFilledIcon: { color: w.a.amber[400] },
            starBorderIcon: { color: e.palette.icon }
          };
        }),
        Ct = function(e) {
          for (
            var a = e.value,
              t = e.starCount,
              n = e.className,
              i = Object(r.a)(e, kt),
              c = wt(),
              l = [],
              m = 1;
            m <= t;
            m++
          ) {
            var u = oe()(),
              d =
                m <= a
                  ? o.a.createElement(Ot.a, {
                      className: Object(s.a)(c.starIcon, c.starFilledIcon),
                      key: u
                    })
                  : o.a.createElement(Nt.a, {
                      className: Object(s.a)(c.starIcon, c.starBorderIcon),
                      key: u
                    });
            l.push(d);
          }
          return o.a.createElement(
            'div',
            Object.assign({}, i, { className: Object(s.a)(c.root, n) }),
            l
          );
        };
      Ct.defaultProps = { value: 0, starCount: 5 };
      var St = Ct,
        _t = t(51),
        Tt = t(204),
        It = t(488),
        At = t.n(It),
        Pt = t(489),
        Bt = t.n(Pt),
        Dt = t(495),
        zt = t.n(Dt),
        Mt = t(494),
        Ft = t.n(Mt),
        Gt = t(496),
        Rt = t.n(Gt),
        Lt = t(487),
        Wt = t.n(Lt),
        Ut = t(490),
        $t = t.n(Ut),
        Ht = t(491),
        Kt = t.n(Ht),
        qt = t(492),
        Yt = t.n(qt),
        Jt = t(493),
        Vt = t.n(Jt),
        Zt = ['active', 'tooltip', 'children'],
        Xt = ['editorState', 'onToggle', 'className'],
        Qt = Object(l.a)(function(e) {
          return {
            root: {},
            inner: {
              padding: e.spacing(1),
              display: 'flex',
              alignItems: 'center'
            }
          };
        }),
        en = Object(l.a)(function(e) {
          return {
            button: {
              padding: 0,
              width: 32,
              height: 32,
              minWidth: 32,
              color: e.palette.icon,
              '& + &': { marginLeft: e.spacing(1) }
            },
            activeButton: {
              backgroundColor: Object(Tt.fade)(e.palette.primary.main, 0.1),
              color: e.palette.primary.main
            }
          };
        }),
        an = [
          { blockType: 'header-one', tooltip: 'Heading 1', text: 'H1' },
          { blockType: 'header-two', tooltip: 'Heading 2', text: 'H2' },
          { blockType: 'header-three', tooltip: 'Heading 3', text: 'H3' },
          { blockType: 'header-four', tooltip: 'Heading 4', text: 'H4' },
          { blockType: 'header-five', tooltip: 'Heading 5', text: 'H5' },
          { blockType: 'header-six', tooltip: 'Heading 6', text: 'H6' },
          { blockType: 'blockquote', tooltip: 'Blockquote', icon: Wt.a },
          {
            blockType: 'unordered-list-item',
            tooltip: 'Unordered list',
            icon: At.a
          },
          {
            blockType: 'ordered-list-item',
            tooltip: 'Ordered list',
            icon: Bt.a
          },
          { blockType: 'code-block', tooltip: 'Code Block', icon: wa.a },
          { blockType: 'left', tooltip: 'Align left', icon: $t.a },
          { blockType: 'center', tooltip: 'Align center', icon: Kt.a },
          { blockType: 'right', tooltip: 'Align right', icon: Yt.a },
          { blockType: 'justify', tooltip: 'Justify', icon: Vt.a }
        ],
        tn = [
          { inlineStyle: 'BOLD', tooltip: 'Bold', icon: Ft.a },
          { inlineStyle: 'ITALIC', tooltip: 'Italic', icon: zt.a },
          { inlineStyle: 'UNDERLINE', tooltip: 'Underline', icon: Rt.a },
          { inlineStyle: 'CODE', tooltip: 'Monospace', icon: wa.a }
        ],
        nn = function(e) {
          var a = e.active,
            t = e.tooltip,
            n = e.children,
            i = Object(r.a)(e, Zt),
            c = en();
          return o.a.createElement(
            g.a,
            { title: t },
            o.a.createElement(
              ee.a,
              Object.assign({}, i, {
                className: Object(s.a)(
                  c.button,
                  Object(ne.a)({}, c.activeButton, a)
                )
              }),
              n
            )
          );
        },
        rn = function(e) {
          var a = e.editorState,
            t = e.onToggle,
            n = a.getSelection(),
            r = a
              .getCurrentContent()
              .getBlockForKey(n.getStartKey())
              .getType(),
            c = a
              .getCurrentContent()
              .getBlockForKey(n.getStartKey())
              .getData();
          return o.a.createElement(
            i.Fragment,
            null,
            an.map(function(e) {
              var a = !1;
              return (
                (a = ['left', 'center', 'right', 'justify'].includes(
                  e.blockType
                )
                  ? c.get('text-align') === e.blockType
                  : e.blockType === r),
                o.a.createElement(
                  nn,
                  {
                    active: a,
                    key: e.blockType,
                    onClick: function(a) {
                      return (function(e, a) {
                        e.preventDefault(), t('blockType', a);
                      })(a, e.blockType);
                    },
                    tooltip: e.tooltip
                  },
                  e.icon ? o.a.createElement(e.icon, null) : e.text
                )
              );
            })
          );
        },
        on = function(e) {
          var a = e.editorState,
            t = e.onToggle,
            n = a.getCurrentInlineStyle();
          return o.a.createElement(
            i.Fragment,
            null,
            tn.map(function(e) {
              return o.a.createElement(
                nn,
                {
                  active: n.has(e.inlineStyle),
                  key: e.inlineStyle,
                  onClick: function(a) {
                    return (function(e, a) {
                      e.preventDefault(), t('inlineStyle', a);
                    })(a, e.inlineStyle);
                  },
                  tooltip: e.tooltip
                },
                e.icon ? o.a.createElement(e.icon, null) : e.text
              );
            })
          );
        },
        cn = function(e) {
          var a = e.editorState,
            t = e.onToggle,
            n = e.className,
            i = Object(r.a)(e, Xt),
            c = Qt();
          return o.a.createElement(
            'div',
            Object.assign({}, i, { className: Object(s.a)(c.root, n) }),
            o.a.createElement(
              le.a,
              null,
              o.a.createElement(
                'div',
                { className: c.inner },
                o.a.createElement(rn, { editorState: a, onToggle: t }),
                o.a.createElement(on, { editorState: a, onToggle: t })
              )
            )
          );
        },
        sn = t(497);
      var ln = Object(sn.a)({
          unstyled: { element: 'p' },
          paragraph: { element: 'p' }
        }),
        mn = _t.DefaultDraftBlockRenderMap.merge(ln),
        un = ['placeholder', 'className'],
        dn = Object(l.a)(function(e) {
          return {
            root: {},
            editorContainer: {
              padding: e.spacing(2),
              minHeight: 400,
              '& .public-DraftEditorPlaceholder-root': Object(Me.a)(
                {},
                e.typography.body2
              ),
              '& .public-DraftEditorPlaceholder-hasFocus': { display: 'none' },
              '& .public-DraftEditor-content': {
                '& p': Object(Me.a)({}, e.typography.body1),
                '& h1': Object(Me.a)({}, e.typography.h1),
                '& h2': Object(Me.a)({}, e.typography.h2),
                '& h3': Object(Me.a)({}, e.typography.h3),
                '& h4': Object(Me.a)({}, e.typography.h4),
                '& h5': Object(Me.a)({}, e.typography.h5),
                '& h6': Object(Me.a)({}, e.typography.h6),
                '& blockquote': Object(Me.a)({}, e.typography.subtitle1),
                '& ul': Object(Me.a)(
                  Object(Me.a)({}, e.typography.body1),
                  {},
                  { marginLeft: e.spacing(4) }
                ),
                '& ol': Object(Me.a)(
                  Object(Me.a)({}, e.typography.body1),
                  {},
                  { marginLeft: e.spacing(4) }
                ),
                '& pre': {
                  backgroundColor: 'rgba(0, 0, 0, 0.05)',
                  fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
                  fontSize: 16,
                  padding: 2
                }
              }
            },
            textAlignLeft: { textAlign: 'left' },
            textAlignCenter: { textAlign: 'center' },
            textAlignRight: { textAlign: 'right' },
            textAlignJustify: { textAlign: 'justify' }
          };
        }),
        pn = function(e) {
          var a = e.placeholder,
            t = e.className,
            c = Object(r.a)(e, un),
            l = dn(),
            m = Object(i.useRef)(null),
            u = Object(i.useState)(_t.EditorState.createEmpty()),
            p = Object(n.a)(u, 2),
            g = p[0],
            h = p[1],
            v = function(e) {
              h(e);
            };
          return o.a.createElement(
            d.a,
            Object.assign({}, c, { className: Object(s.a)(l.root, t) }),
            o.a.createElement(cn, {
              editorState: g,
              onToggle: function(e, a) {
                if ('blockType' === e) {
                  if (['left', 'center', 'right', 'justify'].includes(a)) {
                    var t = _t.Modifier.setBlockData(
                        g.getCurrentContent(),
                        g.getSelection(),
                        { 'text-align': a }
                      ),
                      n = _t.EditorState.push(g, t, 'change-block-data');
                    return void h(n);
                  }
                  h(_t.RichUtils.toggleBlockType(g, a));
                } else h(_t.RichUtils.toggleInlineStyle(g, a));
              }
            }),
            o.a.createElement(b.a, null),
            o.a.createElement(
              'div',
              {
                className: l.editorContainer,
                onClick: function() {
                  m.current.focus();
                }
              },
              o.a.createElement(_t.Editor, {
                blockRenderMap: mn,
                blockStyleFn: function(e) {
                  var a,
                    t = e.getData().get('text-align');
                  if (t) {
                    var n = 'textAlign'.concat(
                      (a = t).charAt(0).toUpperCase() + a.slice(1)
                    );
                    return l[n];
                  }
                  return '';
                },
                editorState: g,
                handleKeyCommand: function(e, a) {
                  var t = _t.RichUtils.handleKeyCommand(a, e);
                  return !!t && (v(t), !0);
                },
                keyBindingFn: function(e) {
                  if (9 !== e.keyCode)
                    return Object(_t.getDefaultKeyBinding)(e);
                  var a = _t.RichUtils.onTab(e, g, 4);
                  a !== g && v(a);
                },
                onChange: v,
                placeholder: a,
                ref: m,
                spellCheck: !0
              })
            )
          );
        },
        gn = function() {
          var e = Object(U.a)();
          return (
            Object(i.useEffect)(
              function() {
                window.scrollTo(0, 0);
              },
              [e.location.pathname]
            ),
            null
          );
        },
        hn = t(499),
        bn = t.n(hn),
        vn = t(931),
        fn = t(932),
        yn = t(963),
        En = t(964),
        jn = t(933),
        On = t(934),
        xn = t(958),
        Nn = t(967),
        kn = t(935),
        wn = t(125),
        Cn = t.n(wn),
        Sn = t(288),
        _n = t.n(Sn),
        Tn = t(149),
        In = t.n(Tn),
        An = ['open', 'onClose', 'onFilter', 'className'],
        Pn = Object(l.a)(function(e) {
          return {
            root: { height: '100%', display: 'flex', flexDirection: 'column' },
            drawer: { width: 420, maxWidth: '100%' },
            header: {
              padding: e.spacing(2, 1),
              display: 'flex',
              justifyContent: 'space-between'
            },
            buttonIcon: { marginRight: e.spacing(1) },
            content: { padding: e.spacing(0, 3), flexGrow: 1 },
            contentSection: { padding: e.spacing(2, 0) },
            contentSectionHeader: {
              display: 'flex',
              justifyContent: 'space-between',
              cursor: 'pointer'
            },
            contentSectionContent: {},
            formGroup: { padding: e.spacing(2, 0) },
            fieldGroup: { display: 'flex', alignItems: 'center' },
            field: { marginTop: 0, marginBottom: 0 },
            flexGrow: { flexGrow: 1 },
            addButton: { marginLeft: e.spacing(1) },
            tags: { marginTop: e.spacing(1) },
            minAmount: { marginRight: e.spacing(3) },
            maxAmount: { marginLeft: e.spacing(3) },
            radioGroup: {},
            actions: {
              padding: e.spacing(3),
              '& > * + *': { marginTop: e.spacing(2) }
            }
          };
        }),
        Bn = function(e) {
          var a = e.open,
            t = e.onClose,
            c = e.onFilter,
            l = e.className,
            m = Object(r.a)(e, An),
            u = Pn(),
            d = {
              paymentStatus: '',
              tag: '',
              tags: ['Full-Time'],
              amount: [1, 7],
              projectStatus: 'ended',
              customerName: '',
              customerType: 'freelancer',
              customerEmail: '',
              customerPhone: '',
              customerAge: ''
            },
            p = Object(i.useState)(!0),
            g = Object(n.a)(p, 2),
            h = g[0],
            v = g[1],
            f = Object(i.useState)(!1),
            y = Object(n.a)(f, 2),
            E = y[0],
            j = y[1],
            O = Object(i.useState)(Object(Me.a)({}, d)),
            x = Object(n.a)(O, 2),
            N = x[0],
            k = x[1],
            w = function(e, a, t) {
              e.persist && e.persist(),
                k(function(e) {
                  return Object(
                    Me.a
                  )(Object(Me.a)({}, e), {}, Object(ne.a)({}, a, t));
                });
            };
          return o.a.createElement(
            vn.a,
            {
              anchor: 'right',
              classes: { paper: u.drawer },
              onClose: t,
              open: a,
              variant: 'temporary'
            },
            o.a.createElement(
              'form',
              Object.assign({}, m, {
                className: Object(s.a)(u.root, l),
                onSubmit: function(e) {
                  e.preventDefault(), c && c(N);
                }
              }),
              o.a.createElement(
                'div',
                { className: u.header },
                o.a.createElement(
                  ee.a,
                  { onClick: t, size: 'small' },
                  o.a.createElement(Cn.a, { className: u.buttonIcon }),
                  'Close'
                )
              ),
              o.a.createElement(
                'div',
                { className: u.content },
                o.a.createElement(
                  'div',
                  { className: u.contentSection },
                  o.a.createElement(
                    'div',
                    {
                      className: u.contentSectionHeader,
                      onClick: function() {
                        v(function(e) {
                          return !e;
                        });
                      }
                    },
                    o.a.createElement(C.a, { variant: 'h5' }, 'Project'),
                    h
                      ? o.a.createElement(Qe.a, null)
                      : o.a.createElement(Ze.a, null)
                  ),
                  o.a.createElement(b.a, null),
                  o.a.createElement(
                    Je.a,
                    { in: h },
                    o.a.createElement(
                      'div',
                      { className: u.contentSectionContent },
                      o.a.createElement(
                        'div',
                        { className: u.formGroup },
                        o.a.createElement(
                          fn.a,
                          {
                            className: u.field,
                            fullWidth: !0,
                            label: 'Payment status',
                            margin: 'dense',
                            name: 'paymentStatus',
                            onChange: function(e) {
                              return w(e, 'paymentStatus', e.target.value);
                            },
                            select: !0,
                            SelectProps: { native: !0 },
                            value: N.paymentStatus,
                            variant: 'outlined'
                          },
                          o.a.createElement('option', {
                            disabled: !0,
                            value: ''
                          }),
                          ['Pending', 'Canceled', 'Completed', 'Rejected'].map(
                            function(e) {
                              return o.a.createElement(
                                'option',
                                { key: e, value: e },
                                e
                              );
                            }
                          )
                        )
                      ),
                      o.a.createElement(
                        'div',
                        { className: u.formGroup },
                        o.a.createElement(
                          'div',
                          { className: u.fieldGroup },
                          o.a.createElement(fn.a, {
                            className: Object(s.a)(u.field, u.flexGrow),
                            label: 'Filter Tags',
                            margin: 'dense',
                            name: 'tag',
                            onChange: function(e) {
                              return w(e, 'tag', e.target.value);
                            },
                            value: N.tag,
                            variant: 'outlined'
                          }),
                          o.a.createElement(
                            ee.a,
                            {
                              className: u.addButton,
                              onClick: function() {
                                k(function(e) {
                                  var a = Object(Me.a)({}, e);
                                  return (
                                    a.tag &&
                                      !a.tags.includes(a.tag) &&
                                      ((a.tags = Object(re.a)(a.tags)),
                                      a.tags.push(a.tag)),
                                    (a.tag = ''),
                                    a
                                  );
                                });
                              },
                              size: 'small'
                            },
                            o.a.createElement(In.a, { className: u.addIcon }),
                            'Add'
                          )
                        ),
                        o.a.createElement(
                          'div',
                          { className: u.tags },
                          N.tags.map(function(e) {
                            return o.a.createElement(yn.a, {
                              deleteIcon: o.a.createElement(Cn.a, null),
                              key: e,
                              label: e,
                              onDelete: function() {
                                return (function(e) {
                                  k(function(a) {
                                    var t = Object(Me.a)({}, a);
                                    return (
                                      (t.tags = t.tags.filter(function(a) {
                                        return a !== e;
                                      })),
                                      t
                                    );
                                  });
                                })(e);
                              }
                            });
                          })
                        )
                      ),
                      o.a.createElement(
                        'div',
                        { className: u.formGroup },
                        o.a.createElement(
                          C.a,
                          {
                            component: 'p',
                            gutterBottom: !0,
                            variant: 'overline'
                          },
                          'Project amount'
                        ),
                        o.a.createElement(
                          'div',
                          { className: u.fieldGroup },
                          o.a.createElement(
                            C.a,
                            { className: u.minAmount, variant: 'body1' },
                            '$',
                            N.amount[0],
                            'K'
                          ),
                          o.a.createElement(En.a, {
                            className: u.flexGrow,
                            max: 20,
                            min: 1,
                            onChange: function(e, a) {
                              return w(e, 'amount', a);
                            },
                            value: N.amount,
                            valueLabelDisplay: 'auto'
                          }),
                          o.a.createElement(
                            C.a,
                            { className: u.maxAmount, variant: 'body1' },
                            '$',
                            N.amount[1],
                            'K'
                          )
                        )
                      ),
                      o.a.createElement(
                        'div',
                        { className: u.formGroup },
                        o.a.createElement(
                          C.a,
                          {
                            component: 'p',
                            gutterBottom: !0,
                            variant: 'overline'
                          },
                          'Project status'
                        ),
                        o.a.createElement(
                          'div',
                          { className: u.fieldGroup },
                          o.a.createElement(
                            jn.a,
                            {
                              className: u.radioGroup,
                              name: 'projectStatus',
                              onChange: function(e) {
                                return w(e, 'projectStatus', e.target.value);
                              },
                              value: N.projectStatus
                            },
                            o.a.createElement(On.a, {
                              control: o.a.createElement(xn.a, {
                                color: 'primary'
                              }),
                              label: 'Ended',
                              value: 'ended'
                            }),
                            o.a.createElement(On.a, {
                              control: o.a.createElement(xn.a, {
                                color: 'primary'
                              }),
                              label: 'On-Going',
                              value: 'onGoing'
                            }),
                            o.a.createElement(On.a, {
                              control: o.a.createElement(xn.a, {
                                color: 'primary'
                              }),
                              label: 'In Review',
                              value: 'inReview'
                            }),
                            o.a.createElement(On.a, {
                              control: o.a.createElement(xn.a, {
                                color: 'primary'
                              }),
                              label: 'Competed',
                              value: 'completed'
                            })
                          )
                        )
                      )
                    )
                  )
                ),
                o.a.createElement(
                  'div',
                  { className: u.contentSection },
                  o.a.createElement(
                    'div',
                    {
                      className: u.contentSectionHeader,
                      onClick: function() {
                        j(function(e) {
                          return !e;
                        });
                      }
                    },
                    o.a.createElement(C.a, { variant: 'h5' }, 'Customer'),
                    E
                      ? o.a.createElement(Qe.a, null)
                      : o.a.createElement(Ze.a, null)
                  ),
                  o.a.createElement(b.a, null),
                  o.a.createElement(
                    Je.a,
                    { in: E },
                    o.a.createElement(
                      'div',
                      { className: u.contentSectionContent },
                      o.a.createElement(
                        'div',
                        { className: u.contentSectionContent },
                        o.a.createElement(
                          'div',
                          { className: u.formGroup },
                          o.a.createElement(fn.a, {
                            className: u.field,
                            fullWidth: !0,
                            label: 'Customer name',
                            margin: 'dense',
                            name: 'customerName',
                            onChange: function(e) {
                              return w(e, 'customerName', e.target.value);
                            },
                            value: N.customerName,
                            variant: 'outlined'
                          })
                        ),
                        o.a.createElement(
                          'div',
                          { className: u.formGroup },
                          o.a.createElement(
                            Nn.a,
                            {
                              exclusive: !0,
                              onChange: function(e, a) {
                                return a && w(e, 'customerType', a);
                              },
                              size: 'small',
                              value: N.customerType,
                              variant: 'outlined'
                            },
                            o.a.createElement(
                              kn.a,
                              { color: 'primary', value: 'projectOwner' },
                              'Project owner'
                            ),
                            o.a.createElement(
                              kn.a,
                              { value: 'freelancer' },
                              'Freelancer'
                            )
                          )
                        ),
                        o.a.createElement(
                          'div',
                          { className: u.formGroup },
                          o.a.createElement(fn.a, {
                            className: u.field,
                            fullWidth: !0,
                            label: 'Email address',
                            margin: 'dense',
                            name: 'customerEmail',
                            onChange: function(e) {
                              return w(e, 'customerEmail', e.target.value);
                            },
                            value: N.customerEmail,
                            variant: 'outlined'
                          })
                        ),
                        o.a.createElement(
                          'div',
                          { className: u.formGroup },
                          o.a.createElement(fn.a, {
                            className: u.field,
                            fullWidth: !0,
                            label: 'Phone number',
                            margin: 'dense',
                            name: 'customerPhone',
                            onChange: function(e) {
                              return w(e, 'customerPhone', e.target.value);
                            },
                            value: N.customerPhone,
                            variant: 'outlined'
                          })
                        ),
                        o.a.createElement(
                          'div',
                          { className: u.formGroup },
                          o.a.createElement(
                            fn.a,
                            {
                              className: u.field,
                              fullWidth: !0,
                              label: 'Age',
                              margin: 'dense',
                              name: 'customerAge',
                              onChange: function(e) {
                                return w(e, 'customerAge', e.target.value);
                              },
                              select: !0,
                              SelectProps: { native: !0 },
                              value: N.customerAge,
                              variant: 'outlined'
                            },
                            o.a.createElement('option', {
                              disabled: !0,
                              value: ''
                            }),
                            ['18 - 30', '30 - 45', '50 - 60', '60+'].map(
                              function(e) {
                                return o.a.createElement(
                                  'option',
                                  { key: e, value: e },
                                  e
                                );
                              }
                            )
                          )
                        )
                      )
                    )
                  )
                )
              ),
              o.a.createElement(
                'div',
                { className: u.actions },
                o.a.createElement(
                  ee.a,
                  {
                    fullWidth: !0,
                    onClick: function() {
                      k(Object(Me.a)({}, d));
                    },
                    variant: 'contained'
                  },
                  o.a.createElement(_n.a, { className: u.buttonIcon }),
                  'Clear'
                ),
                o.a.createElement(
                  ee.a,
                  {
                    color: 'primary',
                    fullWidth: !0,
                    type: 'submit',
                    variant: 'contained'
                  },
                  'Apply filters'
                )
              )
            )
          );
        },
        Dn = t(88),
        zn = t.n(Dn),
        Mn = ['onSearch', 'className'],
        Fn = Object(l.a)(function(e) {
          return {
            root: { display: 'flex', alignItems: 'center' },
            search: {
              flexGrow: 1,
              height: 42,
              padding: e.spacing(0, 2),
              display: 'flex',
              alignItems: 'center'
            },
            searchIcon: { marginRight: e.spacing(2), color: e.palette.icon },
            searchInput: { flexGrow: 1 },
            searchButton: { marginLeft: e.spacing(2) }
          };
        }),
        Gn = function(e) {
          var a = e.onSearch,
            t = e.className,
            n = Object(r.a)(e, Mn),
            i = Fn();
          return o.a.createElement(
            'div',
            Object.assign({}, n, { className: Object(s.a)(i.root, t) }),
            o.a.createElement(
              d.a,
              { className: i.search, elevation: 1 },
              o.a.createElement(zn.a, { className: i.searchIcon }),
              o.a.createElement(p.a, {
                className: i.searchInput,
                disableUnderline: !0,
                placeholder: 'Search'
              })
            ),
            o.a.createElement(
              ee.a,
              {
                className: i.searchButton,
                onClick: a,
                size: 'large',
                variant: 'contained'
              },
              'Search'
            )
          );
        },
        Rn = ['onFilter', 'onSearch', 'className'],
        Ln = Object(l.a)(function(e) {
          return {
            root: {
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap'
            },
            search: { flexGrow: 1, maxWidth: 480, flexBasis: 480 },
            filterButton: { marginLeft: 'auto' },
            filterIcon: { marginRight: e.spacing(1) }
          };
        }),
        Wn = function(e) {
          var a = e.onFilter,
            t = e.onSearch,
            c = e.className,
            l = Object(r.a)(e, Rn),
            m = Ln(),
            u = Object(i.useState)(!1),
            d = Object(n.a)(u, 2),
            p = d[0],
            g = d[1];
          return o.a.createElement(
            bt.a,
            Object.assign({}, l, {
              className: Object(s.a)(m.root, c),
              container: !0,
              spacing: 3
            }),
            o.a.createElement(
              bt.a,
              { item: !0 },
              o.a.createElement(Gn, { className: m.search, onSearch: t })
            ),
            o.a.createElement(
              bt.a,
              { item: !0 },
              o.a.createElement(
                ee.a,
                {
                  className: m.filterButton,
                  color: 'primary',
                  onClick: function() {
                    g(!0);
                  },
                  size: 'small',
                  variant: 'outlined'
                },
                o.a.createElement(bn.a, { className: m.filterIcon }),
                ' Show filters'
              )
            ),
            o.a.createElement(Bn, {
              onClose: function() {
                g(!1);
              },
              onFilter: a,
              open: p
            })
          );
        },
        Un = ['avatars', 'limit', 'className'],
        $n = Object(l.a)(function(e) {
          return {
            root: { display: 'flex', paddingLeft: 20 },
            avatar: {
              border: '3px solid '.concat(e.palette.white),
              marginLeft: -20,
              '&:hover': { zIndex: 2 }
            },
            more: {
              backgroundColor: e.palette.error.main,
              color: e.palette.error.contrastText,
              fontSize: 14,
              fontWeight: e.typography.fontWeightMedium
            }
          };
        }),
        Hn = function(e) {
          var a = e.avatars,
            t = e.limit,
            n = e.className,
            i = Object(r.a)(e, Un),
            c = $n(),
            l = a.slice(0, t).map(function(e) {
              return o.a.createElement(
                g.a,
                { key: oe()(), title: 'View' },
                o.a.createElement(va.a, { className: c.avatar, src: e })
              );
            });
          return (
            a.length > t &&
              l.push(
                o.a.createElement(
                  g.a,
                  { key: oe()(), title: 'View' },
                  o.a.createElement(
                    va.a,
                    { className: Object(s.a)(c.avatar, c.more) },
                    '+',
                    a.length - t
                  )
                )
              ),
            o.a.createElement(
              'div',
              Object.assign({}, i, { className: Object(s.a)(c.root, n) }),
              l
            )
          );
        };
      Hn.defaultProps = { limit: 3 };
      var Kn = Object(i.memo)(Hn),
        qn = ['className', 'size', 'color'],
        Yn = Object(l.a)(function(e) {
          return {
            root: {
              display: 'inline-block',
              borderRadius: '50%',
              flexGrow: 0,
              flexShrink: 0
            },
            small: { height: e.spacing(1), width: e.spacing(1) },
            medium: { height: e.spacing(2), width: e.spacing(2) },
            large: { height: e.spacing(3), width: e.spacing(3) },
            default: { backgroundColor: w.a.grey[50] },
            primary: { backgroundColor: e.palette.primary.main },
            info: { backgroundColor: w.a.lightBlue[600] },
            warning: { backgroundColor: w.a.orange[900] },
            error: { backgroundColor: e.palette.error.main },
            success: { backgroundColor: w.a.green[600] }
          };
        }),
        Jn = function(e) {
          var a,
            t = e.className,
            n = e.size,
            i = e.color,
            c = Object(r.a)(e, qn),
            l = Yn(),
            m = Object(s.a)(
              ((a = {}),
              Object(ne.a)(a, l.root, !0),
              Object(ne.a)(a, l[n], n),
              Object(ne.a)(a, l[i], i),
              a),
              t
            );
          return o.a.createElement(
            'span',
            Object.assign({}, c, { className: m })
          );
        };
      Jn.defaultProps = { size: 'medium', color: 'default' };
      var Vn = Jn,
        Zn = t(959),
        Xn = t(435),
        Qn = t.n(Xn),
        er = t(436),
        ar = t.n(er),
        tr = [
          'selected',
          'className',
          'onMarkPaid',
          'onMarkUnpaid',
          'onDelete'
        ],
        nr = Object(l.a)(function(e) {
          return {
            root: { padding: e.spacing(2) },
            actions: {
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              '& > * + *': { marginLeft: e.spacing(2) }
            },
            buttonIcon: { marginRight: e.spacing(1) }
          };
        }),
        rr = function(e) {
          var a = e.selected,
            t = e.className,
            n = e.onMarkPaid,
            i = e.onMarkUnpaid,
            c = e.onDelete,
            l = Object(r.a)(e, tr),
            m = nr(),
            u = a.length > 0;
          return o.a.createElement(
            vn.a,
            {
              anchor: 'bottom',
              open: u,
              PaperProps: { elevation: 1 },
              variant: 'persistent'
            },
            o.a.createElement(
              'div',
              Object.assign({}, l, { className: Object(s.a)(m.root, t) }),
              o.a.createElement(
                bt.a,
                { alignItems: 'center', container: !0, spacing: 2 },
                o.a.createElement(
                  Zn.a,
                  { smDown: !0 },
                  o.a.createElement(
                    bt.a,
                    { item: !0, md: 3 },
                    o.a.createElement(
                      C.a,
                      { color: 'textSecondary', variant: 'subtitle1' },
                      a.length,
                      ' selected'
                    )
                  )
                ),
                o.a.createElement(
                  bt.a,
                  { item: !0, md: 6, xs: 12 },
                  o.a.createElement(
                    'div',
                    { className: m.actions },
                    o.a.createElement(
                      ee.a,
                      { onClick: n },
                      o.a.createElement(Qn.a, { className: m.buttonIcon }),
                      'Mark Paid'
                    ),
                    o.a.createElement(
                      ee.a,
                      { onClick: i },
                      o.a.createElement(Cn.a, { className: m.buttonIcon }),
                      'Mark Unpaid'
                    ),
                    o.a.createElement(
                      ee.a,
                      { onClick: c },
                      o.a.createElement(ar.a, { className: m.buttonIcon }),
                      'Delete'
                    )
                  )
                )
              )
            )
          );
        };
    },
    27: function(e, a, t) {
      'use strict';
      var n = t(278),
        r = t.n(n).a.create();
      a.a = r;
    },
    383: function(e, a, t) {
      'use strict';
      a.a = function(e) {
        var a =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
        if (0 === e) return '0 Bytes';
        var t = 1024,
          n = a < 0 ? 0 : a,
          r = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
          i = Math.floor(Math.log(e) / Math.log(t));
        return parseFloat((e / Math.pow(t, i)).toFixed(n)) + ' ' + r[i];
      };
    },
    42: function(e, a, t) {
      'use strict';
      var n = t(0),
        r = t(45);
      a.a = function() {
        return Object(n.useContext)(r.e);
      };
    },
    463: function(e, a, t) {},
    464: function(e, a, t) {},
    466: function(e) {
      e.exports = JSON.parse('{"Welcome":"welcome en"}');
    },
    467: function(e) {
      e.exports = JSON.parse('{"Welcome":"welcome ar"}');
    },
    521: function(e, a, t) {
      e.exports = t(879);
    },
    54: function(e, a, t) {
      'use strict';
      var n = t(5),
        r = function(e, a) {
          return 'linear-gradient(180deg, '
            .concat(e, ' 0%, ')
            .concat(a, ' 100%)');
        },
        i = r(n.a.grey[400], n.a.grey[600]),
        o = r(n.a.blue[700], n.a.blue[900]),
        c = r(n.a.indigo[400], n.a.indigo[600]),
        s = r(n.a.green[400], n.a.green[600]),
        l = r(n.a.orange[400], n.a.orange[700]),
        m = r(n.a.red[500], n.a.red[700]);
      a.a = { grey: i, blue: o, indigo: c, green: s, orange: l, red: m };
    },
    879: function(e, a, t) {
      'use strict';
      t.r(a);
      var n = t(0),
        r = t.n(n),
        i = t(23),
        o = t.n(i),
        c = t(285),
        s = t(145),
        l = t(465),
        m = { en: { translation: t(466) }, ar: { translation: t(467) } };
      c.a
        .use(l.a)
        .use(s.e)
        .init({ resources: m, lng: 'en', interpolation: { escapeValue: !1 } });
      c.a;
      var u = t(45),
        d = t(44),
        p = t(272),
        g = t(37),
        h = t(956),
        b = t(126),
        v = t(61),
        f = t(510),
        y = t(5),
        E = '#FFFFFF',
        j = {
          black: '#000000',
          white: E,
          primary: {
            contrastText: E,
            dark: y.a.indigo[900],
            main: 'rgb(57, 52, 134)',
            light: y.a.indigo[100],
            white: '#fff'
          },
          secondary: {
            contrastText: E,
            dark: y.a.blue[900],
            main: y.a.blue.A400,
            light: y.a.blue.A400
          },
          error: {
            contrastText: E,
            dark: y.a.red[900],
            main: y.a.red[600],
            light: y.a.red[400]
          },
          text: {
            primary: y.a.blueGrey[900],
            secondary: y.a.blueGrey[600],
            link: y.a.blue[600]
          },
          link: y.a.blue[800],
          icon: y.a.blueGrey[600],
          background: { default: '#F4F6F8', paper: E },
          divider: y.a.grey[200]
        },
        O = {
          h1: {
            color: j.text.primary,
            fontWeight: 500,
            fontSize: '35px',
            letterSpacing: '-0.24px',
            lineHeight: '40px'
          },
          h2: {
            color: j.text.primary,
            fontWeight: 500,
            fontSize: '29px',
            letterSpacing: '-0.24px',
            lineHeight: '32px'
          },
          h3: {
            color: j.text.primary,
            fontWeight: 500,
            fontSize: '24px',
            letterSpacing: '-0.06px',
            lineHeight: '28px'
          },
          h4: {
            color: j.text.primary,
            fontWeight: 500,
            fontSize: '20px',
            letterSpacing: '-0.06px',
            lineHeight: '24px'
          },
          h5: {
            color: j.text.primary,
            fontWeight: 500,
            fontSize: '16px',
            letterSpacing: '-0.05px',
            lineHeight: '20px'
          },
          h6: {
            color: j.text.primary,
            fontWeight: 500,
            fontSize: '14px',
            letterSpacing: '-0.05px',
            lineHeight: '20px'
          },
          subtitle1: {
            color: j.text.primary,
            fontSize: '16px',
            letterSpacing: '-0.05px',
            lineHeight: '25px'
          },
          subtitle2: {
            color: j.text.secondary,
            fontWeight: 400,
            fontSize: '14px',
            letterSpacing: '-0.05px',
            lineHeight: '21px'
          },
          body1: {
            color: j.text.primary,
            fontSize: '14px',
            letterSpacing: '-0.05px',
            lineHeight: '21px'
          },
          body2: {
            color: j.text.secondary,
            fontSize: '12px',
            letterSpacing: '-0.04px',
            lineHeight: '18px'
          },
          button: { color: j.text.primary, fontSize: '14px' },
          caption: {
            color: j.text.secondary,
            fontSize: '11px',
            letterSpacing: '0.33px',
            lineHeight: '13px'
          },
          overline: {
            color: j.text.secondary,
            fontSize: '11px',
            fontWeight: 500,
            letterSpacing: '0.33px',
            lineHeight: '13px',
            textTransform: 'uppercase'
          }
        },
        x = {
          root: { backgroundColor: y.a.blueGrey[50], color: y.a.blueGrey[900] },
          deletable: { '&:focus': { backgroundColor: y.a.blueGrey[100] } }
        },
        N = {
          root: {
            color: j.icon,
            '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.03)' }
          }
        },
        k = {
          root: {},
          input: { '&::placeholder': { opacity: 1, color: j.text.secondary } }
        },
        w = {
          root: { borderRadius: 3, overflow: 'hidden' },
          colorPrimary: { backgroundColor: y.a.blueGrey[50] }
        },
        C = { root: { color: j.icon, minWidth: 32 } },
        S = { root: { backgroundColor: y.a.grey[50] } },
        _ = t(18),
        T = {
          MuiButton: {
            contained: {
              boxShadow:
                '0 1px 1px 0 rgba(0,0,0,0.14), 0 2px 1px -1px rgba(0,0,0,0.12), 0 1px 3px 0 rgba(0,0,0,0.20)',
              backgroundColor: '#FFFFFF'
            }
          },
          MuiCardActions: { root: { padding: '16px 24px' } },
          MuiCardContent: { root: { padding: 24 } },
          MuiCardHeader: { root: { padding: '16px 24px' } },
          MuiChip: x,
          MuiIconButton: N,
          MuiInputBase: k,
          MuiLinearProgress: w,
          MuiListItemIcon: C,
          MuiOutlinedInput: {
            root: {},
            notchedOutline: { borderColor: 'rgba(0,0,0,0.15)' }
          },
          MuiPaper: {
            root: {},
            elevation1: {
              boxShadow:
                '0 0 0 1px rgba(63,63,68,0.05), 0 1px 3px 0 rgba(63,63,68,0.15)'
            }
          },
          MuiTableHead: S,
          MuiTableCell: {
            root: Object(_.a)(
              Object(_.a)({}, O.body1),
              {},
              { borderBottom: '1px solid '.concat(j.divider) }
            )
          },
          MuiTableRow: {
            root: {
              '&$selected': { backgroundColor: j.background.default },
              '&$hover': {
                '&:hover': { backgroundColor: j.background.default }
              }
            }
          },
          MuiToggleButton: {
            root: {
              color: j.icon,
              '&:hover': { backgroundColor: y.a.grey[100] },
              '&$selected': {
                backgroundColor: y.a.grey[50],
                color: j.primary.main,
                '&:hover': { backgroundColor: y.a.grey[100] }
              },
              '&:first-child': {
                borderTopLeftRadius: 4,
                borderBottomLeftRadius: 4
              },
              '&:last-child': {
                borderTopRightRadius: 4,
                borderBottomRightRadius: 4
              }
            }
          },
          MuiTypography: { gutterBottom: { marginBottom: 8 } }
        },
        I = Object(f.a)({ palette: j, typography: O, overrides: T }),
        A = t(84),
        P = t(471),
        B = t(472),
        D = t(137),
        z = {
          loggedIn: !1,
          user: {
            first_name: 'Shen',
            last_name: 'Zhi',
            email: 'demo@devias.io',
            avatar: '/images/avatars/avatar_11.png',
            bio: 'Brain Director',
            role: 'ADMIN'
          }
        },
        M = function() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : z,
            a = arguments.length > 1 ? arguments[1] : void 0;
          switch (a.type) {
            case D.a:
              return Object(_.a)({}, z);
            case D.b:
              return Object(_.a)(
                Object(_.a)({}, e),
                {},
                { loggedIn: !1, user: { role: 'GUEST' } }
              );
            default:
              return e;
          }
        },
        F = Object(A.combineReducers)({ session: M });
      function G() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          a = [P.a],
          t = Object(B.composeWithDevTools)(A.applyMiddleware.apply(void 0, a)),
          n = [t],
          r = A.compose.apply(void 0, n),
          i = Object(A.createStore)(F, e, r);
        return i;
      }
      var R = t(897),
        L = t(912),
        W = Object(R.a)(function() {
          return {
            root: {
              height: '100%',
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden'
            },
            topBar: { zIndex: 2, position: 'relative' },
            container: {
              display: 'flex',
              flex: '1 1 auto',
              overflow: 'hidden'
            },
            navBar: { zIndex: 3, width: 256, minWidth: 256, flex: '0 0 auto' },
            content: { overflowY: 'auto', flex: '1 1 auto' }
          };
        }),
        U = function(e) {
          var a = e.route,
            t = W();
          return r.a.createElement(
            'div',
            { className: t.root },
            r.a.createElement(
              'div',
              { className: t.container },
              r.a.createElement(
                'main',
                { className: t.content },
                r.a.createElement(
                  n.Suspense,
                  { fallback: r.a.createElement(L.a, null) },
                  Object(v.a)(a.routes)
                )
              )
            )
          );
        },
        $ = Object(R.a)(function() {
          return { root: { height: '100%' } };
        }),
        H = function(e) {
          var a = e.route,
            t = $();
          return r.a.createElement(
            'main',
            { className: t.root },
            r.a.createElement(
              n.Suspense,
              { fallback: r.a.createElement(L.a, null) },
              Object(v.a)(a.routes)
            )
          );
        },
        K = t(13),
        q = t(9),
        Y = t(19),
        J = t(2),
        V = t(962),
        Z = t(70),
        X = t(916),
        Q = t(931),
        ee = t(146),
        ae = t(959),
        te = t(42),
        ne = t(16),
        re = t(117),
        ie = t.n(re),
        oe = t(276),
        ce = t.n(oe),
        se = t(261),
        le = t.n(se),
        me = t(91),
        ue = t.n(me),
        de = t(187),
        pe = t.n(de),
        ge = t(210),
        he = t.n(ge),
        be = t(120),
        ve = t.n(be),
        fe = t(208),
        ye = t.n(fe),
        Ee = t(274),
        je = t.n(Ee),
        Oe = t(188),
        xe = t.n(Oe),
        Ne = t(275),
        ke = t.n(Ne),
        we = t(277),
        Ce = t.n(we),
        Se = t(139),
        _e = t.n(Se),
        Te = t(273),
        Ie = t.n(Te),
        Ae = t(222),
        Pe = t.n(Ae),
        Be = t(209),
        De = t.n(Be),
        ze = t(262),
        Me = t.n(ze),
        Fe = [
          {
            title: 'Pages',
            pages: [
              { title: 'Overview', href: '/overview', icon: ye.a },
              {
                title: 'Dashboards',
                href: '/dashboards',
                icon: pe.a,
                children: [
                  { title: 'Default', href: '/dashboards/default' },
                  { title: 'Analytics', href: '/dashboards/analytics' }
                ]
              },
              {
                title: 'Management',
                href: '/management',
                icon: ie.a,
                children: [
                  { title: 'Customers', href: '/management/customers' },
                  {
                    title: 'Customer Details',
                    href: '/management/customers/1/summary'
                  },
                  { title: 'Projects', href: '/management/projects' },
                  { title: 'Orders', href: '/management/orders' },
                  { title: 'Order Details', href: '/management/orders/1' }
                ]
              },
              { title: 'Social Feed', href: '/social-feed', icon: _e.a },
              {
                title: 'Profile',
                href: '/profile',
                icon: Ie.a,
                children: [
                  { title: 'Timeline', href: '/profile/1/timeline' },
                  { title: 'Connections', href: '/profile/1/connections' },
                  { title: 'Projects', href: '/profile/1/projects' },
                  { title: 'Reviews', href: '/profile/1/reviews' }
                ]
              },
              {
                title: 'Branches',
                href: '/branches',
                icon: ve.a,
                children: [
                  { title: 'All Branches', href: '/branches' },
                  { title: 'Create', href: '/branch/create' }
                ]
              },
              {
                title: 'Menus',
                href: '/menu',
                icon: ve.a,
                children: [
                  { title: 'All Menu', href: '/menu' },
                  { title: 'Create', href: '/menu/create' }
                ]
              },
              {
                title: 'Category',
                href: '/category',
                icon: ve.a,
                children: [
                  { title: 'All Categories', href: '/categories' },
                  { title: 'Create', href: '/category/create' }
                ]
              },
              {
                title: 'Products',
                href: '/products',
                icon: ie.a,
                children: [
                  { title: 'all', href: '/products' },
                  { title: 'Create', href: '/products/create' }
                ]
              },
              {
                title: 'Project',
                href: '/projects',
                icon: ve.a,
                children: [
                  { title: 'Browse', href: '/projects' },
                  { title: 'Create', href: '/projects/create' },
                  { title: 'Overview', href: '/projects/1/overview' },
                  { title: 'Files', href: '/projects/1/files' },
                  { title: 'Activity', href: '/projects/1/activity' },
                  { title: 'Subscribers', href: '/projects/1/subscribers' }
                ]
              },
              { title: 'Invoice', href: '/invoices/1', icon: Pe.a },
              { title: 'Kanban Board', href: '/kanban-board', icon: je.a },
              {
                title: 'Mail',
                href: '/mail',
                icon: ke.a,
                label: function() {
                  return r.a.createElement(
                    ne.g,
                    { color: y.a.red[500], shape: 'rounded' },
                    '2'
                  );
                }
              },
              {
                title: 'Chat',
                href: '/chat',
                icon: le.a,
                label: function() {
                  return r.a.createElement(
                    ne.g,
                    { color: y.a.red[500], shape: 'rounded' },
                    '4'
                  );
                }
              },
              {
                title: 'Calendar',
                href: '/calendar',
                icon: ce.a,
                label: function() {
                  return r.a.createElement(
                    ne.g,
                    { color: y.a.green[500] },
                    'New'
                  );
                }
              },
              {
                title: 'Settings',
                href: '/settings',
                icon: De.a,
                children: [
                  { title: 'General', href: '/settings/general' },
                  { title: 'Subscription', href: '/settings/subscription' },
                  { title: 'Notifications', href: '/settings/notifications' },
                  { title: 'Security', href: '/settings/security' }
                ]
              },
              {
                title: 'Authentication',
                href: '/auth',
                icon: xe.a,
                children: [
                  { title: 'Login', href: '/auth/login' },
                  { title: 'Register', href: '/auth/register' }
                ]
              },
              {
                title: 'Errors',
                href: '/errors',
                icon: he.a,
                children: [
                  { title: 'Error 401', href: '/errors/error-401' },
                  { title: 'Error 404', href: '/errors/error-404' },
                  { title: 'Error 500', href: '/errors/error-500' }
                ]
              }
            ]
          },
          {
            title: 'Support',
            pages: [
              { title: 'Presentation', href: '/presentation', icon: Ce.a },
              {
                title: 'Getting started',
                href: '/getting-started',
                icon: ue.a
              },
              {
                title: 'Changelog',
                href: '/changelog',
                icon: Me.a,
                label: function() {
                  return r.a.createElement(
                    ne.g,
                    { color: y.a.blue[500] },
                    'v1.2.0'
                  );
                }
              }
            ]
          }
        ],
        Ge = ['openMobile', 'onMobileClose', 'className'],
        Re = Object(R.a)(function(e) {
          return {
            root: { height: '100%', overflowY: 'auto' },
            content: {
              padding: e.spacing(2),
              backgroundColor: e.palette.primary.main,
              color: 'white !important'
            },
            profile: {
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              minHeight: 'fit-content'
            },
            avatar: { width: 60, height: 60 },
            name: { marginTop: e.spacing(1) },
            divider: { marginTop: e.spacing(2) },
            navigation: { marginTop: e.spacing(2) }
          };
        }),
        Le = function(e) {
          var a = e.openMobile,
            t = e.onMobileClose,
            i = e.className,
            o = Object(q.a)(e, Ge),
            c = Re(),
            s = Object(te.a)(),
            l = Object(g.d)(function(e) {
              return e.session;
            });
          Object(n.useEffect)(
            function() {
              a && t && t();
            },
            [s.location.pathname]
          );
          var m = r.a.createElement(
            'div',
            { className: c.content },
            r.a.createElement(
              'div',
              { className: c.profile },
              r.a.createElement(V.a, {
                alt: 'Person',
                className: c.avatar,
                component: Y.a,
                src: l.user.avatar,
                to: '/profile/1/timeline'
              }),
              r.a.createElement(
                Z.a,
                { className: c.name, style: { color: 'white' }, variant: 'h4' },
                l.user.first_name,
                ' ',
                l.user.last_name
              ),
              r.a.createElement(
                Z.a,
                { style: { color: 'white' }, variant: 'body2' },
                l.user.bio
              )
            ),
            r.a.createElement(X.a, { className: c.divider }),
            r.a.createElement(
              'nav',
              { className: c.navigation },
              Fe.map(function(e) {
                return r.a.createElement(ne.i, {
                  component: 'div',
                  key: e.title,
                  pages: e.pages,
                  title: e.title
                });
              })
            )
          );
          return r.a.createElement(
            n.Fragment,
            null,
            r.a.createElement(
              ae.a,
              { lgUp: !0 },
              r.a.createElement(
                Q.a,
                { anchor: 'left', onClose: t, open: a, variant: 'temporary' },
                r.a.createElement(
                  'div',
                  Object.assign({}, o, { className: Object(J.a)(c.root, i) }),
                  m
                )
              )
            ),
            r.a.createElement(
              ae.a,
              { mdDown: !0 },
              r.a.createElement(
                ee.a,
                Object.assign({}, o, {
                  className: Object(J.a)(c.root, i),
                  elevation: 1,
                  square: !0
                }),
                m
              )
            )
          );
        },
        We = t(937),
        Ue = t(938),
        $e = t(513),
        He = t(881),
        Ke = t(939),
        qe = t(885),
        Ye = t(886),
        Je = t(919),
        Ve = t(920),
        Ze = t(883),
        Xe = t(940),
        Qe = t(884),
        ea = t(211),
        aa = t.n(ea),
        ta = t(212),
        na = t.n(ta),
        ra = t(213),
        ia = t.n(ra),
        oa = t(88),
        ca = t.n(oa),
        sa = t(27),
        la = ['onOpenNavBarMobile', 'className'],
        ma = Object(R.a)(function(e) {
          return {
            root: { boxShadow: 'none' },
            flexGrow: { flexGrow: 1 },
            search: {
              backgroundColor: 'rgba(255,255,255, 0.1)',
              borderRadius: 4,
              flexBasis: 300,
              height: 36,
              padding: e.spacing(0, 2),
              display: 'flex',
              alignItems: 'center'
            },
            searchIcon: { marginRight: e.spacing(2), color: 'inherit' },
            searchInput: {
              flexGrow: 1,
              color: 'inherit',
              '& input::placeholder': { opacity: 1, color: 'inherit' }
            },
            searchPopper: { zIndex: e.zIndex.appBar + 100 },
            searchPopperContent: { marginTop: e.spacing(1) },
            trialButton: {
              marginLeft: e.spacing(2),
              color: e.palette.white,
              backgroundColor: y.a.green[600],
              '&:hover': { backgroundColor: y.a.green[900] }
            },
            trialIcon: { marginRight: e.spacing(1) },
            notificationsButton: { marginLeft: e.spacing(1) },
            notificationsBadge: { backgroundColor: y.a.orange[600] },
            logoutButton: { marginLeft: e.spacing(1) },
            logoutIcon: { marginRight: e.spacing(1) }
          };
        }),
        ua = function(e) {
          var a = e.onOpenNavBarMobile,
            t = e.className,
            i = Object(q.a)(e, la),
            o = ma(),
            c = Object(te.a)().history,
            s = Object(n.useRef)(null),
            l = (Object(g.c)(), Object(n.useRef)(null)),
            m = Object(n.useState)(!1),
            u = Object(K.a)(m, 2),
            d = (u[0], u[1], Object(n.useState)(!1)),
            p = Object(K.a)(d, 2),
            h = p[0],
            b = p[1],
            v = Object(n.useState)(''),
            f = Object(K.a)(v, 2),
            y = f[0],
            E = f[1],
            j = Object(n.useState)([]),
            O = Object(K.a)(j, 2),
            x = O[0],
            N = O[1],
            k = Object(n.useState)(!1),
            w = Object(K.a)(k, 2),
            C = w[0],
            S = w[1];
          Object(n.useEffect)(function() {
            var e = !0;
            return (
              sa.a.get('/api/account/notifications').then(function(a) {
                e && N(a.data.notifications);
              }),
              function() {
                e = !1;
              }
            );
          }, []);
          var _ = function() {
            b(!1);
          };
          return r.a.createElement(
            We.a,
            Object.assign({}, i, {
              className: Object(J.a)(o.root, t),
              color: 'primary'
            }),
            r.a.createElement(
              Ue.a,
              null,
              r.a.createElement(
                Y.a,
                { to: '/' },
                r.a.createElement('img', {
                  alt: 'Logo',
                  src:
                    'https://dms-test.onpixie.com/static/media/logo.21ca2e5b.svg'
                })
              ),
              r.a.createElement('div', { className: o.flexGrow }),
              r.a.createElement(
                ae.a,
                { smDown: !0 },
                r.a.createElement(
                  'div',
                  { className: o.search, ref: s },
                  r.a.createElement(ca.a, { className: o.searchIcon }),
                  r.a.createElement($e.a, {
                    className: o.searchInput,
                    disableUnderline: !0,
                    onChange: function(e) {
                      E(e.target.value), e.target.value ? h || b(!0) : b(!1);
                    },
                    placeholder: 'Search people & places',
                    value: y
                  })
                ),
                r.a.createElement(
                  He.a,
                  {
                    anchorEl: s.current,
                    className: o.searchPopper,
                    open: h,
                    transition: !0
                  },
                  r.a.createElement(
                    Ke.a,
                    { onClickAway: _ },
                    r.a.createElement(
                      ee.a,
                      { className: o.searchPopperContent, elevation: 3 },
                      r.a.createElement(
                        qe.a,
                        null,
                        [
                          'Devias React Dashboard',
                          'Devias',
                          'Admin Pannel',
                          'Project',
                          'Pages'
                        ].map(function(e) {
                          return r.a.createElement(
                            Ye.a,
                            { button: !0, key: e, onClick: _ },
                            r.a.createElement(
                              Je.a,
                              null,
                              r.a.createElement(ca.a, null)
                            ),
                            r.a.createElement(Ve.a, { primary: e })
                          );
                        })
                      )
                    )
                  )
                )
              ),
              r.a.createElement(
                ae.a,
                { mdDown: !0 },
                r.a.createElement(
                  Ze.a,
                  {
                    className: o.notificationsButton,
                    color: 'inherit',
                    onClick: function() {
                      S(!0);
                    },
                    ref: l
                  },
                  r.a.createElement(
                    Xe.a,
                    {
                      badgeContent: x.length,
                      classes: { badge: o.notificationsBadge },
                      variant: 'dot'
                    },
                    r.a.createElement(aa.a, null)
                  )
                ),
                r.a.createElement(
                  Qe.a,
                  {
                    className: o.logoutButton,
                    color: 'inherit',
                    onClick: function() {
                      c.push('/auth/login');
                    }
                  },
                  r.a.createElement(na.a, { className: o.logoutIcon }),
                  'Sign out'
                )
              ),
              r.a.createElement(
                ae.a,
                { lgUp: !0 },
                r.a.createElement(
                  Ze.a,
                  { color: 'inherit', onClick: a },
                  r.a.createElement(ia.a, null)
                )
              )
            ),
            r.a.createElement(ne.j, {
              anchorEl: l.current,
              notifications: x,
              onClose: function() {
                S(!1);
              },
              open: C
            })
          );
        },
        da = t(24),
        pa = t(4),
        ga = t.n(pa),
        ha = t(941),
        ba = t(924),
        va = t(942),
        fa = t(214),
        ya = t.n(fa),
        Ea = ['className'],
        ja = Object(R.a)(function(e) {
          return {
            drawer: { width: 280 },
            root: { backgroundColor: e.palette.white },
            list: { padding: e.spacing(1, 3) },
            listItemText: { marginRight: e.spacing(1) },
            lastActivity: { whiteSpace: 'nowrap' },
            fab: {
              position: 'fixed',
              bottom: 32,
              right: 32,
              zIndex: e.zIndex.drawer - 100
            }
          };
        }),
        Oa = function(e) {
          var a = e.className,
            t = Object(q.a)(e, Ea),
            i = ja(),
            o = Object(n.useState)(!1),
            c = Object(K.a)(o, 2),
            s = c[0],
            l = c[1],
            m = Object(n.useState)(null),
            u = Object(K.a)(m, 2),
            d = u[0],
            p = u[1];
          Object(n.useEffect)(function() {
            var e = !0;
            return (
              sa.a.get('/api/chat/activity').then(function(a) {
                e && p(a.data);
              }),
              function() {
                e = !1;
              }
            );
          }, []);
          if (!d) return null;
          var g = d.connections.filter(function(e) {
            return e.active;
          }).length;
          return r.a.createElement(
            n.Fragment,
            null,
            r.a.createElement(
              Q.a,
              {
                anchor: 'right',
                classes: { paper: i.drawer },
                elevation: 1,
                onClose: function() {
                  l(!1);
                },
                open: s,
                variant: 'temporary'
              },
              r.a.createElement(
                'div',
                Object.assign({}, t, { className: Object(J.a)(i.root, a) }),
                d.groups.map(function(e) {
                  return r.a.createElement(
                    qe.a,
                    {
                      className: i.list,
                      key: e.id,
                      subheader: r.a.createElement(
                        ha.a,
                        { disableGutters: !0, disableSticky: !0 },
                        e.name
                      )
                    },
                    d.connections
                      .filter(function(a) {
                        return e.id === a.group;
                      })
                      .map(function(e) {
                        return r.a.createElement(
                          Ye.a,
                          { disableGutters: !0, key: e.id },
                          r.a.createElement(
                            ba.a,
                            null,
                            r.a.createElement(V.a, {
                              alt: 'Person',
                              component: Y.a,
                              src: e.avatar,
                              to: '/profile/1/timeline'
                            })
                          ),
                          r.a.createElement(Ve.a, {
                            className: i.listItemText,
                            disableTypography: !0,
                            primary: r.a.createElement(
                              Z.a,
                              {
                                component: Y.a,
                                display: 'block',
                                noWrap: !0,
                                to: '/profile/1/timeline',
                                variant: 'h6'
                              },
                              e.name
                            )
                          }),
                          e.active
                            ? r.a.createElement(ne.t, {
                                color: 'success',
                                size: 'small'
                              })
                            : r.a.createElement(
                                Z.a,
                                { className: i.lastActivity, variant: 'body2' },
                                ga()(e.lastActivity).fromNow()
                              )
                        );
                      })
                  );
                })
              )
            ),
            r.a.createElement(
              'span',
              {
                className: Object(J.a)(i.fab, Object(da.a)({}, i.shiftFab, s))
              },
              r.a.createElement(
                Xe.a,
                { badgeContent: g, color: 'error' },
                r.a.createElement(
                  va.a,
                  {
                    color: 'primary',
                    onClick: function() {
                      l(!0);
                    }
                  },
                  r.a.createElement(ya.a, null)
                )
              )
            )
          );
        },
        xa = Object(R.a)(function() {
          return {
            root: {
              height: '100%',
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden'
            },
            topBar: { zIndex: 2, position: 'relative' },
            container: {
              display: 'flex',
              flex: '1 1 auto',
              overflow: 'hidden'
            },
            navBar: { zIndex: 3, width: 256, minWidth: 256, flex: '0 0 auto' },
            content: { overflowY: 'auto', flex: '1 1 auto' }
          };
        }),
        Na = function(e) {
          var a = e.route,
            t = xa(),
            i = Object(n.useState)(!1),
            o = Object(K.a)(i, 2),
            c = o[0],
            s = o[1];
          return r.a.createElement(
            'div',
            { className: t.root },
            r.a.createElement(ua, {
              className: t.topBar,
              onOpenNavBarMobile: function() {
                s(!0);
              }
            }),
            r.a.createElement(
              'div',
              { className: t.container },
              r.a.createElement(Le, {
                className: t.navBar,
                onMobileClose: function() {
                  s(!1);
                },
                openMobile: c
              }),
              r.a.createElement(
                'main',
                { className: t.content },
                r.a.createElement(
                  n.Suspense,
                  { fallback: r.a.createElement(L.a, null) },
                  Object(v.a)(a.routes)
                )
              )
            ),
            r.a.createElement(Oa, null)
          );
        },
        ka =
          (ye.a,
          pe.a,
          De.a,
          xe.a,
          he.a,
          Object(R.a)(function(e) {
            return {
              root: { height: '100%', overflowY: 'auto' },
              content: {
                padding: e.spacing(2),
                backgroundColor: e.palette.primary.main,
                color: 'white !important'
              },
              profile: {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                minHeight: 'fit-content'
              },
              avatar: { width: 60, height: 60 },
              name: { marginTop: e.spacing(1) },
              divider: { marginTop: e.spacing(2) },
              navigation: { marginTop: e.spacing(2) }
            };
          }),
          Object(R.a)(function(e) {
            return {
              root: { boxShadow: 'none' },
              flexGrow: { flexGrow: 1 },
              search: {
                backgroundColor: 'rgba(255,255,255, 0.1)',
                borderRadius: 4,
                flexBasis: 300,
                height: 36,
                padding: e.spacing(0, 2),
                display: 'flex',
                alignItems: 'center'
              },
              searchIcon: { marginRight: e.spacing(2), color: 'inherit' },
              searchInput: {
                flexGrow: 1,
                color: 'inherit',
                '& input::placeholder': { opacity: 1, color: 'inherit' }
              },
              searchPopper: { zIndex: e.zIndex.appBar + 100 },
              searchPopperContent: { marginTop: e.spacing(1) },
              trialButton: {
                marginLeft: e.spacing(2),
                color: e.palette.white,
                backgroundColor: y.a.green[600],
                '&:hover': { backgroundColor: y.a.green[900] }
              },
              trialIcon: { marginRight: e.spacing(1) },
              notificationsButton: { marginLeft: e.spacing(1) },
              notificationsBadge: { backgroundColor: y.a.orange[600] },
              logoutButton: { marginLeft: e.spacing(1) },
              logoutIcon: { marginRight: e.spacing(1) }
            };
          }),
          Object(R.a)(function(e) {
            return {
              drawer: { width: 280 },
              root: { backgroundColor: e.palette.white },
              list: { padding: e.spacing(1, 3) },
              listItemText: { marginRight: e.spacing(1) },
              lastActivity: { whiteSpace: 'nowrap' },
              fab: {
                position: 'fixed',
                bottom: 32,
                right: 32,
                zIndex: e.zIndex.drawer - 100
              }
            };
          }),
          Object(R.a)(function() {
            return {
              root: {
                height: '100%',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden'
              },
              topBar: { zIndex: 2, position: 'relative' },
              container: {
                display: 'flex',
                flex: '1 1 auto',
                overflow: 'hidden'
              },
              navBar: {
                zIndex: 3,
                width: 256,
                minWidth: 256,
                flex: '0 0 auto'
              },
              content: { overflowY: 'auto', flex: '1 1 auto' }
            };
          }),
          t(930)),
        wa = t(913),
        Ca = t(925),
        Sa = t(914),
        _a = t(300),
        Ta = t(68),
        Ia = t(216),
        Aa = ['data', 'className'],
        Pa = Object(R.a)(function() {
          return { root: { position: 'relative' } };
        }),
        Ba = function(e) {
          var a,
            t = e.data,
            n = e.className,
            i = Object(q.a)(e, Aa),
            o = Pa(),
            c = Object(Ia.a)(),
            s = {
              datasets: [
                {
                  data: [],
                  backgroundColor: [],
                  borderWidth: 8,
                  borderColor: c.palette.white,
                  hoverBorderColor: c.palette.white
                }
              ],
              labels: []
            },
            l = Object(_a.a)(t);
          try {
            for (l.s(); !(a = l.n()).done; ) {
              var m = a.value;
              s.datasets[0].data.push(m.value),
                s.datasets[0].backgroundColor.push(m.color),
                s.labels.push(m.label);
            }
          } catch (d) {
            l.e(d);
          } finally {
            l.f();
          }
          var u = {
            responsive: !0,
            maintainAspectRatio: !1,
            animation: !1,
            cutoutPercentage: 80,
            legend: { display: !1 },
            layout: { padding: 0 },
            tooltips: {
              enabled: !0,
              mode: 'index',
              intersect: !1,
              caretSize: 10,
              yPadding: 20,
              xPadding: 20,
              borderWidth: 1,
              borderColor: c.palette.divider,
              backgroundColor: c.palette.white,
              titleFontColor: c.palette.text.primary,
              bodyFontColor: c.palette.text.secondary,
              footerFontColor: c.palette.text.secondary,
              callbacks: {
                label: function(e, a) {
                  var t = a.labels[e.index],
                    n = a.datasets[0].data[e.index];
                  return ''.concat(t, ': ').concat(n, '%');
                }
              }
            }
          };
          return r.a.createElement(
            'div',
            Object.assign({}, i, { className: Object(J.a)(o.root, n) }),
            r.a.createElement(Ta.c, { data: s, options: u })
          );
        },
        Da = ['className'],
        za = Object(R.a)(function(e) {
          return {
            root: {},
            content: { padding: 0, '&:last-child': { paddingBottom: 0 } },
            chartContainer: { padding: e.spacing(3) },
            chart: { height: 281 },
            statsContainer: { display: 'flex' },
            statsItem: {
              flexGrow: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              padding: e.spacing(3, 2),
              '&:not(:last-of-type)': {
                borderRight: '1px solid '.concat(e.palette.divider)
              }
            }
          };
        }),
        Ma = function(e) {
          var a = e.className,
            t = Object(q.a)(e, Da),
            i = za(),
            o = Object(n.useState)([]),
            c = Object(K.a)(o, 2),
            s = c[0],
            l = c[1];
          return (
            Object(n.useEffect)(function() {
              var e = !0;
              return (
                sa.a.get('/api/dashboard/earnings').then(function(a) {
                  e && l(a.data.earnings);
                }),
                function() {
                  e = !1;
                }
              );
            }, []),
            r.a.createElement(
              wa.a,
              Object.assign({}, t, { className: Object(J.a)(i.root, a) }),
              r.a.createElement(Ca.a, {
                action: r.a.createElement(ne.e, null),
                title: 'Earnings Segmentation'
              }),
              r.a.createElement(X.a, null),
              r.a.createElement(
                Sa.a,
                { className: i.content },
                r.a.createElement(
                  'div',
                  { className: i.chartContainer },
                  r.a.createElement(Ba, { className: i.chart, data: s })
                ),
                r.a.createElement(X.a, null),
                r.a.createElement(
                  'div',
                  { className: i.statsContainer },
                  s.map(function(e) {
                    return r.a.createElement(
                      'div',
                      { className: i.statsItem, key: e.id },
                      r.a.createElement(
                        Z.a,
                        {
                          align: 'center',
                          component: 'h6',
                          gutterBottom: !0,
                          variant: 'overline'
                        },
                        e.label
                      ),
                      r.a.createElement(
                        Z.a,
                        { align: 'center', variant: 'h4' },
                        e.value,
                        '%'
                      )
                    );
                  })
                )
              )
            )
          );
        },
        Fa = t(41),
        Ga = t.n(Fa),
        Ra = ['data', 'labels', 'className'],
        La = Object(R.a)(function() {
          return { root: { position: 'relative' } };
        }),
        Wa = function(e) {
          var a = e.data,
            t = e.labels,
            n = e.className,
            i = Object(q.a)(e, Ra),
            o = La(),
            c = Object(Ia.a)(),
            s = {
              datasets: [
                {
                  label: 'This year',
                  backgroundColor: c.palette.primary.main,
                  data: a.thisYear
                },
                {
                  label: 'Last year',
                  backgroundColor: y.a.grey[200],
                  data: a.lastYear
                }
              ],
              labels: t
            },
            l = {
              responsive: !0,
              maintainAspectRatio: !1,
              animation: !1,
              cornerRadius: 20,
              legend: { display: !1 },
              layout: { padding: 0 },
              scales: {
                xAxes: [
                  {
                    barThickness: 12,
                    maxBarThickness: 10,
                    barPercentage: 0.5,
                    categoryPercentage: 0.5,
                    gridLines: { display: !1, drawBorder: !1 },
                    ticks: { padding: 20, fontColor: c.palette.text.secondary }
                  }
                ],
                yAxes: [
                  {
                    gridLines: {
                      borderDash: [2],
                      borderDashOffset: [2],
                      color: c.palette.divider,
                      drawBorder: !1,
                      zeroLineBorderDash: [2],
                      zeroLineBorderDashOffset: [2],
                      zeroLineColor: c.palette.divider
                    },
                    ticks: {
                      padding: 20,
                      fontColor: c.palette.text.secondary,
                      beginAtZero: !0,
                      min: 0,
                      maxTicksLimit: 5,
                      callback: function(e) {
                        return e > 0 ? e + 'K' : e;
                      }
                    }
                  }
                ]
              },
              tooltips: {
                enabled: !0,
                mode: 'index',
                intersect: !1,
                caretSize: 10,
                yPadding: 20,
                xPadding: 20,
                borderWidth: 1,
                borderColor: c.palette.divider,
                backgroundColor: c.palette.white,
                titleFontColor: c.palette.text.primary,
                bodyFontColor: c.palette.text.secondary,
                footerFontColor: c.palette.text.secondary,
                callbacks: {
                  title: function() {},
                  label: function(e) {
                    var a = 'This year: '.concat(e.yLabel);
                    return e.yLabel > 0 && (a += 'K'), a;
                  }
                }
              }
            };
          return r.a.createElement(
            'div',
            Object.assign({}, i, { className: Object(J.a)(o.root, n) }),
            r.a.createElement(Ta.a, { data: s, options: l })
          );
        },
        Ua = ['className'],
        $a = Object(R.a)(function(e) {
          return {
            root: { height: '100%' },
            content: { padding: 0 },
            inner: { minWidth: 700 },
            chart: { padding: e.spacing(4, 2, 0, 2), height: 400 }
          };
        }),
        Ha = function(e) {
          var a = e.className,
            t = Object(q.a)(e, Ua),
            n = $a();
          return r.a.createElement(
            wa.a,
            Object.assign({}, t, { className: Object(J.a)(n.root, a) }),
            r.a.createElement(Ca.a, {
              action: r.a.createElement(ne.e, null),
              title: 'Financial Stats'
            }),
            r.a.createElement(X.a, null),
            r.a.createElement(
              Sa.a,
              { className: n.content },
              r.a.createElement(
                Ga.a,
                null,
                r.a.createElement(
                  'div',
                  { className: n.inner },
                  r.a.createElement(Wa, {
                    className: n.chart,
                    data: {
                      thisYear: [18, 16, 5, 8, 3, 14, 14, 16, 17, 19, 18, 20],
                      lastYear: [12, 11, 4, 6, 2, 9, 9, 10, 11, 12, 13, 13]
                    },
                    labels: [
                      'Jan',
                      'Feb',
                      'Mar',
                      'Apr',
                      'May',
                      'Jun',
                      'Jul',
                      'Aug',
                      'Sep',
                      'Oct',
                      'Nov',
                      'Dec'
                    ]
                  })
                )
              )
            )
          );
        },
        Ka = t(943),
        qa = t(284),
        Ya = t.n(qa),
        Ja = ['className'],
        Va = Object(R.a)(function(e) {
          return {
            root: {},
            dates: {
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end'
            },
            calendarTodayIcon: { marginRight: e.spacing(1) }
          };
        }),
        Za = function(e) {
          var a = e.className,
            t = Object(q.a)(e, Ja),
            i = Va(),
            o = Object(n.useState)(ga()().subtract(7, 'days')),
            c = Object(K.a)(o, 2),
            s = c[0],
            l = c[1],
            m = Object(n.useState)(ga()()),
            u = Object(K.a)(m, 2),
            d = u[0],
            p = u[1],
            g = Object(n.useState)(null),
            h = Object(K.a)(g, 2),
            v = h[0],
            f = h[1],
            y = Object(n.useState)(ga()()),
            E = Object(K.a)(y, 2),
            j = E[0],
            O = E[1],
            x = function(e) {
              f(e);
            },
            N = Boolean(v);
          return r.a.createElement(
            'div',
            Object.assign({}, t, { className: Object(J.a)(i.root, a) }),
            r.a.createElement(
              ka.a,
              { container: !0, justify: 'space-between', spacing: 3 },
              r.a.createElement(
                ka.a,
                { item: !0, lg: 6, xs: 12 },
                r.a.createElement(
                  Z.a,
                  { component: 'h2', gutterBottom: !0, variant: 'overline' },
                  'Analytics'
                ),
                r.a.createElement(
                  Z.a,
                  { component: 'h1', gutterBottom: !0, variant: 'h3' },
                  'Finance Overview'
                )
              ),
              r.a.createElement(
                ka.a,
                { className: i.dates, item: !0, lg: 6, xs: 12 },
                r.a.createElement(
                  Ka.a,
                  { variant: 'contained' },
                  r.a.createElement(
                    Qe.a,
                    {
                      onClick: function() {
                        return x('start');
                      }
                    },
                    r.a.createElement(Ya.a, { className: i.calendarTodayIcon }),
                    s.format('DD MM YYYY')
                  ),
                  r.a.createElement(
                    Qe.a,
                    {
                      onClick: function() {
                        return x('end');
                      }
                    },
                    r.a.createElement(Ya.a, { className: i.calendarTodayIcon }),
                    d.format('DD MM YYYY')
                  )
                )
              )
            ),
            r.a.createElement(b.a, {
              maxDate: ga()(),
              onAccept: function(e) {
                O(ga()()),
                  'start' === v
                    ? (l(e), ga()(e).isAfter(d) && p(e))
                    : (p(e), ga()(e).isBefore(s) && l(e)),
                  f(null);
              },
              onChange: function(e) {
                O(e);
              },
              onClose: function() {
                O(ga()()), f(null);
              },
              open: N,
              style: { display: 'none' },
              value: j,
              variant: 'dialog'
            })
          );
        };
      Za.defaultProps = {};
      var Xa = Za,
        Qa = t(950),
        et = t(951),
        at = t(952),
        tt = t(953),
        nt = t(926),
        rt = t(50),
        it = t.n(rt),
        ot = ['value', 'className'],
        ct = Object(R.a)(function(e) {
          return {
            root: { width: 56, height: 56 },
            circle1: {
              stroke: 'rgba(0,0,0,0.05)',
              fill: 'none',
              strokeWidth: 4
            },
            circle2: {
              stroke: e.palette.primary.main,
              fill: 'none',
              strokeWidth: 4,
              animation: '$progress 1s ease-out forwards'
            },
            '@keyframes progress': { '0%': { strokeDasharray: '0 100' } }
          };
        }),
        st = function(e) {
          var a = e.value,
            t = e.className,
            n = Object(q.a)(e, ot),
            i = ct();
          return r.a.createElement(
            'div',
            Object.assign({}, n, { className: Object(J.a)(i.root, t) }),
            r.a.createElement(
              'svg',
              { viewBox: '0 0 36 36' },
              r.a.createElement('path', {
                className: i.circle1,
                d:
                  'M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831',
                strokeDasharray: '100, 100'
              }),
              r.a.createElement('path', {
                className: i.circle2,
                d:
                  'M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831',
                strokeDasharray: ''.concat(a, ', 100')
              })
            )
          );
        },
        lt = ['className'],
        mt = Object(R.a)(function(e) {
          return {
            root: {},
            content: { padding: 0, '&:last-child': { paddingBottom: 0 } },
            inner: { minWidth: 700 },
            details: { display: 'flex', alignItems: 'center' },
            image: {
              marginRight: e.spacing(2),
              flexShrink: 0,
              height: 56,
              width: 56
            },
            subscriptions: { fontWeight: e.typography.fontWeightMedium },
            price: { whiteSpace: 'nowrap' },
            value: {
              color: y.a.green[600],
              fontWeight: e.typography.fontWeightMedium
            },
            conversion: {
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end'
            },
            conversionStats: {
              whiteSpace: 'nowrap',
              marginRight: e.spacing(2)
            },
            actions: { justifyContent: 'flex-end' },
            arrowForwardIcon: { marginLeft: e.spacing(1) }
          };
        }),
        ut = function(e) {
          var a = e.className,
            t = Object(q.a)(e, lt),
            i = mt(),
            o = Object(n.useState)([]),
            c = Object(K.a)(o, 2),
            s = c[0],
            l = c[1];
          return (
            Object(n.useEffect)(function() {
              var e = !0;
              return (
                sa.a
                  .get('/api/dashboard/profitable-products')
                  .then(function(a) {
                    e && l(a.data.products);
                  }),
                function() {
                  e = !1;
                }
              );
            }, []),
            r.a.createElement(
              wa.a,
              Object.assign({}, t, { className: Object(J.a)(i.root, a) }),
              r.a.createElement(Ca.a, {
                action: r.a.createElement(ne.e, null),
                title: 'Most Profitable Products'
              }),
              r.a.createElement(X.a, null),
              r.a.createElement(
                Sa.a,
                { className: i.content },
                r.a.createElement(
                  Ga.a,
                  null,
                  r.a.createElement(
                    'div',
                    { className: i.inner },
                    r.a.createElement(
                      Qa.a,
                      null,
                      r.a.createElement(
                        et.a,
                        null,
                        s.map(function(e) {
                          return r.a.createElement(
                            at.a,
                            { hover: !0, key: e.id },
                            r.a.createElement(
                              tt.a,
                              null,
                              r.a.createElement(
                                'div',
                                { className: i.details },
                                r.a.createElement('img', {
                                  alt: 'Product',
                                  className: i.image,
                                  src: e.image
                                }),
                                r.a.createElement(
                                  'div',
                                  null,
                                  r.a.createElement(
                                    Z.a,
                                    { variant: 'h6' },
                                    e.name
                                  ),
                                  r.a.createElement(
                                    Z.a,
                                    { variant: 'subtitle2' },
                                    r.a.createElement(
                                      'span',
                                      { className: i.subscriptions },
                                      e.subscriptions
                                    ),
                                    ' ',
                                    'Active'
                                  )
                                )
                              )
                            ),
                            r.a.createElement(
                              tt.a,
                              null,
                              r.a.createElement(
                                Z.a,
                                { variant: 'h6' },
                                'Price'
                              ),
                              r.a.createElement(
                                Z.a,
                                { className: i.price, variant: 'subtitle2' },
                                r.a.createElement(
                                  'span',
                                  { className: i.value },
                                  e.currency,
                                  e.price
                                ),
                                ' ',
                                'monthly'
                              )
                            ),
                            r.a.createElement(
                              tt.a,
                              null,
                              r.a.createElement(
                                'div',
                                { className: i.conversion },
                                r.a.createElement(
                                  'div',
                                  { className: i.conversionStats },
                                  r.a.createElement(
                                    Z.a,
                                    { align: 'right', variant: 'h6' },
                                    e.progress,
                                    '%'
                                  ),
                                  r.a.createElement(
                                    Z.a,
                                    { variant: 'subtitle2' },
                                    'Conversion Rate'
                                  )
                                ),
                                r.a.createElement(st, { value: e.progress })
                              )
                            )
                          );
                        })
                      )
                    )
                  )
                )
              ),
              r.a.createElement(X.a, null),
              r.a.createElement(
                nt.a,
                { className: i.actions },
                r.a.createElement(
                  Qe.a,
                  {
                    color: 'primary',
                    component: Y.a,
                    size: 'small',
                    to: '#',
                    variant: 'text'
                  },
                  'See all',
                  r.a.createElement(it.a, { className: i.arrowForwardIcon })
                )
              )
            )
          );
        },
        dt = ['className'],
        pt = Object(R.a)(function(e) {
          var a;
          return {
            root: {},
            content: { padding: 0 },
            item:
              ((a = { padding: e.spacing(3), textAlign: 'center' }),
              Object(da.a)(a, e.breakpoints.up('md'), {
                '&:not(:last-of-type)': {
                  borderRight: '1px solid '.concat(e.palette.divider)
                }
              }),
              Object(da.a)(a, e.breakpoints.down('sm'), {
                '&:not(:last-of-type)': {
                  borderBottom: '1px solid '.concat(e.palette.divider)
                }
              }),
              a),
            valueContainer: {
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            },
            label: { marginLeft: e.spacing(1) }
          };
        }),
        gt = function(e) {
          var a = e.className,
            t = Object(q.a)(e, dt),
            n = pt(),
            i = '854,355.00',
            o = '373,250.50',
            c = '123,532.00',
            s = '26,000';
          return r.a.createElement(
            wa.a,
            Object.assign({}, t, { className: Object(J.a)(n.root, a) }),
            r.a.createElement(
              ka.a,
              { alignItems: 'center', container: !0, justify: 'space-between' },
              r.a.createElement(
                ka.a,
                { className: n.item, item: !0, md: 3, sm: 6, xs: 12 },
                r.a.createElement(
                  Z.a,
                  { component: 'h2', gutterBottom: !0, variant: 'overline' },
                  'Total Income'
                ),
                r.a.createElement(
                  'div',
                  { className: n.valueContainer },
                  r.a.createElement(Z.a, { variant: 'h3' }, '$', i),
                  r.a.createElement(
                    ne.g,
                    {
                      className: n.label,
                      color: y.a.green[600],
                      variant: 'contained'
                    },
                    '+25%'
                  )
                )
              ),
              r.a.createElement(
                ka.a,
                { className: n.item, item: !0, md: 3, sm: 6, xs: 12 },
                r.a.createElement(
                  Z.a,
                  { component: 'h2', gutterBottom: !0, variant: 'overline' },
                  'Total Expanses'
                ),
                r.a.createElement(
                  'div',
                  { className: n.valueContainer },
                  r.a.createElement(Z.a, { variant: 'h3' }, '$', o),
                  r.a.createElement(
                    ne.g,
                    {
                      className: n.label,
                      color: y.a.green[600],
                      variant: 'contained'
                    },
                    '+12%'
                  )
                )
              ),
              r.a.createElement(
                ka.a,
                { className: n.item, item: !0, md: 3, sm: 6, xs: 12 },
                r.a.createElement(
                  Z.a,
                  { component: 'h2', gutterBottom: !0, variant: 'overline' },
                  'Net Profit'
                ),
                r.a.createElement(
                  'div',
                  { className: n.valueContainer },
                  r.a.createElement(Z.a, { variant: 'h3' }, c),
                  r.a.createElement(
                    ne.g,
                    {
                      className: n.label,
                      color: y.a.red[600],
                      variant: 'contained'
                    },
                    '-20%'
                  )
                )
              ),
              r.a.createElement(
                ka.a,
                { className: n.item, item: !0, md: 3, sm: 6, xs: 12 },
                r.a.createElement(
                  Z.a,
                  { component: 'h2', gutterBottom: !0, variant: 'overline' },
                  'Active Subscriptions'
                ),
                r.a.createElement(
                  'div',
                  { className: n.valueContainer },
                  r.a.createElement(Z.a, { variant: 'h3' }, s)
                )
              )
            )
          );
        },
        ht = ['className'],
        bt = Object(R.a)(function(e) {
          return {
            root: { display: 'flex', flexDirection: 'column' },
            content: { flexGrow: 1, padding: 0 },
            avatar: {
              fontSize: 14,
              fontWeight: e.typography.fontWeightBold,
              color: e.palette.white
            },
            actions: { justifyContent: 'flex-end' },
            arrowForwardIcon: { marginLeft: e.spacing(1) }
          };
        }),
        vt = function(e) {
          var a = e.className,
            t = Object(q.a)(e, ht),
            i = bt(),
            o = Object(n.useState)([]),
            c = Object(K.a)(o, 2),
            s = c[0],
            l = c[1];
          return (
            Object(n.useEffect)(function() {
              var e = !0;
              return (
                sa.a.get('/api/dashboard/top-referrals').then(function(a) {
                  e && l(a.data.referrals);
                }),
                function() {
                  e = !1;
                }
              );
            }, []),
            r.a.createElement(
              wa.a,
              Object.assign({}, t, { className: Object(J.a)(i.root, a) }),
              r.a.createElement(Ca.a, {
                action: r.a.createElement(ne.e, null),
                title: 'Top Referrals'
              }),
              r.a.createElement(X.a, null),
              r.a.createElement(
                Sa.a,
                { className: i.content },
                r.a.createElement(
                  qe.a,
                  { disablePadding: !0 },
                  s.map(function(e, a) {
                    return r.a.createElement(
                      Ye.a,
                      { divider: a < s.length - 1, key: e.id },
                      r.a.createElement(
                        ba.a,
                        null,
                        r.a.createElement(
                          V.a,
                          {
                            className: i.avatar,
                            size: 'small',
                            style: { backgroundColor: e.color }
                          },
                          e.initials
                        )
                      ),
                      r.a.createElement(Ve.a, { primary: e.name }),
                      r.a.createElement(Z.a, { variant: 'subtitle2' }, e.value)
                    );
                  })
                )
              ),
              r.a.createElement(X.a, null),
              r.a.createElement(
                nt.a,
                { className: i.actions },
                r.a.createElement(
                  Qe.a,
                  {
                    color: 'primary',
                    component: Y.a,
                    size: 'small',
                    to: '#',
                    variant: 'text'
                  },
                  'See all',
                  r.a.createElement(it.a, { className: i.arrowForwardIcon })
                )
              )
            )
          );
        },
        ft = t(918),
        yt = t(102),
        Et = ['className'],
        jt = Object(R.a)(function(e) {
          return {
            root: {},
            statsContainer: { display: 'flex' },
            statsItem: {
              padding: e.spacing(3),
              flexGrow: 1,
              '&:first-of-type': {
                borderRight: '1px solid '.concat(e.palette.divider)
              }
            },
            content: { padding: 0 },
            date: { whiteSpace: 'nowrap' }
          };
        }),
        Ot = function(e) {
          var a = e.className,
            t = Object(q.a)(e, Et),
            i = jt(),
            o = Object(n.useState)([]),
            c = Object(K.a)(o, 2),
            s = c[0],
            l = c[1];
          return (
            Object(n.useEffect)(function() {
              var e = !0;
              return (
                sa.a.get('/api/dashboard/customer-activity').then(function(a) {
                  e && l(a.data.customers);
                }),
                function() {
                  e = !1;
                }
              );
            }, []),
            r.a.createElement(
              wa.a,
              Object.assign({}, t, { className: Object(J.a)(i.root, a) }),
              r.a.createElement(Ca.a, { title: 'Customer Activity' }),
              r.a.createElement(X.a, null),
              r.a.createElement(
                'div',
                { className: i.statsContainer },
                r.a.createElement(
                  'div',
                  { className: i.statsItem },
                  r.a.createElement(
                    Z.a,
                    {
                      align: 'center',
                      component: 'h4',
                      gutterBottom: !0,
                      variant: 'overline'
                    },
                    'Registered'
                  ),
                  r.a.createElement(
                    Z.a,
                    { align: 'center', variant: 'h3' },
                    '15,245'
                  )
                ),
                r.a.createElement(X.a, null),
                r.a.createElement(
                  'div',
                  { className: i.statsItem },
                  r.a.createElement(
                    Z.a,
                    {
                      align: 'center',
                      component: 'h4',
                      gutterBottom: !0,
                      variant: 'overline'
                    },
                    'Online'
                  ),
                  r.a.createElement(
                    Z.a,
                    { align: 'center', variant: 'h3' },
                    '357'
                  )
                )
              ),
              r.a.createElement(X.a, null),
              r.a.createElement(
                Sa.a,
                { className: i.content },
                r.a.createElement(
                  qe.a,
                  { disablePadding: !0 },
                  s.map(function(e, a) {
                    return r.a.createElement(
                      Ye.a,
                      { divider: a < s.length - 1, key: e.id },
                      r.a.createElement(
                        ba.a,
                        null,
                        r.a.createElement(
                          V.a,
                          {
                            alt: 'Customer',
                            component: Y.a,
                            src: e.author.avatar,
                            to: '/management/customers/1'
                          },
                          Object(yt.a)(e.author.name)
                        )
                      ),
                      r.a.createElement(Ve.a, {
                        disableTypography: !0,
                        primary: r.a.createElement(
                          Z.a,
                          {
                            component: Y.a,
                            to: '/management/customers/1',
                            variant: 'h6'
                          },
                          e.author.name
                        ),
                        secondary: r.a.createElement(
                          Z.a,
                          { variant: 'body2' },
                          e.description,
                          ' |',
                          ' ',
                          'payment' === e.type &&
                            r.a.createElement(
                              ft.a,
                              { color: 'inherit', component: Y.a, to: '#' },
                              'See invoice'
                            )
                        )
                      }),
                      r.a.createElement(
                        Z.a,
                        { className: i.date, variant: 'body2' },
                        ga()(e.created_at).fromNow()
                      )
                    );
                  })
                )
              )
            )
          );
        },
        xt = t(954),
        Nt = t(915),
        kt = t(965),
        wt = ['className'],
        Ct = Object(R.a)(function(e) {
          return {
            root: {},
            content: { padding: 0 },
            inner: { minWidth: 700 },
            progressContainer: {
              padding: e.spacing(3),
              display: 'flex',
              justifyContent: 'center'
            },
            actions: { justifyContent: 'flex-end' },
            arrowForwardIcon: { marginLeft: e.spacing(1) }
          };
        }),
        St = {
          complete: y.a.green[600],
          pending: y.a.orange[600],
          rejected: y.a.red[600]
        },
        _t = function(e) {
          var a = e.className,
            t = Object(q.a)(e, wt),
            i = Ct(),
            o = Object(n.useState)(null),
            c = Object(K.a)(o, 2),
            s = c[0],
            l = c[1];
          return (
            Object(n.useEffect)(function() {
              var e = !0;
              return (
                sa.a.get('/api/dashboard/latest-orders').then(function(a) {
                  e && l(a.data.orders);
                }),
                function() {
                  e = !1;
                }
              );
            }, []),
            r.a.createElement(
              wa.a,
              Object.assign({}, t, { className: Object(J.a)(i.root, a) }),
              r.a.createElement(Ca.a, {
                action: r.a.createElement(ne.e, null),
                title: 'Latest Orders'
              }),
              r.a.createElement(X.a, null),
              r.a.createElement(
                Sa.a,
                { className: i.content },
                r.a.createElement(
                  Ga.a,
                  { options: { suppressScrollY: !0 } },
                  r.a.createElement(
                    'div',
                    { className: i.inner },
                    s &&
                      r.a.createElement(
                        Qa.a,
                        null,
                        r.a.createElement(
                          xt.a,
                          null,
                          r.a.createElement(
                            at.a,
                            null,
                            r.a.createElement(
                              tt.a,
                              { sortDirection: 'desc' },
                              r.a.createElement(
                                Nt.a,
                                { enterDelay: 300, title: 'Sort' },
                                r.a.createElement(
                                  kt.a,
                                  { active: !0, direction: 'desc' },
                                  'Date'
                                )
                              )
                            ),
                            r.a.createElement(tt.a, null, 'Customer'),
                            r.a.createElement(tt.a, null, 'Items'),
                            r.a.createElement(tt.a, null, 'Total'),
                            r.a.createElement(tt.a, null, 'Status'),
                            r.a.createElement(
                              tt.a,
                              { align: 'right' },
                              'Actions'
                            )
                          )
                        ),
                        r.a.createElement(
                          et.a,
                          null,
                          s.map(function(e) {
                            return r.a.createElement(
                              at.a,
                              { hover: !0, key: e.id },
                              r.a.createElement(tt.a, null, e.ref),
                              r.a.createElement(tt.a, null, e.customer.name),
                              r.a.createElement(tt.a, null, e.items),
                              r.a.createElement(
                                tt.a,
                                { className: i.totalCell },
                                e.currency,
                                ' ',
                                e.value
                              ),
                              r.a.createElement(
                                tt.a,
                                null,
                                r.a.createElement(
                                  ne.g,
                                  { color: St[e.status], variant: 'outlined' },
                                  e.status
                                )
                              ),
                              r.a.createElement(
                                tt.a,
                                { align: 'right' },
                                r.a.createElement(
                                  Qe.a,
                                  {
                                    color: 'primary',
                                    component: Y.a,
                                    size: 'small',
                                    to: 'management/orders/1',
                                    variant: 'outlined'
                                  },
                                  'View'
                                )
                              )
                            );
                          })
                        )
                      )
                  )
                )
              ),
              r.a.createElement(
                nt.a,
                { className: i.actions },
                r.a.createElement(
                  Qe.a,
                  {
                    color: 'primary',
                    component: Y.a,
                    size: 'small',
                    to: 'management/orders',
                    variant: 'text'
                  },
                  'See all',
                  r.a.createElement(it.a, { className: i.arrowForwardIcon })
                )
              )
            )
          );
        },
        Tt = Object(R.a)(function(e) {
          return {
            root: { padding: e.spacing(3) },
            container: { '& > *': { height: '100%' } }
          };
        }),
        It = function() {
          var e = Tt();
          return r.a.createElement(
            ne.k,
            { className: e.root, title: 'Analytics Dashboard' },
            r.a.createElement(Xa, null),
            r.a.createElement(
              ka.a,
              { className: e.container, container: !0, spacing: 3 },
              r.a.createElement(
                ka.a,
                { item: !0, xs: 12 },
                r.a.createElement(gt, null)
              ),
              r.a.createElement(
                ka.a,
                { item: !0, lg: 8, xl: 9, xs: 12 },
                r.a.createElement(Ha, null)
              ),
              r.a.createElement(
                ka.a,
                { item: !0, lg: 4, xl: 3, xs: 12 },
                r.a.createElement(Ma, null)
              ),
              r.a.createElement(
                ka.a,
                { item: !0, lg: 8, xs: 12 },
                r.a.createElement(_t, null)
              ),
              r.a.createElement(
                ka.a,
                { item: !0, lg: 4, xs: 12 },
                r.a.createElement(Ot, null)
              ),
              r.a.createElement(
                ka.a,
                { item: !0, lg: 8, xs: 12 },
                r.a.createElement(ut, null)
              ),
              r.a.createElement(
                ka.a,
                { item: !0, lg: 4, xs: 12 },
                r.a.createElement(vt, null)
              )
            )
          );
        },
        At = ['className'],
        Pt = Object(R.a)(function(e) {
          return {
            root: {},
            dates: {
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end'
            },
            startDateButton: { marginRight: e.spacing(1) },
            endDateButton: { marginLeft: e.spacing(1) },
            calendarTodayIcon: { marginRight: e.spacing(1) }
          };
        }),
        Bt = function(e) {
          var a = e.className,
            t = Object(q.a)(e, At),
            n = Pt();
          return r.a.createElement(
            'div',
            Object.assign({}, t, { className: Object(J.a)(n.root, a) }),
            r.a.createElement(
              Z.a,
              { component: 'h2', gutterBottom: !0, variant: 'overline' },
              'Home'
            ),
            r.a.createElement(
              Z.a,
              { component: 'h1', gutterBottom: !0, variant: 'h3' },
              'Good Morning, ',
              'Shen Zhi'
            ),
            r.a.createElement(
              Z.a,
              { variant: 'subtitle1' },
              "Here's what's happening"
            )
          );
        };
      Bt.defaultProps = {};
      var Dt = Bt,
        zt = ['className'],
        Mt = Object(R.a)(function(e) {
          return {
            root: {},
            content: { padding: 0 },
            inner: { minWidth: 900 },
            author: { display: 'flex', alignItems: 'center' },
            avatar: { marginRight: e.spacing(1) },
            tags: { '& > * + *': { marginLeft: e.spacing(1) } },
            actions: { justifyContent: 'flex-end' },
            arrowForwardIcon: { marginLeft: e.spacing(1) }
          };
        }),
        Ft = function(e) {
          var a = e.className,
            t = Object(q.a)(e, zt),
            i = Mt(),
            o = Object(n.useState)([]),
            c = Object(K.a)(o, 2),
            s = c[0],
            l = c[1];
          return (
            Object(n.useEffect)(function() {
              var e = !0;
              return (
                sa.a.get('/api/dashboard/latest-projects').then(function(a) {
                  e && l(a.data.projects);
                }),
                function() {
                  e = !1;
                }
              );
            }, []),
            r.a.createElement(
              wa.a,
              Object.assign({}, t, { className: Object(J.a)(i.root, a) }),
              r.a.createElement(Ca.a, {
                action: r.a.createElement(ne.e, null),
                title: 'Latest projects'
              }),
              r.a.createElement(X.a, null),
              r.a.createElement(
                Sa.a,
                { className: i.content },
                r.a.createElement(
                  Ga.a,
                  { options: { suppressScrollY: !0 } },
                  r.a.createElement(
                    'div',
                    { className: i.inner },
                    r.a.createElement(
                      Qa.a,
                      null,
                      r.a.createElement(
                        xt.a,
                        null,
                        r.a.createElement(
                          at.a,
                          null,
                          r.a.createElement(
                            tt.a,
                            { sortDirection: 'desc' },
                            r.a.createElement(
                              Nt.a,
                              { enterDelay: 300, title: 'Sort' },
                              r.a.createElement(
                                kt.a,
                                { active: !0, direction: 'desc' },
                                'Name'
                              )
                            )
                          ),
                          r.a.createElement(tt.a, null, 'Owner'),
                          r.a.createElement(tt.a, null, 'Amount'),
                          r.a.createElement(tt.a, null, 'Tags'),
                          r.a.createElement(tt.a, { align: 'right' }, 'Actions')
                        )
                      ),
                      r.a.createElement(
                        et.a,
                        null,
                        s.map(function(e) {
                          return r.a.createElement(
                            at.a,
                            { hover: !0, key: e.id },
                            r.a.createElement(tt.a, null, e.title),
                            r.a.createElement(
                              tt.a,
                              null,
                              r.a.createElement(
                                'div',
                                { className: i.author },
                                r.a.createElement(
                                  V.a,
                                  {
                                    alt: 'Author',
                                    className: i.avatar,
                                    src: e.author.avatar
                                  },
                                  Object(yt.a)(e.author.name)
                                ),
                                e.author.name
                              )
                            ),
                            r.a.createElement(tt.a, null, e.currency, e.price),
                            r.a.createElement(
                              tt.a,
                              null,
                              r.a.createElement(
                                'div',
                                { className: i.tags },
                                e.tags.map(function(e) {
                                  return r.a.createElement(
                                    ne.g,
                                    { color: e.color, key: e.text },
                                    e.text
                                  );
                                })
                              )
                            ),
                            r.a.createElement(
                              tt.a,
                              { align: 'right' },
                              r.a.createElement(
                                Qe.a,
                                {
                                  color: 'primary',
                                  component: Y.a,
                                  size: 'small',
                                  to: '/projects/1/overview',
                                  variant: 'outlined'
                                },
                                'View'
                              )
                            )
                          );
                        })
                      )
                    )
                  )
                )
              ),
              r.a.createElement(
                nt.a,
                { className: i.actions },
                r.a.createElement(
                  Qe.a,
                  {
                    color: 'primary',
                    component: Y.a,
                    size: 'small',
                    to: '/management/projects',
                    variant: 'text'
                  },
                  'See all',
                  r.a.createElement(it.a, { className: i.arrowForwardIcon })
                )
              )
            )
          );
        },
        Gt = t(501),
        Rt = t.n(Gt),
        Lt = t(54),
        Wt = ['className'],
        Ut = Object(R.a)(function(e) {
          return {
            root: {
              padding: e.spacing(3),
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            },
            details: {
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap'
            },
            label: { marginLeft: e.spacing(1) },
            avatar: { backgroundImage: Lt.a.blue, height: 48, width: 48 }
          };
        }),
        $t = function(e) {
          var a = e.className,
            t = Object(q.a)(e, Wt),
            n = Ut(),
            i = '12',
            o = '-10%';
          return r.a.createElement(
            wa.a,
            Object.assign({}, t, { className: Object(J.a)(n.root, a) }),
            r.a.createElement(
              'div',
              null,
              r.a.createElement(
                Z.a,
                { component: 'h3', gutterBottom: !0, variant: 'overline' },
                'New projects'
              ),
              r.a.createElement(
                'div',
                { className: n.details },
                r.a.createElement(Z.a, { variant: 'h3' }, i),
                r.a.createElement(
                  ne.g,
                  {
                    className: n.label,
                    color: y.a.red[600],
                    variant: 'outlined'
                  },
                  o
                )
              )
            ),
            r.a.createElement(
              V.a,
              { className: n.avatar },
              r.a.createElement(Rt.a, null)
            )
          );
        },
        Ht = t(185),
        Kt = t.n(Ht),
        qt = ['className'],
        Yt = Object(R.a)(function(e) {
          return {
            root: {
              color: e.palette.white,
              backgroundColor: e.palette.primary.main,
              padding: e.spacing(3),
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            },
            details: {
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap'
            },
            avatar: {
              backgroundColor: e.palette.white,
              color: e.palette.primary.main,
              height: 48,
              width: 48
            }
          };
        }),
        Jt = function(e) {
          var a = e.className,
            t = Object(q.a)(e, qt),
            n = Yt(),
            i = '25.50',
            o = '$';
          return r.a.createElement(
            wa.a,
            Object.assign({}, t, { className: Object(J.a)(n.root, a) }),
            r.a.createElement(
              'div',
              null,
              r.a.createElement(
                Z.a,
                {
                  color: 'inherit',
                  component: 'h3',
                  gutterBottom: !0,
                  variant: 'overline'
                },
                'Roi per customer'
              ),
              r.a.createElement(
                'div',
                { className: n.details },
                r.a.createElement(
                  Z.a,
                  { color: 'inherit', variant: 'h3' },
                  o,
                  i
                )
              )
            ),
            r.a.createElement(
              V.a,
              { className: n.avatar, color: 'inherit' },
              r.a.createElement(Kt.a, null)
            )
          );
        },
        Vt = t(502),
        Zt = t.n(Vt),
        Xt = ['task', 'className'],
        Qt = Object(R.a)(function(e) {
          return {
            root: {},
            critical: { '& $indicator': { borderColor: y.a.red[600] } },
            indicator: {
              height: 12,
              width: 12,
              borderWidth: 4,
              borderStyle: 'solid',
              borderColor: y.a.grey[100],
              borderRadius: '50%'
            },
            viewButton: { marginLeft: e.spacing(2) }
          };
        }),
        en = function(e) {
          var a = e.task,
            t = e.className,
            n = Object(q.a)(e, Xt),
            i = Qt(),
            o = 'N/A',
            c = !1;
          if (a.deadline) {
            var s = ga()(),
              l = ga()(a.deadline);
            l.isAfter(s) &&
              l.diff(s, 'day') < 3 &&
              ((o = l.diff(s, 'day') + ' days remaining'), (c = !0));
          }
          return r.a.createElement(
            Ye.a,
            Object.assign({}, n, {
              className: Object(J.a)(i.root, Object(da.a)({}, i.critical, c), t)
            }),
            r.a.createElement(
              Je.a,
              null,
              r.a.createElement('span', { className: i.indicator })
            ),
            r.a.createElement(Ve.a, {
              className: i.listItemText,
              primary: a.title,
              primaryTypographyProps: { variant: 'h6', noWrap: !0 },
              secondary: o
            }),
            r.a.createElement(ne.s, { avatars: a.members, limit: 3 }),
            r.a.createElement(
              Nt.a,
              { title: 'View task' },
              r.a.createElement(
                Ze.a,
                { className: i.viewButton, edge: 'end', size: 'small' },
                r.a.createElement(Zt.a, null)
              )
            )
          );
        },
        an = ['className'],
        tn = Object(R.a)(function(e) {
          return {
            root: {},
            content: { padding: 0 },
            inner: { minWidth: 400 },
            actions: { justifyContent: 'flex-end' },
            arrowForwardIcon: { marginLeft: e.spacing(1) }
          };
        }),
        nn = function(e) {
          var a = e.className,
            t = Object(q.a)(e, an),
            i = tn(),
            o = Object(n.useState)([]),
            c = Object(K.a)(o, 2),
            s = c[0],
            l = c[1];
          return (
            Object(n.useEffect)(function() {
              var e = !0;
              return (
                sa.a.get('/api/tasks').then(function(a) {
                  e && l(a.data.tasks);
                }),
                function() {
                  e = !1;
                }
              );
            }, []),
            r.a.createElement(
              wa.a,
              Object.assign({}, t, { className: Object(J.a)(i.root, a) }),
              r.a.createElement(Ca.a, {
                action: r.a.createElement(ne.e, null),
                title: 'Team Tasks'
              }),
              r.a.createElement(X.a, null),
              r.a.createElement(
                Sa.a,
                { className: i.content },
                r.a.createElement(
                  Ga.a,
                  null,
                  r.a.createElement(
                    'div',
                    { className: i.inner },
                    r.a.createElement(
                      qe.a,
                      null,
                      s.map(function(e, a) {
                        return r.a.createElement(en, {
                          divider: a < s.length - 1,
                          key: e.id,
                          task: e
                        });
                      })
                    )
                  )
                )
              ),
              r.a.createElement(X.a, null),
              r.a.createElement(
                nt.a,
                { className: i.actions },
                r.a.createElement(
                  Qe.a,
                  {
                    color: 'primary',
                    component: Y.a,
                    size: 'small',
                    to: '/kanban-board',
                    variant: 'text'
                  },
                  'See all',
                  r.a.createElement(it.a, { className: i.arrowForwardIcon })
                )
              )
            )
          );
        },
        rn = ['className'],
        on = Object(R.a)(function(e) {
          return {
            root: {
              padding: e.spacing(3),
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            },
            details: {
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap'
            },
            label: { marginLeft: e.spacing(1) },
            avatar: { backgroundImage: Lt.a.green, height: 48, width: 48 }
          };
        }),
        cn = function(e) {
          var a = e.className,
            t = Object(q.a)(e, rn),
            n = on(),
            i = '24,000',
            o = '$',
            c = '+4.5%';
          return r.a.createElement(
            wa.a,
            Object.assign({}, t, { className: Object(J.a)(n.root, a) }),
            r.a.createElement(
              'div',
              null,
              r.a.createElement(
                Z.a,
                { component: 'h3', gutterBottom: !0, variant: 'overline' },
                'Todays money'
              ),
              r.a.createElement(
                'div',
                { className: n.details },
                r.a.createElement(Z.a, { variant: 'h3' }, o, i),
                r.a.createElement(
                  ne.g,
                  {
                    className: n.label,
                    color: y.a.green[600],
                    variant: 'outlined'
                  },
                  c
                )
              )
            ),
            r.a.createElement(
              V.a,
              { className: n.avatar },
              r.a.createElement(Kt.a, null)
            )
          );
        },
        sn = t(503),
        ln = t.n(sn),
        mn = ['className'],
        un = Object(R.a)(function(e) {
          return {
            root: {
              padding: e.spacing(3),
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            },
            content: { flexGrow: 1 },
            details: {
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap'
            },
            progress: { margin: e.spacing(0, 1), flexGrow: 1 },
            avatar: { backgroundImage: Lt.a.orange, height: 48, width: 48 }
          };
        }),
        dn = function(e) {
          var a = e.className,
            t = Object(q.a)(e, mn),
            n = un(),
            i = 97;
          return r.a.createElement(
            wa.a,
            Object.assign({}, t, { className: Object(J.a)(n.root, a) }),
            r.a.createElement(
              'div',
              { className: n.content },
              r.a.createElement(
                Z.a,
                { component: 'h3', gutterBottom: !0, variant: 'overline' },
                'System Health'
              ),
              r.a.createElement(
                'div',
                { className: n.details },
                r.a.createElement(Z.a, { variant: 'h3' }, i, '%'),
                r.a.createElement(L.a, {
                  className: n.progress,
                  value: i,
                  variant: 'determinate'
                })
              )
            ),
            r.a.createElement(
              V.a,
              { className: n.avatar },
              r.a.createElement(ln.a, null)
            )
          );
        },
        pn = t(94),
        gn = ['data', 'labels', 'className'],
        hn = Object(R.a)(function() {
          return { root: { position: 'relative' } };
        }),
        bn = function(e) {
          var a = e.data,
            t = e.labels,
            n = e.className,
            i = Object(q.a)(e, gn),
            o = hn(),
            c = Object(Ia.a)(),
            s = {
              datasets: [
                {
                  label: 'Views',
                  backgroundColor: 'rgba(255,255,255,0.4)',
                  data: a
                }
              ],
              labels: t
            },
            l = {
              responsive: !0,
              maintainAspectRatio: !1,
              animation: !1,
              cornerRadius: 20,
              legend: { display: !1 },
              layout: { padding: 0 },
              scales: {
                xAxes: [
                  {
                    stacked: !1,
                    barThickness: 12,
                    maxBarThickness: 10,
                    barPercentage: 0.9,
                    categoryPercentage: 1,
                    gridLines: { display: !1, drawBorder: !1 },
                    ticks: { display: !1 }
                  }
                ],
                yAxes: [
                  {
                    stacked: !0,
                    gridLines: { display: !1, drawBorder: !1 },
                    ticks: { beginAtZero: !0, display: !1 }
                  }
                ]
              },
              tooltips: {
                enabled: !0,
                mode: 'index',
                intersect: !1,
                caretSize: 10,
                yPadding: 20,
                xPadding: 20,
                borderWidth: 1,
                borderColor: c.palette.divider,
                backgroundColor: c.palette.white,
                titleFontColor: c.palette.text.primary,
                bodyFontColor: c.palette.text.secondary,
                footerFontColor: c.palette.text.secondary,
                callbacks: {
                  legend: function() {},
                  title: function() {},
                  label: function(e) {
                    var a = 'Views: '.concat(e.yLabel);
                    return a;
                  }
                }
              }
            };
          return r.a.createElement(
            'div',
            Object.assign({}, i, { className: Object(J.a)(o.root, n) }),
            r.a.createElement(Ta.a, { data: s, options: l })
          );
        },
        vn = ['className'],
        fn = Object(R.a)(function(e) {
          return {
            root: {
              backgroundImage: Lt.a.indigo,
              color: e.palette.primary.contrastText
            },
            content: { paddingTop: 0 },
            itemDivider: { borderBottomColor: 'rgba(255,255,255,0.2)' },
            actions: { paddingTop: 0, justifyContent: 'flex-end' },
            arrowForwardIcon: { marginLeft: e.spacing(1) }
          };
        });
      var yn = function(e) {
          var a = e.className,
            t = Object(q.a)(e, vn),
            i = fn(),
            o = Object(n.useState)([
              163,
              166,
              161,
              159,
              99,
              163,
              173,
              166,
              167,
              183,
              176,
              172
            ]),
            c = Object(K.a)(o, 2),
            s = c[0],
            l = c[1];
          Object(n.useEffect)(function() {
            var e = !0;
            return (
              setInterval(function() {
                e &&
                  l(function(e) {
                    var a = Object(pn.a)(e);
                    return a.shift(), a.push(0), a;
                  }),
                  setTimeout(function() {
                    e &&
                      l(function(e) {
                        var a,
                          t,
                          n = Object(pn.a)(e),
                          r =
                            ((a = 100),
                            (t = 200),
                            (a = Math.ceil(a)),
                            (t = Math.floor(t)),
                            Math.floor(Math.random() * (t - a + 1)) + a);
                        return n.pop(), n.push(r), n;
                      });
                  }, 500);
              }, 2e3),
              function() {
                e = !1;
              }
            );
          }, []);
          var m = s.map(function(e, a) {
            return a;
          });
          return r.a.createElement(
            wa.a,
            Object.assign({}, t, { className: Object(J.a)(i.root, a) }),
            r.a.createElement(Ca.a, {
              action: r.a.createElement(
                Z.a,
                { color: 'inherit', gutterBottom: !0, variant: 'h3' },
                0 === s[s.length - 1] ? s[s.length - 2] : s[s.length - 1]
              ),
              subheader: 'Page views per second',
              subheaderTypographyProps: { color: 'inherit' },
              title: 'Active users',
              titleTypographyProps: { color: 'inherit' }
            }),
            r.a.createElement(
              Sa.a,
              { className: i.content },
              r.a.createElement(bn, { data: s, labels: m }),
              r.a.createElement(
                qe.a,
                null,
                [
                  { pathname: '/projects', views: '24' },
                  { pathname: '/chat', views: '21' },
                  { pathname: '/cart', views: '15' },
                  { pathname: '/cart/checkout', views: '8' }
                ].map(function(e) {
                  return r.a.createElement(
                    Ye.a,
                    {
                      classes: { divider: i.itemDivider },
                      divider: !0,
                      key: e.pathname
                    },
                    r.a.createElement(Ve.a, {
                      primary: e.pathname,
                      primaryTypographyProps: {
                        color: 'inherit',
                        variant: 'body1'
                      }
                    }),
                    r.a.createElement(Z.a, { color: 'inherit' }, e.views)
                  );
                })
              )
            ),
            r.a.createElement(
              nt.a,
              { className: i.actions },
              r.a.createElement(
                Qe.a,
                {
                  color: 'inherit',
                  component: Y.a,
                  size: 'small',
                  to: '#',
                  variant: 'text'
                },
                'See all',
                r.a.createElement(it.a, { className: i.arrowForwardIcon })
              )
            )
          );
        },
        En = t(204),
        jn = ['className', 'data', 'labels'],
        On = Object(R.a)(function() {
          return { root: { position: 'relative' } };
        }),
        xn = function(e) {
          var a = e.className,
            t = e.data,
            n = e.labels,
            i = Object(q.a)(e, jn),
            o = On(),
            c = Object(Ia.a)(),
            s = {
              responsive: !0,
              maintainAspectRatio: !1,
              animation: !1,
              legend: { display: !1 },
              layout: { padding: 0 },
              scales: {
                xAxes: [
                  {
                    gridLines: { display: !1, drawBorder: !1 },
                    ticks: { padding: 20, fontColor: c.palette.text.secondary }
                  }
                ],
                yAxes: [
                  {
                    gridLines: {
                      borderDash: [2],
                      borderDashOffset: [2],
                      color: c.palette.divider,
                      drawBorder: !1,
                      zeroLineBorderDash: [2],
                      zeroLineBorderDashOffset: [2],
                      zeroLineColor: c.palette.divider
                    },
                    ticks: {
                      padding: 20,
                      fontColor: c.palette.text.secondary,
                      beginAtZero: !0,
                      min: 0,
                      maxTicksLimit: 7,
                      callback: function(e) {
                        return e > 0 ? e + 'K' : e;
                      }
                    }
                  }
                ]
              },
              tooltips: {
                enabled: !0,
                mode: 'index',
                intersect: !1,
                caretSize: 10,
                yPadding: 20,
                xPadding: 20,
                borderWidth: 1,
                borderColor: c.palette.divider,
                backgroundColor: c.palette.white,
                titleFontColor: c.palette.text.primary,
                bodyFontColor: c.palette.text.secondary,
                footerFontColor: c.palette.text.secondary,
                callbacks: {
                  title: function() {},
                  label: function(e) {
                    var a = 'Income: '.concat(e.yLabel);
                    return e.yLabel > 0 && (a += 'K'), a;
                  }
                }
              }
            };
          return r.a.createElement(
            'div',
            Object.assign({}, i, { className: Object(J.a)(o.root, a) }),
            r.a.createElement(Ta.d, {
              data: function(e) {
                var a = e.getContext('2d').createLinearGradient(0, 0, 0, 400);
                return (
                  a.addColorStop(
                    0,
                    Object(En.fade)(c.palette.secondary.main, 0.2)
                  ),
                  a.addColorStop(0.9, 'rgba(255,255,255,0)'),
                  a.addColorStop(1, 'rgba(255,255,255,0)'),
                  {
                    datasets: [
                      {
                        data: t,
                        backgroundColor: a,
                        borderColor: c.palette.secondary.main,
                        pointBorderColor: '#FFFFFF',
                        pointBorderWidth: 3,
                        pointRadius: 6,
                        pointBackgroundColor: c.palette.secondary.main
                      }
                    ],
                    labels: n
                  }
                );
              },
              options: s
            })
          );
        },
        Nn = ['className'],
        kn = Object(R.a)(function(e) {
          return {
            root: {},
            content: {},
            buttons: {
              display: 'flex',
              justifyContent: 'center',
              '& > *': { marginLeft: e.spacing(1) }
            },
            inner: { height: 375, minWidth: 500 },
            chart: { height: '100%' }
          };
        }),
        wn = function(e) {
          var a = e.className,
            t = Object(q.a)(e, Nn),
            n = kn(),
            i = {
              thisWeek: { data: [], labels: [] },
              thisMonth: { data: [], labels: [] },
              thisYear: {
                data: [10, 5, 11, 20, 13, 28, 18, 4, 13, 12, 13, 5],
                labels: [
                  'Jan',
                  'Feb',
                  'Mar',
                  'Apr',
                  'May',
                  'Jun',
                  'Jul',
                  'Aug',
                  'Sep',
                  'Oct',
                  'Nov',
                  'Dec'
                ]
              }
            };
          return r.a.createElement(
            wa.a,
            Object.assign({}, t, { className: Object(J.a)(n.root, a) }),
            r.a.createElement(Ca.a, {
              action: r.a.createElement(ne.e, null),
              title: 'Performance Over Time'
            }),
            r.a.createElement(X.a, null),
            r.a.createElement(
              Sa.a,
              { className: n.content },
              r.a.createElement(
                Ga.a,
                null,
                r.a.createElement(
                  'div',
                  { className: n.inner },
                  r.a.createElement(xn, {
                    className: n.chart,
                    data: i.thisYear.data,
                    labels: i.thisYear.labels
                  })
                )
              )
            )
          );
        },
        Cn = Object(R.a)(function(e) {
          return {
            root: { padding: e.spacing(3) },
            container: { marginTop: e.spacing(3) }
          };
        }),
        Sn = function() {
          var e = Cn();
          return r.a.createElement(
            ne.k,
            { className: e.root, title: 'Default Dashboard' },
            r.a.createElement(Dt, null),
            r.a.createElement(
              ka.a,
              { className: e.container, container: !0, spacing: 3 },
              r.a.createElement(
                ka.a,
                { item: !0, lg: 3, sm: 6, xs: 12 },
                r.a.createElement(cn, null)
              ),
              r.a.createElement(
                ka.a,
                { item: !0, lg: 3, sm: 6, xs: 12 },
                r.a.createElement($t, null)
              ),
              r.a.createElement(
                ka.a,
                { item: !0, lg: 3, sm: 6, xs: 12 },
                r.a.createElement(dn, null)
              ),
              r.a.createElement(
                ka.a,
                { item: !0, lg: 3, sm: 6, xs: 12 },
                r.a.createElement(Jt, null)
              ),
              r.a.createElement(
                ka.a,
                { item: !0, lg: 3, xs: 12 },
                r.a.createElement(yn, null)
              ),
              r.a.createElement(
                ka.a,
                { item: !0, lg: 9, xs: 12 },
                r.a.createElement(wn, null)
              ),
              r.a.createElement(
                ka.a,
                { item: !0, lg: 5, xl: 4, xs: 12 },
                r.a.createElement(nn, null)
              ),
              r.a.createElement(
                ka.a,
                { item: !0, lg: 7, xl: 8, xs: 12 },
                r.a.createElement(Ft, null)
              )
            )
          );
        },
        _n = ['className'],
        Tn = Object(R.a)(function(e) {
          return {
            root: {},
            summaryButton: { backgroundColor: e.palette.white },
            barChartIcon: { marginRight: e.spacing(1) },
            image: { width: '100%', maxHeight: 400 }
          };
        }),
        In = function(e) {
          var a = e.className,
            t = Object(q.a)(e, _n),
            n = Tn(),
            i = Object(g.d)(function(e) {
              return e.session;
            });
          return r.a.createElement(
            'div',
            Object.assign({}, t, { className: Object(J.a)(n.root, a) }),
            r.a.createElement(
              ka.a,
              {
                alignItems: 'center',
                container: !0,
                justify: 'space-between',
                spacing: 3
              },
              r.a.createElement(
                ka.a,
                { item: !0, md: 6, xs: 12 },
                r.a.createElement(
                  Z.a,
                  { component: 'h2', gutterBottom: !0, variant: 'overline' },
                  'Home'
                ),
                r.a.createElement(
                  Z.a,
                  { component: 'h1', gutterBottom: !0, variant: 'h3' },
                  'Good Morning, ',
                  i.user.first_name
                ),
                r.a.createElement(
                  Z.a,
                  { gutterBottom: !0, variant: 'subtitle1' },
                  'Here\u2019s what\u2019s happening with your projects today'
                ),
                r.a.createElement(
                  Qe.a,
                  {
                    className: n.summaryButton,
                    edge: 'start',
                    variant: 'contained'
                  },
                  r.a.createElement(ie.a, { className: n.barChartIcon }),
                  'View summary'
                )
              ),
              r.a.createElement(
                ae.a,
                { smDown: !0 },
                r.a.createElement(
                  ka.a,
                  { item: !0, md: 6 },
                  r.a.createElement('img', {
                    alt: 'Cover',
                    className: n.image,
                    src: '/images/undraw_growth_analytics_8btt.svg'
                  })
                )
              )
            )
          );
        },
        An = ['className'],
        Pn = Object(R.a)(function(e) {
          var a;
          return {
            root: {},
            content: { padding: 0 },
            item:
              ((a = { padding: e.spacing(3), textAlign: 'center' }),
              Object(da.a)(a, e.breakpoints.up('md'), {
                '&:not(:last-of-type)': {
                  borderRight: '1px solid '.concat(e.palette.divider)
                }
              }),
              Object(da.a)(a, e.breakpoints.down('sm'), {
                '&:not(:last-of-type)': {
                  borderBottom: '1px solid '.concat(e.palette.divider)
                }
              }),
              a),
            titleWrapper: {
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            },
            label: { marginLeft: e.spacing(1) },
            overline: { marginTop: e.spacing(1) }
          };
        }),
        Bn = function(e) {
          var a = e.className,
            t = Object(q.a)(e, An),
            i = Pn(),
            o = Object(n.useState)(null),
            c = Object(K.a)(o, 2),
            s = c[0],
            l = c[1];
          return (
            Object(n.useEffect)(function() {
              var e = !0;
              return (
                sa.a.get('/api/account/statistics').then(function(a) {
                  e && l(a.data.statistics);
                }),
                function() {
                  e = !1;
                }
              );
            }, []),
            s
              ? r.a.createElement(
                  wa.a,
                  Object.assign({}, t, { className: Object(J.a)(i.root, a) }),
                  r.a.createElement(
                    ka.a,
                    {
                      alignItems: 'center',
                      container: !0,
                      justify: 'space-between'
                    },
                    r.a.createElement(
                      ka.a,
                      { className: i.item, item: !0, md: 3, sm: 6, xs: 12 },
                      r.a.createElement(Z.a, { variant: 'h2' }, '$', s.payout),
                      r.a.createElement(
                        Z.a,
                        { className: i.overline, variant: 'overline' },
                        'Next payout'
                      )
                    ),
                    r.a.createElement(
                      ka.a,
                      { className: i.item, item: !0, md: 3, sm: 6, xs: 12 },
                      r.a.createElement(
                        Z.a,
                        { variant: 'h2' },
                        '$',
                        s.projects
                      ),
                      r.a.createElement(
                        Z.a,
                        { className: i.overline, variant: 'overline' },
                        'Total products'
                      )
                    ),
                    r.a.createElement(
                      ka.a,
                      { className: i.item, item: !0, md: 3, sm: 6, xs: 12 },
                      r.a.createElement(Z.a, { variant: 'h2' }, s.visitors),
                      r.a.createElement(
                        Z.a,
                        { className: i.overline, variant: 'overline' },
                        "Today's Visitors"
                      )
                    ),
                    r.a.createElement(
                      ka.a,
                      { className: i.item, item: !0, md: 3, sm: 6, xs: 12 },
                      r.a.createElement(
                        'div',
                        { className: i.titleWrapper },
                        r.a.createElement(
                          Z.a,
                          { component: 'span', variant: 'h2' },
                          s.watching
                        ),
                        r.a.createElement(
                          ne.g,
                          { className: i.label, color: y.a.green[600] },
                          'Live'
                        )
                      ),
                      r.a.createElement(
                        Z.a,
                        { className: i.overline, variant: 'overline' },
                        'Watching now'
                      )
                    )
                  )
                )
              : null
          );
        },
        Dn = t(3),
        zn = t.n(Dn),
        Mn = t(955),
        Fn = t(106),
        Gn = t.n(Fn),
        Rn = t(506),
        Ln = t.n(Rn),
        Wn = t(505),
        Un = t.n(Wn),
        $n = t(504),
        Hn = t.n($n),
        Kn = ['className'],
        qn = Object(R.a)(function(e) {
          return {
            root: {},
            value: { fontWeight: e.typography.fontWeightMedium },
            type: { fontWeight: e.typography.fontWeightMedium }
          };
        }),
        Yn = function(e) {
          var a = e.className,
            t = Object(q.a)(e, Kn),
            n = qn(),
            i = [
              {
                id: zn()(),
                value: 6,
                type: 'invite',
                message: 'to send service quotes'
              },
              {
                id: zn()(),
                value: 2,
                type: 'message',
                message: 'from clients'
              },
              {
                id: zn()(),
                value: 1,
                type: 'payout',
                message: 'that needs your confirmation'
              }
            ],
            o = {
              invite: r.a.createElement(Gn.a, null),
              message: r.a.createElement(Hn.a, null),
              payout: r.a.createElement(Un.a, null)
            };
          return r.a.createElement(
            wa.a,
            Object.assign({}, t, { className: Object(J.a)(n.root, a) }),
            r.a.createElement(
              qe.a,
              null,
              i.map(function(e, a) {
                return r.a.createElement(
                  Ye.a,
                  { divider: a < i.length - 1, key: e.id },
                  r.a.createElement(Je.a, null, o[e.type]),
                  r.a.createElement(
                    Ve.a,
                    null,
                    r.a.createElement(
                      Z.a,
                      { variant: 'body1' },
                      r.a.createElement(
                        'span',
                        { className: n.value },
                        e.value
                      ),
                      ' ',
                      r.a.createElement(
                        'span',
                        { className: n.type },
                        e.type,
                        's'
                      ),
                      ' ',
                      e.message
                    )
                  ),
                  r.a.createElement(
                    Mn.a,
                    null,
                    r.a.createElement(
                      Nt.a,
                      { title: 'View' },
                      r.a.createElement(
                        Ze.a,
                        { edge: 'end', size: 'small' },
                        r.a.createElement(Ln.a, null)
                      )
                    )
                  )
                );
              })
            )
          );
        },
        Jn = t(293),
        Vn = t.n(Jn),
        Zn = ['className'],
        Xn = Object(R.a)(function(e) {
          return {
            root: {},
            header: {
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: e.spacing(2)
            },
            title: {
              position: 'relative',
              '&:before': {
                position: 'absolute',
                bottom: -8,
                left: 0,
                content: '" "',
                height: 3,
                width: 48,
                backgroundColor: e.palette.primary.main
              }
            },
            arrowIcon: { marginLeft: e.spacing(1) }
          };
        }),
        Qn = function(e) {
          var a = e.className,
            t = Object(q.a)(e, Zn),
            i = Xn(),
            o = Object(n.useState)([]),
            c = Object(K.a)(o, 2),
            s = c[0],
            l = c[1];
          return (
            Object(n.useEffect)(function() {
              var e = !0;
              return (
                sa.a.get('/api/account/projects').then(function(a) {
                  e && l(a.data.projects);
                }),
                function() {
                  e = !1;
                }
              );
            }, []),
            r.a.createElement(
              'div',
              Object.assign({}, t, { className: Object(J.a)(i.root, a) }),
              r.a.createElement(
                'div',
                { className: i.header },
                r.a.createElement(
                  Z.a,
                  { className: i.title, variant: 'h5' },
                  'Active Projects'
                ),
                r.a.createElement(
                  Qe.a,
                  { component: Y.a, to: '/profile/user/projects' },
                  'See all',
                  r.a.createElement(Vn.a, { className: i.arrowIcon })
                )
              ),
              s.map(function(e) {
                return r.a.createElement(ne.n, { key: e.id, project: e });
              })
            )
          );
        },
        er = t(958),
        ar = t(149),
        tr = t.n(ar),
        nr = t(166),
        rr = t.n(nr),
        ir = ['className'],
        or = Object(R.a)(function(e) {
          return {
            root: {},
            content: { padding: 0 },
            addIcon: { marginRight: e.spacing(1) },
            done: {
              textDecoration: 'line-through',
              color: e.palette.text.secondary
            }
          };
        }),
        cr = function(e) {
          var a = e.className,
            t = Object(q.a)(e, ir),
            i = or(),
            o = Object(n.useState)([]),
            c = Object(K.a)(o, 2),
            s = c[0],
            l = c[1];
          Object(n.useEffect)(function() {
            var e = !0;
            return (
              sa.a.get('/api/account/todos').then(function(a) {
                e && l(a.data.todos);
              }),
              function() {
                e = !1;
              }
            );
          }, []);
          return r.a.createElement(
            wa.a,
            Object.assign({}, t, { className: Object(J.a)(i.root, a) }),
            r.a.createElement(Ca.a, {
              action: r.a.createElement(
                Qe.a,
                { color: 'primary', size: 'small' },
                r.a.createElement(tr.a, { className: i.addIcon }),
                'Add'
              ),
              title: 'My todos'
            }),
            r.a.createElement(X.a, null),
            r.a.createElement(
              Sa.a,
              { className: i.content },
              r.a.createElement(
                qe.a,
                null,
                s.map(function(e, a) {
                  return r.a.createElement(
                    Ye.a,
                    { divider: a < s.length - 1, key: e.id },
                    r.a.createElement(
                      Je.a,
                      null,
                      r.a.createElement(er.a, {
                        checked: e.done,
                        onClick: function(a) {
                          return (function(e, a) {
                            e.persist(),
                              l(function(e) {
                                return e.map(function(e) {
                                  return e.id === a.id
                                    ? Object(_.a)(
                                        Object(_.a)({}, a),
                                        {},
                                        { done: !a.done }
                                      )
                                    : e;
                                });
                              });
                          })(a, e);
                        }
                      })
                    ),
                    r.a.createElement(
                      Ve.a,
                      null,
                      r.a.createElement(
                        Z.a,
                        {
                          className: Object(J.a)(
                            Object(da.a)({}, i.done, e.done)
                          ),
                          variant: 'body1'
                        },
                        e.title
                      )
                    ),
                    (function(e) {
                      return e.done
                        ? null
                        : ga()(e.deadline).isBefore(ga()(), 'day')
                        ? r.a.createElement(
                            ne.g,
                            { color: y.a.red[600] },
                            'Due '.concat(ga()(e.deadline).fromNow())
                          )
                        : ga()(e.deadline).isSame(ga()(), 'day')
                        ? r.a.createElement(
                            ne.g,
                            { color: y.a.orange[600] },
                            'Due today'
                          )
                        : r.a.createElement(
                            ne.g,
                            null,
                            'Due '.concat(ga()(e.deadline).fromNow())
                          );
                    })(e),
                    r.a.createElement(
                      Nt.a,
                      { title: 'Archive' },
                      r.a.createElement(
                        Ze.a,
                        null,
                        r.a.createElement(rr.a, null)
                      )
                    )
                  );
                })
              )
            )
          );
        },
        sr = Object(R.a)(function(e) {
          return {
            root: {
              width: e.breakpoints.values.lg,
              maxWidth: '100%',
              margin: '0 auto',
              padding: e.spacing(3)
            },
            statistics: { marginTop: e.spacing(3) },
            notifications: { marginTop: e.spacing(6) },
            projects: { marginTop: e.spacing(6) },
            todos: { marginTop: e.spacing(6) }
          };
        }),
        lr = function() {
          var e = sr();
          return r.a.createElement(
            ne.k,
            { className: e.root, title: 'Overview' },
            r.a.createElement(In, null),
            r.a.createElement(Bn, { className: e.statistics }),
            r.a.createElement(Yn, { className: e.notifications }),
            r.a.createElement(Qn, { className: e.projects }),
            r.a.createElement(cr, { className: e.todos })
          );
        },
        mr = t(507),
        ur = t.n(mr),
        dr = ['className'],
        pr = Object(R.a)(function(e) {
          return {
            root: { backgroundColor: e.palette.white },
            inner: {
              padding: e.spacing(6, 3),
              width: e.breakpoints.values.lg,
              maxWidth: '100%',
              margin: '0 auto'
            },
            content: { marginTop: e.spacing(6) }
          };
        }),
        gr = function(e) {
          var a = e.className,
            t = Object(q.a)(e, dr),
            n = pr();
          return r.a.createElement(
            'div',
            Object.assign({}, t, { className: Object(J.a)(n.root, a) }),
            r.a.createElement(
              'div',
              { className: n.inner },
              r.a.createElement(Z.a, { align: 'center', variant: 'h3' }, 'FAQ'),
              r.a.createElement(
                'div',
                { className: n.content },
                r.a.createElement(
                  qe.a,
                  { disablePadding: !0 },
                  [
                    {
                      title: 'What do we use for styling our components?',
                      description:
                        "We use Material-ui's hooks api as we think it\u2019s the best way of avoiding clutter."
                    },
                    {
                      title:
                        'Are the design files (sketch, figma) included in the Standard Package?',
                      description:
                        'No, we offer the design source file only to Standard Plus Sketch & Figma and Extended Package.'
                    },
                    {
                      title:
                        'Are you providing support for setting up my project?',
                      description:
                        'Yes, we offer email support for all our customers & even skype meetings for our extended license customers.'
                    }
                  ].map(function(e) {
                    return r.a.createElement(
                      Ye.a,
                      { key: zn()() },
                      r.a.createElement(
                        Je.a,
                        null,
                        r.a.createElement(ur.a, null)
                      ),
                      r.a.createElement(Ve.a, {
                        primary: e.title,
                        primaryTypographyProps: { variant: 'h5' },
                        secondary: e.description,
                        secondaryTypographyProps: { variant: 'body1' }
                      })
                    );
                  })
                )
              )
            )
          );
        },
        hr = ['className'],
        br = Object(R.a)(function(e) {
          return {
            root: { backgroundColor: e.palette.white },
            header: Object(da.a)(
              {
                width: e.breakpoints.values.md,
                maxWidth: '100%',
                margin: '0 auto',
                padding: '80px 24px'
              },
              e.breakpoints.up('md'),
              { padding: '160px 24px' }
            ),
            buttons: {
              marginTop: e.spacing(3),
              display: 'flex',
              justifyContent: 'center'
            },
            mediaContainer: {
              margin: '0 auto',
              maxWidth: 1600,
              padding: e.spacing(0, 2),
              overflow: 'hidden'
            },
            media: { width: '100%' },
            stats: {
              backgroundColor: e.palette.primary.main,
              color: e.palette.primary.contrastText,
              padding: e.spacing(1)
            },
            statsInner: {
              width: e.breakpoints.values.md,
              maxWidth: '100%',
              margin: '0 auto'
            }
          };
        }),
        vr = function(e) {
          var a = e.className,
            t = Object(q.a)(e, hr),
            n = br();
          return r.a.createElement(
            'div',
            Object.assign({}, t, { className: Object(J.a)(n.root, a) }),
            r.a.createElement(
              'div',
              { className: n.header },
              r.a.createElement(
                Z.a,
                { align: 'center', gutterBottom: !0, variant: 'h1' },
                'Devias React Material Kit - PRO'
              ),
              r.a.createElement(
                Z.a,
                { align: 'center', component: 'h2', variant: 'subtitle1' },
                'A professional kit that comes with ready-to-use Material-UI\xa9 components developed with one common goal in mind, help you build faster & beautiful applications. Each component is fully customizable, responsive and easy to integrate.'
              ),
              r.a.createElement(
                'div',
                { className: n.buttons },
                r.a.createElement(
                  Qe.a,
                  {
                    color: 'primary',
                    component: 'a',
                    href:
                      'https://themes.material-ui.com/themes/devias-kit-pro',
                    target: '_blank',
                    variant: 'contained'
                  },
                  'Purchase Devias Kit'
                )
              )
            ),
            r.a.createElement(
              'div',
              { className: n.mediaContainer },
              r.a.createElement('img', {
                alt: 'Demos',
                className: n.media,
                src: '/images/presentation/header.jpg'
              })
            ),
            r.a.createElement(
              'div',
              { className: n.stats },
              r.a.createElement(
                ka.a,
                {
                  alignItems: 'center',
                  className: n.statsInner,
                  container: !0,
                  justify: 'center',
                  spacing: 3
                },
                r.a.createElement(
                  ka.a,
                  { item: !0, lg: 3, md: 6, xs: 12 },
                  r.a.createElement(
                    Z.a,
                    { color: 'inherit', gutterBottom: !0, variant: 'h3' },
                    '30+'
                  ),
                  r.a.createElement(
                    Z.a,
                    { color: 'inherit', variant: 'body2' },
                    'Demo Pages'
                  )
                ),
                r.a.createElement(
                  ka.a,
                  { item: !0, lg: 3, md: 6, xs: 12 },
                  r.a.createElement(
                    Z.a,
                    { color: 'inherit', gutterBottom: !0, variant: 'h3' },
                    'UX'
                  ),
                  r.a.createElement(
                    Z.a,
                    { color: 'inherit', variant: 'body2' },
                    'Complete Flows'
                  )
                ),
                r.a.createElement(
                  ka.a,
                  { item: !0, lg: 3, md: 6, xs: 12 },
                  r.a.createElement(
                    Z.a,
                    { color: 'inherit', gutterBottom: !0, variant: 'h3' },
                    '300+'
                  ),
                  r.a.createElement(
                    Z.a,
                    { color: 'inherit', variant: 'body2' },
                    'Components'
                  )
                ),
                r.a.createElement(
                  ka.a,
                  { item: !0, lg: 3, md: 6, xs: 12 },
                  r.a.createElement(
                    'div',
                    null,
                    r.a.createElement('img', {
                      alt: 'React',
                      src: '/images/react.png'
                    })
                  ),
                  r.a.createElement(
                    Z.a,
                    { color: 'inherit', variant: 'body2' },
                    'React Hooks API'
                  )
                )
              )
            )
          );
        },
        fr = ['className'],
        yr = Object(R.a)(function(e) {
          return {
            root: { backgroundColor: e.palette.white },
            inner: {
              padding: e.spacing(6, 3),
              width: e.breakpoints.values.lg,
              maxWidth: '100%',
              margin: '0 auto'
            },
            media: { '& img': { width: '100%', height: 'auto' } }
          };
        }),
        Er = function(e) {
          var a = e.className,
            t = Object(q.a)(e, fr),
            n = yr();
          return r.a.createElement(
            'div',
            Object.assign({}, t, { className: Object(J.a)(n.root, a) }),
            r.a.createElement(
              'div',
              { className: n.inner },
              r.a.createElement(
                ka.a,
                {
                  alignItems: 'center',
                  container: !0,
                  justify: 'space-between'
                },
                r.a.createElement(
                  ka.a,
                  { item: !0, lg: 3, md: 6, xs: 12 },
                  r.a.createElement(
                    Z.a,
                    { gutterBottom: !0, variant: 'h3' },
                    'Support for Plugins'
                  ),
                  r.a.createElement(
                    Z.a,
                    { variant: 'subtitle2' },
                    'The kit provides support for multiple third-party plugins right out of the box like Chart.js, Dropzone.js, Kanban Plugin and many more.'
                  )
                ),
                r.a.createElement(
                  ka.a,
                  { className: n.media, item: !0, lg: 4, md: 6, xs: 12 },
                  r.a.createElement('img', {
                    alt: 'User flows',
                    src: '/images/presentation/plugins_support.png'
                  })
                )
              )
            )
          );
        },
        jr = ['className'],
        Or = Object(R.a)(function(e) {
          return {
            root: { backgroundColor: e.palette.background.default },
            inner: {
              padding: e.spacing(6, 3),
              width: e.breakpoints.values.lg,
              maxWidth: '100%',
              margin: '0 auto'
            },
            media: { '& img': { width: '100%', height: 'auto' } }
          };
        }),
        xr = function(e) {
          var a = e.className,
            t = Object(q.a)(e, jr),
            n = Or();
          return r.a.createElement(
            'div',
            Object.assign({}, t, { className: Object(J.a)(n.root, a) }),
            r.a.createElement(
              'div',
              { className: n.inner },
              r.a.createElement(
                ka.a,
                {
                  alignItems: 'center',
                  container: !0,
                  justify: 'space-between'
                },
                r.a.createElement(
                  ka.a,
                  { item: !0, lg: 3, md: 6, xs: 12 },
                  r.a.createElement(
                    Z.a,
                    { gutterBottom: !0, variant: 'h3' },
                    'Source Files'
                  ),
                  r.a.createElement(
                    Z.a,
                    { variant: 'subtitle2' },
                    "We've included the source Sketch & Figma files so you can get creative! We designed all components with Symbols in Sketch which allows you to change the main colors as you like."
                  )
                ),
                r.a.createElement(
                  ka.a,
                  { className: n.media, item: !0, lg: 4, md: 6, xs: 12 },
                  r.a.createElement('img', {
                    alt: 'User flows',
                    src: '/images/presentation/source_files.png'
                  })
                )
              )
            )
          );
        },
        Nr = ['className'],
        kr = Object(R.a)(function(e) {
          return {
            root: { backgroundColor: e.palette.background.default },
            inner: {
              padding: e.spacing(6, 3),
              width: e.breakpoints.values.lg,
              maxWidth: '100%',
              margin: '0 auto'
            },
            media: { '& img': { width: '100%', height: 'auto' } }
          };
        }),
        wr = function(e) {
          var a = e.className,
            t = Object(q.a)(e, Nr),
            n = kr();
          return r.a.createElement(
            'div',
            Object.assign({}, t, { className: Object(J.a)(n.root, a) }),
            r.a.createElement(
              'div',
              { className: n.inner },
              r.a.createElement(
                ka.a,
                {
                  alignItems: 'center',
                  container: !0,
                  justify: 'space-between'
                },
                r.a.createElement(
                  ka.a,
                  { item: !0, lg: 3, md: 6, xs: 12 },
                  r.a.createElement(
                    Z.a,
                    { gutterBottom: !0, variant: 'h3' },
                    'Complete User Flows'
                  ),
                  r.a.createElement(
                    Z.a,
                    { variant: 'subtitle2' },
                    'Not just a set of tools, the package includes the most common use cases of user flows like User Management, Second Level Layout, and many more.'
                  )
                ),
                r.a.createElement(
                  ka.a,
                  { className: n.media, item: !0, lg: 4, md: 6, xs: 12 },
                  r.a.createElement('img', {
                    alt: 'User flows',
                    src: '/images/presentation/user_flows.png'
                  })
                )
              )
            )
          );
        },
        Cr = Object(R.a)(function() {
          return { root: {} };
        }),
        Sr = function() {
          var e = Cr();
          return r.a.createElement(
            ne.k,
            { className: e.root, title: 'Presentation' },
            r.a.createElement(vr, null),
            r.a.createElement(wr, null),
            r.a.createElement(Er, null),
            r.a.createElement(xr, null),
            r.a.createElement(gr, null)
          );
        },
        _r = [
          {
            path: '/auth',
            component: U,
            routes: [
              {
                path: '/auth/login',
                exact: !0,
                component: Object(n.lazy)(function() {
                  return t.e(21).then(t.bind(null, 1098));
                })
              },
              {
                path: '/auth/register',
                exact: !0,
                component: Object(n.lazy)(function() {
                  return t.e(18).then(t.bind(null, 1099));
                })
              },
              {
                component: function() {
                  return r.a.createElement(u.a, { to: '/errors/error-404' });
                }
              }
            ]
          },
          {
            path: '/errors',
            component: H,
            routes: [
              {
                path: '/errors/error-401',
                exact: !0,
                component: Object(n.lazy)(function() {
                  return t.e(6).then(t.bind(null, 1101));
                })
              },
              {
                path: '/errors/error-404',
                exact: !0,
                component: Object(n.lazy)(function() {
                  return t.e(7).then(t.bind(null, 1102));
                })
              },
              {
                path: '/errors/error-500',
                exact: !0,
                component: Object(n.lazy)(function() {
                  return t.e(8).then(t.bind(null, 1103));
                })
              },
              {
                component: function() {
                  return r.a.createElement(u.a, { to: '/errors/error-404' });
                }
              }
            ]
          }
        ],
        Tr = [
          {
            route: '*',
            component: Na,
            routes: [
              {
                path: '/calendar',
                exact: !0,
                component: Object(n.lazy)(function() {
                  return Promise.all([t.e(14), t.e(29)]).then(
                    t.bind(null, 1090)
                  );
                })
              },
              {
                path: '/changelog',
                exact: !0,
                component: Object(n.lazy)(function() {
                  return t.e(30).then(t.bind(null, 1104));
                })
              },
              {
                path: '/chat',
                exact: !0,
                component: Object(n.lazy)(function() {
                  return t.e(2).then(t.bind(null, 1077));
                })
              },
              {
                path: '/chat/:id',
                exact: !0,
                component: Object(n.lazy)(function() {
                  return t.e(2).then(t.bind(null, 1077));
                })
              },
              { path: '/dashboards/analytics', exact: !0, component: It },
              { path: '/', exact: !0, component: Sn },
              {
                path: '/invoices/:id',
                exact: !0,
                component: Object(n.lazy)(function() {
                  return t.e(32).then(t.bind(null, 1091));
                })
              },
              {
                path: '/kanban-board',
                exact: !0,
                component: Object(n.lazy)(function() {
                  return Promise.all([t.e(0), t.e(13), t.e(33)]).then(
                    t.bind(null, 1088)
                  );
                })
              },
              {
                path: '/mail',
                exact: !0,
                component: Object(n.lazy)(function() {
                  return t.e(15).then(t.bind(null, 1079));
                })
              },
              {
                path: '/management/customers',
                exact: !0,
                component: Object(n.lazy)(function() {
                  return t.e(20).then(t.bind(null, 1092));
                })
              },
              {
                path: '/management/customers/:id',
                exact: !0,
                component: Object(n.lazy)(function() {
                  return t.e(1).then(t.bind(null, 1076));
                })
              },
              {
                path: '/management/customers/:id/:tab',
                exact: !0,
                component: Object(n.lazy)(function() {
                  return t.e(1).then(t.bind(null, 1076));
                })
              },
              {
                path: '/management/projects',
                exact: !0,
                component: Object(n.lazy)(function() {
                  return t.e(36).then(t.bind(null, 1093));
                })
              },
              {
                path: '/management/orders',
                exact: !0,
                component: Object(n.lazy)(function() {
                  return t.e(23).then(t.bind(null, 1094));
                })
              },
              {
                path: '/management/orders/:id',
                exact: !0,
                component: Object(n.lazy)(function() {
                  return t.e(22).then(t.bind(null, 1089));
                })
              },
              { path: '/overview', exact: !0, component: lr },
              { path: '/presentation', exact: !0, component: Sr },
              {
                path: '/profile/:id',
                exact: !0,
                component: Object(n.lazy)(function() {
                  return Promise.all([t.e(0), t.e(3)]).then(t.bind(null, 1081));
                })
              },
              {
                path: '/profile/:id/:tab',
                exact: !0,
                component: Object(n.lazy)(function() {
                  return Promise.all([t.e(0), t.e(3)]).then(t.bind(null, 1081));
                })
              },
              {
                path: '/projects/create',
                exact: !0,
                component: Object(n.lazy)(function() {
                  return t.e(27).then(t.bind(null, 1082));
                })
              },
              {
                path: '/branches',
                exact: !0,
                component: Object(n.lazy)(function() {
                  return t.e(28).then(t.bind(null, 1095));
                })
              },
              {
                path: '/branch/create',
                exact: !0,
                component: Object(n.lazy)(function() {
                  return t.e(19).then(t.bind(null, 1085));
                })
              },
              {
                path: '/menu',
                exact: !0,
                component: Object(n.lazy)(function() {
                  return t.e(38).then(t.bind(null, 1096));
                })
              },
              {
                path: '/menu/create',
                exact: !0,
                component: Object(n.lazy)(function() {
                  return t.e(25).then(t.bind(null, 1086));
                })
              },
              {
                path: '/products',
                exact: !0,
                component: Object(n.lazy)(function() {
                  return t.e(35).then(t.bind(null, 1097));
                })
              },
              {
                path: '/products/create',
                exact: !0,
                component: Object(n.lazy)(function() {
                  return Promise.all([t.e(17), t.e(34)]).then(
                    t.bind(null, 1074)
                  );
                })
              },
              {
                path: '/categories',
                exact: !0,
                component: Object(n.lazy)(function() {
                  return t.e(16).then(t.bind(null, 1080));
                })
              },
              {
                path: '/category/create',
                exact: !0,
                component: Object(n.lazy)(function() {
                  return t.e(26).then(t.bind(null, 1083));
                })
              },
              {
                path: '/projects/:id',
                exact: !0,
                component: Object(n.lazy)(function() {
                  return t.e(4).then(t.bind(null, 1075));
                })
              },
              {
                path: '/projects/:id/:tab',
                exact: !0,
                component: Object(n.lazy)(function() {
                  return t.e(4).then(t.bind(null, 1075));
                })
              },
              {
                path: '/projects',
                exact: !0,
                component: Object(n.lazy)(function() {
                  return t.e(24).then(t.bind(null, 1087));
                })
              },
              {
                path: '/settings',
                exact: !0,
                component: Object(n.lazy)(function() {
                  return Promise.all([t.e(5), t.e(9)]).then(t.bind(null, 1078));
                })
              },
              {
                path: '/settings/:tab',
                exact: !0,
                component: Object(n.lazy)(function() {
                  return Promise.all([t.e(5), t.e(9)]).then(t.bind(null, 1078));
                })
              },
              {
                path: '/social-feed',
                exact: !0,
                component: Object(n.lazy)(function() {
                  return t.e(37).then(t.bind(null, 1100));
                })
              },
              {
                path: '/getting-started',
                exact: !0,
                component: Object(n.lazy)(function() {
                  return t.e(31).then(t.bind(null, 1105));
                })
              },
              {
                component: function() {
                  return r.a.createElement(u.a, { to: '/errors/error-404' });
                }
              }
            ]
          },
          {
            path: '/errors',
            component: H,
            routes: [
              {
                path: '/errors/error-401',
                exact: !0,
                component: Object(n.lazy)(function() {
                  return t.e(6).then(t.bind(null, 1101));
                })
              },
              {
                path: '/errors/error-404',
                exact: !0,
                component: Object(n.lazy)(function() {
                  return t.e(7).then(t.bind(null, 1102));
                })
              },
              {
                path: '/errors/error-500',
                exact: !0,
                component: Object(n.lazy)(function() {
                  return t.e(8).then(t.bind(null, 1103));
                })
              },
              {
                component: function() {
                  return r.a.createElement(u.a, { to: '/errors/error-404' });
                }
              }
            ]
          }
        ],
        Ir = t(960);
      Ta.b.helpers.extend(Ta.b.elements.Rectangle.prototype, {
        draw: function() {
          var e,
            a,
            t,
            n,
            r,
            i,
            o,
            c,
            s = this._chart.ctx,
            l = this._view,
            m = l.borderWidth,
            u = this._chart.config.options.cornerRadius;
          if (
            (u < 0 && (u = 0),
            'undefined' === typeof u && (u = 0),
            l.horizontal
              ? ((e = l.base),
                (a = l.x),
                (t = l.y - l.height / 2),
                (n = l.y + l.height / 2),
                (r = a > e ? 1 : -1),
                (i = 1),
                (o = l.borderSkipped || 'left'))
              : ((e = l.x - l.width / 2),
                (a = l.x + l.width / 2),
                (t = l.y),
                (r = 1),
                (i = (n = l.base) > t ? 1 : -1),
                (o = l.borderSkipped || 'bottom')),
            m)
          ) {
            var d = Math.min(Math.abs(e - a), Math.abs(t - n)),
              p = (m = m > d ? d : m) / 2,
              g = e + ('left' !== o ? p * r : 0),
              h = a + ('right' !== o ? -p * r : 0),
              b = t + ('top' !== o ? p * i : 0),
              v = n + ('bottom' !== o ? -p * i : 0);
            g !== h && ((t = b), (n = v)), b !== v && ((e = g), (a = h));
          }
          s.beginPath(),
            (s.fillStyle = l.backgroundColor),
            (s.strokeStyle = l.borderColor),
            (s.lineWidth = m);
          var f = [[e, n], [e, t], [a, t], [a, n]],
            y = ['bottom', 'left', 'top', 'right'].indexOf(o, 0);
          function E(e) {
            return f[(y + e) % 4];
          }
          -1 === y && (y = 0);
          var j = E(0);
          s.moveTo(j[0], j[1]);
          for (var O = 1; O < 4; O += 1) {
            j = E(O);
            var x = O + 1;
            4 === x && (x = 0);
            var N = f[2][0] - f[1][0],
              k = f[0][1] - f[1][1],
              w = f[1][0],
              C = f[1][1];
            if (
              ((c = u) > Math.abs(k) / 2 && (c = Math.floor(Math.abs(k) / 2)),
              c > Math.abs(N) / 2 && (c = Math.floor(Math.abs(N) / 2)),
              k < 0)
            ) {
              var S = w,
                _ = w + N,
                T = C + k,
                I = C + k,
                A = w,
                P = w + N,
                B = C,
                D = C;
              s.moveTo(A + c, B),
                s.lineTo(P - c, D),
                s.quadraticCurveTo(P, D, P, D - c),
                s.lineTo(_, I + c),
                s.quadraticCurveTo(_, I, _ - c, I),
                s.lineTo(S + c, T),
                s.quadraticCurveTo(S, T, S, T + c),
                s.lineTo(A, B - c),
                s.quadraticCurveTo(A, B, A + c, B);
            } else if (N < 0) {
              var z = w + N,
                M = w,
                F = C,
                G = C,
                R = w + N,
                L = w,
                W = C + k,
                U = C + k;
              s.moveTo(R + c, W),
                s.lineTo(L - c, U),
                s.quadraticCurveTo(L, U, L, U - c),
                s.lineTo(M, G + c),
                s.quadraticCurveTo(M, G, M - c, G),
                s.lineTo(z + c, F),
                s.quadraticCurveTo(z, F, z, F + c),
                s.lineTo(R, W - c),
                s.quadraticCurveTo(R, W, R + c, W);
            } else
              s.moveTo(w + c, C),
                s.lineTo(w + N - c, C),
                s.quadraticCurveTo(w + N, C, w + N, C + c),
                s.lineTo(w + N, C + k - c),
                s.quadraticCurveTo(w + N, C + k, w + N - c, C + k),
                s.lineTo(w + c, C + k),
                s.quadraticCurveTo(w, C + k, w, C + k - c),
                s.lineTo(w, C + c),
                s.quadraticCurveTo(w, C, w + c, C);
          }
          s.fill(), m && s.stroke();
        }
      }),
        ga.a.updateLocale('en', {
          relativeTime: {
            future: 'in %s',
            past: '%s ago',
            s: 'seconds',
            ss: '%ss',
            m: '1m',
            mm: '%dm',
            h: '1h',
            hh: '%dh',
            d: '1d',
            dd: '%dd',
            M: '1M',
            MM: '%dM',
            y: '1Y',
            yy: '%dY'
          }
        });
      var Ar = t(271),
        Pr = t.n(Ar);
      Pr.a.validators = Object(_.a)(
        Object(_.a)({}, Pr.a.validators),
        {},
        {
          regex: function(e, a) {
            if (!new RegExp(a.pattern).test(e)) return a.message;
          },
          checked: function(e, a) {
            if (!0 !== e) return a.message || 'must be checked';
          }
        }
      );
      t(138),
        t(860),
        t(861),
        t(862),
        t(863),
        t(864),
        t(865),
        t(866),
        t(867),
        t(868),
        t(869);
      var Br = t(508),
        Dr = new (t.n(Br)).a(sa.a, { delayResponse: 0 });
      Dr.onGet('/api/account/profile').reply(200, {
        profile: {
          avatar: '/images/avatars/avatar_11.png',
          canHire: !1,
          country: 'USA',
          email: 'shen.zhi@devias.io',
          firstName: 'Shen',
          isPublic: !0,
          lastName: 'Zhi',
          phone: '+40 777666555',
          state: 'Alabama',
          timezone: '4:32PM (GMT-4)'
        }
      }),
        Dr.onGet('/api/account/statistics').reply(200, {
          statistics: {
            payout: '4,250',
            projects: '12,500',
            visitors: '230',
            watching: '5'
          }
        }),
        Dr.onGet('/api/account/projects').reply(200, {
          projects: [
            {
              id: zn()(),
              title: 'Mella Full Screen Slider',
              price: '3K - 6K',
              currency: '$',
              type: 'Full-Time',
              location: 'Europe',
              author: {
                name: 'Anje Keizer',
                avatar: '/images/avatars/avatar_5.png'
              },
              tags: [{ id: zn()(), text: 'Vue JS', color: y.a.green[600] }],
              updated_at: ga()().subtract(24, 'minutes')
            }
          ]
        }),
        Dr.onGet('/api/account/todos').reply(200, {
          todos: [
            {
              id: zn()(),
              title:
                'Finish the proposal design and contract for the client ASAP',
              deadline: ga()().subtract(2, 'days'),
              done: !1
            },
            {
              id: zn()(),
              title:
                'Finish the proposal design and contract for the client ASAP',
              deadline: ga()(),
              done: !1
            },
            {
              id: zn()(),
              title:
                'Upload the files for the client @Adrian Stefan with the fonts, assets exported and all the fancy svgs',
              deadline: ga()().add(2, 'days'),
              done: !1
            },
            {
              id: zn()(),
              title: 'Re-write the card component with hooks and context',
              deadline: ga()().add(5, 'days'),
              done: !1
            },
            {
              id: zn()(),
              title: 'Send proposal for the fintech project',
              deadline: ga()().add(5, 'days'),
              done: !1
            },
            {
              id: zn()(),
              title:
                'Create todo app with react hooks just to get a better understanding of the concept',
              deadline: ga()().add(7, 'days'),
              done: !0
            }
          ]
        }),
        Dr.onGet('/api/account/notifications').reply(200, {
          notifications: [
            {
              id: zn()(),
              title: 'New order has been received',
              type: 'order',
              created_at: ga()().subtract(2, 'hours')
            },
            {
              id: zn()(),
              title: 'New customer is registered',
              type: 'user',
              created_at: ga()().subtract(1, 'day')
            },
            {
              id: zn()(),
              title: 'Project has been approved',
              type: 'project',
              created_at: ga()().subtract(3, 'days')
            },
            {
              id: zn()(),
              title: 'New feature has been added',
              type: 'feature',
              created_at: ga()().subtract(7, 'days')
            }
          ]
        }),
        Dr.onGet('/api/account/subscription').reply(200, {
          subscription: {
            name: 'Freelancer',
            price: '5',
            currency: '$',
            proposalsLeft: 12,
            templatesLeft: 5,
            invitesLeft: 24,
            adsLeft: 10,
            hasAnalytics: !0,
            hasEmailAlerts: !0
          }
        }),
        Dr.onGet('/api/account/settings').reply(200, { settings: {} }),
        Dr.onGet('/api/calendar').reply(200, {
          draft: [],
          events: [
            {
              id: zn()(),
              title: 'Call Samantha',
              desc: 'Inform about new contract',
              color: y.a.green[700],
              start: ga()('2019-07-01 16:55:00'),
              end: ga()('2019-07-01 17:02:00')
            },
            {
              id: zn()(),
              title: 'Meet with IBM',
              desc: 'Discuss about new partnership',
              start: ga()('2019-07-03 08:55:00'),
              end: ga()('2019-07-04 15:02:00')
            },
            {
              id: zn()(),
              title: 'SCRUM Planning',
              desc: 'Prepare documentation',
              allDay: !0,
              start: ga()('2019-07-14 16:55:00')
            },
            {
              id: zn()(),
              title: 'Beign SEM',
              desc: 'Meet with team to discuss',
              allDay: !0,
              start: ga()('2019-07-18 07:00:00')
            },
            {
              id: zn()(),
              title: 'Fire John',
              desc: 'Sorry, John',
              color: y.a.green[700],
              start: ga()('2019-07-20 08:55:00'),
              end: ga()('2019-07-20 09:30:00')
            },
            {
              id: zn()(),
              title: 'Call Alex',
              desc: 'Discuss about the new project',
              allDay: !0,
              start: ga()('2019-07-30 08:00:00')
            },
            {
              id: zn()(),
              title: 'Visit Samantha',
              color: y.a.green[700],
              desc: 'Get a new quote for the payment processor',
              start: ga()('2019-07-30 08:00:00'),
              end: ga()('2019-07-30 09:00:00')
            }
          ]
        }),
        Dr.onGet('/api/chat/conversations').reply(200, {
          conversations: [
            {
              id: zn()(),
              otherUser: {
                name: 'Adam Denisov',
                avatar: '/images/avatars/avatar_7.png',
                active: !0,
                lastActivity: ga()()
              },
              messages: [
                {
                  id: zn()(),
                  sender: {
                    authUser: !1,
                    name: 'Adam Denisov',
                    avatar: '/images/avatars/avatar_7.png',
                    lastActivity: ga()()
                  },
                  content:
                    "Hey, nice projects! I really liked the one in react. What's your quote on kinda similar project?",
                  contentType: 'text',
                  created_at: ga()().subtract(10, 'hours')
                },
                {
                  id: zn()(),
                  sender: {
                    authUser: !0,
                    name: 'Shen Zhi',
                    avatar: '/images/avatars/avatar_11.png'
                  },
                  content:
                    'I would need to know more details, but my hourly rate stats at $35/hour. Thanks!',
                  contentType: 'text',
                  created_at: ga()().subtract(2, 'hours')
                },
                {
                  id: zn()(),
                  sender: {
                    authUser: !1,
                    name: 'Adam Denisov',
                    avatar: '/images/avatars/avatar_7.png'
                  },
                  content:
                    "Well it's a really easy one, I'm sure we can make it half of the price.",
                  contentType: 'text',
                  created_at: ga()().subtract(5, 'minutes')
                },
                {
                  id: zn()(),
                  sender: {
                    authUser: !0,
                    name: 'Shen Zhi',
                    avatar: '/images/avatars/avatar_11.png'
                  },
                  content:
                    "Then why don't you make it if it's that easy? Sorry I'm not interetes, have fantastic day Adam!",
                  contentType: 'text',
                  created_at: ga()().subtract(3, 'minutes')
                },
                {
                  id: zn()(),
                  sender: {
                    authUser: !1,
                    name: 'Adam Denisov',
                    avatar: '/images/avatars/avatar_7.png'
                  },
                  content: 'Last offer, $25 per hour',
                  contentType: 'text',
                  created_at: ga()().subtract(1, 'minute')
                },
                {
                  id: zn()(),
                  sender: {
                    authUser: !1,
                    name: 'Adam Denisov',
                    avatar: '/images/avatars/avatar_7.png'
                  },
                  content: '/images/projects/project_1.jpg',
                  contentType: 'image',
                  created_at: ga()().subtract(1, 'minute')
                }
              ],
              unread: 0,
              created_at: ga()().subtract(1, 'minute')
            },
            {
              id: zn()(),
              otherUser: {
                name: 'Ekaterina Tankova',
                avatar: '/images/avatars/avatar_2.png',
                active: !0,
                lastActivity: ga()()
              },
              messages: [
                {
                  id: zn()(),
                  sender: {
                    authUser: !0,
                    name: 'Shen Zhi',
                    avatar: '/images/avatars/avatar_11.png'
                  },
                  content: 'Hey, would you like to collaborate?',
                  contentType: 'text',
                  created_at: ga()().subtract(6, 'minutes')
                },
                {
                  id: zn()(),
                  sender: {
                    authUser: !1,
                    name: 'Ekaterina Tankova',
                    avatar: '/images/avatars/avatar_2.png'
                  },
                  content: "I don't think that's ideal",
                  contentType: 'text',
                  created_at: ga()().subtract(5, 'minutes')
                }
              ],
              unread: 3,
              created_at: ga()().subtract(26, 'minutes')
            },
            {
              id: zn()(),
              otherUser: {
                name: 'Emilee Simchenko',
                avatar: '/images/avatars/avatar_9.png',
                active: !1,
                lastActivity: ga()().subtract(2, 'minutes')
              },
              messages: [
                {
                  id: zn()(),
                  sender: {
                    authUser: !1,
                    name: 'Emilee Simchenko',
                    avatar: '/images/avatars/avatar_9.png'
                  },
                  content: 'Hi Shen, we should submit the product today',
                  contentType: 'text',
                  created_at: ga()().subtract(2, 'hours')
                },
                {
                  id: zn()(),
                  sender: {
                    authUser: !0,
                    name: 'Shen Zhi',
                    avatar: '/images/avatars/avatar_11.png'
                  },
                  content: 'Oh, totally forgot about it',
                  contentType: 'text',
                  created_at: ga()()
                    .subtract(1, 'hour')
                    .subtract(2, 'minutes')
                },
                {
                  id: zn()(),
                  sender: {
                    authUser: !0,
                    name: 'Shen Zhi',
                    avatar: '/images/avatars/avatar_11.png'
                  },
                  content: 'Alright then',
                  contentType: 'text',
                  created_at: ga()().subtract(1, 'hour')
                }
              ],
              unread: 0,
              created_at: ga()().subtract(3, 'hours')
            },
            {
              id: zn()(),
              otherUser: {
                name: 'Kwak Seong-Min',
                avatar: '/images/avatars/avatar_10.png',
                active: !0,
                lastActivity: ga()()
              },
              messages: [
                {
                  id: zn()(),
                  sender: {
                    authUser: !0,
                    name: 'Shen Zhi',
                    avatar: '/images/avatars/avatar_11.png'
                  },
                  content:
                    "Hi Kwak! I've seen your projects and we can work together on a project. Will send you the details later.",
                  contentType: 'text',
                  created_at: ga()().subtract(3, 'days')
                },
                {
                  id: zn()(),
                  sender: {
                    authUser: !1,
                    name: 'Kwak Seong-Min',
                    avatar: '/images/avatars/avatar_10.png'
                  },
                  content: "Haha, right, we'll do it",
                  contentType: 'text',
                  created_at: ga()().subtract(2, 'days')
                }
              ],
              unread: 1,
              created_at: ga()().subtract(2, 'days')
            },
            {
              id: zn()(),
              otherUser: {
                name: 'Cao Yu',
                avatar: '/images/avatars/avatar_3.png',
                active: !1,
                lastActivity: ga()().subtract(4, 'hours')
              },
              messages: [
                {
                  id: zn()(),
                  sender: {
                    authUser: !0,
                    name: 'Shen Zhi',
                    avatar: '/images/avatars/avatar_11.png'
                  },
                  content: 'Did you receive my email about the brief?',
                  contentType: 'text',
                  created_at: ga()().subtract(3, 'days')
                },
                {
                  id: zn()(),
                  sender: {
                    authUser: !1,
                    name: 'Cao Yu',
                    avatar: '/images/avatars/avatar_3.png'
                  },
                  content: "I'm not sure, but I will check it later",
                  contentType: 'text',
                  created_at: ga()().subtract(2, 'days')
                }
              ],
              unread: 0,
              created_at: ga()().subtract(5, 'days')
            },
            {
              id: zn()(),
              otherUser: {
                name: 'Clarke Gillebert',
                avatar: '/images/avatars/avatar_6.png',
                active: !0,
                lastActivity: ga()()
              },
              messages: [
                {
                  id: zn()(),
                  sender: {
                    authUser: !1,
                    name: 'Clarke Gillebert',
                    avatar: '/images/avatars/avatar_6.png'
                  },
                  content: 'Hey Shen! I love your projects!!!',
                  contentType: 'text',
                  created_at: ga()().subtract(2, 'days')
                },
                {
                  id: zn()(),
                  sender: {
                    authUser: !0,
                    name: 'Shen Zhi',
                    avatar: '/images/avatars/avatar_11.png'
                  },
                  content: "Haha thank you Clarke, I'm doing our best",
                  contentType: 'text',
                  created_at: ga()().subtract(3, 'days')
                }
              ],
              unread: 0,
              created_at: ga()().subtract(5, 'days')
            }
          ]
        }),
        Dr.onGet('/api/chat/activity').reply(200, {
          groups: [
            { id: 'clients', name: 'Clients' },
            { id: 'friends', name: 'Friends' }
          ],
          connections: [
            {
              id: zn()(),
              name: 'Ekaterina Tankova',
              avatar: '/images/avatars/avatar_2.png',
              active: !1,
              lastActivity: ga()().subtract(24, 'minutes'),
              group: 'clients'
            },
            {
              id: zn()(),
              name: 'Cao Yu',
              avatar: '/images/avatars/avatar_3.png',
              active: !0,
              lastActivity: ga()(),
              group: 'clients'
            },
            {
              id: zn()(),
              name: 'Anje Keizer',
              avatar: '/images/avatars/avatar_5.png',
              active: !1,
              lastActivity: ga()().subtract(1, 'minutes'),
              group: 'clients'
            },
            {
              id: zn()(),
              name: 'Ava Gregoraci',
              avatar: '/images/avatars/avatar_8.png',
              active: !0,
              lastActivity: ga()(),
              group: 'clients'
            },
            {
              id: zn()(),
              name: 'Clarke Gillebert',
              avatar: '/images/avatars/avatar_6.png',
              active: !0,
              lastActivity: ga()(),
              group: 'friends'
            },
            {
              id: zn()(),
              name: 'Adam Denisov',
              avatar: '/images/avatars/avatar_7.png',
              active: !1,
              lastActivity: ga()().subtract(24, 'minutes'),
              group: 'friends'
            },
            {
              id: zn()(),
              name: 'Emilee Simchenko',
              avatar: '/images/avatars/avatar_9.png',
              active: !0,
              lastActivity: ga()(),
              group: 'friends'
            },
            {
              id: zn()(),
              name: 'Kwak Seong-Min',
              avatar: '/images/avatars/avatar_10.png',
              active: !0,
              lastActivity: ga()(),
              group: 'friends'
            },
            {
              id: zn()(),
              name: 'Shen Zhi',
              avatar: '/images/avatars/avatar_11.png',
              active: !0,
              lastActivity: ga()(),
              group: 'friends'
            },
            {
              id: zn()(),
              name: 'Merrile Burgett',
              avatar: '/images/avatars/avatar_12.png',
              active: !1,
              lastActivity: ga()().subtract(2, 'days')
            }
          ]
        }),
        Dr.onGet('/api/management/customers').reply(200, {
          customers: [
            {
              id: zn()(),
              name: 'Ekaterina Tankova',
              email: 'ekaterina.tankova@devias.io',
              avatar: '/images/avatars/avatar_2.png',
              spent: '500.00',
              currency: '$',
              type: 'Agency',
              projects: '1',
              rating: 5,
              location: 'West Virginia, USA'
            },
            {
              id: zn()(),
              name: 'Cao Yu',
              email: 'cao.yu@devias.io',
              avatar: '/images/avatars/avatar_3.png',
              spent: '300.00',
              type: 'Freelancer',
              currency: '$',
              projects: '3',
              rating: 4.3,
              location: 'Bristow'
            },
            {
              id: zn()(),
              name: 'Alexa Richardson',
              email: 'alexa.richardson@devias.io',
              avatar: '/images/avatars/avatar_4.png',
              spent: '2,600.00',
              type: 'Enterprise',
              currency: '$',
              projects: '0',
              rating: 4.5,
              location: 'Georgia, USA'
            },
            {
              id: zn()(),
              name: 'Anje Keizer',
              email: 'anje.keizer@devias.io',
              avatar: '/images/avatars/avatar_5.png',
              spent: '5,600.00',
              type: 'Enterprise',
              currency: '$',
              projects: '6',
              rating: 4,
              location: 'Ohio, USA'
            },
            {
              id: zn()(),
              name: 'Clarke Gillebert',
              email: 'clarke.gillebert@devias.io',
              avatar: '/images/avatars/avatar_6.png',
              spent: '500.00',
              type: 'Agency',
              currency: '$',
              projects: '1',
              rating: 3.5,
              location: 'Texas, USA'
            },
            {
              id: zn()(),
              name: 'Adam Denisov',
              email: 'adam.denisov@devias.io',
              avatar: '/images/avatars/avatar_7.png',
              spent: '5,230.00',
              type: 'Agency',
              currency: '$',
              projects: '0',
              rating: 3,
              location: 'California, USA'
            },
            {
              id: zn()(),
              name: 'Ava Gregoraci',
              email: 'ava.gregoraci@devias.io',
              avatar: '/images/avatars/avatar_8.png',
              spent: '300.00',
              type: 'Freelancer',
              currency: '$',
              projects: '0',
              rating: 4,
              location: 'California, USA'
            },
            {
              id: zn()(),
              name: 'Emilee Simchenko',
              email: 'emilee.simchenko@devias.io',
              avatar: '/images/avatars/avatar_9.png',
              spent: '100.00',
              type: 'Agency',
              currency: '$',
              projects: '4',
              rating: 4.5,
              location: 'Nevada, USA'
            },
            {
              id: zn()(),
              name: 'Kwak Seong-Min',
              email: 'kwak.seong.min@devias.io',
              avatar: '/images/avatars/avatar_10.png',
              spent: '1,000.00',
              type: 'Freelancer',
              currency: '$',
              projects: '2',
              rating: 5,
              location: 'Michigan, USA'
            },
            {
              id: zn()(),
              name: 'Shen Zhi',
              email: 'shen.zhi@devias.io',
              avatar: '/images/avatars/avatar_11.png',
              spent: '2,300.00',
              type: 'Agency',
              currency: '$',
              projects: '0',
              rating: 3.9,
              location: 'Utah, USA'
            },
            {
              id: zn()(),
              name: 'Merrile Burgett',
              email: 'merrile.burgett@devias.io',
              avatar: '/images/avatars/avatar_12.png',
              spent: '200.00',
              type: 'Enterprise',
              currency: '$',
              projects: '7',
              rating: 4.2,
              location: 'Utah, USA'
            }
          ]
        }),
        Dr.onGet('/api/management/customers/1/summary').reply(200, {
          summary: {
            name: 'Ekaterina Tankova',
            email: 'ekaterina@devias.io',
            phone: '+55 748 327 439',
            state: 'Alabama',
            country: 'United States',
            zipCode: '240355',
            address1: 'Street John Wick, no. 7',
            address2: 'House #25',
            iban: '4142 **** **** **** ****',
            autoCC: !1,
            verified: !0,
            currency: '$',
            invoices: [
              { id: zn()(), type: 'paid', value: 10 },
              { id: zn()(), type: 'paid', value: 15 },
              { id: zn()(), type: 'due', value: 5 },
              { id: zn()(), type: 'income', value: 10 }
            ],
            vat: 19,
            balance: 0,
            emails: [
              {
                id: zn()(),
                description: 'Order confirmation',
                created_at: ga()()
                  .subtract(3, 'days')
                  .subtract(5, 'hours')
                  .subtract(34, 'minutes')
              },
              {
                id: zn()(),
                description: 'Order confirmation',
                created_at: ga()()
                  .subtract(4, 'days')
                  .subtract(11, 'hours')
                  .subtract(49, 'minutes')
              }
            ]
          }
        }),
        Dr.onGet('/api/management/customers/1/invoices').reply(200, {
          invoices: [
            {
              id: zn()(),
              date: ga()(),
              description: 'Freelancer Subscription (12/05/2019 - 11/06/2019)',
              paymentMethod: 'Credit Card',
              value: '5.25',
              currency: '$',
              status: 'paid'
            },
            {
              id: zn()(),
              date: ga()(),
              description: 'Freelancer Subscription (12/05/2019 - 11/06/2019)',
              paymentMethod: 'Credit Card',
              value: '5.25',
              currency: '$',
              status: 'paid'
            }
          ]
        }),
        Dr.onGet('/api/management/customers/1/logs').reply(200, {
          logs: [
            {
              id: zn()(),
              status: 200,
              method: 'POST',
              route: '/api/purchase',
              desc: 'Purchase',
              IP: '84.234.243.42',
              created_at: ga()()
                .subtract(2, 'days')
                .subtract(2, 'minutes')
                .subtract(56, 'seconds')
            },
            {
              id: zn()(),
              status: 522,
              error: 'Invalid credit card',
              method: 'POST',
              route: '/api/purchase',
              desc: 'Purchase',
              IP: '84.234.243.42',
              created_at: ga()()
                .subtract(2, 'days')
                .subtract(2, 'minutes')
                .subtract(56, 'seconds')
            },
            {
              id: zn()(),
              status: 200,
              method: 'DELETE',
              route: '/api/products/d65654e/remove',
              desc: 'Cart remove',
              IP: '84.234.243.42',
              created_at: ga()()
                .subtract(2, 'days')
                .subtract(8, 'minutes')
                .subtract(23, 'seconds')
            },
            {
              id: zn()(),
              status: 200,
              method: 'GET',
              route: '/api/products/d65654e/add',
              desc: 'Cart add',
              IP: '84.234.243.42',
              created_at: ga()()
                .subtract(2, 'days')
                .subtract(20, 'minutes')
                .subtract(54, 'seconds')
            },
            {
              id: zn()(),
              status: 200,
              method: 'GET',
              route: '/api/products/c85727f/add',
              desc: 'Cart add',
              IP: '84.234.243.42',
              created_at: ga()()
                .subtract(2, 'days')
                .subtract(34, 'minutes')
                .subtract(16, 'seconds')
            },
            {
              id: zn()(),
              status: 200,
              method: 'GET',
              route: '/api/products/c85727f',
              desc: 'View product',
              IP: '84.234.243.42',
              created_at: ga()()
                .subtract(2, 'days')
                .subtract(54, 'minutes')
                .subtract(30, 'seconds')
            },
            {
              id: zn()(),
              status: 200,
              method: 'GET',
              route: '/api/products',
              desc: 'Get products',
              IP: '84.234.243.42',
              created_at: ga()()
                .subtract(2, 'days')
                .subtract(56, 'minutes')
                .subtract(40, 'seconds')
            },
            {
              id: zn()(),
              status: 200,
              method: 'POST',
              route: '/api/login',
              desc: 'Login',
              IP: '84.234.243.42',
              created_at: ga()()
                .subtract(2, 'days')
                .subtract(57, 'minutes')
                .subtract(5, 'seconds')
            }
          ]
        }),
        Dr.onGet('/api/mail').reply(200, {
          emails: [
            {
              id: zn()(),
              seen: !0,
              favorited: !0,
              labels: [
                { text: 'Business', color: y.a.blue[600] },
                { text: 'Personal', color: y.a.orange[600] }
              ],
              subject: 'Website redesign. Interested in collaboration',
              message:
                '\nHi Matt, I saw your work on instagram and would be interested in getting a quote for Logo and slider\n\nInteger velit massa, pharetra sed lacus eu, pulvinar faucibus ex. Ut pretium ex id turpis elementum, aliquam accumsan enim sollicitudin. Sed nec consectetur lorem, ac ullamcorper augue. Suspendisse tempus ligula suscipit finibus vehicula. Morbi viverra finibus lectus, egestas dictum mi mollis nec. Proin eget vehicula eros, sit amet molestie ipsum. Morbi feugiat, elit non placerat fringilla, leo risus tristique felis, sollicitudin tristique nibh arcu nec arcu. Maecenas vel turpis nibh. Etiam in lectus quis felis facilisis dictum. Morbi id vehicula lectus, vel imperdiet dolor. Phasellus consequat tempor tellus, quis placerat quam posuere eget. Mauris blandit, nisl eu sollicitudin tincidunt, tellus diam accumsan arcu, vel pharetra lectus est nec nisi. In sem dolor, mollis sed risus eu, mattis dictum lectus. Suspendisse urna est, finibus et urna non, tincidunt placerat eros.\n\nDonec viverra ipsum id auctor rutrum. Morbi consequat a nunc non interdum. Nulla accumsan eget felis a dictum. Cras rhoncus tortor eget velit fringilla suscipit. Donec quis arcu eu nibh aliquet auctor eget fringilla felis. Sed commodo efficitur massa. Proin maximus elit in suscipit laoreet. Integer pretium arcu ac mauris ullamcorper auctor. Vivamus tincidunt lacus eget purus feugiat tincidunt. Etiam feugiat gravida ullamcorper. Pellentesque cursus vehicula lectus et consectetur. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam ligula risus, congue eu pellentesque id, volutpat aliquam arcu. Donec efficitur ipsum id neque rhoncus viverra. Vestibulum hendrerit et eros eu bibendum.\n\n\nKind regards,\n\nEkaterina Tankova\n      ',
              receiver: {
                name: 'Ekaterina Tankova',
                email: 'ekaterina.tankova@devias.io',
                avatar: '/images/avatars/avatar_2.png'
              },
              created_at: ga()()
            },
            {
              id: zn()(),
              seen: !1,
              favorited: !1,
              labels: [],
              subject: 'Amazing work',
              message:
                "Hey, nice projects! I really liked the one in react. What's your quote on kinda similar project?",
              receiver: {
                name: 'Adam Denisov',
                email: 'adam.denisov@devias.io',
                avatar: '/images/avatars/avatar_7.png'
              },
              created_at: ga()()
            },
            {
              id: zn()(),
              seen: !1,
              favorited: !1,
              subject: 'Flight reminder',
              labels: [{ text: 'Work', color: y.a.green[600] }],
              message:
                'Dear Shen, Your flight is coming up soon. Please don\u2019t forget to check in for your scheduled flight.',
              receiver: {
                name: 'Clarke Gillebert',
                avatar: '/images/avatars/avatar_6.png'
              },
              created_at: ga()()
            },
            {
              id: zn()(),
              seen: !0,
              favorited: !0,
              labels: [],
              subject: 'Posible candidates for the position',
              message:
                'My market leading client has another fantastic opportunity for an experienced Software Developer to join them on a heavily remote basis',
              receiver: {
                name: 'Cao Yu',
                avatar: '/images/avatars/avatar_3.png'
              },
              created_at: ga()()
            }
          ]
        }),
        Dr.onGet('/api/projects').reply(200, {
          projects: [
            {
              id: zn()(),
              title: 'Mella Full Screen Slider',
              author: {
                name: 'Anje Keizer',
                avatar: '/images/avatars/avatar_5.png'
              },
              price: '12,500',
              currency: '$',
              type: 'Full-Time',
              location: 'Europe',
              status: 'In progress',
              members: 5,
              tags: [{ text: 'Angular JS', color: y.a.red[600] }],
              start_date: ga()(),
              end_date: ga()(),
              updated_at: ga()().subtract(24, 'minutes')
            },
            {
              id: zn()(),
              title: 'Dashboard Design',
              author: {
                name: 'Emilee Simchenko',
                avatar: '/images/avatars/avatar_9.png'
              },
              price: '15,750',
              currency: '$',
              type: 'Full-Time',
              location: 'Europe',
              status: 'In progress',
              members: 3,
              tags: [{ text: 'HTML & CSS', color: y.a.grey[600] }],
              start_date: ga()(),
              end_date: ga()(),
              updated_at: ga()().subtract(1, 'hour')
            },
            {
              id: zn()(),
              title: 'Ten80 Web Design',
              author: {
                name: 'Kwak Seong-Min',
                avatar: '/images/avatars/avatar_10.png'
              },
              price: '15,750',
              currency: '$',
              type: 'Full-Time',
              location: 'Europe',
              status: 'Completed',
              members: 8,
              tags: [{ text: 'React JS', color: y.a.indigo[600] }],
              start_date: ga()(),
              end_date: ga()(),
              updated_at: ga()().subtract(16, 'hour')
            },
            {
              id: zn()(),
              title: 'Neura e-commerce UI Kit',
              author: {
                name: 'Shen Zhi',
                avatar: '/images/avatars/avatar_11.png'
              },
              price: '12,500',
              currency: '$',
              type: 'Full-Time',
              location: 'Europe',
              status: 'In progress',
              members: 10,
              tags: [{ text: 'Vue JS', color: y.a.green[600] }],
              start_date: ga()(),
              end_date: ga()(),
              updated_at: ga()().subtract(3, 'days')
            },
            {
              id: zn()(),
              title: 'Administrator Dashboard',
              author: {
                name: 'Cao Yu',
                avatar: '/images/avatars/avatar_3.png'
              },
              price: '15,750',
              currency: '$',
              type: 'Full-Time',
              location: 'Europe',
              status: 'Canceled',
              members: 2,
              tags: [
                { text: 'Angular JS', color: y.a.red[600] },
                { text: 'HTML & CSS', color: y.a.grey[600] }
              ],
              start_date: ga()(),
              end_date: ga()(),
              updated_at: ga()().subtract(7, 'days')
            },
            {
              id: zn()(),
              title: 'Kalli UI Kit',
              author: {
                name: 'Anje Keizer',
                avatar: '/images/avatars/avatar_5.png'
              },
              price: '15,750',
              currency: '$',
              type: 'Full-Time',
              location: 'Europe',
              status: 'Completed',
              members: 12,
              tags: [{ text: 'Vue JS', color: y.a.green[600] }],
              start_date: ga()(),
              end_date: ga()(),
              updated_at: ga()().subtract(8, 'days')
            }
          ]
        }),
        Dr.onGet('/api/projects/1').reply(200, {
          project: {
            title: 'Develop a PDF Export App',
            author: {
              name: 'Emilee Simchenko',
              avatar: '/images/avatars/avatar_9.png',
              bio: 'We build beautiful functional themes for web professionals'
            },
            brief:
              "\n#### TL;DR\n\nThe primary aim of the product is to convert survery responses into PDF reports, these reports are generated on to what we call templates. This product is designer to work with 3rd party survery providers. The first MVP will integrate with TypeForm, because the's no direct way to convert results to PDF from the form people create in TypeForm and then ask users to fill out.\n\n#### Background information\n\nDesign files are attachedin the files tab.\n\nDevelop the web app screens for our product called \"PDFace\". Please look at the wireframes, system activity workflow and read the section above to understand what we're trying to archive.\n\nThere's not many screens we need designed, but there will be modals and various other system triggered evenets that will need to be considered.\n\nThe project has benn created in Sketch so let me know if there are any problmes opening this project and I'll try to convert into a usable file.\n\nI have attached a chat with our users most used devices.\n\n#### Goals:\n  - Maintainable Code\n  - Easy UX\n  - Readable Code\n  - No Redux\n    ",
            price: '12,500',
            currency: 'USD',
            tags: [{ text: 'React JS', color: y.a.indigo[600] }],
            members: [
              {
                id: zn()(),
                name: 'Ekaterina Tankova',
                avatar: '/images/avatars/avatar_2.png',
                bio: 'Front End Developer'
              },
              {
                id: zn()(),
                name: 'Cao Yu',
                avatar: '/images/avatars/avatar_3.png',
                bio: 'UX Designer'
              },
              {
                id: zn()(),
                name: 'Anje Keizer',
                avatar: '/images/avatars/avatar_5.png',
                bio: 'Copyright'
              }
            ],
            files: [
              {
                id: zn()(),
                name: 'example-project1.jpg',
                url: '/images/projects/project_2.jpg',
                mimeType: 'image/png',
                size: 3145728
              },
              {
                id: zn()(),
                name: 'docs.zip',
                url: '#',
                mimeType: 'application/zip',
                size: 26214400
              },
              {
                id: zn()(),
                name: 'example-project2.jpg',
                url: '/images/projects/project_1.jpg',
                mimeType: 'image/png',
                size: 2097152
              }
            ],
            activities: [
              {
                id: zn()(),
                subject: 'Project owner',
                subject_type: 'user',
                action_type: 'upload_file',
                action_desc: 'has uploaded a new file',
                created_at: ga()().subtract(23, 'minutes')
              },
              {
                id: zn()(),
                subject: 'Adrian Stefan',
                subject_type: 'user',
                action_type: 'join_team',
                action_desc: 'joined team as a Front-End Developer',
                created_at: ga()().subtract(2, 'hours')
              },
              {
                id: zn()(),
                subject: 'Alexandru Robert',
                action_type: 'join_team',
                action_desc: 'joined team as a Full Stack Developer',
                created_at: ga()().subtract(9, 'hours')
              },
              {
                id: zn()(),
                subject: 'Project owner',
                subject_type: 'user',
                action_type: 'price_change',
                action_desc: 'raised the project budget',
                created_at: ga()().subtract(2, 'days')
              },
              {
                id: zn()(),
                subject: 'Contest',
                subject_type: 'project',
                action_type: 'contest_created',
                action_desc: 'created',
                created_at: ga()().subtract(4, 'days')
              }
            ],
            subscribers: [
              {
                id: zn()(),
                name: 'Ekaterina Tankova',
                avatar: '/images/avatars/avatar_2.png',
                cover: '/images/covers/cover_1.jpg',
                common_connections: 12,
                labels: [
                  'User Experience',
                  'FrontEnd development',
                  'HTML5',
                  'VueJS',
                  'ReactJS'
                ]
              },
              {
                id: zn()(),
                name: 'Cao Yu',
                avatar: '/images/avatars/avatar_3.png',
                cover: '/images/covers/cover_2.jpg',
                common_connections: 5,
                labels: [
                  'User Interface',
                  'FullStack development',
                  'Angular',
                  'ExpressJS'
                ]
              },
              {
                id: zn()(),
                name: 'Clarke Gillebert',
                avatar: '/images/avatars/avatar_6.png',
                cover: '/images/covers/cover_2.jpg',
                common_connections: 17,
                labels: [
                  'BackEnd development',
                  'Firebase',
                  'MongoDB',
                  'ExpressJS'
                ]
              }
            ],
            deadline: ga()().add(7, 'days'),
            updated_at: ga()().subtract(23, 'minutes')
          }
        }),
        Dr.onGet('/api/social-feed').reply(200, {
          posts: [
            {
              id: zn()(),
              author: {
                name: 'Kwak Seong-Min',
                avatar: '/images/avatars/avatar_10.png'
              },
              message: "Hey guys! What's your favorite framework?",
              liked: !0,
              likes: 1,
              comments: [
                {
                  id: zn()(),
                  author: {
                    name: 'Merrile Burgett',
                    avatar: '/images/avatars/avatar_12.png'
                  },
                  message: "I've been using Angular for the past 3 years",
                  created_at: ga()().subtract(3, 'hours')
                }
              ],
              created_at: ga()().subtract(16, 'minutes')
            },
            {
              id: zn()(),
              author: {
                name: 'Shen Zhi',
                avatar: '/images/avatars/avatar_11.png'
              },
              message:
                'Just made this home screen for a project, what-cha thinkin?',
              media: '/images/posts/post_1.jpg',
              liked: !0,
              likes: 24,
              comments: [
                {
                  id: zn()(),
                  author: {
                    name: 'Anje Keizer',
                    avatar: '/images/avatars/avatar_5.png'
                  },
                  message:
                    'Could use some more statistics, but that\u2019s me haha',
                  created_at: ga()().subtract(3, 'hours')
                },
                {
                  id: zn()(),
                  author: {
                    name: 'Ava Gregoraci',
                    avatar: '/images/avatars/avatar_8.png'
                  },
                  message:
                    'Hmm, honestly this looks nice but I would change the shadow though',
                  created_at: ga()().subtract(2, 'hours')
                }
              ],
              created_at: ga()().subtract(4, 'hours')
            },
            {
              id: zn()(),
              author: {
                name: 'Shen Zhi',
                avatar: '/images/avatars/avatar_11.png'
              },
              message:
                'As a human being, you are designed in a way that makes you incapable of experiencing any positive emotion unless you set an aim and progress towards it. What makes you happy is not, in fact, attaining it, but making progress towards it.',
              liked: !1,
              likes: 65,
              comments: [
                {
                  id: zn()(),
                  author: {
                    name: 'Clarke Gillebert',
                    avatar: '/images/avatars/avatar_6.png'
                  },
                  message:
                    'That\u2019s actually deep. Thanks for the design, would you consider making an interaction?',
                  created_at: ga()().subtract(3, 'hours')
                },
                {
                  id: zn()(),
                  author: {
                    name: 'Alexa Richardson',
                    avatar: '/images/avatars/avatar_4.png'
                  },
                  message: 'Oh... so sentimental',
                  created_at: ga()().subtract(2, 'hours')
                }
              ],
              created_at: ga()().subtract(7, 'hours')
            }
          ]
        }),
        Dr.onGet('/api/users').reply(200, { users: [] }),
        Dr.onGet('/api/users/1/posts').reply(200, {
          posts: [
            {
              id: zn()(),
              author: {
                name: 'Shen Zhi',
                avatar: '/images/avatars/avatar_11.png'
              },
              message:
                'Just made this home screen for a project, what-cha thinkin?',
              media: '/images/posts/post_1.jpg',
              liked: !0,
              likes: 24,
              comments: [
                {
                  id: zn()(),
                  author: {
                    name: 'Anje Keizer',
                    avatar: '/images/avatars/avatar_5.png'
                  },
                  message:
                    'Could use some more statistics, but that\u2019s me haha',
                  created_at: ga()().subtract(3, 'hours')
                },
                {
                  id: zn()(),
                  author: {
                    name: 'Ava Gregoraci',
                    avatar: '/images/avatars/avatar_8.png'
                  },
                  message:
                    'Hmm, honestly this looks nice but I would change the shadow though',
                  created_at: ga()().subtract(2, 'hours')
                }
              ],
              created_at: ga()().subtract(4, 'hours')
            },
            {
              id: zn()(),
              author: {
                name: 'Shen Zhi',
                avatar: '/images/avatars/avatar_11.png'
              },
              message:
                'As a human being, you are designed in a way that makes you incapable of experiencing any positive emotion unless you set an aim and progress towards it. What makes you happy is not, in fact, attaining it, but making progress towards it.',
              liked: !1,
              likes: 65,
              comments: [
                {
                  id: zn()(),
                  author: {
                    name: 'Clarke Gillebert',
                    avatar: '/images/avatars/avatar_6.png'
                  },
                  message:
                    'That\u2019s actually deep. Thanks for the design, would you consider making an interaction?',
                  created_at: ga()().subtract(3, 'hours')
                },
                {
                  id: zn()(),
                  author: {
                    name: 'Alexa Richardson',
                    avatar: '/images/avatars/avatar_4.png'
                  },
                  message: 'It looks nice',
                  created_at: ga()().subtract(2, 'hours')
                }
              ],
              created_at: ga()().subtract(7, 'hours')
            }
          ]
        }),
        Dr.onGet('/api/users/1/projects').reply(200, {
          projects: [
            {
              id: zn()(),
              title: 'Mella Full Screen Slider',
              author: {
                name: 'Anje Keizer',
                avatar: '/images/avatars/avatar_5.png'
              },
              price: '12,500',
              currency: '$',
              type: 'Full-Time',
              location: 'Europe',
              tags: [{ text: 'Angular JS', color: y.a.red[600] }],
              updated_at: ga()().subtract(24, 'minutes')
            },
            {
              id: zn()(),
              title: 'Dashboard Design',
              author: { name: 'Devias IO', avatar: '' },
              price: '15,750',
              currency: '$',
              type: 'Full-Time',
              location: 'Europe',
              tags: [{ text: 'React JS', color: y.a.indigo[600] }],
              updated_at: ga()().subtract(1, 'hour')
            },
            {
              id: zn()(),
              title: 'Ten80 Web Design',
              author: { name: 'Devias IO', avatar: '' },
              price: '15,750',
              currency: '$',
              type: 'Full-Time',
              location: 'Europe',
              tags: [{ text: 'Vue JS', color: y.a.green[600] }],
              updated_at: ga()().subtract(16, 'hour')
            }
          ]
        }),
        Dr.onGet('/api/users/1/reviews').reply(200, {
          reviews: [
            {
              id: zn()(),
              rating: 4,
              message:
                'Shen was really great during the all time session we created the project',
              reviewer: {
                name: 'Ekaterina Tankova',
                avatar: '/images/avatars/avatar_2.png'
              },
              project: { title: 'Mella Full Screen Slider', price: '5,240.00' },
              pricePerHour: '43.00',
              hours: 31,
              currency: '$',
              created_at: ga()().subtract(4, 'hours')
            },
            {
              id: zn()(),
              rating: 5,
              reviewer: {
                name: 'Cao Yu',
                avatar: '/images/avatars/avatar_3.png'
              },
              project: { title: 'Dashboard Design', price: '3,680.00' },
              pricePerHour: '38.00',
              hours: 76,
              currency: '$',
              message:
                "Being the savage's bowsman, that is, the person who pulled the bow-oar in his boat (the second one from forward), it was my cheerful duty to attend upon him while taking that hard-scrabble scramble upon the dead whale's back. You have seen Italian organ-boys holding a dancing-ape by a long cord. Just so, from the ship's steep side, did I hold Queequeg down there in the sea, by what is technically called in the fishery a monkey-rope, attached to a strong strip of canvas belted round his waist.",
              created_at: ga()().subtract(8, 'days')
            }
          ]
        }),
        Dr.onGet('/api/users/1/connections').reply(200, {
          connections: [
            {
              id: zn()(),
              name: 'Ekaterina Tankova',
              avatar: '/images/avatars/avatar_2.png',
              common: 12,
              status: 'connected'
            },
            {
              id: zn()(),
              name: 'Cao Yu',
              avatar: '/images/avatars/avatar_3.png',
              common: 10,
              status: 'rejected'
            },
            {
              id: zn()(),
              name: 'Alexa Richardson',
              avatar: '/images/avatars/avatar_4.png',
              common: 8,
              status: 'pending'
            },
            {
              id: zn()(),
              name: 'Adam Denisov',
              avatar: '/images/avatars/avatar_7.png',
              common: 5,
              status: 'not_connected'
            },
            {
              id: zn()(),
              name: 'Ava Gregoraci',
              avatar: '/images/avatars/avatar_8.png',
              common: 1,
              status: 'connected'
            }
          ]
        }),
        Dr.onGet('/api/invoices').reply(200, { invoices: [] }),
        Dr.onGet('/api/invoices/1').reply(200, {
          invoice: {
            id: zn()(),
            due_date: ga()(),
            issue_date: ga()().add(15, 'days'),
            ref: 'DEV-9483',
            customer: {
              name: 'Tracey Herman',
              company: 'Countdown Grey Lynn',
              nzbn: '6934656584231',
              address: '271 Richmond Rd, Grey Lynn, Auckland 1022, New Zealand'
            },
            products: [
              {
                id: zn()(),
                desc: 'Freelancer Subscription (12/05/2019 - 11/06/2019)',
                value: '55.50'
              }
            ],
            subtotal: '50.00',
            taxes: '5.50',
            total: '55.50',
            currency: '$',
            created_at: ga()()
          }
        }),
        Dr.onGet('/api/kanban').reply(200, {
          lists: [
            { id: 'incoming', title: 'Incoming' },
            { id: 'in_progress', title: 'In progress' },
            { id: 'in_review', title: 'In review' },
            { id: 'completed', title: 'Completed' }
          ],
          tasks: [
            {
              id: zn()(),
              ref: '38',
              list: 'incoming',
              title: 'Call with sales of HubSpot',
              desc:
                'Duis condimentum lacus finibus felis pellentesque, ac auctor nibh fermentum. Duis sed dui ante. Phasellus id eros tincidunt, dictum lorem vitae, pellentesque sem. Aenean eu enim sit amet mauris rhoncus mollis. Sed enim turpis, porta a felis et, luctus faucibus nisi. Phasellus et metus fermentum, ultrices arcu aliquam, facilisis justo. Cras nunc nunc, elementum sed euismod ut, maximus eget nibh. Phasellus condimentum lorem neque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce sagittis pharetra eleifend. Suspendisse potenti.',
              members: [
                '/images/avatars/avatar_1.png',
                '/images/avatars/avatar_5.png',
                '/images/avatars/avatar_6.png'
              ],
              files: 0,
              comments: 1,
              progress: 0,
              deadline: ga()().add(7, 'days')
            },
            {
              id: zn()(),
              ref: '37',
              list: 'incoming',
              title: 'Interview for the Asis. Sales Manager',
              desc:
                'We are looking for vue experience and of course node js strong knowledge',
              members: [
                '/images/avatars/avatar_2.png',
                '/images/avatars/avatar_3.png'
              ],
              files: 0,
              comments: 2,
              progress: 0,
              deadline: ga()().add(6, 'days')
            },
            {
              id: zn()(),
              ref: '39',
              list: 'incoming',
              title:
                'Change the height of the top bar because it looks too chunky',
              desc:
                'We nede to make it aggresive with pricing because it\u2019s in their interest to acquire us',
              members: ['/images/avatars/avatar_11.png'],
              files: 0,
              comments: 0,
              progress: 0,
              deadline: ga()().add(5, 'days')
            },
            {
              id: zn()(),
              ref: '19',
              list: 'incoming',
              title: 'Integrate Stripe API',
              desc:
                'We nede to make it aggresive with pricing because it\u2019s in their interest to acquire us',
              members: [
                '/images/avatars/avatar_6.png',
                '/images/avatars/avatar_5.png',
                '/images/avatars/avatar_9.png'
              ],
              files: 2,
              comments: 1,
              progress: 0,
              deadline: ga()().add(4, 'days')
            },
            {
              id: zn()(),
              ref: '15',
              list: 'in_progress',
              title: 'Update the customer API for payments',
              desc:
                'We nede to make it aggresive with pricing because it\u2019s in their interest to acquire us',
              members: ['/images/avatars/avatar_10.png'],
              files: 2,
              comments: 0,
              progress: 60,
              deadline: ga()().add(4, 'hours')
            },
            {
              id: zn()(),
              ref: '10',
              list: 'in_progress',
              title: 'Redesign the landing page',
              desc:
                'We nede to make it aggresive with pricing because it\u2019s in their interest to acquire us',
              members: [
                '/images/avatars/avatar_10.png',
                '/images/avatars/avatar_11.png'
              ],
              files: 0,
              comments: 2,
              progress: 76,
              deadline: ga()().add(4, 'hours')
            },
            {
              id: zn()(),
              ref: '24',
              list: 'in_review',
              title:
                'Change the height of the top bar because it looks too chunky',
              desc:
                'We nede to make it aggresive with pricing because it\u2019s in their interest to acquire us',
              members: [
                '/images/avatars/avatar_6.png',
                '/images/avatars/avatar_4.png',
                '/images/avatars/avatar_2.png'
              ],
              files: 0,
              comments: 7,
              progress: 90,
              deadline: ga()().subtract(1, 'days')
            },
            {
              id: zn()(),
              ref: '21',
              list: 'in_review',
              title: 'Integrate Stripe API',
              desc:
                'We nede to make it aggresive with pricing because it\u2019s in their interest to acquire us',
              members: [
                '/images/avatars/avatar_6.png',
                '/images/avatars/avatar_4.png',
                '/images/avatars/avatar_8.png',
                '/images/avatars/avatar_2.png'
              ],
              files: 0,
              comments: 7,
              progress: 90,
              deadline: ga()().subtract(1, 'days')
            },
            {
              id: zn()(),
              ref: '17',
              list: 'completed',
              title: 'Design Customer Management Page',
              desc:
                'Change the height of the top bar because it looks too chunky',
              members: [
                '/images/avatars/avatar_6.png',
                '/images/avatars/avatar_2.png',
                '/images/avatars/avatar_9.png'
              ],
              files: 3,
              comments: 3,
              progress: 100,
              deadline: ga()().subtract(7, 'days')
            },
            {
              id: zn()(),
              ref: '23',
              list: 'completed',
              title: 'Integrate Messaging API',
              desc:
                'We nede to make it aggresive with pricing because it\u2019s in their interest to acquire us',
              members: [
                '/images/avatars/avatar_6.png',
                '/images/avatars/avatar_4.png',
                '/images/avatars/avatar_5.png',
                '/images/avatars/avatar_2.png',
                '/images/avatars/avatar_9.png'
              ],
              files: 1,
              comments: 0,
              progress: 100,
              deadline: ga()().subtract(7, 'days')
            }
          ]
        }),
        Dr.onGet('/api/tasks').reply(200, {
          tasks: [
            {
              id: zn()(),
              title: 'Update the API for the project',
              deadline: ga()()
                .add(1, 'days')
                .add(1, 'hour'),
              members: [
                '/images/avatars/avatar_2.png',
                '/images/avatars/avatar_3.png',
                '/images/avatars/avatar_4.png',
                '/images/avatars/avatar_5.png',
                '/images/avatars/avatar_6.png',
                '/images/avatars/avatar_7.png'
              ]
            },
            {
              id: zn()(),
              title: 'Redesign the landing page',
              deadline: ga()()
                .add(2, 'day')
                .add(1, 'hour'),
              members: [
                '/images/avatars/avatar_8.png',
                '/images/avatars/avatar_10.png',
                '/images/avatars/avatar_12.png'
              ]
            },
            {
              id: zn()(),
              title: 'Solve the bug for the showState',
              deadline: ga()(),
              members: ['/images/avatars/avatar_7.png']
            },
            {
              id: zn()(),
              title: 'Release v1.0 Beta',
              deadline: null,
              members: [
                '/images/avatars/avatar_2.png',
                '/images/avatars/avatar_10.png'
              ]
            },
            {
              id: zn()(),
              title: 'GDPR Compliance',
              deadline: null,
              members: [
                '/images/avatars/avatar_5.png',
                '/images/avatars/avatar_2.png',
                '/images/avatars/avatar_6.png'
              ]
            },
            {
              id: zn()(),
              title: 'Redesign Landing Page',
              deadline: null,
              members: ['/images/avatars/avatar_8.png']
            }
          ]
        }),
        Dr.onGet('/api/orders').reply(200, {
          orders: [
            {
              id: zn()(),
              created_at: ga()().subtract(10, 'minutes'),
              customer: { name: 'Ekaterina Tankova' },
              payment: {
                ref: 'FAD103',
                method: 'CreditCard',
                total: '500.00',
                currency: '$',
                status: 'pending'
              },
              status: 'inactive'
            },
            {
              id: zn()(),
              created_at: ga()()
                .subtract(32, 'minutes')
                .subtract(23, 'seconds'),
              customer: { name: 'Cao Yu' },
              payment: {
                ref: 'FAD102',
                method: 'CreditCard',
                total: '500.00',
                currency: '$',
                status: 'pending'
              },
              status: 'inactive'
            },
            {
              id: zn()(),
              created_at: ga()()
                .subtract(36, 'minutes')
                .subtract(51, 'seconds'),
              customer: { name: 'Alexa Richardson' },
              payment: {
                ref: 'FAD101',
                method: 'PayPal',
                total: '500.00',
                currency: '$',
                status: 'completed'
              },
              status: 'active'
            },
            {
              id: zn()(),
              created_at: ga()()
                .subtract(38, 'minutes')
                .subtract(55, 'seconds'),
              customer: { name: 'Anje Keizer' },
              payment: {
                ref: 'FAD100',
                method: 'CreditCard',
                total: '500.00',
                currency: '$',
                status: 'pending'
              },
              status: 'inactive'
            },
            {
              id: zn()(),
              created_at: ga()()
                .subtract(40, 'minutes')
                .subtract(3, 'seconds'),
              customer: { name: 'Clarke Gillebert' },
              payment: {
                ref: 'FAD99',
                method: 'PayPal',
                total: '500.00',
                currency: '$',
                status: 'completed'
              },
              status: 'active'
            },
            {
              id: zn()(),
              created_at: ga()()
                .subtract(45, 'minutes')
                .subtract(32, 'seconds'),
              customer: { name: 'Adam Denisov' },
              payment: {
                ref: 'FAD98',
                method: 'PayPal',
                total: '500.00',
                currency: '$',
                status: 'completed'
              },
              status: 'active'
            },
            {
              id: zn()(),
              created_at: ga()()
                .subtract(48, 'minutes')
                .subtract(57, 'seconds'),
              customer: {
                name: 'Ava Gregoraci',
                avatar: '/images/avatars/avatar_8.png'
              },
              payment: {
                ref: 'FAD97',
                method: 'CreditCard',
                total: '500.00',
                currency: '$',
                status: 'pending'
              },
              status: 'inactive'
            },
            {
              id: zn()(),
              created_at: ga()()
                .subtract(49, 'minutes')
                .subtract(4, 'seconds'),
              customer: { name: 'Emilee Simchenko' },
              payment: {
                ref: 'FAD96',
                method: 'CreditCard',
                total: '500.00',
                currency: '$',
                status: 'completed'
              },
              status: 'active'
            },
            {
              id: zn()(),
              created_at: ga()()
                .subtract(57, 'minutes')
                .subtract(43, 'seconds'),
              customer: { name: 'Kwak Seong-Min' },
              payment: {
                ref: 'FAD95',
                method: 'PayPal',
                total: '500.00',
                currency: '$',
                status: 'rejected'
              },
              status: 'inactive'
            },
            {
              id: zn()(),
              created_at: ga()()
                .subtract(59, 'minutes')
                .subtract(6, 'seconds'),
              customer: { name: 'Shen Zhi' },
              payment: {
                ref: 'FAD94',
                method: 'CreditCard',
                total: '500.00',
                currency: '$',
                status: 'canceled'
              },
              status: 'inactive'
            },
            {
              id: zn()(),
              created_at: ga()()
                .subtract(1, 'hour')
                .subtract(15, 'minutes')
                .subtract(43, 'seconds'),
              customer: { name: 'Merrile Burgett' },
              payment: {
                ref: 'FAD93',
                method: 'PayPal',
                total: '500.00',
                currency: '$',
                status: 'canceled'
              },
              status: 'inactive'
            }
          ]
        }),
        Dr.onGet('/api/orders/1').reply(200, {
          order: {
            id: zn()(),
            ref: 'FAD107',
            promoCode: null,
            value: '55.25',
            currency: '$',
            status: 'canceled',
            customer: {
              name: 'Ekaterina Tankova',
              address: 'Street King William, 42456',
              city: 'Montgomery',
              country: 'United States'
            },
            items: [
              {
                id: zn()(),
                name: 'Project Points',
                cuantity: 25,
                billing: 'monthly',
                status: 'completed',
                value: '50.25',
                currency: '$'
              },
              {
                id: zn()(),
                name: 'Freelancer Subscription',
                cuantity: 1,
                billing: 'monthly',
                status: 'completed',
                value: '5.00',
                currency: '$'
              }
            ],
            created_at: ga()()
          }
        }),
        Dr.onGet('/api/dashboard/top-referrals').reply(200, {
          referrals: [
            {
              id: zn()(),
              color: y.a.blueGrey[700],
              name: 'GitHub',
              initials: 'GT',
              value: '53,032'
            },
            {
              id: zn()(),
              color: y.a.cyan[500],
              name: 'Twitter',
              initials: 'TW',
              value: '39,551'
            },
            {
              id: zn()(),
              color: y.a.indigo[600],
              name: 'Hacker News',
              initials: 'HN',
              value: '23,150'
            },
            {
              id: zn()(),
              color: y.a.red[500],
              name: 'Stack Overflow',
              initials: 'SO',
              value: '14,093'
            },
            {
              id: zn()(),
              color: y.a.orange[900],
              name: 'Reddit.com',
              initials: 'RD',
              value: '7,251'
            },
            {
              id: zn()(),
              color: y.a.blueGrey[900],
              name: 'Dev.to',
              initials: 'DE',
              value: '5,694'
            },
            {
              id: zn()(),
              color: y.a.blue[900],
              name: 'Facebook',
              initials: 'FB',
              value: '3,643'
            },
            {
              id: zn()(),
              color: y.a.blueGrey[900],
              name: 'Medium',
              initials: 'MD',
              value: '1,654'
            }
          ]
        }),
        Dr.onGet('/api/dashboard/profitable-products').reply(200, {
          products: [
            {
              id: zn()(),
              type: 'freelancer_basic',
              name: 'Freelancer Basic Subscription',
              image: '/images/products/product_freelancer.svg',
              subscriptions: '13,153',
              currency: '$',
              price: '5.00',
              progress: 93
            },
            {
              id: zn()(),
              type: 'freelancer_extra',
              name: 'Freelancer Extra Subscription',
              image: '/images/products/product_freelancer.svg',
              subscriptions: '10,300',
              currency: '$',
              price: '15.00',
              progress: 76
            },
            {
              id: zn()(),
              type: 'agency_basic',
              name: 'Agency Basic Subscription',
              image: '/images/products/product_agency.svg',
              subscriptions: '5,300',
              currency: '$',
              price: '25.00',
              progress: 60
            },
            {
              id: zn()(),
              type: 'enterprise_basic',
              name: 'Enterprise Basic Subscription',
              image: '/images/products/product_enterprise.svg',
              subscriptions: '1,203',
              currency: '$',
              price: '205.00',
              progress: 46
            },
            {
              id: zn()(),
              type: 'enterprise_extra',
              name: 'Enterprise Extra Subscription',
              image: '/images/products/product_enterprise.svg',
              subscriptions: '254',
              currency: '$',
              price: '500.00',
              progress: 41
            }
          ]
        }),
        Dr.onGet('/api/dashboard/customer-activity').reply(200, {
          customers: [
            {
              id: zn()(),
              type: 'payment',
              description: 'Subscription Purchase',
              author: {
                name: 'Ekaterina Tankova',
                avatar: '/images/avatars/avatar_2.png'
              },
              created_at: ga()().subtract(23, 'minutes')
            },
            {
              id: zn()(),
              type: 'payment',
              description: 'Subscription Purchase',
              author: {
                name: 'Cao Yu',
                avatar: '/images/avatars/avatar_3.png'
              },
              created_at: ga()().subtract(56, 'minutes')
            },
            {
              id: zn()(),
              type: 'payment',
              description: 'Subscription Purchase',
              author: {
                name: 'Alexa Richardson',
                avatar: '/images/avatars/avatar_4.png'
              },
              created_at: ga()().subtract(2, 'hours')
            },
            {
              id: zn()(),
              type: 'payment',
              description: 'Subscription Purchase',
              author: {
                name: 'Anje Keizer',
                avatar: '/images/avatars/avatar_5.png'
              },
              created_at: ga()().subtract(5, 'minutes')
            },
            {
              id: zn()(),
              type: 'payment',
              description: 'Subscription Purchase',
              author: {
                name: 'Clarke Gillebert',
                avatar: '/images/avatars/avatar_6.png'
              },
              created_at: ga()().subtract(5, 'minutes')
            }
          ]
        }),
        Dr.onGet('/api/dashboard/earnings').reply(200, {
          earnings: [
            {
              id: zn()(),
              label: 'Subscriptions',
              value: 56,
              color: y.a.indigo[500]
            },
            {
              id: zn()(),
              label: 'Afiliate',
              value: 24,
              color: y.a.indigo[300]
            },
            { id: zn()(), label: 'Sales', value: 20, color: y.a.indigo[100] }
          ]
        }),
        Dr.onGet('/api/dashboard/latest-orders').reply(200, {
          orders: [
            {
              id: zn()(),
              ref: 'DEV1042',
              items: 7,
              value: '25.00',
              currency: '$',
              customer: {
                name: 'Ekaterina Tankova',
                email: 'ekaterina@devias.io'
              },
              status: 'pending'
            },
            {
              id: zn()(),
              ref: 'DEV1041',
              items: 8,
              value: '25.00',
              currency: '$',
              customer: { name: 'Cao Yu', email: 'cao.yu@devias.io' },
              status: 'complete'
            },
            {
              id: zn()(),
              ref: 'DEV1040',
              items: 4,
              value: '25.00',
              currency: '$',
              customer: {
                name: 'Alexa Richardson',
                email: 'alexa.richardson@devias.io'
              },
              status: 'rejected'
            },
            {
              id: zn()(),
              ref: 'DEV1039',
              items: 1,
              value: '25.00',
              currency: '$',
              customer: { name: 'Anje Keizer', email: 'anje.keiser@devias.io' },
              status: 'pending'
            },
            {
              id: zn()(),
              ref: 'DEV1038',
              items: 5,
              value: '25.00',
              currency: '$',
              customer: {
                name: 'Clarke Gillebert',
                email: 'clarke.gillebert@devias.io'
              },
              status: 'complete'
            },
            {
              id: zn()(),
              ref: 'DEV1037',
              items: 2,
              value: '25.00',
              currency: '$',
              customer: {
                name: 'Merrile Burgett',
                email: 'merrile.burgett@devias.io'
              },
              status: 'complete'
            }
          ]
        }),
        Dr.onGet('/api/dashboard/latest-projects').reply(200, {
          projects: [
            {
              id: zn()(),
              title: 'Mella Full Screen Slider',
              price: '12,500',
              currency: '$',
              author: {
                name: 'Anje Keizer',
                avatar: '/images/avatars/avatar_5.png'
              },
              tags: [{ text: 'Angular JS', color: y.a.red[600] }]
            },
            {
              id: zn()(),
              title: 'Dashboard Design',
              price: '15,750',
              currency: '$',
              author: {
                name: 'Emilee Simchenko',
                avatar: '/images/avatars/avatar_9.png'
              },
              tags: [{ text: 'HTML & CSS', color: y.a.grey[600] }]
            },
            {
              id: zn()(),
              title: 'Ten80 Web Design',
              price: '15,750',
              currency: '$',
              author: {
                name: 'Kwak Seong-Min',
                avatar: '/images/avatars/avatar_10.png'
              },
              tags: [{ text: 'React JS', color: y.a.indigo[600] }]
            },
            {
              id: zn()(),
              title: 'Neura e-commerce UI Kit',
              price: '12,500',
              currency: '$',
              author: {
                name: 'Shen Zhi',
                avatar: '/images/avatars/avatar_11.png'
              },
              tags: [{ text: 'Vue JS', color: y.a.green[600] }]
            },
            {
              id: zn()(),
              title: 'Administrator Dashboard',
              price: '15,750',
              currency: '$',
              author: {
                name: 'Cao Yu',
                avatar: '/images/avatars/avatar_3.png'
              },
              tags: [{ text: 'Angular JS', color: y.a.red[600] }]
            }
          ]
        });
      t(462), t(463), t(464), Object(d.a)(), G();
      var zr = function(e) {
          var a = e.isLoggedIn,
            t = (e.userType, window.location.pathname.split('/')[1]);
          console.log(t);
          var n = Object(Ir.a)();
          n.t, n.i18n;
          return a
            ? r.a.createElement('div', null, Object(v.a)(Tr))
            : r.a.createElement(u.a, { to: '/auth/login' });
        },
        Mr = Object(d.a)(),
        Fr = G(),
        Gr = function() {
          var e = Object(Ir.a)(),
            a = e.t;
          e.i18n;
          return r.a.createElement(
            g.a,
            { store: Fr },
            r.a.createElement(
              h.a,
              { theme: I },
              r.a.createElement(
                b.b,
                { utils: p.a },
                r.a.createElement('h1', null, a('Welcome')),
                r.a.createElement(
                  u.c,
                  { history: Mr },
                  r.a.createElement(ne.q, null),
                  r.a.createElement(ne.f, null),
                  r.a.createElement(ne.c, null),
                  Object(v.a)(_r),
                  r.a.createElement(zr, { isLoggedIn: !0, userType: 'super' })
                )
              )
            )
          );
        };
      Boolean(
        'localhost' === window.location.hostname ||
          '[::1]' === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      );
      o.a.render(r.a.createElement(Gr, null), document.getElementById('root')),
        'serviceWorker' in navigator &&
          navigator.serviceWorker.ready.then(function(e) {
            e.unregister();
          });
    }
  },
  [[521, 11, 12]]
]);
//# sourceMappingURL=main.67b285b5.chunk.js.map
