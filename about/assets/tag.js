;(function () {
  try {
    ;(function () {
      function df (a, c, b, d) {
        var e = this
        return D(window, 'c.i', function () {
          function f (v) {
            ;(v = ef(k, l, '', v)(k, l)) && (T(v.then) ? v.then(g) : g(v))
            return v
          }
          function g (v) {
            v &&
              (T(v)
                ? m.push(v)
                : La(v) &&
                  z(function (F) {
                    var Y = F[0]
                    F = F[1]
                    T(F) && ('u' === Y ? m.push(F) : h(F, Y))
                  }, pa(v)))
          }
          function h (v, F, Y) {
            e[F] = Gl(k, l, Y || p, F, v)
          }
          var k = window
          ;(!k || (isNaN(a) && !a)) && Xd()
          var l = Hl(a, ff, c, b, d),
            m = [],
            p = [rh, ef, sh]
          p.unshift(Il)
          var q = A(O, Db),
            r = N(l)
          l.id || Ta(jc('Invalid Metrika id: ' + l.id, !0))
          var t = ad.o('counters', {})
          if (t[r])
            return Eb(k, r, 'Duplicate counter ' + r + ' initialization'), t[r]
          t[r] = e
          ad.C('counters', t)
          ad.Va('counter', e)
          z(function (v) {
            v(k, l)
          }, Yd)
          z(f, Cc)
          f(Jl)
          h(Kl(k, l, m), 'destruct', [rh, sh])
          Jb(k, E([k, q, f, 1, 'a.i'], th))
          z(f, U)
        })()
      }
      function Ll (a, c) {
        var b
        try {
          var d = c.origin
        } catch (f) {}
        if (
          'https://oauth.yandex.ru' === d &&
          n(c, 'source.window') &&
          '_ym_uid_request' === n(c.data, '_ym')
        ) {
          d = c.source
          var e = ((b = {}), (b._ym_uid = a()), b)
          d.postMessage(e, 'https://oauth.yandex.ru')
        }
      }
      function Ml (a) {
        var c = Z(
          Boolean,
          A(function (b) {
            var d = b[1]
            return (b = Nl(a[b[0]])) ? '' + d + '\n' + b : null
          }, pa(Ol))
        )
        return I('\n', c)
      }
      function Pl (a) {
        return 'che\n' + a
      }
      function Nl (a) {
        return xa(a)
          ? a
          : ca(a)
          ? I(
              ',',
              A(function (c) {
                return '"' + c.brand + '";v="' + c.version + '"'
              }, a)
            )
          : ma(a)
          ? ''
          : a
          ? '?1'
          : '?0'
      }
      function Ql (a, c) {
        var b = Rl(a),
          d = [Sl(a) || Tl(a)]
        uh(a) && d.push(b)
        var e = fa(a)
        b = Ra(a)
        var f = b.o('synced', {})
        d = Z(function (g) {
          if (c[g]) {
            var h = (f[g] || 1) + 1440 < e(kb)
            h && delete f[g]
            return h
          }
        }, d)
        b.C('synced', f)
        return A(function (g) {
          return { Ej: c[g], Ri: g }
        }, d)
      }
      function Tl (a) {
        a = Ul(a)
        return Vl[a] || a
      }
      function Rl (a) {
        a = vh(a)
        return Wl[a] || 'ru'
      }
      function Xl (a, c) {
        var b = '' + c,
          d = { id: 1, $: '0' },
          e = Yl(b)
        e
          ? (d.id = e)
          : -1 === b.indexOf(':')
          ? ((b = Ga(b)), (d.id = b))
          : ((b = b.split(':')),
            (e = b[1]),
            (d.id = Ga(b[0])),
            (d.$ = Zd(e) ? '1' : '0'))
        return [Ha(a, d), d]
      }
      function Zl (a, c) {
        bd[a] || (bd[a] = [])
        bd[a].push(c)
      }
      function $l (a, c, b, d) {
        var e = b.H
        if (c.Zj || Zd(c.$) || !e) d()
        else {
          var f = $d(a),
            g = Dc(a, ''),
            h = function () {
              var t = wh(f)
              t = '' + t + am(t, g)
              ae(b, 'gdpr', t)
              d()
            }
          if (3 === c.id) h()
          else {
            var k = H(a)
            if ((e = k.o('f1'))) e(h)
            else {
              var l = (e = wh(f)) ? A(w(be, n), e.split(',')) : []
              if (xh(l)) h()
              else {
                e = ce(a)
                var m = S(a)
                var p = /(^|\w+\.)yango(\.yandex)?\.com$/.test(m.hostname)
                  ? {
                      url: 'https://yastatic.net/s3/taxi-front/yango-gdpr-popup/',
                      Uf: 'ar az be en es et fi fr he hy ka kk ky lt lv no pt ro ru sl sr tg tr uk uz zh'.split(
                        ' '
                      ),
                      cg: '_inversed_buttons'
                    }
                  : void 0
                var q =
                  (e = e || !!p) &&
                  (-1 !== m.href.indexOf('yagdprcheck=1') || g.o('yaGdprCheck'))
                m = g.o('gdpr')
                var r = J.resolve()
                g.o('yandex_login')
                  ? (l.push('13'), g.C('gdpr', Ec, 525600))
                  : e
                  ? K(m, Wb)
                    ? m === gf
                      ? l.push('12')
                      : l.push('3')
                    : hf(a) || bm(a)
                    ? l.push('17')
                    : (r = cm(a).then(function (t) {
                        t && l.push('28')
                      }, B))
                  : l.push('14')
                r.then(function () {
                  var t = w(f, dm)
                  xh(l)
                    ? (z(t, l), h())
                    : (de.push(h),
                      k.C('f1', function (v, F) {
                        var Y = 0
                        if (F) {
                          var Q = lb(a, F) || ''
                          Y += Q.length
                        }
                        de.push(v)
                        1e6 >= Y && de.push(v)
                      }),
                      (0, jf[0])(a)
                        .then(V('params.eu'))
                        .then(function (v) {
                          if (v || q) {
                            g.C('gdpr_popup', gf)
                            em(a, c)
                            if (eb(a)) return fm(a, t, c)
                            var F = yh(a, f)
                            if (F)
                              return (
                                (v = gm(a, t, F, c, p)),
                                v.then(E([a, c], hm)),
                                v
                              )
                          }
                          v || t('8')
                          return J.resolve({ value: Ec, ce: !0 })
                        })
                        .then(function (v) {
                          g.Sb('gdpr_popup')
                          if (v) {
                            var F = v.value
                            v = v.ce
                            K(F, Wb) && g.C('gdpr', F, v ? void 0 : 525600)
                          }
                          F = kc(de, ha)
                          lc(a, F, 20)(Ua(D(a, 'gdr'), B))
                          k.C('f1', ha)
                        })
                        ['catch'](D(a, 'gdp.a')))
                })
              }
            }
          }
        }
      }
      function hm (a, c) {
        if (ce(a)) {
          var b = $d(a),
            d = Ha(a, c)
          d = d && d.params
          b = A(w(im, n), kf(b))
          d && b.length && d('gdpr', Na(b))
        }
      }
      function fm (a, c, b) {
        var d = ee(a, b)
        return new J(function (e) {
          var f
          if (d) {
            var g = d.ca,
              h = u(w('4', c), w(null, e)),
              k = W(a, h, 2e3, 'gdp.f.t')
            d.vg(((f = {}), (f.type = 'isYandex'), f))
              .then(function (l) {
                l.isYandex
                  ? (c('5'),
                    g.D(
                      ya(['GDPR-ok-view-default', 'GDPR-ok-view-detailed'], lf),
                      function (m) {
                        e({ value: zh(m[1].type) })
                      }
                    ))
                  : (c('6'), e(null))
              })
              ['catch'](h)
              .then(E([a, k], na))
          } else e({ value: gf, ce: !0 })
        })
      }
      function em (a, c) {
        var b = ee(a, c)
        b &&
          b.ca.D(['isYandex'], function () {
            var d
            return (d = { type: 'isYandex' }), (d.isYandex = ce(a)), d
          })
        return b
      }
      function gm (a, c, b, d, e) {
        var f = void 0 === e ? jm : e
        e = f.url
        var g = f.cg
        f = km(a, f.Uf, d.$j)
        var h = ee(a, d)
        if (!h) return J.resolve({ value: Ec, ce: !0 })
        var k = mc(a, { src: '' + e + f + g + '.js' })
        return new J(function (l, m) {
          k
            ? (c('7'),
              (k.onerror = function () {
                var p
                c('9')
                h.ug(((p = {}), (p.type = 'GDPR-ok-view-default'), p))
                l(null)
              }),
              (k.onload = function () {
                c('10')
                b.D(
                  ya(['GDPR-ok-view-default', 'GDPR-ok-view-detailed'], lf),
                  function (p) {
                    var q
                    p = p.type
                    h.ug(((q = {}), (q.type = p), q))
                    l({ value: zh(p) })
                  }
                )
              }))
            : (c('9'), m(Sa('gdp.e')))
        })
      }
      function km (a, c, b) {
        a = b || vh(a)
        return K(a, c) ? a : 'en'
      }
      function zh (a) {
        if (K(a, ['GDPR-ok-view-default', 'GDPR-ok-view-detailed'])) return Ec
        a = a.replace('GDPR-ok-view-detailed-', '')
        return K(a, Wb) ? a : Ec
      }
      function Ah (a, c, b) {
        var d = n(a, 'AppMetricaInitializer'),
          e = n(d, 'init')
        if (e)
          try {
            G(e, d)(lb(a, c))
          } catch (f) {}
        else Bh = W(a, E([a, c, 2 * b], Ah), b, 'ai.d')
        return function () {
          return na(a, Bh)
        }
      }
      function lm (a) {
        var c = n(a, 'speechSynthesis.getVoices')
        if (!c) return ''
        a = G(c, a.speechSynthesis)
        return nc(function (b) {
          return A(w(b, n), mm)
        }, a())
      }
      function nm (a, c, b) {
        return I('x', A(u(O, qa('concat', '' + a), w(b, n)), c))
      }
      function om (a, c) {
        var b = c.qh
        if (!pm(a, b)) return ''
        var d = []
        a: {
          var e = qm(a, b)
          try {
            var f = E(e, u)()()
            break a
          } catch (F) {
            if ('ccf' === F.message) {
              f = null
              break a
            }
            Ta(F)
          }
          f = void 0
        }
        if (Va(f)) var g = ''
        else
          try {
            g = f.toDataURL()
          } catch (F) {
            g = ''
          }
        ;(f = g) && d.push(f)
        var h = b.getContextAttributes()
        try {
          var k = Ma(b.getSupportedExtensions, 'getSupportedExtensions')
            ? b.getSupportedExtensions() || []
            : []
        } catch (F) {
          k = []
        }
        k = I(';', k)
        f = mf(b.getParameter(b.ALIASED_LINE_WIDTH_RANGE), b)
        e = mf(b.getParameter(b.ALIASED_POINT_SIZE_RANGE), b)
        g = b.getParameter(b.ALPHA_BITS)
        h = h && h.antialias ? 'yes' : 'no'
        var l = b.getParameter(b.BLUE_BITS),
          m = b.getParameter(b.DEPTH_BITS),
          p = b.getParameter(b.GREEN_BITS),
          q =
            b.getExtension('EXT_texture_filter_anisotropic') ||
            b.getExtension('WEBKIT_EXT_texture_filter_anisotropic') ||
            b.getExtension('MOZ_EXT_texture_filter_anisotropic')
        if (q) {
          var r = b.getParameter(q.MAX_TEXTURE_MAX_ANISOTROPY_EXT)
          0 === r && (r = 2)
        }
        r = {
          pk: k,
          'webgl aliased line width range': f,
          'webgl aliased point size range': e,
          'webgl alpha bits': g,
          'webgl antialiasing': h,
          'webgl blue bits': l,
          'webgl depth bits': m,
          'webgl green bits': p,
          'webgl max anisotropy': q ? r : null,
          'webgl max combined texture image units': b.getParameter(
            b.MAX_COMBINED_TEXTURE_IMAGE_UNITS
          ),
          'webgl max cube map texture size': b.getParameter(
            b.MAX_CUBE_MAP_TEXTURE_SIZE
          ),
          'webgl max fragment uniform vectors': b.getParameter(
            b.MAX_FRAGMENT_UNIFORM_VECTORS
          ),
          'webgl max render buffer size': b.getParameter(
            b.MAX_RENDERBUFFER_SIZE
          ),
          'webgl max texture image units': b.getParameter(
            b.MAX_TEXTURE_IMAGE_UNITS
          ),
          'webgl max texture size': b.getParameter(b.MAX_TEXTURE_SIZE),
          'webgl max varying vectors': b.getParameter(b.MAX_VARYING_VECTORS),
          'webgl max vertex attribs': b.getParameter(b.MAX_VERTEX_ATTRIBS),
          'webgl max vertex texture image units': b.getParameter(
            b.MAX_VERTEX_TEXTURE_IMAGE_UNITS
          ),
          'webgl max vertex uniform vectors': b.getParameter(
            b.MAX_VERTEX_UNIFORM_VECTORS
          ),
          'webgl max viewport dims': mf(b.getParameter(b.MAX_VIEWPORT_DIMS), b),
          'webgl red bits': b.getParameter(b.RED_BITS),
          'webgl renderer': b.getParameter(b.RENDERER),
          'webgl shading language version': b.getParameter(
            b.SHADING_LANGUAGE_VERSION
          ),
          'webgl stencil bits': b.getParameter(b.STENCIL_BITS),
          'webgl vendor': b.getParameter(b.VENDOR),
          'webgl version': b.getParameter(b.VERSION)
        }
        nf(d, r, ': ')
        a: {
          try {
            var t = b.getExtension('WEBGL_debug_renderer_info')
            if (t) {
              var v = {
                'webgl unmasked vendor': b.getParameter(
                  t.UNMASKED_VENDOR_WEBGL
                ),
                'webgl unmasked renderer': b.getParameter(
                  t.UNMASKED_RENDERER_WEBGL
                )
              }
              break a
            }
          } catch (F) {}
          v = {}
        }
        nf(d, v)
        if (!b.getShaderPrecisionFormat) return I('~', d)
        nf(d, rm(b))
        return I('~', d)
      }
      function nf (a, c, b) {
        void 0 === b && (b = ':')
        z(function (d) {
          return a.push('' + d[0] + b + d[1])
        }, pa(c))
      }
      function sm (a, c, b, d) {
        c = d.o('cc')
        d = E(['cc', ''], d.C)
        if (c) {
          var e = c.split('&')
          c = e[0]
          if ((e = (e = e[1]) && Ga(e)) && 1440 < fa(a)(kb) - e) return d()
          b.C('cc', c)
        } else ka(0)(c) || d()
      }
      function tm (a, c, b, d) {
        return ra(c, function (e) {
          if ('0' === n(e, 'settings.pcs') && !cd(a))
            if (((e = d.o('zzlc')), X(e) || Va(e) || 'na' === e)) {
              e = 'ru'
              var f = of(a, 68),
                g = pf(a, 79)
              if (f || g) e = 'md'
              if ((f = ab(a))) {
                var h = f('iframe')
                y(h.style, {
                  display: 'none',
                  width: '1px',
                  height: '1px',
                  visibility: 'hidden'
                })
                h.src =
                  'https://mc.yandex.' + e + Ch('L21ldHJpa2EvenpsYy5odG1s')
                if ((e = Xb(a))) {
                  e.appendChild(h)
                  var k = 0,
                    l = ia(a).D(
                      a,
                      ['message'],
                      D(a, 'zz.m', function (m) {
                        ;(m = n(m, 'data')) &&
                          m.substr &&
                          '__ym__zz' === m.substr(0, 8) &&
                          (oc(h),
                          (m = m.substr(8)),
                          d.C('zzlc', m),
                          b.C('zzlc', m),
                          l(),
                          na(a, k))
                      })
                    )
                  k = W(a, u(l, w(h, oc)), 3e3)
                }
              }
            } else b.C('zzlc', e)
        })
      }
      function um (a, c, b) {
        var d, e
        c = bb(w(a, n), vm)
        c = X(c) ? null : n(a, c)
        if (
          n(a, 'navigator.onLine') &&
          c &&
          c &&
          n(c, 'prototype.constructor.name')
        ) {
          var f = new c(((d = {}), (d.iceServers = []), d))
          a = n(f, 'createDataChannel')
          T(a) &&
            (G(a, f, 'y.metrika')(),
            (a = n(f, 'createOffer')),
            T(a) &&
              !a.length &&
              ((a = G(a, f)()),
              (d = n(a, 'then')),
              T(d) &&
                G(d, a, function (g) {
                  var h = n(f, 'setLocalDescription')
                  T(h) && G(h, f, g, B, B)()
                })(),
              y(
                f,
                ((e = {}),
                (e.onicecandidate = function () {
                  var g,
                    h = n(f, 'close')
                  if (T(h)) {
                    h = G(h, f)
                    try {
                      var k =
                        (g = n(f, 'localDescription.sdp')) &&
                        g.match(/c=IN\s[\w\d]+\s([\w\d:.]+)/)
                    } catch (l) {
                      f.onicecandidate = B
                      'closed' !== f.iceConnectionState && h()
                      return
                    }
                    k && 0 < k.length && ((g = pc(k[1])), b.C('pp', g))
                    f.onicecandidate = B
                    h()
                  }
                }),
                e)
              )))
        }
      }
      function wm (a, c, b) {
        var d,
          e = dd(a, c)
        if (e) {
          e.ca.D(['gpu-get'], function () {
            var h
            return (h = {}), (h.type = 'gpu-get'), (h.pu = b.o('pu')), h
          })
          var f = n(a, 'opener')
          if (f) {
            var g = W(a, E([a, c, b], Dh), 200, 'pu.m')
            e.Ke(f, ((d = {}), (d.type = 'gpu-get'), d), function (h, k) {
              var l = n(k, 'pu')
              l && (na(a, g), b.C('pu', l))
            })
          } else Dh(a, c, b)
        }
      }
      function Dh (a, c, b) {
        var d = n(a, 'location.host')
        a = ed(a, c)
        b.C('pu', '' + pc(d) + a)
      }
      function Eh (a, c, b) {
        c = Dc(a, void 0, c)
        c = Fh(a, c.o('phc_settings') || '')
        var d = n(c, 'clientId'),
          e = n(c, 'orderId'),
          f = n(c, 'service_id'),
          g = n(c, 'phones') || []
        return d && e && g
          ? xm(a, b.xc, { Ig: zm })
              .hg(g)
              .then(function (h) {
                return Am(b, { Pb: d, ac: e, yg: f }, h.qa, g, h.Ca)
              })
              ['catch'](function () {})
          : J.resolve()
      }
      function zm (a, c, b) {
        a = Bm(b.dd)
        if ('href' === b.Ge) {
          var d = b.Gb
          c = d.href
          b = c.replace(a, b.mb)
          if (c !== b) return (d.href = b), !0
        } else if (
          (a =
            null === (d = b.Gb.textContent) || void 0 === d
              ? void 0
              : d.replace(a, b.mb)) &&
          a !== b.Gb.textContent
        )
          return (b.Gb.textContent = a), !0
        return !1
      }
      function Am (a, c, b, d, e) {
        var f
        c.Pb &&
          c.ac &&
          ((c.Pb === a.Pb && c.ac === a.ac) || y(a, c, { qa: {}, tb: !0 }),
          0 < e && Oa(a.Ca, [e]),
          z(function (g) {
            var h,
              k,
              l = g[0]
            g = g[1]
            var m = +(a.qa[l] && a.qa[l][g] ? a.qa[l][g] : 0)
            y(a.qa, ((h = {}), (h[l] = ((k = {}), (k[g] = m), k)), h))
          }, d),
          z(function (g) {
            var h,
              k,
              l = g[0]
            g = g[1]
            var m = 1 + (a.qa[l] ? a.qa[l][g] : 0)
            y(a.qa, ((h = {}), (h[l] = ((k = {}), (k[g] = m), k)), h))
          }, b),
          a.Rf &&
            (a.tb || b.length) &&
            ((c = Ha(a.l, a.xc)) &&
              c.params(
                '__ym',
                'phc',
                ((f = {}),
                (f.clientId = a.Pb),
                (f.orderId = a.ac),
                (f.service_id = a.yg),
                (f.phones = a.qa),
                (f.performance = a.Ca),
                f)
              ),
            (a.tb = !1)))
      }
      function Cm (a) {
        a = ab(a)
        if (!a) return ''
        a = a('video')
        try {
          var c = qa('canPlayType', a),
            b = nc(function (d) {
              return A(u(O, qa('concat', d + '; codecs=')), Dm)
            }, Gh)
          return A(c, [].concat(Gh, b))
        } catch (d) {
          return 'canPlayType'
        }
      }
      function Em (a) {
        var c = n(a, 'matchMedia')
        if (c && Ca('matchMedia', c)) {
          var b = qa('matchMedia', a)
          return M(
            function (d, e) {
              d[e] = b('(' + e + ')')
              return d
            },
            {},
            Fm
          )
        }
      }
      function rm (a) {
        return M(
          function (c, b) {
            var d = b[0],
              e = b[1]
            c[d + ' precision'] = n(e, 'precision') || 'n'
            c[d + ' precision rangeMin'] = n(e, 'rangeMin') || 'n'
            c[d + ' precision rangeMax'] = n(e, 'rangeMax') || 'n'
            return c
          },
          {},
          [
            [
              'webgl vertex shader high float',
              a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_FLOAT)
            ],
            [
              'webgl vertex shader medium',
              a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_FLOAT)
            ],
            [
              'webgl vertex shader low float',
              a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_FLOAT)
            ],
            [
              'webgl fragment shader high float',
              a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_FLOAT)
            ],
            [
              'webgl fragment shader medium float',
              a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_FLOAT)
            ],
            [
              'webgl fragment shader low float',
              a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_FLOAT)
            ],
            [
              'webgl vertex shader high int',
              a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_INT)
            ],
            [
              'webgl vertex shader medium int',
              a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_INT)
            ],
            [
              'webgl vertex shader low int',
              a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_INT)
            ],
            [
              'webgl fragment shader high int',
              a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_INT)
            ],
            [
              'webgl fragment shader medium int',
              a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_INT)
            ],
            [
              'webgl fragment shader low int precision',
              a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_INT)
            ]
          ]
        )
      }
      function qm (a, c) {
        return [
          function () {
            var b = c.createBuffer()
            ;(b && c.getParameter && Ca('getParameter', c.getParameter)) || qf()
            c.bindBuffer(c.ARRAY_BUFFER, b)
            var d = new a.Float32Array(Gm)
            c.bufferData(c.ARRAY_BUFFER, d, c.STATIC_DRAW)
            b.Ni = 3
            b.Zi = 3
            d = c.createProgram()
            var e = c.createShader(c.VERTEX_SHADER)
            ;(d && e) || qf()
            return { Ee: d, Xj: e, Wj: b }
          },
          function (b) {
            var d = b.Ee,
              e = b.Xj
            c.shaderSource(
              e,
              'attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}'
            )
            c.compileShader(e)
            c.attachShader(d, e)
            ;(d = c.createShader(c.FRAGMENT_SHADER)) || qf()
            return y(b, { Xh: d })
          },
          function (b) {
            var d = b.Ee,
              e = b.Xh
            c.shaderSource(
              e,
              'precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}'
            )
            c.compileShader(e)
            c.attachShader(d, e)
            c.linkProgram(d)
            c.useProgram(d)
            return b
          },
          function (b) {
            var d = b.Ee
            b = b.Wj
            d.Vj = c.getAttribLocation(d, 'attrVertex')
            d.aj = c.getUniformLocation(d, 'uniformOffset')
            c.enableVertexAttribArray(d.Ok)
            c.vertexAttribPointer(d.Vj, b.Ni, c.FLOAT, !1, 0, 0)
            c.uniform2f(d.aj, 1, 1)
            c.drawArrays(c.TRIANGLE_STRIP, 0, b.Zi)
            return c.canvas
          }
        ]
      }
      function pm (a, c) {
        if (!T(a.Float32Array)) return !1
        var b = n(c, 'canvas')
        if (!b || !Ca('toDataUrl', b.toDataURL)) return !1
        try {
          c.createBuffer()
        } catch (d) {
          return !1
        }
        return !0
      }
      function mf (a, c) {
        c.clearColor(0, 0, 0, 1)
        c.enable(c.DEPTH_TEST)
        c.depthFunc(c.LEQUAL)
        c.clear(c.COLOR_BUFFER_BIT | c.DEPTH_BUFFER_BIT)
        return '[' + n(a, '0') + ', ' + n(a, '1') + ']'
      }
      function Hm (a, c) {
        if (n(c, 'settings.ins')) {
          var b = H(a)
          if (!b.o('scip')) {
            var d = rf(a),
              e = fa(a)(kb),
              f = Hh(d.o('sci'))
            if (!(f && 1440 >= e - f)) {
              f = sa(a, 'ci')
              var g = ['sync.cook.int'],
                h = function (l) {
                  l = b.o('scip', '') + l
                  b.C('scip', l)
                },
                k = w('a', h)
              b.C('scip', '0')
              return f({ Y: { ja: g, Wa: 3e3, Lb: !0 } }, [
                'https://an.yandex.ru/sync_cookie'
              ])
                .then(function (l) {
                  l = n(l.fd, 'CookieMatchUrls')
                  if (ca(l) && Pa(l)) {
                    h('1')
                    var m = sa(a, 'c')
                    l = A(function (p, q) {
                      return m({ Y: { ja: g, Wa: 3e3 } }, ['https://' + p])[
                        'catch'
                      ](u(w('b', h), w('' + q, h)))
                    }, Z(xa, l))
                    return J.all(l)
                  }
                  k()
                }, k)
                .then(function () {
                  var l = b.o('scip')
                  !l || Fc(l, 'a') || Fc(l, 'b') || (d.C('sci', e), h('2'))
                }, B)
            }
          }
        }
      }
      function Im () {
        return M(
          function (a, c) {
            var b = pc(c + '/tag.js')
            Ih[b] || (a[b] = 1)
            return a
          },
          {},
          [
            'mc.yandex.ru',
            'mc.yandex.com',
            'cdn.jsdelivr.net/npm/yandex-metrica-watch'
          ]
        )
      }
      function Jh (a) {
        return {
          Z: function (c, b) {
            if (!c.H) return b()
            var d = H(a).o('fid')
            !Kh && d && (ae(c, 'fid', d), (Kh = !0))
            return b()
          }
        }
      }
      function Jm (a, c) {
        var b = a.document
        if (K(b.readyState, ['interactive', 'complete'])) Jb(a, c)
        else {
          var d = ia(a),
            e = d.D,
            f = d.kc,
            g = function () {
              f(b, ['DOMContentLoaded'], g)
              f(a, ['load'], g)
              c()
            }
          e(b, ['DOMContentLoaded'], g)
          e(a, ['load'], g)
        }
      }
      function sf (a) {
        return {
          Z: function (c, b) {
            var d = c.H
            if (d) {
              var e = H(a).o('adBlockEnabled')
              e && d.C('adb', e)
            }
            b()
          }
        }
      }
      function Km (a) {
        var c = D(a, 'i.clch', Lm)
        ia(a).D(a.document, ['click'], G(c, null, a), { passive: !1 })
        return function (b) {
          var d = ta.$a,
            e = a.Ya[ta.vc],
            f = !!e._informer
          e._informer = y({ domain: 'informer.yandex.ru' }, b)
          f || mc(a, { src: d + '//informer.yandex.ru/metrika/informer.js' })
        }
      }
      function Mm (a, c) {
        var b = Ra(a)
        if ('' === b.o('cc')) {
          var d = w('cc', b.C)
          d(0)
          var e = fa(a),
            f = H(a)
          f = u(
            V(fd({ fd: 1 }) + '.c'),
            gd(function (g) {
              d(g + '&' + e(kb))
            }),
            w('cc', f.C)
          )
          sa(
            a,
            '6',
            c
          )({ Y: { Lb: !0, af: !1 } }, ['https://mc.yandex.md/cc'])
            .then(f)
            ['catch'](
              u(
                gd(function () {
                  var g = e(kb)
                  b.C('cc', '&' + g)
                }),
                D(a, 'cc')
              )
            )
        }
      }
      function fe (a, c) {
        if (!c) return !1
        var b = S(a)
        return new RegExp(c).test('' + b.pathname + b.hash + b.search)
      }
      function Nm (a, c) {
        return ra(c, function (b) {
          var d = n(b, 'settings.dr')
          return { Fh: Om(a, d), isEnabled: n(b, 'settings.auto_goals') }
        })
      }
      function Pm (a, c, b, d, e) {
        b = tf(a.document.body, b)
        d = tf(a.document.body, d)
        K(e.target, [b, d]) && uf(a, c)
      }
      function Lh (a, c, b, d) {
        ;(b = Qm(a, d, b)) && uf(a, c, b)
      }
      function Mh (a, c) {
        var b = Nh(a, c)
        return Rm(a, b)
      }
      function Nh (a, c) {
        var b = tf(a.document.body, c)
        return b ? Sm(a, b) : ''
      }
      function uf (a, c, b) {
        if ((c = Ha(a, c)))
          (a = Gc(['dr', b || '' + Wa(a, 10, 99)])), c.params(Gc(['__ym', a]))
      }
      function tf (a, c) {
        var b = null
        try {
          b = c ? qc(c, a) : b
        } catch (d) {}
        return b
      }
      function Oh (a) {
        a = za(Ch(a))
        return A(function (c) {
          c = c.charCodeAt(0).toString(2)
          return Ph('0', 8, c)
        }, a)
      }
      function Sm (a, c) {
        if (!c) return ''
        var b = [],
          d = n(a, 'document')
        vf(a, c, function (e) {
          if (e.nodeType === d.TEXT_NODE) var f = e.textContent
          else
            e instanceof a.HTMLImageElement
              ? (f = e.alt)
              : e instanceof a.HTMLInputElement && (f = e.value)
          ;(f = f && f.trim()) && b.push(f)
        })
        return 0 === b.length ? '' : b.join(' ')
      }
      function Tm (a, c, b) {
        a = Da(b)
        b = a[1]
        'track' === a[0] && c({ version: '0', Dc: b })
      }
      function Um (a, c, b) {
        if (b) {
          var d = b.version
          ;(b = n(Vm, d + '.' + b.Dc)) &&
            ((c && K(b, Wm)) || a('ym-' + b + '-' + d))
        }
      }
      function Xm (a, c, b) {
        var d,
          e = Qh(a, c),
          f = S(a)
        f = ge(f.protocol + '//' + f.hostname + f.pathname)
        c = ed(a, c)
        var g = ''
        do g += Wa(a)
        while (g.length < c.length)
        g = g.slice(0, c.length)
        a = ''
        for (var h = 0; h < c.length; h += 1)
          a += (c.charCodeAt(h) + g.charCodeAt(h) - 96) % 10
        c = [g, a]
        a = c[0]
        c = c[1]
        return ((d = {}),
        (d.mf =
          'https://adstat.yandex.ru/track?service=metrika&id=' +
          c +
          '&mask=' +
          a +
          '&ref=' +
          f),
        (d.rt = 'https://' + e + '.mc.yandex.ru/watch/3/1?browser-info=rt:1'),
        d)[b]
      }
      function Ym (a, c, b) {
        var d = n(b, 'data')
        if (xa(d)) {
          var e = d.split('*')
          d = e[0]
          var f = e[1]
          e = e[2]
          'sc.frame' === d
            ? b.source.postMessage('sc.images*' + a, '*')
            : 'sc.image' === d && f === a && c(e)
        }
      }
      function Zm (a, c) {
        var b = Ra(a),
          d = 'wv2rf:' + N(c),
          e = c.tc,
          f = wf(a),
          g = b.o(d),
          h = c.Kg
        return X(f) || Va(g)
          ? Aa(function (k, l) {
              ra(c, function (m) {
                var p = n(m, 'settings.webvisor.forms')
                p = !n(m, 'settings.x3') && p
                f = wf(a) || n(m, 'settings.eu')
                b.C(d, hd(p))
                l({ tc: e, ae: !!f, fg: p, Lg: h })
              })
            })
          : xf({ tc: e, ae: f, fg: !!Ga(g), Lg: h })
      }
      function $m () {
        var a = M(
          function (c, b) {
            c[b[0]] = { xd: 0, oh: 1 / b[1] }
            return c
          },
          {},
          [
            ['blur', 0.0034],
            ['change', 0.0155],
            ['click', 0.01095],
            ['deviceRotation', 2e-4],
            ['focus', 0.0061],
            ['mousemove', 0.5132],
            ['scroll', 0.4795],
            ['selection', 0.0109],
            ['touchcancel', 2e-4],
            ['touchend', 0.0265],
            ['touchforcechange', 0.0233],
            ['touchmove', 0.1442],
            ['touchstart', 0.027],
            ['zoom', 0.0014]
          ]
        )
        return {
          hh: function (c) {
            if (c.length)
              return {
                type: 'activity',
                data: M(
                  function (b, d) {
                    var e = a[d]
                    return Math.round(b + e.xd * e.oh)
                  },
                  0,
                  da(a)
                )
              }
          },
          bj: function (c) {
            c && (c = a[c.data.type]) && (c.xd += 1)
          }
        }
      }
      function an (a) {
        if (a.type && a.event)
          switch (a.type) {
            case 'page':
              var c = a.data,
                b = c.Ka,
                d = c.md,
                e = c.content
              delete c.Ka
              delete c.md
              delete c.content
              c = {
                type: 'page',
                data: { M: a.M || 0, content: e, Ka: b, md: d, ba: c }
              }
              a.L && (c.L = a.L)
              return c
            case 'event':
              a: {
                c = {
                  type: 'event',
                  L: a.L,
                  data: { M: a.M, type: a.event, ba: {} }
                }
                b = y({}, a.data)
                switch (a.event) {
                  case 'zoom':
                    c.data.ba = {
                      Sg: { x: 0, y: 0, level: 0 },
                      Ug: b,
                      duration: 1
                    }
                    break
                  case 'keystroke':
                    c.data.ba = b.Sc
                    break
                  case 'deviceRotation':
                  case 'resize':
                    c.data.ba = b
                    break
                  case 'windowfocus':
                  case 'windowblur':
                  case 'focus':
                    c.data.target = b.target
                    c.data.ba = null
                    break
                  case 'touchmove':
                  case 'touchstart':
                  case 'touchend':
                  case 'touchcancel':
                  case 'touchforcechange':
                  case 'scroll':
                  case 'change':
                  case 'click':
                  case 'mousemove':
                  case 'mousedown':
                  case 'mouseup':
                  case 'selection':
                  case 'stylechange':
                    c.data.target = b.target
                    delete b.target
                    c.data.ba = b
                    break
                  case 'srcset':
                    a = {
                      type: 'mutation',
                      L: a.L,
                      data: {
                        M: a.M,
                        ba: {
                          Oa: [
                            {
                              wd: [
                                {
                                  id: b.target,
                                  Ob: { src: { Wc: '', n: b.value, r: !1 } },
                                  Ha: 0
                                }
                              ]
                            }
                          ],
                          index: 0
                        }
                      }
                    }
                    break a
                }
                a = c
              }
              break
            case 'mutation':
              return bn(a)
          }
        return a
      }
      function bn (a) {
        var c = y({}, a.data),
          b = []
        switch (a.event) {
          case 'tc':
            b = [
              { d: [{ id: c.target, Ac: { Wc: '', n: c.value }, Ha: c.index }] }
            ]
            break
          case 'ac':
            b = [
              {
                wd: [
                  {
                    id: c.target,
                    Ob: M(
                      function (d, e) {
                        var f = e[1]
                        d[e[0]] = { Wc: '', n: f, r: ma(f) }
                        return d
                      },
                      {},
                      pa(c.attributes)
                    ),
                    Ha: c.index
                  }
                ]
              }
            ]
            break
          case 're':
            b = [
              {
                df: A(function (d) {
                  return { id: d, Ha: c.index }
                }, c.na)
              }
            ]
            break
          case 'ad':
            b = [
              {
                hf: A(function (d) {
                  return {
                    id: d.id,
                    Yf: d.name,
                    Zf: d.Xf,
                    ue: d.parent,
                    xe: d.ze,
                    ne: d.next,
                    Ob: d.attributes,
                    Ha: c.index,
                    Ac: d.content,
                    Qa: d.hidden
                  }
                }, c.na)
              }
            ]
        }
        return {
          type: 'mutation',
          L: a.L,
          data: { M: a.M, ba: { Oa: b, index: c.index } }
        }
      }
      function cn (a) {
        return {
          Zh: function () {
            var c = a.document.querySelector('base[href]')
            return c ? c.getAttribute('href') : null
          },
          ai: function () {
            if (a.document.doctype) {
              var c = y(
                  { name: 'html', publicId: '', systemId: '' },
                  a.document.doctype
                ),
                b = c.publicId,
                d = c.systemId
              return (
                '<!DOCTYPE ' +
                I('', [
                  c.name,
                  b ? ' PUBLIC "' + b + '"' : '',
                  !b && d ? ' SYSTEM' : '',
                  d ? ' "' + d + '"' : ''
                ]) +
                '>'
              )
            }
            return null
          }
        }
      }
      function dn (a, c, b) {
        var d = id(a),
          e = ia(a),
          f = eb(a),
          g = c.Od(),
          h = !n(a, 'postMessage') || (f && !n(a, 'parent.postMessage')),
          k = w(d, O)
        if (h) {
          if (!g)
            return (
              W(a, G(d.O, d, 'i', { ya: !1 }), 10), { Nd: k, rg: B, stop: B }
            )
          Ta(Sa())
        }
        d.D(['sr'], function (r) {
          var t,
            v = Rh(a, r.source)
          v &&
            yf(
              a,
              r.source,
              ((t = {}), (t.type = '\u043d'), (t.frameId = c.wa().aa(v)), t)
            )
        })
        d.D(['sd'], function (r) {
          var t = r.data
          r = r.source
          ;(a === r || Rh(a, r)) && d.O('sdr', { data: t.data, M: t.frameId })
        })
        if (f && !g) {
          var l = !1,
            m = 0,
            p = function () {
              var r
              yf(a, a.parent, ((r = {}), (r.type = 'sr'), r))
              m = W(a, p, 100, 'if.i')
            }
          p()
          var q = function (r) {
            d.oa(['\u043d'], q)
            na(a, m)
            var t = Hc(a, r.origin).host
            l ||
              r.source !== a.parent ||
              !r.data.frameId ||
              ('about:blank' !== S(a).host && !K(t, b)) ||
              ((l = !0), d.O('i', { M: r.data.frameId, ya: !0 }))
          }
          d.D(['\u043d'], q)
          W(
            a,
            function () {
              d.oa(['\u043d'], q)
              na(a, m)
              l || ((l = !0), d.O('i', { ya: !1 }))
            },
            2e3,
            'if.r'
          )
        }
        e = e.D(a, ['message'], function (r) {
          var t = tb(a, r.data)
          t &&
            t.type &&
            K(t.type, en) &&
            d.O(t.type, { data: t, source: r.source, origin: r.origin })
        })
        return {
          Nd: k,
          rg: function (r) {
            var t
            return yf(
              a,
              a.parent,
              ((t = {}), (t.frameId = c.Od()), (t.data = r), (t.type = 'sd'), t)
            )
          },
          stop: e
        }
      }
      function Rh (a, c) {
        try {
          return bb(
            u(V('contentWindow'), ka(c)),
            za(a.document.querySelectorAll('iframe'))
          )
        } catch (b) {
          return null
        }
      }
      function yf (a, c, b) {
        a = lb(a, b)
        c.postMessage(a, '*')
      }
      function Sh () {
        return (
          Yb() +
          Yb() +
          '-' +
          Yb() +
          '-' +
          Yb() +
          '-' +
          Yb() +
          '-' +
          Yb() +
          Yb() +
          Yb()
        )
      }
      function Yb () {
        return Math.floor(65536 * (1 + Math.random()))
          .toString(16)
          .substring(1)
      }
      function fn (a, c) {
        if (xa(c)) return c
        var b = a.textContent
        if (xa(b)) return b
        b = a.data
        if (xa(b)) return b
        b = a.nodeValue
        return xa(b) ? b : ''
      }
      function gn (a, c, b, d, e) {
        void 0 === d && (d = {})
        void 0 === e && (e = Ia(c))
        var f = y(
          M(
            function (h, k) {
              h[k.name] = k.value
              return h
            },
            {},
            za(c.attributes)
          ),
          d
        )
        y(f, hn(c, e, f))
        var g =
          (d = M(
            function (h, k) {
              var l = k[0],
                m = he(a, c, l, k[1], b, e),
                p = m.value
              ma(p) ? delete f[l] : (f[l] = p)
              return h || m.Ab
            },
            !1,
            pa(f)
          )) && Ic(c)
        g && ((f.width = g.width), (f.height = g.height))
        return { Ab: d, kh: f }
      }
      function hn (a, c, b) {
        var d = {}
        zf(a)
          ? (d.value = a.value || b.value)
          : 'IMG' !== c || b.src || (d.src = '')
        return d
      }
      function he (a, c, b, d, e, f) {
        void 0 === f && (f = Ia(c))
        var g = { Ab: !1, value: d }
        if (zf(c))
          'value' === b
            ? !ma(d) &&
              '' !== d &&
              ((b = e.ae),
              (f = e.fg),
              (e = jd(a, c)),
              f
                ? ((b = Jc(a, c, b)),
                  (a = b.Bb),
                  (c = b.ub),
                  (b = b.gb),
                  (g.Ab = !c && (e || a)))
                : ((g.Ab = e), (b = !(c && Zb('ym-record-keys', c)))),
              b || e) &&
              (g.value = I('', A(w('\u2022', O), ('' + d).split(''))))
            : 'checked' === b &&
              K((c.getAttribute('type') || '').toLowerCase(), jn)
            ? (g.value = c.checked ? 'checked' : null)
            : kn.test(b) && Af(a, c) && (g.value = null)
        else if ('IMG' === f && 'src' === b)
          (e = jd(a, c))
            ? ((g.Ab = e),
              (g.value =
                'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII='))
            : (g.value =
                (c.getAttribute('srcset') ? c.currentSrc : '') || c.src)
        else if ('A' === f && 'href' === b) g.value = d ? '#' : ''
        else if (
          K(b, ['srcset', 'integrity', 'crossorigin', 'password']) ||
          (2 < b.length && 0 === ie(b, 'on')) ||
          ('IFRAME' === f && 'src' === b) ||
          ('SCRIPT' === f && K(b, ['src', 'type']))
        )
          g.value = null
        return g
      }
      function Bf (a, c, b, d) {
        void 0 === d && (d = 'wv2')
        return {
          J: function (e, f) {
            return D(a, d + '.' + b + '.' + f, e, void 0, c)
          }
        }
      }
      function ln (a, c, b, d, e) {
        function f () {
          k && k.stop()
        }
        if (!c.ob) return J.resolve(B)
        var g = sa(a, '4', c),
          h = { H: Ea() }
        b = new mn(a, b, function (l, m, p) {
          var q
          if (!g) return J.resolve()
          m = 'wv-data=' + Th(l, !0)
          return g(
            y({}, h, {
              Y: { ea: m },
              G:
                ((q = {}),
                (q['wv-check'] = '' + nn(l)),
                (q['wv-type'] = '0'),
                q)
            }),
            c,
            p
          )['catch'](D(a, 'm.n.m.s'))
        })
        var k = on(a, b, d, e)
        return ra(c, function (l) {
          l && H(a).C('isEU', n(l, 'settings.eu'))
          H(a).o('oo') || (k && Uh(a, l) && k.start())
          return f
        })
      }
      function on (a, c, b, d) {
        var e = a.document,
          f = [],
          g = ia(a),
          h = ':submit' + Math.random(),
          k = [],
          l = G(c.flush, c),
          m = la(function (r, t) {
            D(a, 'hfv.' + r, function () {
              try {
                var v = t.type
              } catch (F) {
                return
              }
              v = K(v, d)
              c.push(t, { type: r })
              v && l()
            })()
          }),
          p = D(a, 'sfv', function () {
            var r = b(a),
              t = pn(a)
            z(function (v) {
              f.push(g.D(v.target, [v.event], m(v.type)))
            }, r)
            z(function (v) {
              f.push(
                g.D(
                  v.target,
                  [v.event],
                  D(a, 'hff.' + v.type + '.' + v.event, function (F) {
                    z(Aa({ l: a, sa: F, flush: l }), v.N)
                  })
                )
              )
            }, t)
            k = Vh(a, 'form', e)
            e.attachEvent &&
              ((r = Vh(a, 'form *', e)),
              z(function (v) {
                f.push(g.D(v, ['submit'], m('form')))
              }, k),
              z(function (v) {
                Cf(v) && f.push(g.D(v, ['change'], m('formInput')))
              }, r))
            z(function (v) {
              var F = v.submit
              if (T(F) || ('object' === typeof F && qn.test('' + F)))
                (v[h] = F),
                  (v.submit = D(a, 'fv', function () {
                    var Y = { target: v, type: 'submit' }
                    m('document')(Y)
                    return v[h]()
                  }))
            }, k)
          }),
          q = D(a, 'ufv', function () {
            z(ha, f)
            z(function (r) {
              r && (r.submit = r[h])
            }, k)
            c.flush()
          })
        return { start: p, stop: q }
      }
      function rn (a, c) {
        var b = Z(function (e) {
            return 0 < e.N.length
          }, c),
          d = Wh({ target: a.document, type: 'document' })
        return A(u(O, d, sn(a)), b)
      }
      function Xh (a, c) {
        var b = a.l,
          d = [],
          e = c.form
        if (!c[Xa] && e) {
          var f = e.elements
          e = e.length
          for (var g = 0; g < e; g += 1) {
            var h = f[g]
            je(h) && !h[Xa] && Oa(d, rc(b, h))
          }
        } else Oa(d, rc(b, c))
        return d
      }
      function Df (a) {
        if (kd) {
          kd = !1
          var c = ub(a.l),
            b = []
          fb(a.l, b, 15) ? (a = []) : (R(b, c), (a = b))
          return a
        }
      }
      function Yh (a) {
        if (!kd) {
          kd = !0
          a = ub(a.l)
          var c = []
          Kb(c, 14)
          R(c, a)
          return c
        }
      }
      function tn (a, c, b) {
        var d = c[Xa]
        if (d) {
          a: {
            var e = ub(a),
              f = c[Xa]
            if (0 < f) {
              var g = []
              c = Ef(a, c)
              var h = sc[f],
                k = c[0] + 'x' + c[1],
                l = c[2] + 'x' + c[3]
              if (k !== h.bg) {
                h.bg = k
                if (fb(a, g, 9)) {
                  a = []
                  break a
                }
                R(g, e)
                R(g, f)
                R(g, c[0])
                R(g, c[1])
              }
              if (l !== h.size) {
                h.size = l
                if (fb(a, g, 10)) {
                  a = []
                  break a
                }
                R(g, e)
                R(g, f)
                R(g, c[2])
                R(g, c[3])
              }
              if (g.length) {
                a = g
                break a
              }
            }
            a = []
          }
          Oa(b, a)
        }
        return d
      }
      function Jc (a, c, b) {
        void 0 === b && (b = !1)
        if (!c) return { gb: !1, ub: !1, Bb: !1 }
        var d = c.getAttribute('type') || c.type
        if ('button' === d) return { gb: !1, ub: !1, Bb: !1 }
        var e = Z(Zh, [c.className, c.id, c.name]),
          f = c && Zb('ym-record-keys', c)
        d = (d && K(d, $h)) || Ja(Ya(un), e)
        var g
        ;(g = d) ||
          ((g = c.placeholder),
          (g = Ja(Ya(vn), e) || (Zh(g) && wn.test(g || ''))))
        e = g
        return {
          gb: !f && (Ff(a, c) || (e && b) || (e && !d && !b)),
          ub: f,
          Bb: e
        }
      }
      function Ff (a, c) {
        return Af(a, c) || ld(a, c) ? !0 : jd(a, c)
      }
      function Zh (a) {
        return !!(a && 2 < a.length)
      }
      function zf (a) {
        try {
          var c = Ia(a)
          if (K(c, Gf)) {
            if ('INPUT' === c) {
              var b = a.type
              return !b || K(b.toLocaleLowerCase(), xn)
            }
            return !0
          }
        } catch (d) {}
        return !1
      }
      function ai (a, c) {
        return c && Zb('(ym-disable-submit|-metrika-noform)', c)
      }
      function yn (a, c) {
        return I(
          '',
          A(function (b) {
            return a.isNaN(b)
              ? zn.test(b)
                ? ((b = b.toUpperCase() === b ? An : Bn),
                  String.fromCharCode(Wa(a, b[0], b[1])))
                : b
              : '' + Wa(a, 0, 9)
          }, c.split(''))
        )
      }
      function jd (a, c) {
        if (ma(c)) return !1
        if (Hf(c)) {
          var b = c.parentNode
          return (ma(b) ? 0 : 11 === b.nodeType) ? !1 : jd(a, c.parentNode)
        }
        b = bi(a)
        if (!b) return !1
        var d = b.call(c, '.ym-hide-content,.ym-hide-content *')
        return d &&
          b.call(c, '.ym-show-content,.ym-hide-content .ym-show-content *')
          ? !1
          : d
      }
      function Uh (a, c) {
        var b = $b(a),
          d = b.o('visorc')
        K(d, ['w', 'b']) || (d = '')
        ;(ci(a) && di(a, ke, 'visorc') && !Cn.test(gb(a) || '')) || (d = 'b')
        var e = n(c, 'settings.webvisor.recp')
        if (!a.isFinite(e) || 0 > e || 1 < e) d = 'w'
        d || (d = (H(a).o('hitId') % 1e4) / 1e4 < e ? 'w' : 'b')
        b.C('visorc', d, 30)
        return 'w' === d
      }
      function ei (a) {
        var c = If(a).isEnabled,
          b = !1
        try {
          b =
            (b = 2 === new a.Blob(['\u00e4']).size) &&
            2 === new a.Blob([new a.Uint8Array([1, 2])]).size
        } catch (d) {}
        return Jf(Boolean, [
          !c,
          b,
          a.Uint8Array,
          n(a, 'Uint8Array.prototype.slice')
        ])
      }
      function Kf (a, c) {
        var b = c[1][3],
          d = 0,
          e = new a.Uint8Array(c[0])
        return kc([b], function (f, g) {
          if (!f) return e
          f[0](a, f[2], e, d)
          d += f[1]
          g.push(f[3])
          return e
        })
      }
      function le (a, c, b) {
        a = c(b)
        c = [B, 0, 0]
        var d = [0, c, c, void 0]
        return kc(a, function (e, f) {
          var g = e[0],
            h = e[1],
            k = e[2]
          if (0 === g) return k(d, h), d
          if (void 0 === h || null === h) return d
          var l = g >> 3
          if (g & 1)
            tc(d, mb(l)), (h = k(h)), l & 2 && tc(d, mb(h[1])), tc(d, h)
          else if (g & 4)
            for (g = h.length - 1; 0 <= g; ) {
              var m = k(h[g])
              m.push([0, 0, Lf])
              m.push([0, mb(l), tc])
              m.unshift([0, 0, Mf])
              f.push.apply(f, m)
              --g
            }
          else if (g & 2) {
            k = e[2]
            var p = e[3],
              q = e[4],
              r = e[5],
              t = da(h)
            for (g = t.length - 1; 0 <= g; )
              (m = t[g]),
                (m = [
                  [0, 0, Mf],
                  [q, h[m], r],
                  [k, m, p],
                  [0, 0, Lf],
                  [0, mb(l), tc]
                ]),
                f.push.apply(f, m),
                --g
          } else
            (m = k(h)),
              m.push([0, 0, Lf]),
              m.push([0, mb(l), tc]),
              m.unshift([0, 0, Mf]),
              f.push.apply(f, m)
          return d
        })
      }
      function Mf (a) {
        var c = a[1],
          b = a[0],
          d = a[2]
        a[3]
          ? ((a[0] = a[3][0]),
            (a[1] = a[3][1]),
            (a[2] = a[3][2]),
            (a[3] = a[3][3]))
          : ((a[0] = 0), (a[1] = [B, 0, 0]), (a[2] = a[1]))
        tc(a, mb(b))
        b && ((a[2][3] = c[3]), (a[2] = d), (a[0] += b))
      }
      function Lf (a) {
        a[3] = [a[0], a[1], a[2], a[3]]
        a[1] = [B, 0, 0]
        a[2] = a[1]
        a[0] = 0
      }
      function tc (a, c) {
        a[0] += c[1]
        a[2][3] = c
        a[2] = c
      }
      function Nf (a) {
        return [
          [385, a.gh, mb],
          [336, a.qj, Dn],
          [272, a.ih, En],
          [208, a.event, Fn],
          [144, a.Vi, Gn],
          [80, a.page, Hn]
        ]
      }
      function In (a) {
        return [
          [321, a.end, Lb],
          [273, a.xh, Jn],
          [193, a.page, L],
          [144, a.data, Nf],
          [65, a.L, L]
        ]
      }
      function fi (a) {
        return [[84, a.buffer, In]]
      }
      function Kn (a) {
        return [
          [129, a.position, L],
          [81, a.name, P]
        ]
      }
      function Ln (a) {
        return [[81, a.name, P]]
      }
      function Mn (a) {
        return [[81, a.name, P]]
      }
      function En (a) {
        return [
          [593, a.Sj, P],
          [532, a.uj, Kn],
          [449, a.lf, L],
          [401, a.pj, P],
          [340, a.Ij, Ln],
          [276, a.lh, Mn],
          [209, a.lj, P],
          [145, a.mj, P],
          [65, a.id, mb]
        ]
      }
      function Nn (a) {
        return [
          [513, a.lf, L],
          [489, a.Si, md],
          [385, a.bb, L],
          [321, a.height, L],
          [257, a.width, L],
          [193, a.y, L],
          [129, a.x, L],
          [65, a.id, mb]
        ]
      }
      function Dn (a) {
        return [
          [129, a.bb, L],
          [84, a.jh, Nn]
        ]
      }
      function On (a) {
        return [[81, a.hash, P]]
      }
      function Pn (a) {
        return [
          [209, a.stack, P],
          [145, a.Kh, P],
          [81, a.code, P]
        ]
      }
      function Qn (a) {
        return [
          [193, a.orientation, L],
          [129, a.height, L],
          [65, a.width, L]
        ]
      }
      function Rn (a) {
        return [[84, a.Sc, Sn]]
      }
      function Sn (a) {
        return [
          [273, a.Tc, P],
          [193, a.Qf, Lb],
          [145, a.key, P],
          [65, a.id, L]
        ]
      }
      function Tn (a) {
        return [
          [145, a.value, P],
          [81, a.Gk, P]
        ]
      }
      function Un (a) {
        return [
          [149, a.pc, P],
          [81, a.method, P]
        ]
      }
      function Vn (a) {
        return [
          [257, a.Eb, L],
          [193, a.Fb, L],
          [129, a.height, L],
          [65, a.width, L]
        ]
      }
      function Wn (a) {
        return [
          [144, a.Ug, gi],
          [80, a.Sg, gi]
        ]
      }
      function gi (a) {
        return [
          [193, a.y, L],
          [129, a.x, L],
          [105, a.level, md]
        ]
      }
      function Xn (a) {
        return [[84, a.touches, Yn]]
      }
      function Yn (a) {
        return [
          [297, a.force, md],
          [233, a.y, md],
          [169, a.x, md],
          [81, a.id, P]
        ]
      }
      function Zn (a) {
        return [
          [193, a.hidden, Lb],
          [129, a.checked, Lb],
          [81, a.value, P]
        ]
      }
      function $n (a) {
        return [
          [257, a.rf, L],
          [193, a.Ag, L],
          [129, a.end, L],
          [65, a.start, L]
        ]
      }
      function ao () {
        return []
      }
      function bo (a) {
        return [
          [193, a.page, Lb],
          [129, a.y, L],
          [65, a.x, L]
        ]
      }
      function co (a) {
        return [
          [129, a.y, L],
          [65, a.x, L]
        ]
      }
      function eo (a) {
        return [[84, a.Oa, fo]]
      }
      function fo (a) {
        return [
          [257, a.index, L],
          [209, a.te, P],
          [145, a.style, P],
          [65, a.target, L]
        ]
      }
      function Fn (a) {
        return [
          [1168, a.Bj, eo],
          [1104, a.Ai, On],
          [1040, a.Nh, Pn],
          [976, a.Dh, Qn],
          [912, a.Pi, Rn],
          [848, a.sj, Vn],
          [784, a.ak, Wn],
          [720, a.Hk, Tn],
          [656, a.Dk, Un],
          [592, a.Jj, Xn],
          [528, a.rh, Zn],
          [464, a.xj, $n],
          [400, a.Yj, ao],
          [336, a.vj, bo],
          [272, a.Ti, co],
          [193, a.M, me],
          [129, a.target, me],
          [65, a.type, mb]
        ]
      }
      function Gn (a) {
        return [
          [257, a.M, me],
          [208, a.ba, go],
          [129, a.L, L],
          [65, a.target, L]
        ]
      }
      function go (a) {
        return [
          [148, a.Oa, ho],
          [65, a.index, L]
        ]
      }
      function ho (a) {
        return [
          [276, a.d, io],
          [212, a.wd, jo],
          [148, a.hf, ko],
          [84, a.df, lo]
        ]
      }
      function io (a) {
        return [
          [193, a.Ha, L],
          [144, a.Ac, hi],
          [65, a.id, L]
        ]
      }
      function jo (a) {
        return [
          [193, a.Ha, L],
          [146, a.Ob, 81, P, 144, hi],
          [65, a.id, L]
        ]
      }
      function hi (a) {
        return [
          [193, a.r, Lb],
          [145, a.n, P],
          [81, a.Wc, P]
        ]
      }
      function ko (a) {
        return [
          [641, a.Qa, Lb],
          [577, a.Ha, L],
          [513, a.ne, L],
          [465, a.Ac, P],
          [402, a.Ob, 81, P, 145, P],
          [321, a.xe, L],
          [273, a.Zf, P],
          [193, a.ue, L],
          [145, a.Yf, P],
          [65, a.id, L]
        ]
      }
      function lo (a) {
        return [
          [321, a.Ha, L],
          [257, a.ue, L],
          [193, a.ne, L],
          [129, a.xe, L],
          [65, a.id, L]
        ]
      }
      function Hn (a) {
        return [
          [321, a.Ka, mo],
          [273, a.md, P],
          [193, a.M, me],
          [148, a.content, no],
          [80, a.ba, oo]
        ]
      }
      function no (a) {
        return [
          [513, a.hidden, Lb],
          [449, a.ze, L],
          [385, a.next, L],
          [337, a.content, P],
          [257, a.parent, L],
          [210, a.attributes, 81, P, 145, P],
          [145, a.name, P],
          [65, a.id, L]
        ]
      }
      function oo (a) {
        return [
          [724, a.zk, po],
          [656, a.location, qo],
          [592, a.viewport, ii],
          [528, a.screen, ii],
          [449, a.Lf, Lb],
          [401, a.jf, P],
          [337, a.referrer, P],
          [273, a.Mg, P],
          [209, a.ff, P],
          [145, a.title, P],
          [81, a.doctype, P]
        ]
      }
      function po (a) {
        return [
          [133, a.scroll, L],
          [65, a.target, L]
        ]
      }
      function qo (a) {
        return [
          [209, a.path, P],
          [145, a.protocol, P],
          [81, a.host, P]
        ]
      }
      function ii (a) {
        return [
          [129, a.height, L],
          [65, a.width, L]
        ]
      }
      function P (a) {
        var c = ro({}, a, [], 0)
        return c ? [so, c, a] : [ji, 0, 0]
      }
      function Jn (a) {
        return [to, a.length, a]
      }
      function Lb (a) {
        return [ji, 1, a ? 1 : 0]
      }
      function mo (a) {
        a = ki(a)
        var c = a[0],
          b = a[1],
          d = ((b >>> 28) | (c << 4)) >>> 0
        c >>>= 24
        return [
          li,
          0 === c
            ? 0 === d
              ? 16384 > b
                ? 128 > b
                  ? 1
                  : 2
                : 2097152 > b
                ? 3
                : 4
              : 16384 > d
              ? 128 > d
                ? 5
                : 6
              : 2097152 > d
              ? 7
              : 8
            : 128 > c
            ? 9
            : 10,
          a
        ]
      }
      function md (a) {
        return [uo, 4, a]
      }
      function me (a) {
        return mb(((a << 1) ^ (a >> 31)) >>> 0)
      }
      function L (a) {
        return 0 > a ? [li, 10, ki(a)] : mb(a)
      }
      function mb (a) {
        return [
          vo,
          128 > a ? 1 : 16384 > a ? 2 : 2097152 > a ? 3 : 268435456 > a ? 4 : 5,
          a
        ]
      }
      function vo (a, c, b, d) {
        for (a = c; 127 < a; ) (b[d++] = (a & 127) | 128), (a >>>= 7)
        b[d] = a
      }
      function ji (a, c, b, d) {
        b[d] = c
      }
      function to (a, c, b, d) {
        for (a = 0; a < c.length; ++a) b[d + a] = c[a]
      }
      function mi (a) {
        return function (c, b, d, e) {
          for (var f, g = 0, h = 0; h < b.length; ++h)
            if (((c = b.charCodeAt(h)), 128 > c)) a ? (g += 1) : (d[e++] = c)
            else {
              if (2048 > c) {
                if (a) {
                  g += 2
                  continue
                }
                d[e++] = (c >> 6) | 192
              } else {
                if (
                  55296 === (c & 64512) &&
                  56320 === ((f = b.charCodeAt(h + 1)) & 64512)
                ) {
                  if (a) {
                    g += 4
                    continue
                  }
                  c = 65536 + ((c & 1023) << 10) + (f & 1023)
                  ++h
                  d[e++] = (c >> 18) | 240
                  d[e++] = ((c >> 12) & 63) | 128
                } else {
                  if (a) {
                    g += 3
                    continue
                  }
                  d[e++] = (c >> 12) | 224
                }
                d[e++] = ((c >> 6) & 63) | 128
              }
              d[e++] = (c & 63) | 128
            }
          return a ? g : e
        }
      }
      function uo (a, c, b, d) {
        return wo(a)(a, c, b, d)
      }
      function xo (a, c, b, d) {
        var e = 0 > c ? 1 : 0
        e && (c = -c)
        if (0 === c) nd(0 < 1 / c ? 0 : 2147483648, b, d)
        else if (a.isNaN(c)) nd(2143289344, b, d)
        else if (3.4028234663852886e38 < c)
          nd(((e << 31) | 2139095040) >>> 0, b, d)
        else if (1.1754943508222875e-38 > c)
          nd(((e << 31) | a.Math.round(c / 1.401298464324817e-45)) >>> 0, b, d)
        else {
          var f = a.Math.floor(a.Math.log(c) / Math.LN2)
          nd(
            ((e << 31) |
              ((f + 127) << 23) |
              (Math.round(c * a.Math.pow(2, -f) * 8388608) & 8388607)) >>>
              0,
            b,
            d
          )
        }
      }
      function nd (a, c, b) {
        c[b] = a & 255
        c[b + 1] = (a >>> 8) & 255
        c[b + 2] = (a >>> 16) & 255
        c[b + 3] = a >>> 24
      }
      function li (a, c, b, d) {
        a = c[0]
        for (c = c[1]; a; )
          (b[d++] = (c & 127) | 128),
            (c = ((c >>> 7) | (a << 25)) >>> 0),
            (a >>>= 7)
        for (; 127 < c; ) (b[d++] = (c & 127) | 128), (c >>>= 7)
        b[d++] = c
      }
      function ki (a) {
        if (!a) return [0, 0]
        var c = 0 > a
        c && (a = -a)
        var b = a >>> 0
        a = ((a - b) / 4294967296) >>> 0
        c &&
          ((a = ~a >>> 0),
          (b = ~b >>> 0),
          4294967295 < ++b && ((b = 0), 4294967295 < ++a && (a = 0)))
        return [a, b]
      }
      function ne (a) {
        return ca(a)
          ? A(ne, a)
          : ma(a) || 'object' !== typeof a
          ? a
          : M(
              function (c, b) {
                var d = b[0],
                  e = b[1],
                  f = yo[d]
                X(f) && (f = d)
                e = K(f, zo) ? e : ne(e)
                f ? (c[f] = e) : (c[d] = e)
                return c
              },
              {},
              pa(a)
            )
      }
      function ni (a, c, b) {
        return function (d, e, f) {
          var g
          d = y({ H: Ea() }, d)
          d.H.fc('we', Fb(e.ob))
          d.G || (d.G = {})
          var h = d.G,
            k = d.Sa
          k = void 0 === k ? {} : k
          h.wmode = '0'
          h['wv-part'] = '' + f
          h['wv-hit'] = h['wv-hit'] || '' + ac(a)
          h['page-url'] = h['page-url'] || a.location.href
          h.rn = h.rn || '' + Wa(a)
          h['wv-type'] || (h['wv-type'] = k.Zd ? '3' : '2')
          f = {
            ia: { ta: 'webvisor/' + e.id },
            Y: y(d.Y, {
              Ta: ((g = {}), (g['Content-Type'] = 'text/plain'), g),
              lc: 'POST'
            }),
            G: h
          }
          e = Oa(Of(a, 'wv', e), b)
          return oe(a, c, e)(y(d, f))
        }
      }
      function Ao (a, c) {
        return ra(c, function (b) {
          var d = H(a)
          N(c)
          if (!d.o('dSync', !1))
            return (
              d.C('dSync', !0),
              oi(a, b, {
                qb: c,
                bd: 's',
                ie: 'ds',
                Dj: function (e, f, g) {
                  var h = e.fd
                  e = e.host
                  if (n(h, 'settings')) return Ta(Sa('ds.e'))
                  f = f(aa) - g
                  g = e[1]
                  var k, l
                  h = Ea(((k = {}), (k.di = h), (k.dit = f), (k.dip = g), k))
                  k = ((l = {}), (l['page-url'] = S(a).href), l)
                  return sa(
                    a,
                    'S',
                    pi
                  )({ H: h, G: k }, pi)['catch'](D(a, 'ds.rs'))
                }
              })
            )
        })
      }
      function oi (a, c, b) {
        var d = b.qb,
          e = fa(a),
          f = Bo(a, c.userData, d),
          g = Co(a)
        return g.length
          ? Do(a, e, f, c, b).then(function () {
              return Eo(a, g, f, e, b)
            }, B)
          : J.resolve()
      }
      function Co (a) {
        var c = od(a)
        a = u(Pf, uc(['iPhone', 'iPad']))(a)
        return c ? Fo : a ? Go : []
      }
      function Eo (a, c, b, d, e) {
        var f = e.Dj,
          g = void 0 === f ? B : f,
          h = e.ie,
          k = d(aa)
        return Ho(
          a,
          c,
          e
        )(
          Ua(
            function (l) {
              z(function (m) {
                m && pe(a, h + '.s', m)
              }, l)
              l = d(kb)
              b.C(h, l)
            },
            function (l) {
              b.C(h, d(kb))
              g(l, d, k)
            }
          )
        )
      }
      function Do (a, c, b, d, e) {
        var f = e.ie,
          g = e.qb
        return new J(function (h, k) {
          var l = b.o(f, 0)
          l = parseInt('' + l, 10)
          return 60 >= c(kb) - l
            ? k()
            : Io(a)
            ? h(void 0)
            : qi(d)
            ? k()
            : h(Jo(a, g))
        })
      }
      function Ho (a, c, b) {
        var d = b.bd,
          e = b.data,
          f = sa(a, d, b.qb)
        a = y({}, ri)
        e && y(a.G, e)
        return Ko(
          A(function (g) {
            return Lo(
              f(
                y({ Y: { af: !1, He: !0 } }, ri),
                A(function (h) {
                  var k = h[1],
                    l = h[2]
                  h = I(
                    '',
                    A(function (m) {
                      return String.fromCharCode(m.charCodeAt(0) + 10)
                    }, h[0].split(''))
                  )
                  return (
                    'http' + (l ? 's' : '') + '://' + h + ':' + k + '/' + Mo[d]
                  )
                }, g)
              ).then(function (h) {
                return y({}, h, { host: g[h.Og] })
              })
            )
          }, c)
        )
      }
      function Bo (a, c, b) {
        var d = c || {},
          e = sa(a, 'u', b),
          f = Ra(a)
        return {
          o: function (g, h) {
            return X(d[g]) ? f.o(g, h) : d[g]
          },
          C: function (g, h) {
            var k,
              l = '' + h
            d[g] = l
            f.C(g, l)
            return e(
              { G: ((k = {}), (k.key = g), (k.value = l), k) },
              [ta.$a + '//' + bc + '/user_storage_set'],
              {}
            )['catch'](D(a, 'u.d.s.s'))
          }
        }
      }
      function No (a) {
        return {
          Z: function (c, b) {
            H(a).o('oo') || b()
          }
        }
      }
      function Oo (a, c) {
        try {
          var b = c[0]
          var d = b[1]
        } catch (e) {
          return function () {
            return J.resolve()
          }
        }
        return function (e) {
          var f,
            g =
              ((f = {}),
              (f['browser-info'] = Po),
              (f['page-url'] = a.location && '' + a.location.href),
              f)
          return d && (e = lb(a, e))
            ? d(Qo, { kb: g, ja: [], ea: 'site-info=' + ge(e) })['catch'](B)
            : J.resolve()
        }
      }
      function Ro (a, c) {
        if (n(a, 'disableYaCounter' + c.id) || n(a, 'Ya.disableMetrica')) {
          var b = N(c)
          delete H(a).o('counters', {})[b]
          Ta(Sa('oo.e'))
        }
      }
      function So (a) {
        if (pd(a)) return null
        var c = To(a),
          b = c.eg
        X(b) &&
          ((c.eg = null),
          Uo(a).then(function (d) {
            c.eg = d
          }))
        return b ? 1 : null
      }
      function Vo (a, c, b) {
        b = b.G
        if ((void 0 === b ? {} : b).nohit) return null
        a = Qf(a)
        if (!a) return null
        var d = (b = null)
        n(a, 'getEntriesByType') &&
          (d = n(a.getEntriesByType('navigation'), '0')) &&
          (b = Wo)
        if (!b) {
          var e = n(a, 'timing')
          e && ((b = Xo), (d = e))
        }
        if (!b) return null
        a = Yo(a, d, b)
        c = N(c)
        c = Zo(c)
        return (c = $o(c, a)) && I(',', c)
      }
      function $o (a, c) {
        var b = a.length
          ? A(function (d, e) {
              var f = c[e]
              return f === d ? null : f
            }, a)
          : c
        a.length = 0
        z(u(O, qa('push', a)), c)
        return Z(ka(null), b).length === a.length ? null : b
      }
      function Yo (a, c, b) {
        return A(function (d) {
          var e = d[0],
            f = d[1]
          if (T(e)) return e(a, c) || null
          if (1 === d.length) return c[e] ? Math.round(c[e]) : null
          var g
          !(g = c[e] && c[f]) &&
            (g = 0 === c[e] && 0 === c[f]) &&
            ((g = d[1]), (g = !(si[d[0]] || si[g])))
          if (!g) return null
          d = Math.round(c[e]) - Math.round(c[f])
          return 0 > d || 36e5 < d ? null : d
        }, b)
      }
      function Th (a, c) {
        void 0 === c && (c = !1)
        for (var b = a.length, d = b - (b % 3), e = [], f = 0; f < d; f += 3) {
          var g = (a[f] << 16) + (a[f + 1] << 8) + a[f + 2]
          e.push(
            'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='[
              (g >> 18) & 63
            ],
            'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='[
              (g >> 12) & 63
            ],
            'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='[
              (g >> 6) & 63
            ],
            'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='[
              g & 63
            ]
          )
        }
        switch (b - d) {
          case 1:
            b = a[d] << 4
            e.push(
              'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='[
                (b >> 6) & 63
              ],
              'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='[
                b & 63
              ],
              '=',
              '='
            )
            break
          case 2:
            ;(b = (a[d] << 10) + (a[d + 1] << 2)),
              e.push(
                'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='[
                  (b >> 12) & 63
                ],
                'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='[
                  (b >> 6) & 63
                ],
                'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='[
                  b & 63
                ],
                '='
              )
        }
        e = e.join('')
        return c ? ti(e, !0) : e
      }
      function Ch (a, c) {
        void 0 === c && (c = !1)
        var b = a,
          d = '',
          e = 0
        if (!b) return ''
        for (c && (b = ti(b)); b.length % 4; ) b += '='
        do {
          var f =
              'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='.indexOf(
                b.charAt(e++)
              ),
            g =
              'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='.indexOf(
                b.charAt(e++)
              ),
            h =
              'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='.indexOf(
                b.charAt(e++)
              ),
            k =
              'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='.indexOf(
                b.charAt(e++)
              )
          if (0 > f || 0 > g || 0 > h || 0 > k) return ''
          var l = (f << 18) | (g << 12) | (h << 6) | k
          f = (l >> 16) & 255
          g = (l >> 8) & 255
          l &= 255
          d =
            64 === h
              ? d + String.fromCharCode(f)
              : 64 === k
              ? d + String.fromCharCode(f, g)
              : d + String.fromCharCode(f, g, l)
        } while (e < b.length)
        return d
      }
      function ti (a, c) {
        void 0 === c && (c = !1)
        return a
          ? a.replace(c ? /[+/=]/g : /[-*_]/g, function (b) {
              return ap[b] || b
            })
          : ''
      }
      function bp (a) {
        try {
          var c = Pa(a) ? a : []
          return I(',', [a.name, a.description, u(za, Na, hb(cp), qd(','))(c)])
        } catch (b) {
          return ''
        }
      }
      function cp (a) {
        return I(',', [a.description, a.suffixes, a.type])
      }
      function dp (a, c) {
        for (var b = '', d = 0; d < c; d += 1) b += a
        return b
      }
      function ep (a, c, b, d, e, f, g, h) {
        var k = b.o(f)
        ma(k) && (b.C(f, g), e(a, c, b, d), (k = b.o(f, g)))
        X(h) || h.fc(f, '' + k)
        return k
      }
      function fp (a, c) {
        if (rd(a)) {
          var b = gb(a).match(gp)
          if (b && b.length) return b[1] === c
        }
        return !1
      }
      function qe (a, c, b) {
        return function (d) {
          var e,
            f,
            g = Ha(c, b)
          g &&
            hp(a, d, c) &&
            ((g = G(g.params, g)),
            (d = Rf({ event: a, Ma: 'products', Aa: vc, si: 'goods' }, d)) &&
              g &&
              g(((e = {}), (e.__ym = ((f = {}), (f.ecommerce = [d]), f)), e)))
        }
      }
      function hp (a, c, b) {
        var d = !1,
          e = ''
        if (!La(c)) return Eb(b, '', 'Ecommerce data should be an object'), d
        var f = c.goods
        switch (a) {
          case 'detail':
          case 'add':
          case 'remove':
            ca(f) && f.length
              ? (d = Jf(function (g) {
                  return La(g) && (xa(g.id) || re(b, g.id) || xa(g.name))
                }, f)) ||
                (e =
                  "All items in 'goods' should be objects and contain 'id' or 'name' field")
              : (e = "Ecommerce data should contain 'goods' non-empty array")
            break
          case 'purchase':
            re(b, c.id) || xa(c.id)
              ? (d = !0)
              : (e =
                  "Purchase object should contain string or number 'id' field")
        }
        Eb(b, '', e)
        return d
      }
      function sd (a, c) {
        return {
          Z: function (b, d) {
            se(b)
              ? d()
              : ra(c, function (e) {
                  var f
                  if ((e = n(e, 'settings.hittoken')))
                    (e = ((f = {}), (f.hittoken = e), f)),
                      (b.G = y(b.G || {}, e))
                  d()
                })
          }
        }
      }
      function ip (a, c) {
        function b () {
          q.hidden
            ? y(k.style, td(['top', 'right', 'left', 'background'], 'initial'))
            : y(k.style, td(['top', 'right', 'left'], '0'), {
                background: 'rgba(0, 0, 0, .3)'
              })
          v.parentNode || (r.appendChild(p), r.appendChild(v))
          q.hidden = !q.hidden
          r.hidden = !r.hidden
          t.hidden = !t.hidden
        }
        function d (Q) {
          var oa = g()
          y(oa.style, wc('2px', '18px'), Kc, {
            left: '15px',
            top: '7px',
            background: '#2f3747',
            borderRadius: '2px'
          })
          oa.style.transform = 'rotate(' + Q + 'deg)'
          return oa
        }
        function e (Q, oa, ua, vb, ud) {
          var te = g()
          y(te.style, wc(oa + 'px', ua + 'px'), Kc, {
            left: Q + 'px',
            bottom: 0,
            background: vb,
            borderTopLeftRadius: ud
          })
          return te
        }
        var f = ab(a)
        if (!f) return B
        var g = w('div', f),
          h = w('iframe', f),
          k = g()
        k.classList.add('__ym_wv_ign')
        y(k.style, ui, {
          bottom: '0',
          width: '100%',
          maxWidth: 'initial',
          zIndex: '999999999'
        })
        var l = k.attachShadow ? k.attachShadow({ mode: 'open' }) : k,
          m = g()
        y(m.style, wc('24px'), Kc, Sf, {
          top: '12px',
          right: '10px',
          background: '#3367dc',
          overflow: 'hidden'
        })
        var p = g()
        y(
          p.style,
          {
            border: '2px solid transparent',
            animation: '__ym_wv_ign-spinner-animation 1s 0.21s infinite linear'
          },
          Sf,
          Kc,
          wc('48px'),
          td(['top', 'left'], 'calc(50% - 24px)'),
          td(['borderTopColor', 'borderLeftColor'], '#fc0')
        )
        f = f('style')
        f.textContent =
          '@keyframes __ym_wv_ign-spinner-animation {to {transform: rotate(360deg);}}'
        p.appendChild(f)
        var q = g()
        q.id = '__ym_wv_ign__opener'
        y(q.style, wc('46px', '48px'), ui, {
          right: '0',
          bottom: '60px',
          cursor: 'pointer',
          background: '#fff',
          borderRadius: '16px 0 0 16px',
          boxShadow:
            '0px 0px 1px rgba(67, 68, 69, 0.3), 0px 1px 2px rgba(67, 68, 69, 0.3)'
        })
        var r = g()
        y(r.style, Kc, td(['top', 'right', 'bottom'], '0'), {
          width: '600px',
          background: '#fff'
        })
        var t = g()
        t.id = '__ym_wv_ign__closer'
        y(t.style, wc('32px'), Kc, Sf, {
          top: '12px',
          right: '612px',
          cursor: 'pointer',
          background: '#fff'
        })
        f = h()
        f.src = 'https://metrika.yandex.ru/widget/iframe-check'
        var v = h()
        y(v.style, wc('100%'), { border: 'none' })
        v.src = 'https://metrika.yandex.ru/widget/dashboard?id=' + c
        r.hidden = !0
        t.hidden = !0
        t.appendChild(d(45))
        t.appendChild(d(-45))
        r.appendChild(f)
        m.appendChild(
          e(
            0,
            8,
            9,
            'linear-gradient(0deg, #ff324f, #ff324f), linear-gradient(158.67deg, #ff455c 12.6%, #ff1139 96.76%)'
          )
        )
        m.appendChild(e(8, 9, 16, '#04acff', '3px'))
        m.appendChild(e(17, 7, 24, '#ffdd13'))
        q.appendChild(m)
        l.appendChild(r)
        l.appendChild(t)
        var F = ['click', 'touchstart']
        h = ia(a)
        m = a.document.body
        l = [
          h.D(q, F, b),
          h.D(t, F, b),
          h.D(
            f,
            ['load'],
            E([ha, [G(r.removeChild, r, f), G(l.appendChild, l, q)]], z)
          ),
          h.D(v, ['load'], G(r.removeChild, r, p)),
          G(m.removeChild, m, k)
        ]
        var Y = E([ha, l], z)
        l.push(
          h.D(a, ['securitypolicyviolation'], function (Q) {
            ;(Q = n(Q, 'blockedURI')) &&
              0 <= Q.indexOf('https://metrika.yandex.ru') &&
              Y()
          })
        )
        m.appendChild(k)
        return Y
      }
      function td (a, c) {
        return M(
          function (b, d) {
            b[d] = c
            return b
          },
          {},
          a
        )
      }
      function wc (a, c) {
        var b
        return (b = {}), (b.width = a), (b.height = c || a), b
      }
      function jp (a, c) {
        try {
          var b = c.origin
        } catch (d) {}
        b &&
          Ja(u(Ya, Aa(b)), [
            /^http:\/\/([\w\-.]+\.)?webvisor\.com\/?$/,
            /^https:\/\/([\w\-.]+\.)?metri[kc]a\.yandex\.(ru|ua|by|kz|com|com\.tr)\/?$/
          ]) &&
          ((b = tb(a, c.data)),
          'appendremote' === n(b, 'action') && kp(a, c, b))
      }
      function vi (a, c, b, d) {
        var e, f, g, h
        void 0 === b && (b = '')
        void 0 === d && (d = '')
        var k = H(a),
          l = {}
        l.getCachedTags = Tf
        l.form =
          ((e = {}),
          (e.closest = w(a, wi)),
          (e.select = lp),
          (e.getData = w(a, xi)),
          e)
        l.button =
          ((f = {}),
          (f.closest = w(a, Uf)),
          (f.select = Vf),
          (f.getData = w(a, Wf)),
          f)
        l.phone = ((g = {}), (g.hidePhones = E([a, null, [d]], yi)), g)
        l.status = ((h = {}), (h.checkStatus = E([a, Ga(b)], mp)), h)
        k.C('_u', l)
        c && mc(a, { src: c })
      }
      function zi (a) {
        var c = a.lang
        c = void 0 === c ? '' : c
        var b = a.appVersion
        b = void 0 === b ? '' : b
        var d = a.fileId
        d = void 0 === d ? '' : d
        a = a.beta
        a = void 0 === a ? !1 : a
        b = I('.', u(hb(u(O, Ga)), Na)(b.split('.')))
        if (!K(d, np) || !K(c, ['ru', 'en', 'tr'])) return ''
        c =
          (a
            ? 'https://s3.mds.yandex.net/internal-metrika-betas'
            : 'https://yastatic.net/s3/metrika') +
          (b ? '/' + b : '') +
          '/form-selector/' +
          (d + '_' + c + '.js')
        return Ai(c) ? c : ''
      }
      function op (a, c) {
        var b = ab(a)
        if (b) {
          var d = b('div'),
            e = Xb(a)
          if (e) {
            d.innerHTML =
              '<iframe name="RemoteIframe" allowtransparency="true" style="position: absolute; left: -999px; top: -999px; width: 1px; height: 1px;"></iframe>'
            var f = d.firstChild
            f.onload = function () {
              var h = b('meta')
              h.setAttribute('http-equiv', 'Content-Security-Policy')
              h.setAttribute('content', 'script-src *')
              f.contentWindow.document.head.appendChild(h)
              mc(f.contentWindow, { src: c })
            }
            a._ym__remoteIframeEl = f
            e.appendChild(d)
            d.removeChild(f)
            var g = null
            d.attachShadow
              ? (g = d.attachShadow({ mode: 'open' }))
              : d.createShadowRoot
              ? (g = d.createShadowRoot())
              : d.webkitCreateShadowRoot && (g = d.webkitCreateShadowRoot())
            g
              ? g.appendChild(f)
              : (e.appendChild(f), (a._ym__remoteIframeContainer = f))
          }
        }
      }
      function mp (a) {
        var c,
          b = Bi(a)
        a = H(a).o('getCounters', vd)()
        a = A(V('id'), a)
        return (c = { id: b }), (c.counterFound = !!b && K(b, a)), c
      }
      function yi (a, c, b) {
        var d
        c = Ci(a, c, { Ig: pp, Xi: ((d = {}), (d.href = !0), d) })
        b = Z(
          Boolean,
          A(function (f) {
            return '*' === f ? f : Mb(f)
          }, b)
        )
        var e = A(u(O, qa('concat', ['']), Di('reverse'), ha), b)
        b = wd(a)
        d = Ei(a, b, 1e3)
        c = G(c.hg, c, e)
        d.D(c)
        qp(a, b)
        Fi(a, b)
        c()
      }
      function pp (a, c, b) {
        var d = ab(a),
          e = b.Gb,
          f = b.dd,
          g = e.parentNode,
          h = e.textContent
        if ('text' === b.Ge && h && d && g) {
          b = d('small')
          Gi(b)
          var k = h.split(''),
            l = Hi(h).length
          z(
            qa('appendChild', b),
            M(
              function (m, p) {
                var q = m.na,
                  r = m.Rg,
                  t = d('small')
                t.innerHTML = p
                var v = rp.test(p)
                Gi(t)
                v && (t.style.opacity = '' + (l - r - 1) / l)
                q.push(t)
                return { na: q, Rg: r + (v ? 1 : 0) }
              },
              { na: [], Rg: 0 },
              k
            ).na
          )
          sp(a, c, b, f)
          g.insertBefore(b, e)
          e.textContent = ''
          return !0
        }
        return !1
      }
      function sp (a, c, b, d) {
        function e () {
          z(w(['style', 'opacity', ''], Gc), za(b.childNodes))
          if (c) {
            var k = Ha(a, c)
            k && k.extLink('tel:' + d, {})
          }
          g()
          h()
        }
        var f = ia(a),
          g = B,
          h = B
        g = f.D(b, ['mouseenter'], function (k) {
          if (k.target === b) {
            var l = W(a, e, 200, 'ph.h.e')
            ;(h || B)()
            h = f.D(b, ['mouseleave'], function (m) {
              m.target === b && na(a, l)
            })
          }
        })
      }
      function Fi (a, c) {
        cc(a)(
          Ua(B, function () {
            var b,
              d = a.document.body,
              e =
                ((b = {}),
                (b.attributes = !0),
                (b.childList = !0),
                (b.subtree = !0),
                b)
            Ca('MutationObserver', a.MutationObserver) &&
              new MutationObserver(c.O).observe(d, e)
          })
        )
      }
      function qp (a, c) {
        return ia(a).D(a, ['load'], c.O)
      }
      function Ci (a, c, b) {
        function d (k) {
          var l
          return f(a, c, k)
            ? null === (l = h[k.dd]) || void 0 === l
              ? void 0
              : l.od
            : null
        }
        var e,
          f = b.Ig
        b = b.Xi
        var g = void 0 === b ? ((e = {}), (e.href = !0), (e.text = !0), e) : b,
          h
        return {
          hg: function (k) {
            return new J(function (l, m) {
              ;(k && k.length) || m()
              h = Ii()(k)
              cc(a)(
                Ua(w({ qa: [], Ca: 0 }, l), function () {
                  var p = fa(a),
                    q = p(aa),
                    r = g.href ? tp(a, h) : [],
                    t = g.text ? Ji(a, h) : []
                  l({ qa: Z(ca, Z(Boolean, A(d, r.concat(t)))), Ca: p(aa) - q })
                })
              )
            })
          }
        }
      }
      function tp (a, c) {
        var b = a.document.body
        if (!b) return []
        var d = Ki(c)
        return M(
          function (e, f) {
            var g = n(f, 'href')
            try {
              var h = decodeURI(g || '')
            } catch (p) {
              h = ''
            }
            if ('tel:' === h.slice(0, 4)) {
              var k = (d.exec(h) || [])[0],
                l = k ? Mb(k) : '',
                m = c[l]
              X(m) ||
                (!l && '*' !== m.od[0]) ||
                (e.push({
                  Ge: 'href',
                  Gb: f,
                  dd: l,
                  mb: Li(k, c[l].mb),
                  Fj: g
                }),
                (g = Mb(h.slice(4))),
                (l = Ii()([l ? m.od : [g, '']])),
                e.push.apply(e, Ji(a, l, f)))
            }
            return e
          },
          [],
          za(b.querySelectorAll('a'))
        )
      }
      function Ji (a, c, b) {
        void 0 === b && (b = a.document.body)
        if (!b) return []
        var d = [],
          e = Ki(c)
        vf(
          a,
          b,
          function (f) {
            if (
              f !== b &&
              'script' !== (n(f, 'parentNode.nodeName') || '').toLowerCase()
            ) {
              var g = Na(e.exec(f.textContent || '') || [])
              z(function (h) {
                var k = Mb(h)
                X(c[k]) ||
                  d.push({
                    Ge: 'text',
                    Gb: f,
                    dd: k,
                    mb: Li(h, c[k].mb),
                    Fj: f.textContent || ''
                  })
              }, g)
            }
          },
          function (f) {
            return e.test(f.textContent || '') ? 1 : 0
          },
          a.NodeFilter.SHOW_TEXT
        )
        return d
      }
      function Ii () {
        return xd(function (a, c) {
          var b = A(Mb, c),
            d = b[0]
          b = b[1]
          a[d] = { mb: b, od: c }
          var e = Mi(d)
          e !== d && (a[e] = { mb: Mi(b), od: c })
          return a
        }, {})
      }
      function Li (a, c) {
        for (
          var b = [], d = a.split(''), e = c.split(''), f = 0, g = 0;
          g < a.length && !(f >= e.length);
          g += 1
        ) {
          var h = d[g]
          '0' <= h && '9' >= h ? (b.push(e[f]), (f += 1)) : b.push(d[g])
        }
        return I('', b) + c.slice(f + 1)
      }
      function Mi (a) {
        var c = { 7: '8', 8: '7' }
        return 11 === a.length && c[a[0]] ? '' + c[a[0]] + a.slice(1) : a
      }
      function Ki (a) {
        return new RegExp('(?:' + I('|', A(Ni, da(a))) + ')')
      }
      function Oi (a, c, b, d) {
        if (c) {
          var e = []
          c &&
            (a.document.documentElement.contains(c)
              ? vf(a, c, qa('push', e), d)
              : Oa(e, Pi(a, c, d)))
          z(b, e)
        }
      }
      function vf (a, c, b, d, e) {
        function f (g) {
          return T(d)
            ? d(g)
              ? a.NodeFilter.FILTER_ACCEPT
              : a.NodeFilter.FILTER_REJECT
            : a.NodeFilter.FILTER_ACCEPT
        }
        void 0 === e && (e = -1)
        if (T(b) && f(c) === a.NodeFilter.FILTER_ACCEPT && (b(c), !Hf(c)))
          for (
            c = a.document.createTreeWalker(
              c,
              e,
              d ? { acceptNode: f } : null,
              !1
            );
            c.nextNode() && !1 !== b(c.currentNode);

          );
      }
      function Pi (a, c, b) {
        var d = [],
          e = u(O, qa('push', d))
        T(b)
          ? ((b = b(c)), (ma(b) || b === a.NodeFilter.FILTER_ACCEPT) && e(c))
          : e(c)
        if (c.childNodes && 0 < c.childNodes.length) {
          c = c.childNodes
          b = 0
          for (var f = c.length; b < f; b += 1) {
            var g = Pi(a, c[b])
            z(e, g)
          }
        }
        return d
      }
      function Qi (a, c, b) {
        var d
        a = [
          Ri(a, c, function (e) {
            d = e
            e.Ba.D(b)
          }),
          function () {
            d && d.unsubscribe()
          }
        ]
        return E([Si, a], z)
      }
      function up (a, c, b, d) {
        var e, f, g
        if (b) {
          var h = n(d, 'ecommerce') || {}
          var k = n(d, 'event') || ''
          h = La(h) && xa(k) ? Rf(k, h) : void 0
          if (!h)
            a: {
              var l = d
              !ca(d) && re(a, Pa(d)) && (l = Da(l))
              if (
                ca(l) &&
                ((h = l[0]),
                (k = l[1]),
                (l = l[2]),
                xa(k) && La(l) && 'event' === h)
              ) {
                h = Rf(k, l)
                break a
              }
              h = void 0
            }
          if ((d = h || vp(d)))
            nb(
              a,
              ((e = {}),
              (e.counterKey = c),
              (e.name = 'ecommerce'),
              (e.data = d),
              e)
            ),
              b(((f = {}), (f.__ym = ((g = {}), (g.ecommerce = [d]), g)), f))
        }
      }
      function vp (a) {
        var c = n(a, 'ecommerce')
        if (La(c))
          return (
            (a = Z(uc(Ti), da(c))),
            (a = M(
              function (b, d) {
                b[d] = c[d]
                return b
              },
              {},
              a
            )),
            0 === da(a).length ? void 0 : a
          )
      }
      function Rf (a, c) {
        var b,
          d,
          e = xa(a) ? yd[a] : a
        if (e) {
          var f = e.event,
            g = e.Ma,
            h = e.si,
            k = void 0 === h ? 'items' : h,
            l = c.purchase || c
          if ((h = l[k])) {
            e = A(w(e.Aa, wp), h)
            var m = ((b = {}), (b[f] = g ? ((d = {}), (d[g] = e), d) : e), b)
            b = da(l)
            g &&
              1 < b.length &&
              (m[f].actionField = M(
                function (p, q) {
                  if (q === k) return p
                  if ('currency' === q) return (m.currencyCode = l.currency), p
                  p[xp[q] || Xf[q] || q] = l[q]
                  return p
                },
                {},
                b
              ))
            return m
          }
        }
      }
      function wp (a, c) {
        var b = {}
        z(function (d) {
          var e = a[d] || Xf[d] || d
          ;-1 !== d.indexOf('item_category')
            ? ((e = Xf.item_category),
              (b[e] = b[e] ? b[e] + ('/' + c[d]) : c[d]))
            : (b[e] = c[d])
        }, da(c))
        return b
      }
      function yp (a, c, b) {
        if (b && ((b = Uf(a, b)), (b = Wf(a, b)))) {
          b = '?' + Lc(b)
          var d = Gb(
            a,
            c,
            'Button goal. Counter ' + c.id + '. Button: ' + b + '.'
          )
          ue(a, c, 'btn', d).reachGoal(b)
        }
      }
      function zp (a, c, b, d) {
        d = n(d, 'target')
        ;(d = dc('button,input', a, d)) &&
          'submit' === d.type &&
          (d = wi(a, d)) &&
          (b.push(d), W(a, E([!1, a, c, b, d], Ui), 300))
      }
      function Ui (a, c, b, d, e) {
        var f = Nb(c)(e, d),
          g = -1 !== f
        if (a || g)
          g && d.splice(f, 1),
            (a = xi(c, e)),
            (a = '?' + Lc(a)),
            (d = E(
              [c, b, 'Form goal. Counter ' + b.id + '. Form: ' + a + '.'],
              Vi
            )),
            ue(c, b, 'form', d).reachGoal(a)
      }
      function Vi (a, c, b) {
        return Ap(a, c).then(function (d) {
          d && Gb(a, c, b)()
        })
      }
      function xi (a, c, b) {
        return Wi(a, c, ['i', 'n', 'p'], void 0, b)
      }
      function Bp (a, c) {
        var b
        a(((b = {}), (b.clickmap = X(c) ? !0 : c), b))
      }
      function Cp (a, c, b, d, e) {
        var f
        c = {
          H: Ea(),
          G: ((f = {}), (f['page-url'] = c), (f['pointer-click'] = b), f),
          ia: { ta: 'clmap/' + e.id }
        }
        d(c, e)['catch'](D(a, 'c.s.c'))
      }
      function Dp (a, c, b, d, e) {
        if (zd(a, 'ymDisabledClickmap') || !c || !c.element) return !1
        a = Ia(c.element)
        if (
          (e && !e(c.element, a)) ||
          (K(c.button, [2, 3]) && 'A' !== a) ||
          Ja(ka(a), d)
        )
          return !1
        d = c.element
        if (c && b) {
          if (50 > c.time - b.time) return !1
          e = Math.abs(b.position.x - c.position.x)
          a = Math.abs(b.position.y - c.position.y)
          c = c.time - b.time
          if (b.element === d && 2 > e && 2 > a && 1e3 > c) return !1
        }
        for (; d; ) {
          if (Ep(d)) return !1
          d = d.parentElement
        }
        return !0
      }
      function Fp (a, c) {
        var b = null
        try {
          if ((b = c.target || c.srcElement))
            !b.ownerDocument && b.documentElement
              ? (b = b.documentElement)
              : b.ownerDocument !== a.document && (b = null)
        } catch (d) {}
        return b
      }
      function Gp (a) {
        var c = a.which
        a = a.button
        return c || void 0 === a
          ? c
          : 1 === a || 3 === a
          ? 1
          : 2 === a
          ? 3
          : 4 === a
          ? 2
          : 0
      }
      function Xi (a, c) {
        var b = Xb(a),
          d = Yf(a)
        return {
          x: c.pageX || c.clientX + d.x - (b.clientLeft || 0) || 0,
          y: c.pageY || c.clientY + d.y - (b.clientTop || 0) || 0
        }
      }
      function ve (a, c) {
        return {
          Z: function (b, d) {
            var e,
              f = b.H,
              g = b.La,
              h = b.G,
              k = b.Y
            k = void 0 === k ? {} : k
            if (f && h) {
              var l = fa(a)
              f.fc('rqnl', 1)
              for (var m = Ad(a), p = 1; m[p]; ) p += 1
              b.V || (b.V = {})
              b.V.cc = p
              m[p] =
                ((e = {}),
                (e.protocol = ta.$a),
                (e.host = bc),
                (e.resource = b.ia.ta),
                (e.postParams = k.ea),
                (e.time = l(aa)),
                (e.counterType = c.$),
                (e.params = h),
                (e.browserInfo = f.l()),
                (e.counterId = c.id),
                (e.ghid = ac(a)),
                e)
              g && (m[p].telemetry = g.l())
              Zf(a)
            }
            d()
          },
          Fa: function (b, d) {
            Yi(a, b)
            d()
          }
        }
      }
      function Yi (a, c) {
        var b = Ad(a)
        c.H && !Va(b) && c.V && (delete b[c.V.cc], Zf(a))
      }
      function Zf (a) {
        var c = Ad(a)
        Ra(a).C('retryReqs', c)
      }
      function Hp (a, c) {
        if (a.Nj()) {
          var b = Zi(c)
          if (b && !Zb('ym-disable-tracklink', b)) {
            var d = a.l,
              e = a.Ah,
              f = a.qb,
              g = a.sender,
              h = a.Oh,
              k = f.Hc,
              l = b.href
            var m = ob(b.innerHTML && b.innerHTML.replace(/<\/?[^>]+>/gi, ''))
            m ||
              (m = (m = b.querySelector('img'))
                ? ob(m.getAttribute('title') || m.getAttribute('alt'))
                : '')
            m = l === m ? '' : m
            if (Zb('ym-external-link', b))
              we(d, f, { url: l, zb: !0, title: m, sender: g })
            else {
              k = k ? Hc(d, k).hostname : S(d).hostname
              h = RegExp('\\.(' + I('|', A(Ip, h)) + ')$', 'i')
              var p = b.protocol + '//' + b.hostname + b.pathname
              h = $i.test(p) || $i.test(l) || h.test(l) || h.test(p)
              b = b.hostname
              xe(k) === xe(b)
                ? h
                  ? we(d, f, { url: l, Pc: !0, title: m, sender: g })
                  : m && e.C('il', ob(m).slice(0, 100))
                : (l && Jp.test(l)) ||
                  we(d, f, {
                    url: l,
                    Uc: !0,
                    zb: !0,
                    Pc: h,
                    title: m,
                    sender: g
                  })
            }
          }
        }
      }
      function we (a, c, b) {
        var d,
          e,
          f,
          g = Ea()
        b.Pc && g.C('dl', 1)
        b.zb && g.C('ln', 1)
        var h = b.Qg || {}
        g = {
          H: g,
          V: { title: h.title || b.title, Uc: !!b.Uc, da: h.params },
          G:
            ((d = {}),
            (d['page-url'] = b.url),
            (d['page-ref'] = c.Hc || S(a).href),
            d)
        }
        d = 'Link'
        b.Pc
          ? (d = b.zb ? 'Ext link - File' : 'File')
          : b.zb && (d = 'Ext link')
        nb(
          a,
          ((e = {}),
          (e.counterKey = N(c)),
          (e.name = 'event'),
          (e.data =
            ((f = {}),
            (f.schema = 'Link click'),
            (f.name = (b.zb ? 'external' : 'internal') + ' url: ' + b.url),
            f)),
          e)
        )
        c = b
          .sender(g, c)
          .then(Gb(a, c, d + '. Counter ' + c.id + '. Url: ' + b.url, b.Qg))
        return Mc(a, 'cl.p.s', c, h.callback || B, h.ctx)
      }
      function Kp (a, c) {
        var b,
          d,
          e =
            ((b = {}), (b.string = !0), (b.object = !0), (b['boolean'] = c), b)[
              typeof c
            ] || !1
        a(((d = {}), (d.trackLinks = e), d))
      }
      function Lp (a, c, b, d) {
        var e = S(a),
          f = e.hostname
        e = e.href
        if ((c = Bd(c).url)) (a = Hc(a, c)), (f = a.hostname), (e = a.href)
        return [d + '://' + f + '/' + b, e || '']
      }
      function aj (a) {
        return (a.split(':')[1] || '')
          .replace(/^\/*/, '')
          .replace(/^www\./, '')
          .split('/')[0]
      }
      function Mp (a, c, b, d) {
        var e
        if ((a = Ha(a, b))) {
          var f = d.data
          b = '' + b.id
          var g = d.sended || []
          d.sended || (d.sended = g)
          K(b, g) ||
            !a.params ||
            (d.counter && '' + d.counter !== b) ||
            (a.params(f),
            g.push(b),
            d.parent && c.vg(((e = {}), (e.type = 'params'), (e.data = f), e)))
        }
      }
      function yh (a, c, b) {
        void 0 === b && (b = O)
        var d = id(a)
        b(d)
        var e = w(d, Np)
        ye(a, c, function (f) {
          f.Ba.D(e)
        })
        return d
      }
      function Np (a, c) {
        var b = n(c, 'ymetrikaEvent')
        b && a.O(n(b, 'type'), b)
      }
      function ye (a, c, b, d) {
        void 0 === b && (b = B)
        void 0 === d && (d = !1)
        var e = wd(a)
        if (c && T(c.push)) {
          var f = c.push
          c.push = function () {
            var g = Da(arguments),
              h = g[0]
            d && e.O(h)
            g = f.apply(c, g)
            d || e.O(h)
            return g
          }
          a = {
            Ba: e,
            unsubscribe: function () {
              c.push = f
            }
          }
          b(a)
          z(e.O, c)
          return a
        }
      }
      function $d (a) {
        a = H(a)
        var c = a.o('dataLayer', [])
        a.C('dataLayer', c)
        return c
      }
      function dm (a, c) {
        var b, d
        a.push(((b = {}), (b.ymetrikaEvent = ((d = {}), (d.type = c), d)), b))
      }
      function bj (a, c) {
        var b = dd(a, c),
          d = [],
          e = []
        if (!b) return null
        var f = E([a, b.Ke], Op),
          g = w(f, Pp)
        b.ca
          .D(['initToParent'], function (h) {
            g(d, b.children[h[1].counterId])
          })
          .D(['parentConnect'], function (h) {
            g(e, b.Ja[h[1].counterId])
          })
        return {
          ca: b.ca,
          Lk: function (h, k) {
            return new J(function (l, m) {
              b.Ke(h, k, function (p, q) {
                l([p, q])
              })
              W(a, w(Sa(), m), 5100, 'is.o')
            })
          },
          ug: function (h) {
            var k = { xg: [], Ve: [], data: h }
            d.push(k)
            return f(b.children, k, h)
          },
          vg: function (h) {
            var k = { xg: [], Ve: [], data: h }
            e.push(k)
            return f(b.Ja, k, h)
          }
        }
      }
      function Pp (a, c, b) {
        c = Z(function (d) {
          return !K(b.info.counterId, d.Ve)
        }, c)
        z(function (d) {
          var e
          b.info.counterId &&
            a(((e = {}), (e[b.info.counterId] = b), e), d, d.data)
        }, c)
      }
      function Op (a, c, b, d, e) {
        return new J(function (f, g) {
          var h = da(b),
            k = u(d.resolve ? d.resolve : O, gd(f)),
            l = u(d.reject ? d.reject : O, gd(g))
          d.resolve = k
          d.reject = l
          z(function (m) {
            var p
            d.Ve.push(+m)
            var q = b[m],
              r = W(a, w(Sa(), l), 5100, 'is.m')
            c(
              q.window,
              y(e, ((p = {}), (p.toCounter = Ga(m)), p)),
              function (t, v) {
                na(a, r)
                d.xg.push(m)
                d.resolve && d.resolve(v)
              }
            )
          }, h)
        })['catch'](D(a, 'if.b'))
      }
      function Qp (a) {
        var c = B,
          b = null,
          d = a.length
        if (0 !== a.length && a[0]) {
          var e = a.slice(-1)[0]
          T(e) && ((c = e), (d = a.length + -1))
          var f = a.slice(-2)[0]
          T(f) && ((c = f), (b = e), (d = a.length + -2))
          d = a.slice(0, d)
          return { Bh: b, qc: c, da: 1 === d.length ? a[0] : Gc(d) }
        }
      }
      function Mc (a, c, b, d, e) {
        var f = E([a, d, e], $f)
        return b.then(f, function (g) {
          f()
          pe(a, c, g)
        })
      }
      function cj (a, c) {
        return {
          Z: function (b, d) {
            var e,
              f,
              g = (b.V || {}).da,
              h = b.Y
            h = void 0 === h ? {} : h
            if (g && (dj(c, g), !h.ea && b.H && b.G)) {
              var k = lb(a, g),
                l = ej(a),
                m = b.H.o('pv')
              k &&
                !b.G.nohit &&
                (nb(
                  a,
                  ((e = {}),
                  (e.counterKey = N(c)),
                  (e.name = 'params'),
                  (e.data = ((f = {}), (f.val = g), f)),
                  e)
                ),
                m
                  ? encodeURIComponent(k).length > ta.Yg
                    ? l.push([b.H, g])
                    : (b.G['site-info'] = k)
                  : ((h.ea = k),
                    (b.Y = h),
                    b.Sa || (b.Sa = {}),
                    (b.Sa.Yi = !0)))
            }
            d()
          },
          Fa: function (b, d) {
            var e = ej(a),
              f = Ha(a, c),
              g = f && f.params
            g &&
              ((f = Z(u(xc, ka(b.H)), e)),
              z(function (h) {
                g(h[1])
                h = ze(a)(h, e)
                e.splice(h, 1)
              }, f))
            d()
          }
        }
      }
      function Ae (a, c) {
        return function (b) {
          ag(a, c, b)
        }
      }
      function Rp (a, c) {
        bg(a)(function (b) {
          delete b[c]
        })
      }
      function ag (a, c, b) {
        bg(a)(function (d) {
          d[c] = y(d[c] || {}, b)
        })
      }
      function bg (a) {
        a = H(a)
        var c = a.o('dsjf') || Aa({})
        a.Va('dsjf', c)
        return c
      }
      function Sp (a, c) {
        return function (b) {
          var d,
            e,
            f = Ha(a, c)
          f &&
            (La(b)
              ? Pa(da(b))
                ? (b = fj(b)) &&
                  Pa(b) &&
                  f.params(
                    ((d = {}), (d.__ym = ((e = {}), (e.fpmh = b), e)), d)
                  )
                : Gb(a, c, 'First party params error. Empty object.')()
              : Gb(a, c, 'First party params error. Not an object.')())
        }
      }
      function fj (a) {
        return M(
          function (c, b) {
            var d = b[0],
              e = b[1],
              f = La(e)
            if (!xa(e) && !f) return c
            e = f ? fj(e) : e
            Pa(e) && c.push([d, e])
            return c
          },
          [],
          pa(a)
        )
      }
      function gj (a, c, b) {
        void 0 === b && (b = 0)
        c = pa(c)
        c = M(
          function (d, e) {
            var f = e[0],
              g = e[1],
              h = La(g)
            if (!xa(g) && !h) return d
            h
              ? (g = gj(a, g, b + 1))
              : b || 'yandex_cid' !== f
              ? ('phone_number' === f
                  ? (g = Tp(g))
                  : 'email' === f && (g = Up(g)),
                (g = hj(a, g)))
              : (g = J.resolve(g))
            d.push(
              g.then(function (k) {
                return [f, k]
              })
            )
            return d
          },
          [],
          c
        )
        return J.all(c)
      }
      function Up (a) {
        var c = ob(a).toLowerCase().split('@'),
          b = c[0]
        c = c[1]
        if (!c) return a
        c = c.replace('googlemail.com', 'gmail.com')
        ij(c) && (c = 'yandex.ru')
        'yandex.ru' === c
          ? (b = b.replace(cg, '-'))
          : 'gmail.com' === c && (b = b.replace(cg, ''))
        a = ie(b, '+')
        ;-1 !== a && (b = b.slice(0, a))
        return b + '@' + c
      }
      function Tp (a) {
        a = Mb(a)
        return '8' === a[0] ? '7' + a.slice(1) : a
      }
      function hj (a, c) {
        return new J(function (b, d) {
          var e = new a.TextEncoder().encode(c)
          a.crypto.subtle.digest('SHA-256', e).then(function (f) {
            f = new a.Blob([f], { type: 'application/octet-binary' })
            var g = new a.FileReader()
            g.onload = function (h) {
              h = n(h, 'target.result')
              var k = (h || '').indexOf(',')
              ;-1 !== k ? b(h.substring(k + 1)) : d(jc('fpm.i'))
            }
            g.readAsDataURL(f)
          }, d)
        })
      }
      function Ha (a, c) {
        var b = H(a).o('counters', {}),
          d = N(c)
        return b[d]
      }
      function jj (a, c) {
        H(a).C('dce:' + c, !0)
        var b = H(a).o('dclq:' + c)
        b &&
          (z(function (d) {
            var e = d[0]
            d = d[1]
            ha.apply(void 0, ya([Cd(a, c)[e]], d))
          }, b),
          Dd(b))
      }
      function Gb (a, c, b, d) {
        return dg(c)
          ? B
          : w(E(ya([a, N(c)], d ? [b + '. Params:', d] : [b]), Eb), ha)
      }
      function Eb () {
        var a = Da(arguments),
          c = a.slice(2)
        Cd(a[0], a[1]).log.apply(Eb, c)
      }
      function If (a) {
        var c = '1' === $b(a).o('debug'),
          b = Be(a, '1') || Be(a, '2')
        a = a._ym_debug
        return { yi: c, Ii: a || b, isEnabled: Ja(Boolean, [c, a, b]) }
      }
      function Be (a, c) {
        return -1 < S(a).href.indexOf('_ym_debug=' + c)
      }
      function Vp (a, c) {
        return {
          log: Nc(a, 'log', c, B),
          warn: Nc(a, 'log', c, B),
          error: Nc(a, 'log', c, B)
        }
      }
      function Nc (a, c, b, d) {
        return function () {
          var e,
            f,
            g = Da(arguments)
          nb(
            a,
            ((e = {}),
            (e.counterKey = b),
            (e.name = 'log'),
            (e.data = ((f = {}), (f.args = g), (f.type = c), f)),
            e)
          )
          return d.apply(void 0, g)
        }
      }
      function ra (a, c) {
        var b = N(a)
        return kj()(Wp(b)).then(c)
      }
      function Xp (a, c, b) {
        var d, e
        c = N(c)
        var f = eg(a)
        b = y({ Qh: f(aa) }, b)
        nb(
          a,
          ((d = {}),
          (d.counterKey = c),
          (d.name = 'counterSettings'),
          (d.data = ((e = {}), (e.settings = b), e)),
          d)
        )
        return kj()(Yp(c, b))
      }
      function Yp (a, c) {
        return function (b) {
          var d = b[a]
          d
            ? ((d.rj = c), (d.kg = !0), d.jg ? d.jg(c) : (d.jb = J.resolve(c)))
            : (b[a] = { jb: J.resolve(c), rj: c, kg: !0 })
        }
      }
      function fg (a) {
        return !pd(a) && gg(a)
      }
      function Ed (a) {
        return ab(a) ? w(a, Zp) : !1
      }
      function wb (a) {
        if (a.fetch) {
          var c = n(a, 'AbortController')
          return E([a, c ? new c() : void 0], $p)
        }
        return !1
      }
      function gg (a) {
        var c = n(a, 'navigator.sendBeacon')
        return c && Ca('sendBeacon', c)
          ? E([a, G(c, n(a, 'navigator'))], aq)
          : !1
      }
      function aq (a, c, b, d) {
        return new J(function (e, f) {
          var g
          if (!n(a, 'navigator.onLine')) return f()
          var h = y(d.kb, ((g = {}), (g['force-urlencoded'] = 1), g))
          g = b + '?' + Lc(h) + (d.ea ? '&' + d.ea : '')
          return 2e3 < g.length ? f(Sa('sb.tlq')) : c(g) ? e('') : f()
        })
      }
      function Zp (a, c, b) {
        return new J(function (d, e) {
          var f,
            g,
            h = '_ymjsp' + Wa(a),
            k = y(((f = {}), (f.callback = h), f), b.kb),
            l = E([a, h], bq)
          a[h] = function (p) {
            try {
              l(), oc(m), d(p)
            } catch (q) {
              e(q)
            }
          }
          k.wmode = '5'
          var m = mc(a, ((g = {}), (g.src = lj(c, b, k)), g))
          if (!m) return l(), e(jc('jp.s'))
          f = w(m, oc)
          f = u(f, w(Sa(b.ja), e))
          g = Fd(a, f, b.Wa || 1e4)
          g = E([a, g], na)
          m.onload = g
          m.onerror = u(l, g, f)
        })
      }
      function bq (a, c) {
        try {
          delete a[c]
        } catch (b) {
          a[c] = void 0
        }
      }
      function Oc (a) {
        var c = ab(a)
        return c ? E([a, c], cq) : !1
      }
      function cq (a, c, b, d) {
        return new J(function (e, f) {
          var g = Xb(a),
            h = c('img'),
            k = u(w(h, oc), w(Sa(d.ja), f)),
            l = Fd(a, k, d.Wa || 3e3)
          h.onerror = k
          h.onload = u(w(h, oc), w(null, e), E([a, l], na))
          k = y({}, d.kb)
          delete k.wmode
          h.src = lj(b, d, k)
          rd(a) &&
            (y(h.style, {
              position: 'absolute',
              visibility: 'hidden',
              width: '0px',
              height: '0px'
            }),
            g.appendChild(h))
        })
      }
      function $p (a, c, b, d) {
        var e,
          f = y(d.Lb ? ((e = {}), (e.wmode = '7'), e) : {}, d.kb),
          g = c || { signal: void 0, abort: B },
          h = a.fetch(b + '?' + Lc(f), {
            method: d.lc,
            body: d.ea,
            credentials: !1 === d.af ? 'omit' : 'include',
            headers: d.Ta,
            signal: g.signal
          }),
          k = w(d.ja, Sa)
        return new J(function (l, m) {
          d.Wa &&
            Fd(
              a,
              function () {
                try {
                  g.abort()
                } catch (p) {}
                m(k())
              },
              d.Wa
            )
          return h
            .then(function (p) {
              if (!p.ok) {
                if (d.He) return Ta(mj(p))
                Xd(d.ja)
              }
              return d.He ? p.text() : d.Lb ? p.json() : null
            })
            .then(l)
            ['catch'](w(k(), m))
        })
      }
      function xb (a) {
        var c
        if ((c = n(a, 'XMLHttpRequest')))
          if ((c = 'withCredentials' in new a.XMLHttpRequest())) {
            a: {
              if (
                dq.test(a.location.host) &&
                a.opera &&
                T(a.opera.version) &&
                ((c = a.opera.version()),
                'string' === typeof c && '12' === c.split('.')[0])
              ) {
                c = !0
                break a
              }
              c = !1
            }
            c = !c
          }
        return c ? w(a, eq) : !1
      }
      function eq (a, c, b) {
        var d,
          e = new a.XMLHttpRequest(),
          f = b.ea,
          g = y(b.Lb ? ((d = {}), (d.wmode = '7'), d) : {}, b.kb)
        return new J(function (h, k) {
          e.open(b.lc || 'GET', c + '?' + Lc(g), !0)
          e.withCredentials = !1 !== b.af
          b.Wa && (e.timeout = b.Wa)
          nj(
            pa,
            hb(function (m) {
              e.setRequestHeader(m[0], m[1])
            })
          )(b.Ta)
          var l = E([a, e, Sa(b.ja), b.Lb, b.He, h, k], fq)
          e.onreadystatechange = l
          try {
            e.send(f)
          } catch (m) {}
        })
      }
      function fq (a, c, b, d, e, f, g, h) {
        if (4 === c.readyState)
          if ((200 === c.status || e || g(b), e))
            200 === c.status ? f(c.responseText) : g(mj(c))
          else {
            e = null
            if (d)
              try {
                ;(e = tb(a, c.responseText)) || g(b)
              } catch (k) {
                g(b)
              }
            f(e)
          }
        return h
      }
      function lj (a, c, b) {
        ;(b = Lc(b)) && (a += '?' + b)
        c.ea && (a += (b ? '&' : '?') + c.ea)
        return a
      }
      function gq (a, c, b) {
        var d = A(xc, Ob[c] || Pb)
        z(function (e) {
          return d.unshift(e)
        }, Ce)
        return A(u(Pc([a, b]), ha), d)
      }
      function oj (a, c) {
        var b = S(a),
          d = b.href,
          e = b.host,
          f = -1
        if (!xa(c) || X(c)) return d
        b = c.replace(pj, '')
        if (-1 !== b.search(hq)) return b
        var g = b.charAt(0)
        if (
          ('?' === g && ((f = d.search(/\?/)), -1 === f)) ||
          ('#' === g && ((f = d.search(/#/)), -1 === f))
        )
          return d + b
        if (-1 !== f) return d.substr(0, f) + b
        if ('/' === g) {
          if (((f = d.indexOf(e)), -1 !== f))
            return d.substr(0, f + e.length) + b
        } else return (d = d.split('/')), (d[d.length - 1] = b), I('/', d)
        return ''
      }
      function De (a, c) {
        return {
          Z: function (b, d) {
            var e = qj(c)
            e = E([b, e, d], iq)
            jq(a, c, e)
          },
          Fa: function (b, d) {
            var e = b.H,
              f = qj(c)
            if (e) {
              var g = f.xa
              f.yf === e && g && (z(ha, g), (f.xa = null))
            }
            d()
          }
        }
      }
      function iq (a, c, b) {
        var d = a.H
        d ? (se(a) ? ((c.yf = d), b()) : c.xa ? c.xa.push(b) : b()) : b()
      }
      function se (a) {
        return (a = a.H) && a.o('pv') && !a.o('ar')
      }
      function jq (a, c, b) {
        if (hg(a) && eb(a)) {
          var d = kq(c)
          if (!d.Ki) {
            d.Ki = !0
            c = dd(a, c)
            if (!c) {
              b()
              return
            }
            d.xa = []
            var e = function () {
              d.xa && (z(ha, d.xa), (d.xa = null))
            }
            W(a, e, 3e3)
            c.ca.D(['initToChild'], e)
          }
          d.xa ? d.xa.push(b) : b()
        } else b()
      }
      function rj (a, c) {
        return {
          Z: function (b, d) {
            var e = b.H
            if (e && (!c || c.sg)) {
              var f = a.document.title
              b.V && b.V.title && (f = b.V.title)
              var g = ec('getElementsByTagName', a.document)
              'string' !== typeof f &&
                g &&
                ((f = g('title')), (f = (f = n(f, '0.innerHtml')) ? f : ''))
              f = f.slice(0, ta.Zg)
              e.C('t', f)
            }
            d()
          }
        }
      }
      function Hb (a) {
        return function (c, b) {
          return {
            Z: function (d, e) {
              var f = d.H,
                g = d.G
              f &&
                g &&
                z(function (h) {
                  var k = Ee[h],
                    l = 'bi',
                    m = f
                  k || ((k = ig[h]), (l = 'tel'), (m = ae(d)))
                  k && ((k = C(l + ':' + h, k, null)(c, b, d)), m.fc(h, k))
                }, a || lq())
              e()
            }
          }
        }
      }
      function mq (a, c) {
        var b = Gd(a)
        c.D(['initToParent'], function (d) {
          var e = d[0]
          d = d[1]
          window.window &&
            (b.children[d.counterId] = { info: d, window: e.source })
        })
          .D(['initToChild'], function (d) {
            var e = d[0]
            d = d[1]
            e.source === a.parent && c.O('parentConnect', [e, d])
          })
          .D(['parentConnect'], function (d) {
            var e = d[1]
            e.counterId &&
              (b.Ja[e.counterId] = { info: e, window: d[0].source })
          })
      }
      function nq (a) {
        if (Ca('MutationObserver', a.MutationObserver)) {
          var c = Gd(a).children,
            b = new a.MutationObserver(function () {
              z(function (d) {
                n(c[d], 'window.window') || delete c[d]
              }, da(c))
            })
          cc(a)(
            Ua(B, function () {
              b.observe(a.document.body, { subtree: !0, childList: !0 })
            })
          )
        }
      }
      function oq (a, c) {
        return function (b, d) {
          var e,
            f = { Bc: fa(a)(aa), key: a.Math.random(), dir: 0 }
          b.length &&
            ((f.Bc = Ga(b[0])), (f.key = parseFloat(b[1])), (f.dir = Ga(b[2])))
          y(d, c)
          var g =
            ((e = { data: d }),
            (e.__yminfo = I(':', ['__yminfo', f.Bc, f.key, f.dir])),
            e)
          return { ba: f, Cg: lb(a, g) || '' }
        }
      }
      function cc (a, c) {
        function b (e) {
          n(c, d) ? e() : W(a, w(e, b), 100)
        }
        void 0 === c && (c = a)
        var d = (c.nodeType ? 'contentWindow.' : '') + 'document.body'
        return Aa(function (e, f) {
          b(f)
        })
      }
      function Hd (a, c) {
        var b = c.je,
          d = b || 'uid'
        b = b ? a.location.hostname : void 0
        var e = $b(a),
          f = Ra(a),
          g = fa(a)(jg),
          h = sj(a, c),
          k = h[0]
        h = h[1]
        var l = e.o('d')
        tj(a, c)
        var m = !1
        !h && k && ((h = k), (m = !0))
        if (!h) (h = I('', [g, Wa(a, 1e6, 999999999)])), (m = !0)
        else if (!l || 15768e3 < g - Ga(l)) m = !0
        m && !c.Cb && (e.C(d, h, 525600, b), e.C('d', '' + g, 525600, b))
        f.C(d, h)
        return h
      }
      function pq (a, c) {
        return !c.Cb && tj(a, c)
      }
      function sj (a, c) {
        var b = Ra(a),
          d = $b(a),
          e = c.je || 'uid'
        return [b.o(e), d.o(e)]
      }
      function ci (a, c, b) {
        kg(a, 'metrika_enabled', '1', 0, c, b, !0)
        var d = uj(a)
        ;(d = d && d.metrika_enabled) && vj(a, 'metrika_enabled', c, b, !0)
        return !!d
      }
      function kg (a, c, b, d, e, f, g) {
        void 0 === g && (g = !1)
        if (di(a, ke, c)) {
          var h = c + '=' + encodeURIComponent(b) + ';'
          h += '' + qq(a)
          if (d) {
            var k = new Date()
            k.setTime(k.getTime() + 6e4 * d)
            h += 'expires=' + k.toUTCString() + ';'
          }
          e && ((d = e.replace(rq, '')), (h += 'domain=' + d + ';'))
          try {
            ;(a.document.cookie = h + ('path=' + (f || '/'))),
              g || (wj(a)[c] = b)
          } catch (l) {}
        }
      }
      function ke (a, c) {
        var b = wj(a)
        return b ? b[c] || null : null
      }
      function uj (a) {
        try {
          var c = a.document.cookie
          if (!ma(c)) {
            var b = {}
            z(function (d) {
              d = d.split('=')
              var e = d[1]
              b[ob(d[0])] = ob(xj(e))
            }, (c || '').split(';'))
            return b
          }
        } catch (d) {}
        return null
      }
      function di (a, c, b) {
        return !lg.length || K(b, mg)
          ? !0
          : M(
              function (d, e) {
                return d && e(a, c, b)
              },
              !0,
              lg
            )
      }
      function ac (a) {
        var c = H(a),
          b = c.o('hitId')
        b || ((b = Wa(a)), c.C('hitId', b))
        return b
      }
      function ij (a) {
        var c = a.match(yj)
        if (c) {
          a = c[1]
          if ((c = c[2])) return K(c, ng) ? c : !1
          if (a) return ng[0]
        }
        return !1
      }
      function S (a) {
        return M(
          function (c, b) {
            var d = n(a, 'location.' + b)
            c[b] = d ? '' + d : ''
            return c
          },
          {},
          sq
        )
      }
      function Wf (a, c, b) {
        var d = Ia(c)
        return d && Wi(a, c, Na(['p', tq[d], 'c']), Vf, b)
      }
      function Uf (a, c) {
        var b = dc(og, a, c)
        if (!b) {
          var d = dc('div', a, c)
          d && (yb(og + ',div', d).length || (b = d))
        }
        return b
      }
      function Wi (a, c, b, d, e) {
        return M(
          function (f, g) {
            var h = null
            g in zj
              ? (h = c.getAttribute && c.getAttribute(zj[g]))
              : g in Qc &&
                (h =
                  'p' === g
                    ? Qc[g](a, c, e)
                    : 'c' === g
                    ? Qc[g](a, c, d)
                    : Qc[g](a, c))
            h &&
              ((h = h.slice(0, Aj[g] || 100)), (f[g] = pg[g] ? '' + pc(h) : h))
            return f
          },
          {},
          b
        )
      }
      function Vh (a, c, b) {
        if (Id(a)) return za(b.querySelectorAll(c))
        var d = Bj(c.split(' '), b)
        return Z(function (e, f) {
          return Nb(a)(e, d) === f
        }, d)
      }
      function Bj (a, c) {
        var b = ya(a),
          d = b.shift()
        if (!d) return []
        d = c.getElementsByTagName(d)
        return b.length ? nc(w(b, Bj), za(d)) : za(d)
      }
      function qc (a, c) {
        if (c.querySelector) return c.querySelector(a)
        var b = yb(a, c)
        return b && b.length ? b[0] : null
      }
      function yb (a, c) {
        if (!c || !c.querySelectorAll) return []
        var b = c.querySelectorAll(a)
        return b ? za(b) : []
      }
      function Zi (a) {
        var c = null
        try {
          c = a.target || a.srcElement
        } catch (b) {}
        if (c) {
          3 === c.nodeType && (c = c.parentNode)
          for (
            a = c && c.nodeName && ('' + c.nodeName).toLowerCase();
            n(c, 'parentNode.nodeName') &&
            (('a' !== a && 'area' !== a) ||
              (!c.href && !c.getAttribute('xlink:href')));

          )
            a =
              (c = c.parentNode) &&
              c.nodeName &&
              ('' + c.nodeName).toLowerCase()
          return c.href ? c : null
        }
        return null
      }
      function mc (a, c) {
        var b = a.document,
          d = y({ type: 'text/javascript', charset: 'utf-8', async: !0 }, c),
          e = ab(a)
        if (e) {
          var f = e('script')
          nj(
            pa,
            hb(function (l) {
              var m = l[0]
              l = l[1]
              'async' === m && l ? (f.async = !0) : (f[m] = l)
            })
          )(d)
          try {
            var g = ec('getElementsByTagName', b),
              h = g('head')[0]
            if (!h) {
              var k = g('html')[0]
              h = e('head')
              k && k.appendChild(h)
            }
            h.insertBefore(f, h.firstChild)
            return f
          } catch (l) {}
        }
      }
      function uq (a, c, b) {
        var d = Cj(c)
        K(b, d.Db) || d.Db.push(b)
        if (Va(d.vb)) {
          b = ab(a)
          if (!b) return null
          b = b('iframe')
          y(b.style, {
            display: 'none',
            width: '1px',
            height: '1px',
            visibility: 'hidden'
          })
          b.src = c
          a = Xb(a)
          if (!a) return null
          a.appendChild(b)
          d.vb = b
        } else
          (a = n(d.vb, 'contentWindow')) && a.postMessage('frameReinit', '*')
        return d.vb
      }
      function vq (a, c) {
        var b = ca(a) ? a : [a]
        c = c || document
        if (c.querySelectorAll) {
          var d = I(
            ', ',
            A(function (e) {
              return '.' + e
            }, b)
          )
          return za(c.querySelectorAll(d))
        }
        if (c.getElementsByClassName)
          return nc(u(qa('getElementsByClassName', c), za), b)
        d = c.getElementsByTagName('*')
        b = '(' + I('|', b) + ')'
        return Z(w(b, Zb), za(d))
      }
      function qg (a, c, b) {
        for (
          var d = '', e = Tf(), f = Ia(c) || '*';
          c && c.parentNode && !K(f, ['BODY', 'HTML']);

        )
          (d += e[f] || '*'),
            (d += Dj(a, c, b) || ''),
            (c = c.parentElement),
            (f = Ia(c) || '*')
        return ob(d, 128)
      }
      function Dj (a, c, b) {
        if ((a = Fe(a, c))) {
          a = a.childNodes
          for (var d = c && c.nodeName, e = 0, f = 0; f < a.length; f += 1)
            if (d === (a[f] && a[f].nodeName)) {
              if (c === a[f]) return e
              ;(b && a[f] === b) || (e += 1)
            }
        }
        return 0
      }
      function Fe (a, c) {
        var b = n(a, 'document')
        if (!c || c === b.documentElement) return null
        if (c === yc(a)) return b.documentElement
        b = null
        try {
          b = c.parentNode
        } catch (d) {}
        return b
      }
      function Ef (a, c) {
        var b = rg(a, c),
          d = b.left
        b = b.top
        var e = Ge(a, c)
        return [d, b, e[0], e[1]]
      }
      function Ge (a, c) {
        var b = n(a, 'document')
        if (c === yc(a) || c === b.documentElement) {
          b = Xb(a)
          var d = Rc(a)
          return [Math.max(b.scrollWidth, d[0]), Math.max(b.scrollHeight, d[1])]
        }
        return (b = Ic(c))
          ? [b.width, b.height]
          : [c.offsetWidth, c.offsetHeight]
      }
      function rg (a, c) {
        var b = c,
          d = n(a, 'document'),
          e = Ia(b)
        if (
          !b ||
          !b.ownerDocument ||
          'PARAM' === e ||
          b === yc(a) ||
          b === d.documentElement
        )
          return { left: 0, top: 0 }
        if ((d = Ic(b)))
          return (
            (b = Yf(a)),
            { left: Math.round(d.left + b.x), top: Math.round(d.top + b.y) }
          )
        for (e = d = 0; b; )
          (d += b.offsetLeft), (e += b.offsetTop), (b = b.offsetParent)
        return { left: d, top: e }
      }
      function ob (a, c) {
        if (a) {
          var b = Ej ? Ej.call(a) : ('' + a).replace(pj, '')
          return c && b.length > c ? b.substring(0, c) : b
        }
        return ''
      }
      function dc (a, c, b) {
        if (!(c && c.Element && c.Element.prototype && c.document && b))
          return null
        if (
          c.Element.prototype.closest &&
          Ca('closest', c.Element.prototype.closest) &&
          b.closest
        )
          return b.closest(a)
        var d = bi(c)
        if (d) {
          for (; b && 1 === b.nodeType && !d.call(b, a); )
            b = b.parentElement || b.parentNode
          return b && 1 === b.nodeType ? b : null
        }
        if (Id(c)) {
          for (
            a = za((c.document || c.ownerDocument).querySelectorAll(a));
            b && 1 === b.nodeType && -1 === Nb(c)(b, a);

          )
            b = b.parentElement || b.parentNode
          return b && 1 === b.nodeType ? b : null
        }
        return null
      }
      function Id (a) {
        return !(
          !Ca('querySelectorAll', n(a, 'Element.prototype.querySelectorAll')) ||
          !a.document.querySelectorAll
        )
      }
      function Fj (a, c, b) {
        var d = c.top,
          e = c.bottom,
          f = c.left,
          g = b.qd
        b = b.Qa
        a = a.Math
        c = a.min(a.max(c.right, 0), g) - a.min(a.max(f, 0), g)
        return (a.min(a.max(e, 0), b) - a.min(a.max(d, 0), b)) * c
      }
      function Gj (a) {
        return He(a) && !Ja(ka(a.type), wq)
          ? Ie(a)
            ? !a.checked
            : !a.value
          : xq(a)
          ? !a.value
          : yq(a)
          ? 0 > a.selectedIndex
          : !0
      }
      function Ia (a) {
        if (a)
          try {
            var c = a.nodeName
            if (xa(c)) return c
            c = a.tagName
            if (xa(c)) return c
          } catch (b) {}
      }
      function Hj (a, c) {
        var b = a.document.getElementsByTagName('form')
        return Nb(a)(c, za(b))
      }
      function zq (a, c, b) {
        b = ec('dispatchEvent', b || a.document)
        var d = null,
          e = n(a, 'Event.prototype.constructor')
        if (
          e &&
          (Ca('(Event|Object|constructor)', e) ||
            (sg(a) && '[object Event]' === '' + e))
        )
          try {
            d = new a.Event(c)
          } catch (f) {
            if ((a = ec('createEvent', n(a, 'document'))) && T(a)) {
              try {
                d = a(c)
              } catch (g) {}
              d && d.initEvent && d.initEvent(c, !1, !1)
            }
          }
        d && b(d)
      }
      function Ic (a) {
        try {
          return a.getBoundingClientRect && a.getBoundingClientRect()
        } catch (c) {
          return 'object' === typeof c &&
            null !== c &&
            16389 === (c.$f && c.$f & 65535)
            ? { top: 0, bottom: 0, left: 0, width: 0, height: 0, right: 0 }
            : null
        }
      }
      function Yf (a) {
        var c = yc(a),
          b = n(a, 'document')
        return {
          x:
            a.pageXOffset ||
            (b.documentElement && b.documentElement.scrollLeft) ||
            (c && c.scrollLeft) ||
            0,
          y:
            a.pageYOffset ||
            (b.documentElement && b.documentElement.scrollTop) ||
            (c && c.scrollTop) ||
            0
        }
      }
      function Rc (a) {
        var c = Je(a)
        if (c) {
          var b = c[2]
          return [a.Math.round(c[0] * b), a.Math.round(c[1] * b)]
        }
        c = Xb(a)
        return [
          n(c, 'clientWidth') || a.innerWidth,
          n(c, 'clientHeight') || a.innerHeight
        ]
      }
      function Je (a) {
        var c = n(a, 'visualViewport.width'),
          b = n(a, 'visualViewport.height')
        a = n(a, 'visualViewport.scale')
        return ma(c) || ma(b) ? null : [Math.floor(c), Math.floor(b), a]
      }
      function Xb (a) {
        var c = n(a, 'document') || {},
          b = c.documentElement
        return 'CSS1Compat' === c.compatMode ? b : yc(a) || b
      }
      function yc (a) {
        a = n(a, 'document')
        try {
          return a.getElementsByTagName('body')[0]
        } catch (c) {
          return null
        }
      }
      function Zb (a, c) {
        try {
          return new RegExp('(?:^|\\s)' + a + '(?:\\s|$)').test(c.className)
        } catch (b) {
          return !1
        }
      }
      function zc (a) {
        var c
        try {
          if ((c = a.target || a.srcElement))
            !c.ownerDocument && c.documentElement
              ? (c = c.documentElement)
              : c.ownerDocument !== document && (c = null)
        } catch (b) {}
        return c
      }
      function oc (a) {
        var c = a && a.parentNode
        c && c.removeChild(a)
      }
      function Qb (a) {
        return a ? a.innerText || '' : ''
      }
      function Hf (a) {
        if (ma(a)) return !1
        a = a.nodeType
        return 3 === a || 8 === a
      }
      function rf (a, c, b) {
        void 0 === c && (c = '')
        void 0 === b && (b = '_ym')
        var d = '' + b + c + '_'
        return {
          $d: Aq(a),
          o: function (e, f) {
            var g = Ij(a, '' + d + e)
            return Va(g) && !X(f) ? f : g
          },
          C: function (e, f) {
            Jj(a, '' + d + e, f)
            return this
          },
          Sb: function (e) {
            Kj(a, '' + d + e)
            return this
          }
        }
      }
      function Jj (a, c, b) {
        var d = tg(a)
        a = lb(a, b)
        if (!Va(a))
          try {
            d.setItem(c, a)
          } catch (e) {}
      }
      function Ij (a, c) {
        var b = tg(a)
        try {
          return tb(a, b.getItem(c))
        } catch (d) {}
        return null
      }
      function Kj (a, c) {
        var b = tg(a)
        try {
          b.removeItem(c)
        } catch (d) {}
      }
      function tg (a) {
        try {
          return a.localStorage
        } catch (c) {}
        return null
      }
      function lb (a, c, b) {
        try {
          return a.JSON.stringify(c, null, b)
        } catch (d) {
          return null
        }
      }
      function ae (a, c, b) {
        void 0 === b && (b = null)
        a.La || (a.La = ug())
        c && a.La.fc(c, b)
        return a.La
      }
      function Ke (a) {
        return {
          Z: function (c, b) {
            var d = a.document,
              e = c.H
            if (e && vg(a)) {
              var f = ia(a),
                g = function (h) {
                  vg(a) || (f.kc(d, Lj, g), b())
                  return h
                }
              f.D(d, Lj, g)
              e.C('pr', '1')
            } else b()
          }
        }
      }
      function wg (a) {
        return function (c, b, d) {
          return function (e, f) {
            var g = Oa(Of(c, a, f), d)
            return oe(c, b, g)(e)
          }
        }
      }
      function oe (a, c, b) {
        var d = Rb(a, c)
        return function (e) {
          return Mj(b, e, !0)
            .then(function () {
              var f = e.ia || {},
                g = f.Bi,
                h = void 0 === g ? '' : g
              g = f.ta
              var k = void 0 === g ? '' : g
              f = f.Ci
              f = A(
                function (l) {
                  return ta.$a + '//' + ('' + h + l || bc) + '/' + k
                },
                void 0 === f ? [bc] : f
              )
              return d(e, f)
            })
            .then(function (f) {
              var g = f.fd
              f = f.Og
              e.tj = g
              e.Kk = f
              return Mj(b, e).then(w(g, O))
            })
        }
      }
      function Rb (a, c) {
        return function (b, d) {
          return Nj(a, c, d, b)
        }
      }
      function Nj (a, c, b, d, e, f) {
        var g
        void 0 === e && (e = 0)
        void 0 === f && (f = 0)
        var h = y({ ja: [] }, d.Y),
          k = c[f],
          l = k[0]
        k = k[1]
        var m = b[e]
        ;(h.Ta && h.Ta['Content-Type']) ||
          !h.ea ||
          ((h.Ta = y(
            {},
            h.Ta,
            ((g = {}),
            (g['Content-Type'] = 'application/x-www-form-urlencoded'),
            g)
          )),
          (h.ea = 'site-info=' + ge(h.ea)))
        h.lc = h.ea ? 'POST' : 'GET'
        h.kb = Bq(a, d, l)
        h.ta = (d.ia || {}).ta
        h.ja.push(l)
        y(d.Y, h)
        g = '' + m + (d.Sa && d.Sa.Yi ? '/1' : '')
        var p = 0
        p = Cq(a, g, h)
        return k(g, h)
          .then(function (q) {
            var r = p,
              t,
              v
            nb(
              a,
              ((t = {}),
              (t.name = 'requestSuccess'),
              (t.data = ((v = {}), (v.body = q), (v.requestId = r), v)),
              t)
            )
            return { fd: q, Og: e }
          })
          ['catch'](function (q) {
            var r = p,
              t,
              v
            nb(
              a,
              ((t = {}),
              (t.name = 'requestFail'),
              (t.data = ((v = {}), (v.error = q), (v.requestId = r), v)),
              t)
            )
            r = f + 1 >= c.length
            t = e + 1 >= b.length
            r && t && Ta(q)
            return Nj(a, c, b, d, !t && r ? e + 1 : e, r ? 0 : f + 1)
          })
      }
      function Bq (a, c, b) {
        var d = y({}, c.G)
        a = fa(a)
        c.H && (d['browser-info'] = Ea(c.H.l()).C('st', a(jg)).Da())
        !d.t && (c = c.La) && (c.C('ti', b), (d.t = c.Da()))
        return d
      }
      function Cq (a, c, b) {
        var d,
          e,
          f,
          g = Wa(a),
          h = b.ja,
          k = b.ea,
          l = b.Ta,
          m = b.kb
        b = b.lc
        nb(
          a,
          ((d = {}),
          (d.name = 'request'),
          (d.data =
            ((e = {}),
            (e.url = c),
            (e.requestId = g),
            (e.senderParams =
              ((f = {}),
              (f.rBody = k),
              (f.debugStack = h),
              (f.rHeaders = l),
              (f.rQuery = m),
              (f.verb = b),
              f)),
            e)),
          d)
        )
        return g
      }
      function Lc (a) {
        return a
          ? u(
              pa,
              xd(function (c, b) {
                var d = b[0],
                  e = b[1]
                X(e) || ma(e) || c.push(d + '=' + ge(e))
                return c
              }, []),
              qd('&')
            )(a)
          : ''
      }
      function Dq (a) {
        return a
          ? u(
              hb(function (c) {
                c = c.split('=')
                var b = c[1]
                return [c[0], ma(b) ? void 0 : xj(b)]
              }),
              xd(function (c, b) {
                c[b[0]] = b[1]
                return c
              }, {})
            )(a.split('&'))
          : {}
      }
      function xj (a) {
        var c = ''
        try {
          c = decodeURIComponent(a)
        } catch (b) {}
        return c
      }
      function ge (a) {
        try {
          return encodeURIComponent(a)
        } catch (c) {}
        a = I(
          '',
          Z(function (c) {
            return 55296 >= c.charCodeAt(0)
          }, a.split(''))
        )
        return encodeURIComponent(a)
      }
      function Of (a, c, b) {
        return A(u(xc, Pc([a, b]), ha), Oj[c] || [])
      }
      function Pj (a, c, b, d) {
        a[c] || (a[c] = [])
        b && !ma(d) && Qj(a[c], b, d)
      }
      function Qj (a, c, b) {
        for (var d = [c, b], e = -1e4, f = 0; f < a.length; f += 1) {
          var g = a[f],
            h = g[0]
          g = g[1]
          if (b === g && h === c) return
          if (b < g && b >= e) {
            a.splice(f, 0, d)
            return
          }
          e = g
        }
        a.push(d)
      }
      function fc (a) {
        z(function (c) {
          var b = c[1]
          ff[c[0]] = { ga: b.ga, fb: b.fb }
        }, pa(a))
      }
      function Mj (a, c, b) {
        void 0 === b && (b = !1)
        return new J(function (d, e) {
          function f (k, l) {
            l()
            d()
          }
          var g = a.slice()
          g.push({ Z: f, Fa: f })
          var h = kc(g, function (k, l) {
            var m = b ? k.Z : k.Fa
            if (m)
              try {
                m(c, l)
              } catch (p) {
                h(Eq), e(p)
              }
            else l()
          })
          h(Rj)
        })
      }
      function Jb (a, c, b) {
        var d = b || 'as'
        if (a.postMessage && !a.attachEvent) {
          b = ia(a)
          var e = '__ym__promise_' + Wa(a) + '_' + Wa(a),
            f = B
          d = D(a, d, function (g) {
            try {
              var h = g.data
            } catch (k) {
              return
            }
            h === e && (f(), g.stopPropagation && g.stopPropagation(), c())
          })
          f = b.D(a, ['message'], d)
          a.postMessage(e, '*')
        } else W(a, c, 0, d)
      }
      function th (a, c, b, d, e) {
        void 0 === d && (d = 1)
        void 0 === e && (e = 'itc')
        c = kc(c, b)
        lc(a, c, d)(Ua(D(a, e), B))
      }
      function lc (a, c, b, d) {
        void 0 === b && (b = 1)
        void 0 === d && (d = Sj)
        xg = Infinity === b
        return Aa(function (e, f) {
          function g () {
            try {
              var k = c(d(a, b))
              h = h.concat(k)
            } catch (l) {
              return e(l)
            }
            c(Fq)
            if (c(Jd)) return f(h), Tj(a)
            xg ? (c(d(a, 1e4)), f(h), Tj(a)) : W(a, g, 100)
          }
          var h = []
          Gq(g)
        })
      }
      function Tj (a) {
        if (yg.length) {
          var c = yg.shift()
          xg ? c() : W(a, c, 100)
        } else zg = !1
      }
      function Gq (a) {
        zg ? yg.push(a) : ((zg = !0), a())
      }
      function xf (a) {
        return Aa(function (c, b) {
          b(a)
        })
      }
      function Lo (a) {
        return Aa(function (c, b) {
          a.then(b, c)
        })
      }
      function Hq (a) {
        var c = [],
          b = 0
        return Aa(function (d, e) {
          z(function (f, g) {
            f(
              Ua(d, function (h) {
                try {
                  ;(c[g] = h), (b += 1), b === a.length && e(c)
                } catch (k) {
                  d(k)
                }
              })
            )
          }, a)
        })
      }
      function Ko (a) {
        var c = [],
          b = !1
        return Aa(function (d, e) {
          function f (g) {
            c.push(g) === a.length && d(c)
          }
          z(function (g) {
            g(
              Ua(f, function (h) {
                if (!b)
                  try {
                    e(h), (b = !0)
                  } catch (k) {
                    f(k)
                  }
              })
            )
          }, a)
        })
      }
      function Ua (a, c) {
        return function (b) {
          return b(a, c)
        }
      }
      function kc (a, c) {
        void 0 === c && (c = O)
        return Aa({ cb: a, de: c, Pe: !1, za: 0 })
      }
      function Rj (a) {
        function c () {
          function d () {
            b = !0
            a.za += 1
          }
          b = !1
          a.de(a.cb[a.za], function () {
            d()
          })
          b || ((a.za += 1), (d = w(a, Rj)))
        }
        for (var b = !0; !Jd(a) && b; ) c()
      }
      function Sj (a, c) {
        return function (b) {
          var d = fa(a),
            e = d(aa)
          return Uj(function (f, g) {
            d(aa) - e >= c && g(Vj)
          })(b)
        }
      }
      function Le (a, c) {
        return function (b) {
          var d = fa(a),
            e = d(aa)
          return Me(function (f) {
            d(aa) - e >= c && Vj(f)
          })(b)
        }
      }
      function Me (a) {
        return function (c) {
          for (var b; c.cb.length && !Jd(c); )
            (b = c.cb.pop()), (b = c.de(b, c.cb)), a(c)
          return b
        }
      }
      function Iq (a) {
        Jd(a) && Ta(jc('i'))
        var c = a.de(a.cb[a.za])
        a.za += 1
        return c
      }
      function Fq (a) {
        a.Pe = !1
      }
      function Vj (a) {
        a.Pe = !0
      }
      function Eq (a) {
        a.za = a.cb.length
      }
      function Jd (a) {
        return a.Pe || a.cb.length <= a.za
      }
      function ub (a) {
        a = fa(a)
        return Math.round(a(Ag) / 50)
      }
      function Ag (a) {
        var c = a.Ca,
          b = c[1]
        a = c[0] && b ? b() : aa(a) - a.Di
        return Math.round(a)
      }
      function jg (a) {
        return Math.round(aa(a) / 1e3)
      }
      function kb (a) {
        return Math.floor(aa(a) / 1e3 / 60)
      }
      function aa (a) {
        var c = a.Xe
        return 0 !== c ? c : Bg(a.l, a.Ca)
      }
      function eg (a) {
        var c = ia(a),
          b = Wj(a),
          d = { l: a, Xe: 0, Ca: b, Di: Bg(a, b) },
          e = b[1]
        ;(b[0] && e) ||
          c.D(a, ['beforeunload', 'unload'], function () {
            0 === d.Xe && (d.Xe = Bg(a, d.Ca))
          })
        return Aa(d)
      }
      function Jq (a) {
        return (10 > a ? '0' : '') + a
      }
      function Ei (a, c, b) {
        function d () {
          f = 0
          g && ((g = !1), (f = W(a, d, b)), e.O(h))
        }
        var e = wd(a),
          f,
          g = !1,
          h
        c.D(function (k) {
          g = !0
          h = k
          f || d()
          return B
        })
        return e
      }
      function Kq (a, c) {
        return a.clearInterval(c)
      }
      function Lq (a, c, b, d) {
        return a.setInterval(D(a, 'i.err.' + (d || 'def'), c), b)
      }
      function W (a, c, b, d) {
        return Fd(a, D(a, 'd.err.' + (d || 'def'), c), b)
      }
      function id (a) {
        var c = {}
        return {
          D: function (b, d) {
            z(function (e) {
              n(c, e) || (c[e] = wd(a))
              c[e].D(d)
            }, b)
            return this
          },
          oa: function (b, d) {
            z(function (e) {
              n(c, e) && c[e].oa(d)
            }, b)
            return this
          },
          O: function (b, d) {
            return n(c, b) ? D(a, 'e.' + d, c[b].O)(d) : []
          }
        }
      }
      function wd (a) {
        var c = [],
          b = {}
        b.Ck = c
        b.D = u(qa('push', c), w(b, O))
        b.oa = u(Ib(Nb(a))(c), Ib(qa('splice', c))(1), w(b, O))
        b.O = u(O, Ib(ha), Mq(c))
        return b
      }
      function Xj (a, c, b, d, e) {
        var f = a.addEventListener && a.removeEventListener,
          g = !f && a.attachEvent && a.detachEvent
        if (f || g)
          if (
            ((e = e
              ? f
                ? 'removeEventListener'
                : 'detachEvent'
              : f
              ? 'addEventListener'
              : 'attachEvent'),
            f)
          )
            a[e](c, b, d)
          else a[e]('on' + c, b)
      }
      function C (a, c, b) {
        return function () {
          return D(arguments[0], a, c, b).apply(this, arguments)
        }
      }
      function D (a, c, b, d, e) {
        var f = Ta,
          g = b || f
        return function () {
          var h = d
          try {
            h = g.apply(e || null, arguments)
          } catch (k) {
            pe(a, c, k)
          }
          return h
        }
      }
      function Bg (a, c) {
        var b = c || Wj(a),
          d = b[0]
        b = b[1]
        return !isNaN(d) && T(b)
          ? Math.round(b() + d)
          : a.Date.now
          ? a.Date.now()
          : new a.Date().getTime()
      }
      function Wj (a) {
        a = Qf(a)
        var c = n(a, 'timing.navigationStart'),
          b = n(a, 'now')
        b && (b = G(b, a))
        return [c, b]
      }
      function Qf (a) {
        return n(a, 'performance') || n(a, 'webkitPerformance')
      }
      function pe (a, c, b) {
        var d = 'u.a.e',
          e = ''
        b &&
          ('object' === typeof b
            ? (b.unk && Ta(b),
              (d = b.message),
              (e =
                ('string' === typeof b.stack &&
                  b.stack.replace(/\n/g, '\\n')) ||
                'n.s.e.s'))
            : (d = '' + b))
        Nq(d) ||
          Ja(u(qa('indexOf', d), ka(-1), Sb), Oq) ||
          (Pq(d) && 0.1 <= a.Math.random()) ||
          z(u(O, Pc(['jserrs', d, c, e]), ha), Yj)
      }
      function Xd () {
        var a = Da(arguments)
        return Ta(Sa(a))
      }
      function Sa (a) {
        var c = ''
        ca(a) ? (c = I('.', a)) : xa(a) && (c = a)
        return jc('err.kn(' + ta.pb + ')' + c)
      }
      function mj (a) {
        return jc(
          'http.' +
            a.status +
            '.st.' +
            a.statusText +
            '.rt.' +
            ('' + a.responseText).substring(0, 50)
        )
      }
      function Qq (a) {
        this.message = a
      }
      function nb (a, c) {
        var b = c.va
        if (b) {
          var d = b.split(':')
          b = d[1]
          d = Zj(Hh(d[0]))
          if ('1' === b || d) return
        }
        b = Rq(a)
        1e3 === b.length && b.shift()
        b.push(c)
      }
      function Hl (a, c, b, d, e) {
        var f = 'object' === typeof a ? a : { id: a, $: d, wc: e, da: b }
        a = M(
          function (g, h) {
            var k = h[1],
              l = k.fb
            k = f[k.ga]
            g[h[0]] = l ? l(k) : k
            return g
          },
          {},
          pa(c)
        )
        dj(a, a.da || {})
        return a
      }
      function Sq (a, c) {
        return M(
          function (b, d) {
            b[c[d[0]].ga] = d[1]
            return b
          },
          {},
          pa(a)
        )
      }
      function Tq (a) {
        a = N(a)
        return (gc[a] && gc[a].Mj) || null
      }
      function ak (a) {
        a = N(a)
        return gc[a] && gc[a].Lj
      }
      function dj (a, c) {
        var b = N(a),
          d = n(c, '__ym.turbo_page'),
          e = n(c, '__ym.turbo_page_id')
        gc[b] || (gc[b] = {})
        if (d || e) (gc[b].Lj = d), (gc[b].Mj = e)
      }
      function bk (a) {
        return (
          Ne(a) || od(a) || /mobile/i.test(gb(a)) || !X(n(a, 'orientation'))
        )
      }
      function of (a, c) {
        if (Kd(a) && c) {
          var b = gb(a).match(Cg)
          if (b && b.length) return +b[1] >= c
        }
        return !1
      }
      function pf (a, c) {
        var b = gb(a)
        return b && (b = b.match(Uq)) && 1 < b.length ? Ga(b[1]) >= c : !1
      }
      function vg (a) {
        return K(
          'prerender',
          A(w(n(a, 'document'), n), [
            'webkitVisibilityState',
            'visibilityState'
          ])
        )
      }
      function Wa (a, c, b) {
        var d = X(b)
        X(c) && d
          ? ((d = 1), (c = 1073741824))
          : d
          ? (d = 1)
          : ((d = c), (c = b))
        return a.Math.floor(a.Math.random() * (c - d)) + d
      }
      function Vq () {
        var a = Da(arguments),
          c = a[0]
        for (a = a.slice(1); a.length; ) {
          var b = a.shift(),
            d
          for (d in b) zd(b, d) && (c[d] = b[d])
          zd(b, 'toString') && (c.toString = b.toString)
        }
        return c
      }
      function ck (a) {
        return X(a)
          ? []
          : Ld(
              function (c, b) {
                c.push([b, a[b]])
                return c
              },
              [],
              dk(a)
            )
      }
      function dk (a) {
        var c = [],
          b
        for (b in a) zd(a, b) && c.push(b)
        return c
      }
      function Hh (a) {
        try {
          return parseInt(a, 10)
        } catch (c) {
          return null
        }
      }
      function re (a, c) {
        return a.isFinite(c) && !a.isNaN(c) && '[object Number]' === Dg(c)
      }
      function Wq (a) {
        for (var c = [], b = a.length - 1; 0 <= b; --b)
          c[a.length - 1 - b] = a[b]
        return c
      }
      function Oa (a, c) {
        z(u(O, qa('push', a)), c)
        return a
      }
      function Eg (a, c) {
        return Array.prototype.sort.call(c, a)
      }
      function Dd (a) {
        return a.splice(0, a.length)
      }
      function za (a) {
        return a
          ? ca(a)
            ? a
            : Oe
            ? Oe(a)
            : 'number' === typeof a.length && 0 <= a.length
            ? ek(a)
            : []
          : []
      }
      function Pe (a, c, b) {
        return b ? a : c
      }
      function Xq (a, c) {
        return Ld(
          function (b, d, e) {
            d = a(d, e)
            return b.concat(ca(d) ? d : [d])
          },
          [],
          c
        )
      }
      function fk (a, c) {
        return Ld(
          function (b, d, e) {
            b.push(a(d, e))
            return b
          },
          [],
          c
        )
      }
      function Yq (a, c) {
        if (!Kd(a)) return !0
        try {
          c.call({ 0: !0, length: -Math.pow(2, 32) + 1 }, function () {
            throw 1
          })
        } catch (b) {
          return !1
        }
        return !0
      }
      function ca (a) {
        if (Md) return Md(a)
        ;(Md = Ma(Array.isArray, 'isArray')) || (Md = Zq)
        return Md(a)
      }
      function $q (a, c) {
        for (var b = '', d = 0; d < c.length; d += 1)
          b += '' + (d ? a : '') + c[d]
        return b
      }
      function ar (a, c) {
        return 1 <= gk(ka(a), c).length
      }
      function br (a, c) {
        for (var b = 0; b < c.length; b += 1)
          if (a.call(c, c[b], b)) return c[b]
      }
      function gk (a, c) {
        return Ld(
          function (b, d, e) {
            a(d, e) && b.push(d)
            return b
          },
          [],
          c
        )
      }
      function $f (a, c, b) {
        try {
          if (T(c)) {
            var d = Da(arguments).slice(3)
            ma(b) ? c.apply(void 0, d) : G.apply(void 0, ya([c, b], d))()
          }
        } catch (e) {
          Fd(a, w(e, Ta), 0)
        }
      }
      function Ta (a) {
        throw a
      }
      function Fd (a, c, b) {
        return ec('setTimeout', a)(c, b)
      }
      function na (a, c) {
        return ec('clearTimeout', a)(c)
      }
      function vd () {
        return []
      }
      function Ac () {
        return {}
      }
      function ec (a, c) {
        var b = n(c, a),
          d = n(c, 'constructor.prototype.' + a) || b
        try {
          if (d && d.apply)
            return function () {
              return d.apply(c, arguments)
            }
        } catch (e) {
          return b
        }
        return d
      }
      function pb (a, c, b) {
        return function () {
          var d = Da(arguments),
            e = d[0]
          d = d.slice(1)
          var f = H(e),
            g = b ? 'global' : 'm1074',
            h = f.o(g, {}),
            k = n(h, a)
          k || ((k = x(c)), (h[a] = k), f.C(g, h))
          return k.apply(void 0, ya([e], d))
        }
      }
      function Gc (a, c) {
        void 0 === c && (c = {})
        if (!a || 1 > a.length) return c
        M(
          function (b, d, e) {
            if (e === a.length - 1) return b
            e === a.length - 2 ? (b[d] = a[e + 1]) : b[d] || (b[d] = {})
            return b[d]
          },
          c,
          a
        )
        return c
      }
      function n (a, c) {
        return a
          ? M(
              function (b, d) {
                if (ma(b)) return b
                try {
                  return b[d]
                } catch (e) {}
                return null
              },
              a,
              c.split('.')
            )
          : null
      }
      function Nd (a) {
        a = a.Ya = a.Ya || {}
        var c = (a._metrika = a._metrika || {})
        return {
          Va: function (b, d) {
            Fg.call(c, b) || (c[b] = d)
            return this
          },
          C: function (b, d) {
            c[b] = d
            return this
          },
          o: function (b, d) {
            var e = c[b]
            return Fg.call(c, b) || X(d) ? e : d
          }
        }
      }
      function zd (a, c) {
        return ma(a) ? !1 : Fg.call(a, c)
      }
      function x (a, c) {
        var b = [],
          d = []
        var e = c ? c : O
        return function () {
          var f = Da(arguments),
            g = e.apply(void 0, f),
            h = hk(g, d)
          if (-1 !== h) return b[h]
          f = a.apply(void 0, f)
          b.push(f)
          d.push(g)
          return f
        }
      }
      function Nb (a) {
        if (Gg) return Gg
        var c = !1
        try {
          c = [].indexOf && 0 === [void 0].indexOf(void 0)
        } catch (d) {}
        var b =
          a.Array &&
          a.Array.prototype &&
          Ma(a.Array.prototype.indexOf, 'indexOf')
        return (Gg = a =
          c && b
            ? function (d, e) {
                return b.call(e, d)
              }
            : cr)
      }
      function cr (a, c) {
        for (var b = 0; b < c.length; b += 1) if (c[b] === a) return b
        return -1
      }
      function ha (a, c) {
        return c ? a(c) : a()
      }
      function u () {
        var a = Da(arguments),
          c = a.shift()
        return function () {
          var b = c.apply(void 0, arguments)
          return M(ik, b, a)
        }
      }
      function xd (a, c) {
        return E([a, c], M)
      }
      function Ld (a, c, b) {
        for (var d = 0, e = b.length; d < e; ) (c = a(c, b[d], d)), (d += 1)
        return c
      }
      function Ya (a) {
        return qa('test', a)
      }
      function qa (a, c) {
        return G(c[a], c)
      }
      function w (a, c) {
        return G(c, null, a)
      }
      function E (a, c) {
        return G.apply(void 0, ya([c, null], a))
      }
      function dr () {
        var a = Da(arguments),
          c = a[0],
          b = a[1],
          d = a.slice(2)
        return function () {
          var e = ya(d, Da(arguments))
          if (Function.prototype.call)
            return Function.prototype.call.apply(c, ya([b], e))
          if (b) {
            for (var f = '_b'; b[f]; ) f += '_' + f.length
            b[f] = c
            e = b[f] && jk(f, e, b)
            delete b[f]
            return e
          }
          return jk(c, e)
        }
      }
      function jk (a, c, b) {
        void 0 === c && (c = [])
        b = b || {}
        var d = c.length,
          e = a
        T(e) && ((e = 'd'), (b[e] = a))
        var f
        d
          ? 1 === d
            ? (f = b[e](c[0]))
            : 2 === d
            ? (f = b[e](c[0], c[1]))
            : 3 === d
            ? (f = b[e](c[0], c[1], c[2]))
            : 4 === d && (f = b[e](c[0], c[1], c[2], c[3]))
          : (f = b[e]())
        return f
      }
      function Da (a) {
        if (Oe)
          try {
            return Oe(a)
          } catch (c) {}
        return ek(a)
      }
      function ek (a) {
        for (var c = a.length, b = [], d = 0; d < c; d += 1) b.push(a[d])
        return b
      }
      function La (a) {
        return !Va(a) && !X(a) && '[object Object]' === Dg(a)
      }
      function ma (a) {
        return X(a) || Va(a)
      }
      function T (a) {
        return 'function' === typeof a
      }
      function Ib (a) {
        return function (c) {
          return function (b) {
            return a(b, c)
          }
        }
      }
      function la (a) {
        return function (c) {
          return function (b) {
            return a(c, b)
          }
        }
      }
      function ik (a, c) {
        return c(a)
      }
      function Ip (a) {
        return a
          .replace(/\^/g, '\\^')
          .replace(/\$/g, '\\$')
          .replace(cg, '\\.')
          .replace(/\[/g, '\\[')
          .replace(/\]/g, '\\]')
          .replace(/\|/g, '\\|')
          .replace(/\(/g, '\\(')
          .replace(/\)/g, '\\)')
          .replace(/\?/g, '\\?')
          .replace(/\*/g, '\\*')
          .replace(/\+/g, '\\+')
          .replace(/\{/g, '\\{')
          .replace(/\}/g, '\\}')
      }
      function er (a) {
        return '' + a
      }
      function Fc (a, c) {
        return !(!a || -1 === ie(a, c))
      }
      function ie (a, c) {
        if (kk) var b = kk.call(a, c)
        else
          a: {
            b = 0
            for (var d = a.length - c.length, e = 0; e < a.length; e += 1) {
              b = a[e] === c[b] ? b + 1 : 0
              if (b === c.length) {
                b = e - c.length + 1
                break a
              }
              if (!b && e > d) break
            }
            b = -1
          }
        return b
      }
      function xa (a) {
        return 'string' === typeof a
      }
      function Dg (a) {
        return Object.prototype.toString.call(a)
      }
      function Hg (a, c) {
        Hg =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (b, d) {
              b.__proto__ = d
            }) ||
          function (b, d) {
            for (var e in d) d.hasOwnProperty(e) && (b[e] = d[e])
          }
        return Hg(a, c)
      }
      function Ma (a, c) {
        return Ca(c, a) && a
      }
      function Ca (a, c) {
        var b = Qe(a, c)
        c && !b && Ig.push([a, c])
        return b
      }
      function Qe (a, c) {
        if (!c || 'function' !== typeof c) return !1
        try {
          var b = '' + c
        } catch (h) {
          return !1
        }
        var d = b.length
        if (d > 35 + a.length) return !1
        for (var e = d - 13, f = 0, g = 8; g < d; g += 1) {
          f =
            '[native code]'[f] === b[g] || (7 === f && '-' === b[g]) ? f + 1 : 0
          if (12 === f) return !0
          if (!f && g > e) break
        }
        return !1
      }
      function B () {}
      function Sb (a) {
        return !a
      }
      function zb (a, c) {
        return c
      }
      function O (a) {
        return a
      }
      function Ka (a, c) {
        function b () {
          this.constructor = a
        }
        Hg(a, c)
        a.prototype =
          null === c ? Object.create(c) : ((b.prototype = c.prototype), new b())
      }
      function ya () {
        for (var a = 0, c = 0, b = arguments.length; c < b; c++)
          a += arguments[c].length
        a = Array(a)
        var d = 0
        for (c = 0; c < b; c++)
          for (var e = arguments[c], f = 0, g = e.length; f < g; f++, d++)
            a[d] = e[f]
        return a
      }
      function fr () {}
      function gr (a, c) {
        return function () {
          a.apply(c, arguments)
        }
      }
      function Fa (a) {
        if (!(this instanceof Fa))
          throw new TypeError('Promises must be constructed via new')
        if ('function' !== typeof a) throw new TypeError('not a function')
        this.Na = 0
        this.bf = !1
        this.Za = void 0
        this.Mb = []
        lk(a, this)
      }
      function mk (a, c) {
        for (; 3 === a.Na; ) a = a.Za
        0 === a.Na
          ? a.Mb.push(c)
          : ((a.bf = !0),
            Fa.cf(function () {
              var b = 1 === a.Na ? c.cj : c.gj
              if (null === b) (1 === a.Na ? Jg : Od)(c.jb, a.Za)
              else {
                try {
                  var d = b(a.Za)
                } catch (e) {
                  Od(c.jb, e)
                  return
                }
                Jg(c.jb, d)
              }
            }))
      }
      function Jg (a, c) {
        try {
          if (c === a)
            throw new TypeError('A promise cannot be resolved with itself.')
          if (c && ('object' === typeof c || 'function' === typeof c)) {
            var b = c.then
            if (c instanceof Fa) {
              a.Na = 3
              a.Za = c
              Kg(a)
              return
            }
            if ('function' === typeof b) {
              lk(gr(b, c), a)
              return
            }
          }
          a.Na = 1
          a.Za = c
          Kg(a)
        } catch (d) {
          Od(a, d)
        }
      }
      function Od (a, c) {
        a.Na = 2
        a.Za = c
        Kg(a)
      }
      function Kg (a) {
        2 === a.Na &&
          0 === a.Mb.length &&
          Fa.cf(function () {
            a.bf || Fa.fh(a.Za)
          })
        for (var c = 0, b = a.Mb.length; c < b; c++) mk(a, a.Mb[c])
        a.Mb = null
      }
      function hr (a, c, b) {
        this.cj = 'function' === typeof a ? a : null
        this.gj = 'function' === typeof c ? c : null
        this.jb = b
      }
      function lk (a, c) {
        var b = !1
        try {
          a(
            function (d) {
              b || ((b = !0), Jg(c, d))
            },
            function (d) {
              b || ((b = !0), Od(c, d))
            }
          )
        } catch (d) {
          b || ((b = !0), Od(c, d))
        }
      }
      function nn (a) {
        for (var c = a.length, b = 0, d = 255, e = 255, f, g, h; c; ) {
          f = 21 < c ? 21 : c
          c -= f
          do
            (g = 'string' === typeof a ? a.charCodeAt(b) : a[b]),
              (b += 1),
              255 < g && ((h = g >> 8), (g &= 255), (g ^= h)),
              (d += g),
              (e += d)
          while (--f)
          d = (d & 255) + (d >> 8)
          e = (e & 255) + (e >> 8)
        }
        a = (((d & 255) + (d >> 8)) << 8) | ((e & 255) + (e >> 8))
        return 65535 === a ? 0 : a
      }
      function tb (a, c) {
        if (!c) return null
        try {
          return a.JSON.parse(c)
        } catch (b) {
          return null
        }
      }
      function pc (a) {
        a = '' + a
        for (var c = 2166136261, b = a.length, d = 0; d < b; d += 1)
          (c ^= a.charCodeAt(d)),
            (c += (c << 1) + (c << 4) + (c << 7) + (c << 8) + (c << 24))
        return c >>> 0
      }
      function vj (a, c, b, d, e) {
        void 0 === e && (e = !1)
        return kg(a, c, '', -100, b, d, e)
      }
      function Dc (a, c, b) {
        void 0 === c && (c = '_ym_')
        void 0 === b && (b = '')
        var d = ir(a),
          e = 1 === (d || '').split('.').length ? d : '.' + d,
          f = b ? '_' + b : ''
        return {
          Sb: function (g, h, k) {
            vj(a, '' + c + g + f, h || e, k)
            return this
          },
          o: function (g) {
            return ke(a, '' + c + g + f)
          },
          C: function (g, h, k, l, m) {
            kg(a, '' + c + g + f, h, k, l || e, m)
            return this
          }
        }
      }
      function Il (a, c, b, d) {
        var e = nk[b]
        return e
          ? function () {
              var f = Da(arguments)
              try {
                var g = d.apply(void 0, f)
                var h = H(a)
                h.Va('mt', {})
                var k = h.o('mt'),
                  l = k[e]
                k[e] = l ? l + 1 : 1
              } catch (m) {
                Ta(m)
              }
              return g
            }
          : d
      }
      function Hc (a, c) {
        var b = jr(a)
        return b
          ? ((b.href = c),
            {
              protocol: b.protocol,
              host: b.host,
              port: b.port,
              hostname: b.hostname,
              hash: b.hash,
              search: b.search,
              query: b.search.replace(/^\?/, ''),
              pathname: b.pathname || '/',
              path: (b.pathname || '/') + b.search,
              href: b.href
            })
          : {}
      }
      function ok (a) {
        return (a = S(a).hash.split('#')[1]) ? a.split('?')[0] : ''
      }
      function kr (a, c) {
        var b = ok(a)
        pk = Lq(
          a,
          function () {
            var d = ok(a)
            d !== b && (c(), (b = d))
          },
          200,
          't.h'
        )
        return G(Kq, null, a, pk)
      }
      function lr (a, c, b) {
        var d,
          e,
          f = c.$,
          g = c.Ze,
          h = c.Hc,
          k = H(a),
          l = Ea(((d = {}), (d.wh = 1), (d.pv = 1), d))
        Zd(f) && a.Ya && a.Ya.Direct && l.C('ad', '1')
        g && l.C('ut', '1')
        f = k.o('lastReferrer')
        d = S(a).href
        h = {
          G: ((e = {}), (e['page-url'] = h || d), (e['page-ref'] = f), e),
          H: l
        }
        b(h, c)['catch'](D(a, 'g.s'))
        k.C('lastReferrer', d)
      }
      function mr (a, c, b) {
        function d () {
          na(a, h)
          g(!1)
        }
        function e () {
          k = !0
          g(!1)
          c()
        }
        function f () {
          na(a, h)
          if (k) g(!1)
          else {
            var Y = Math.max(0, b - (q ? r : r + l(aa) - t))
            Y ? (h = W(a, e, Y, 'u.t.d.c')) : e()
          }
        }
        function g (Y) {
          z(function (Q) {
            var oa = Q[0],
              ua = Q[1]
            Q = Q[2]
            Y ? v.D(oa, ua, Q) : v.kc(oa, ua, Q)
          }, F)
        }
        var h = 0,
          k = !1
        if (sg(a)) return (h = W(a, c, b, 'u.t.d')), d
        var l = fa(a),
          m = !1,
          p = !1,
          q = !0,
          r = 0,
          t = l(aa),
          v = ia(a),
          F = [
            [
              a,
              ['blur'],
              function () {
                q = m = p = !0
                r += l(aa) - t
                t = l(aa)
                f()
              }
            ],
            [
              a,
              ['focus'],
              function () {
                m || p || (r = 0)
                t = l(aa)
                m = p = !0
                q = !1
                f()
              }
            ],
            [
              a.document,
              ['click', 'mousemove', 'keydown', 'scroll'],
              function () {
                p || ((m = !0), (q = !1), (p = !0), f())
              }
            ]
          ]
        g(!0)
        f()
        return d
      }
      function ef (a, c, b, d) {
        return function () {
          if (Ha(a, c)) {
            var e = Da(arguments)
            return d.apply(void 0, e)
          }
        }
      }
      function qb (a, c) {
        a = [a[0] >>> 16, a[0] & 65535, a[1] >>> 16, a[1] & 65535]
        c = [c[0] >>> 16, c[0] & 65535, c[1] >>> 16, c[1] & 65535]
        var b = [0, 0, 0, 0]
        b[3] += a[3] * c[3]
        b[2] += b[3] >>> 16
        b[3] &= 65535
        b[2] += a[2] * c[3]
        b[1] += b[2] >>> 16
        b[2] &= 65535
        b[2] += a[3] * c[2]
        b[1] += b[2] >>> 16
        b[2] &= 65535
        b[1] += a[1] * c[3]
        b[0] += b[1] >>> 16
        b[1] &= 65535
        b[1] += a[2] * c[2]
        b[0] += b[1] >>> 16
        b[1] &= 65535
        b[1] += a[3] * c[1]
        b[0] += b[1] >>> 16
        b[1] &= 65535
        b[0] += a[0] * c[3] + a[1] * c[2] + a[2] * c[1] + a[3] * c[0]
        b[0] &= 65535
        return [(b[0] << 16) | b[1], (b[2] << 16) | b[3]]
      }
      function hc (a, c) {
        a = [a[0] >>> 16, a[0] & 65535, a[1] >>> 16, a[1] & 65535]
        c = [c[0] >>> 16, c[0] & 65535, c[1] >>> 16, c[1] & 65535]
        var b = [0, 0, 0, 0]
        b[3] += a[3] + c[3]
        b[2] += b[3] >>> 16
        b[3] &= 65535
        b[2] += a[2] + c[2]
        b[1] += b[2] >>> 16
        b[2] &= 65535
        b[1] += a[1] + c[1]
        b[0] += b[1] >>> 16
        b[1] &= 65535
        b[0] += a[0] + c[0]
        b[0] &= 65535
        return [(b[0] << 16) | b[1], (b[2] << 16) | b[3]]
      }
      function Sc (a, c) {
        c %= 64
        if (32 === c) return [a[1], a[0]]
        if (32 > c)
          return [
            (a[0] << c) | (a[1] >>> (32 - c)),
            (a[1] << c) | (a[0] >>> (32 - c))
          ]
        c -= 32
        return [
          (a[1] << c) | (a[0] >>> (32 - c)),
          (a[0] << c) | (a[1] >>> (32 - c))
        ]
      }
      function ib (a, c) {
        c %= 64
        return 0 === c
          ? a
          : 32 > c
          ? [(a[0] << c) | (a[1] >>> (32 - c)), a[1] << c]
          : [a[1] << (c - 32), 0]
      }
      function va (a, c) {
        return [a[0] ^ c[0], a[1] ^ c[1]]
      }
      function qk (a) {
        a = va(a, [0, a[0] >>> 1])
        a = qb(a, [4283543511, 3981806797])
        a = va(a, [0, a[0] >>> 1])
        a = qb(a, [3301882366, 444984403])
        return (a = va(a, [0, a[0] >>> 1]))
      }
      function nr (a, c) {
        void 0 === c && (c = 210)
        var b = a || '',
          d = c || 0,
          e = b.length - (b.length % 16)
        d = { R: [0, d], T: [0, d] }
        for (var f = 0; f < e; f += 16) {
          var g = d,
            h = [
              (a.charCodeAt(f + 4) & 255) |
                ((a.charCodeAt(f + 5) & 255) << 8) |
                ((a.charCodeAt(f + 6) & 255) << 16) |
                ((a.charCodeAt(f + 7) & 255) << 24),
              (a.charCodeAt(f) & 255) |
                ((a.charCodeAt(f + 1) & 255) << 8) |
                ((a.charCodeAt(f + 2) & 255) << 16) |
                ((a.charCodeAt(f + 3) & 255) << 24)
            ],
            k = [
              (a.charCodeAt(f + 12) & 255) |
                ((a.charCodeAt(f + 13) & 255) << 8) |
                ((a.charCodeAt(f + 14) & 255) << 16) |
                ((a.charCodeAt(f + 15) & 255) << 24),
              (a.charCodeAt(f + 8) & 255) |
                ((a.charCodeAt(f + 9) & 255) << 8) |
                ((a.charCodeAt(f + 10) & 255) << 16) |
                ((a.charCodeAt(f + 11) & 255) << 24)
            ]
          h = qb(h, Re)
          h = Sc(h, 31)
          h = qb(h, Se)
          g.R = va(g.R, h)
          g.R = Sc(g.R, 27)
          g.R = hc(g.R, g.T)
          g.R = hc(qb(g.R, [0, 5]), [0, 1390208809])
          k = qb(k, Se)
          k = Sc(k, 33)
          k = qb(k, Re)
          g.T = va(g.T, k)
          g.T = Sc(g.T, 31)
          g.T = hc(g.T, g.R)
          g.T = hc(qb(g.T, [0, 5]), [0, 944331445])
        }
        e = b.length % 16
        f = b.length - e
        g = [0, 0]
        h = [0, 0]
        switch (e) {
          case 15:
            h = va(h, ib([0, b.charCodeAt(f + 14)], 48))
          case 14:
            h = va(h, ib([0, b.charCodeAt(f + 13)], 40))
          case 13:
            h = va(h, ib([0, b.charCodeAt(f + 12)], 32))
          case 12:
            h = va(h, ib([0, b.charCodeAt(f + 11)], 24))
          case 11:
            h = va(h, ib([0, b.charCodeAt(f + 10)], 16))
          case 10:
            h = va(h, ib([0, b.charCodeAt(f + 9)], 8))
          case 9:
            ;(h = va(h, [0, b.charCodeAt(f + 8)])),
              (h = qb(h, Se)),
              (h = Sc(h, 33)),
              (h = qb(h, Re)),
              (d.T = va(d.T, h))
          case 8:
            g = va(g, ib([0, b.charCodeAt(f + 7)], 56))
          case 7:
            g = va(g, ib([0, b.charCodeAt(f + 6)], 48))
          case 6:
            g = va(g, ib([0, b.charCodeAt(f + 5)], 40))
          case 5:
            g = va(g, ib([0, b.charCodeAt(f + 4)], 32))
          case 4:
            g = va(g, ib([0, b.charCodeAt(f + 3)], 24))
          case 3:
            g = va(g, ib([0, b.charCodeAt(f + 2)], 16))
          case 2:
            g = va(g, ib([0, b.charCodeAt(f + 1)], 8))
          case 1:
            ;(g = va(g, [0, b.charCodeAt(f)])),
              (g = qb(g, Re)),
              (g = Sc(g, 31)),
              (g = qb(g, Se)),
              (d.R = va(d.R, g))
        }
        d.R = va(d.R, [0, b.length])
        d.T = va(d.T, [0, b.length])
        d.R = hc(d.R, d.T)
        d.T = hc(d.T, d.R)
        d.R = qk(d.R)
        d.T = qk(d.T)
        d.R = hc(d.R, d.T)
        d.T = hc(d.T, d.R)
        return (
          ('00000000' + (d.R[0] >>> 0).toString(16)).slice(-8) +
          ('00000000' + (d.R[1] >>> 0).toString(16)).slice(-8) +
          ('00000000' + (d.T[0] >>> 0).toString(16)).slice(-8) +
          ('00000000' + (d.T[1] >>> 0).toString(16)).slice(-8)
        )
      }
      function Pd (a, c, b) {
        var d = c.getAttribute('itemtype')
        b = yb('[itemprop~="' + b + '"]', c)
        return d
          ? Z(function (e) {
              return e.parentNode && dc('[itemtype]', a, e.parentNode) === c
            }, b)
          : b
      }
      function cb (a, c, b) {
        return (a = Pd(a, c, b)) && a.length ? a[0] : null
      }
      function Za (a) {
        if (!a) return ''
        a = ca(a) ? a : [a]
        return a.length ? a[0].getAttribute('content') || Qb(a[0]) : ''
      }
      function rk (a) {
        return a
          ? a.attributes && a.getAttribute('datetime')
            ? a.getAttribute('datetime')
            : Za(a)
          : ''
      }
      function ld (a, c, b) {
        a =
          c &&
          (Fc(c.className, 'ym-disable-keys') ||
            Fc(c.className, '-metrika-nokeys'))
        return b && c
          ? a || !!vq(['ym-disable-keys', '-metrika-nokeys'], c).length
          : a
      }
      function Af (a, c) {
        return He(c)
          ? 'password' === c.type ||
              (c.name && K(c.name.toLowerCase(), sk)) ||
              (c.id && K(c.id.toLowerCase(), sk))
          : !1
      }
      function tk (a, c) {
        var b = Math.max(0, Math.min(c, 65535))
        Oa(a, [b >> 8, b & 255])
      }
      function Kb (a, c) {
        Oa(a, [c & 255])
      }
      function fb (a, c, b) {
        return -1 !== Nb(a)(b, or) ? (Kb(c, b), !1) : !0
      }
      function R (a, c) {
        for (var b = Math.max(0, c | 0); 127 < b; )
          Oa(a, [(b & 127) | 128]), (b >>= 7)
        Oa(a, [b])
      }
      function Lg (a, c) {
        R(a, c.length)
        for (var b = 0; b < c.length; b += 1) R(a, c.charCodeAt(b))
      }
      function Mg (a, c) {
        var b = c
        255 < b.length && (b = b.substr(0, 255))
        a.push(b.length)
        for (var d = 0; d < b.length; d += 1) tk(a, b.charCodeAt(d))
      }
      function pr (a, c) {
        var b = []
        if (fb(a, b, 27)) return []
        R(b, c)
        return b
      }
      function qr (a, c) {
        var b = Ia(c)
        if (!b) return (c[Xa] = -1), null
        var d = +c[Xa]
        if (!isFinite(d) || 0 >= d) return null
        if (c.attributes)
          for (var e = c; e; ) {
            if (e.attributes.gk) return null
            e = e.parentElement
          }
        e = 64
        var f = Fe(a, c),
          g = f && f[Xa] ? f[Xa] : 0
        0 > g && (g = 0)
        b = (b || '').toUpperCase()
        var h = rr()[b]
        h || (e |= 2)
        var k = Dj(a, c)
        k || (e |= 4)
        var l = Ef(a, c)
        ;(f = f ? Ef(a, f) : null) &&
          l[0] === f[0] &&
          l[1] === f[1] &&
          l[2] === f[2] &&
          l[3] === f[3] &&
          (e |= 8)
        sc[d].bg = l[0] + 'x' + l[1]
        sc[d].size = l[2] + 'x' + l[3]
        c.id && 'string' === typeof c.id && (e |= 32)
        f = []
        if (fb(a, f, 1)) return null
        R(f, d)
        Kb(f, e)
        R(f, g)
        h ? Kb(f, h) : Mg(f, b)
        k && R(f, k)
        e & 8 || (R(f, l[0]), R(f, l[1]), R(f, l[2]), R(f, l[3]))
        e & 32 && Mg(f, c.id)
        Kb(f, 0)
        return f
      }
      function sr (a, c) {
        var b = c[Xa]
        if (!b || 0 > b || !Cf(c) || !c.form || ai(a, c.form)) return []
        var d = Hj(a, c.form)
        if (0 > d) return []
        if (He(c)) {
          var e = {
            text: 0,
            color: 0,
            Bc: 0,
            nk: 0,
            'datetime-local': 0,
            email: 0,
            $f: 0,
            Jk: 0,
            search: 0,
            Nk: 0,
            time: 0,
            url: 0,
            month: 0,
            Pk: 0,
            password: 2,
            Ik: 3,
            jk: 4,
            file: 6,
            image: 7
          }
          e = e[c.type]
        } else {
          e = { dk: 1, ek: 5 }
          var f = Ia(c)
          e = X(f) ? '' : e[f]
        }
        if ('number' !== typeof e) return []
        f = -1
        for (var g = c.form.elements, h = g.length, k = 0, l = 0; k < h; k += 1)
          if (g[k].name === c.name) {
            if (g[k] === c) {
              f = l
              break
            }
            l += 1
          }
        if (0 > f) return []
        g = []
        if (fb(a, g, 7)) return []
        R(g, b)
        R(g, d)
        R(g, e)
        Lg(g, c.name || '')
        R(g, f)
        return g
      }
      function tr (a, c, b) {
        var d = Hj(a, b)
        if (0 > d) return []
        var e = b.elements,
          f = e.length
        b = []
        for (var g = 0; g < f; g += 1)
          if (!Gj(e[g])) {
            var h = e[g][Xa]
            h && 0 < h && b.push(h)
          }
        e = []
        if (fb(a, e, 11)) return []
        R(e, c)
        R(e, d)
        R(e, b.length)
        for (a = 0; a < b.length; a += 1) R(e, b[a])
        return e
      }
      function rc (a, c, b) {
        void 0 === b && (b = [])
        for (var d = []; c && !tn(a, c, b); c = Fe(a, c)) d.push(c)
        z(function (e) {
          sc.Bd += 1
          var f = sc.Bd
          e[Xa] = f
          sc[f] = {}
          f = qr(a, e)
          e = sr(a, e)
          f && e && (Oa(b, f), Oa(b, e))
        }, ur(d))
        return b
      }
      function vr (a) {
        var c = a.sa
        if (!kd || (c && !c.fromElement)) return Yh(a)
      }
      function wr (a) {
        var c = a.sa
        if (c && !c.toElement) return Df(a)
      }
      function uk (a) {
        var c = zc(a.sa)
        if (c && je(c)) {
          var b = Xh(a, c)
          var d = ub(a.l),
            e = []
          fb(a.l, e, 17) ? (a = []) : (R(e, d), R(e, c[Xa]), (a = e))
          return ya(b, a)
        }
      }
      function vk (a) {
        var c = a.l,
          b = a.sa.target
        if (b && je(b)) {
          c = rc(c, b)
          var d = ub(a.l),
            e = []
          fb(a.l, e, 18) ? (a = []) : (R(e, d), R(e, b[Xa]), (a = e))
          return ya(c, a)
        }
      }
      function wk (a) {
        var c = a.l,
          b = zc(a.sa)
        if (!b || Af(c, b) || ld(c, b)) return []
        if (Cf(b)) {
          var d = H(c).o('isEU'),
            e = Jc(c, b, d),
            f = e.gb
          d = e.Bb
          e = e.ub
          if (Ie(b)) var g = b.checked
          else (g = b.value), (g = f ? I('', xk(g.split(''))) : g)
          c = rc(c, b)
          f = ub(a.l)
          d = d && !e
          e = []
          fb(a.l, e, 39)
            ? (a = [])
            : (R(e, f),
              R(e, b[Xa]),
              Mg(e, String(g)),
              Kb(e, d ? 1 : 0),
              (a = e))
          return ya(c, a)
        }
      }
      function Te (a) {
        var c = a.l,
          b = a.sa,
          d = zc(b)
        if (!d || 'SCROLLBAR' === d.nodeName) return []
        var e = [],
          f = w(e, Oa)
        d && je(d) ? f(Xh(a, d)) : f(rc(c, d))
        var g = Xi(c, b)
        a = ub(a.l)
        f = b.type
        var h = [g.x, g.y]
        g = b.which
        b = b.button
        var k
        var l = Ge(c, d)
        var m = l[0]
        for (l = l[1]; d && (!m || !l); )
          if ((d = Fe(c, d))) (l = Ge(c, d)), (m = l[0]), (l = l[1])
        d
          ? ((m = d[Xa]),
            !m || 0 > m
              ? (c = [])
              : (l = ((k = {}),
                (k.mousemove = 2),
                (k.click = 32),
                (k.dblclick = 33),
                (k.mousedown = 4),
                (k.mouseup = 30),
                (k.touch = 12),
                k)[f])
              ? ((k = []),
                (d = rg(c, d)),
                fb(c, k, l)
                  ? (c = [])
                  : (R(k, a),
                    R(k, m),
                    R(k, Math.max(0, h[0] - d.left)),
                    R(k, Math.max(0, h[1] - d.top)),
                    /^mouse(up|down)|click$/.test(f) &&
                      ((c = g || b),
                      Kb(k, 2 > c ? 1 : c === (g ? 2 : 4) ? 4 : 2)),
                    (c = k)))
              : (c = []))
          : (c = [])
        return ya(e, c)
      }
      function xr (a) {
        var c = null,
          b = a.l,
          d = b.document
        if (b.getSelection) {
          d = void 0
          try {
            d = b.getSelection()
          } catch (g) {
            return []
          }
          if (Va(d)) return []
          var e = '' + d
          c = d.anchorNode
        } else
          d.selection &&
            d.selection.createRange &&
            ((d = d.selection.createRange()),
            (e = d.text),
            (c = d.parentElement()))
        if ('string' !== typeof e) return []
        try {
          for (; c && 1 !== c.nodeType; ) c = c.parentNode
        } catch (g) {
          return []
        }
        if (!c) return []
        d = Jc(b, c).gb || ld(b, c, !0)
        c = c.getElementsByTagName('*')
        for (var f = 0; f < c.length && !d; )
          (d = c[f]), (d = Jc(b, d).gb || ld(b, d, !0)), (f += 1)
        if (e !== Ng)
          return (
            (Ng = e),
            (d = d ? I('', xk(e.split(''))) : e),
            (e = ub(a.l)),
            0 === d.length
              ? (d = b = '')
              : 100 >= d.length
              ? ((b = d), (d = ''))
              : 200 >= d.length
              ? ((b = d.substr(0, 100)), (d = d.substr(100)))
              : ((b = d.substr(0, 97)), (d = d.substr(d.length - 97))),
            (c = []),
            fb(a.l, c, 29) ? (a = []) : (R(c, e), Lg(c, b), Lg(c, d), (a = c)),
            a
          )
      }
      function yr (a) {
        return ya(Te(a), xr(a) || [])
      }
      function yk (a) {
        return (
          (a.shiftKey ? 2 : 0) |
          (a.ctrlKey ? 4 : 0) |
          (a.altKey ? 1 : 0) |
          (a.metaKey ? 8 : 0) |
          (a.ctrlKey || a.altKey ? 16 : 0)
        )
      }
      function zk (a) {
        var c = []
        Og ||
          ((Og = !0),
          Ng && c.push.apply(c, pr(a.l, ub(a.l))),
          Jb(
            a.l,
            function () {
              Og = !1
            },
            'fv.c'
          ))
        return c
      }
      function Ak (a, c, b, d) {
        c = zc(c)
        if (!c || Ff(a, c)) return []
        var e = Jc(a, c),
          f = e.Bb,
          g = e.ub
        e = e.gb
        var h = H(a)
        if (!g && ((f && h.o('isEU')) || ld(a, c))) a = []
        else {
          f = rc(a, c)
          h = ub(a)
          g = []
          if (fb(a, g, 38)) a = []
          else {
            R(g, h)
            tk(g, b)
            Kb(g, d)
            a = c[Xa]
            if (!a || 0 > a) a = 0
            R(g, a)
            Kb(g, e ? 1 : 0)
            a = g
          }
          a = ya(f, a)
        }
        return a
      }
      function zr (a) {
        var c = a.l,
          b = a.sa,
          d = b.keyCode,
          e = yk(b),
          f = [],
          g = w(f, Oa)
        if (
          {
            3: 1,
            8: 1,
            9: 1,
            13: 1,
            16: 1,
            17: 1,
            18: 1,
            19: 1,
            20: 1,
            27: 1,
            33: 1,
            34: 1,
            35: 1,
            36: 1,
            37: 1,
            38: 1,
            39: 1,
            40: 1,
            45: 1,
            46: 1,
            91: 1,
            92: 1,
            93: 1,
            106: 1,
            110: 1,
            111: 1,
            144: 1,
            145: 1
          }[d] ||
          (112 <= d && 123 >= d) ||
          (96 <= d && 105 >= d) ||
          e & 16
        )
          19 === d && 4 === (e & -17) && (d = 144),
            g(Ak(c, b, d, e | 16)),
            (Pg = !1),
            Jb(
              c,
              function () {
                Pg = !0
              },
              'fv.kd'
            ),
            !(67 === d && e & 4) || e & 1 || e & 2 || g(zk(a))
        return f
      }
      function Ar (a) {
        var c = a.l
        a = a.sa
        var b = []
        Pg &&
          !Qg &&
          0 !== a.which &&
          (b.push.apply(b, Ak(c, a, a.charCode || a.keyCode, yk(a))),
          (Qg = !0),
          Jb(
            c,
            function () {
              Qg = !1
            },
            'fv.kp'
          ))
        return b
      }
      function Bk (a) {
        var c = a.l,
          b = zc(a.sa)
        if (!b || ai(c, b)) return []
        var d = []
        if ('FORM' === b.nodeName) {
          for (var e = b.elements, f = 0; f < e.length; f += 1)
            Gj(e[f]) || d.push.apply(d, rc(c, e[f]))
          d.push.apply(d, tr(c, ub(a.l), b))
        }
        return d
      }
      function Br (a) {
        var c = a.flush
        a = zc(a.sa)
        'BODY' === Ia(a) && c()
      }
      function Lm (a, c) {
        var b,
          d = zc(c),
          e = ta.vc,
          f = Nd(a)
        if (d && Zb('ym-advanced-informer', d)) {
          var g = f.o('ifc', 0) + 1
          f.C('ifc', g)
          g = d.getAttribute('data-lang')
          var h = Ga(d.getAttribute('data-cid') || '')
          if (h || 0 === h)
            (e = n(a, 'Ya.' + e + '.informer'))
              ? e(((b = {}), (b.i = d), (b.id = h), (b.lang = g), b))
              : f.C('ib', !0),
              (b = c || window.event),
              b.preventDefault ? b.preventDefault() : (b.returnValue = !1)
        }
      }
      function sh (a, c, b, d) {
        return function () {
          var e = Da(arguments)
          e = d.apply(void 0, e)
          return X(e) ? Ha(a, c) : e
        }
      }
      function rh (a, c, b, d) {
        return D(a, 'cm.' + b, d)
      }
      function Gl (a, c, b, d, e) {
        return b.length && e
          ? E(
              M(
                function (f, g, h) {
                  return b[h] ? f.concat(E([a, c, d], g)) : f
                },
                [],
                b
              ),
              u
            )()(e)
          : e
      }
      var Tc = {
          construct: 'Metrika2',
          callbackPostfix: '2',
          version: 'ew9xzikdbvs4xc57dmj3aan',
          host: 'mc.yandex.ru'
        },
        Ig = [],
        cg = /\./g,
        kk = Ma(String.prototype.indexOf, 'indexOf'),
        ka = la(function (a, c) {
          return a === c
        }),
        gd = la(function (a, c) {
          a(c)
          return c
        }),
        Aa = la(ik),
        Va = ka(null),
        X = ka(void 0),
        Oe = Ma(Array.from, 'from'),
        Ck = Ma(Function.prototype.bind, 'bind'),
        G = Ck
          ? function () {
              var a = Da(arguments)
              return Ck.apply(a[0], ya([a[1]], a.slice(2)))
            }
          : dr,
        Pc = la(E),
        Di = la(qa),
        Dk = Ma(Array.prototype.reduce, 'reduce'),
        M = Dk
          ? function (a, c, b) {
              return Dk.call(b, a, c)
            }
          : Ld,
        nj = u,
        Si = u(O, ha),
        Gg,
        hk = Nb(window),
        Cr = Ib(hk),
        Fg = Object.prototype.hasOwnProperty,
        H = x(Nd),
        V = Ib(n),
        Pa = V('length'),
        Jf = Array.prototype.every
          ? function (a, c) {
              return Array.prototype.every.call(c, a)
            }
          : function (a, c) {
              return M(
                function (b, d) {
                  return b ? a(d) : !1
                },
                !0,
                c
              )
            },
        Ek = Ma(Array.prototype.filter, 'filter'),
        Z = Ek
          ? function (a, c) {
              return Ek.call(c, a)
            }
          : gk,
        Na = w(Boolean, Z),
        Rg = la(Z),
        bb = Ca('find', Array.prototype.find)
          ? function (a, c) {
              return Array.prototype.find.call(c, a)
            }
          : br,
        K = Array.prototype.includes
          ? function (a, c) {
              return Array.prototype.includes.call(c, a)
            }
          : ar,
        uc = Ib(K),
        Fk = Ma(Array.prototype.join, 'join'),
        I = Fk
          ? function (a, c) {
              return Fk.call(c, a)
            }
          : $q,
        qd = la(I),
        Gk = x(function (a) {
          a = n(a, 'navigator') || {}
          var c = n(a, 'userAgent') || ''
          return { Pf: -1 < (n(a, 'vendor') || '').indexOf('Apple'), Pg: c }
        }),
        gb = x(V('navigator.userAgent')),
        Cg = /Firefox\/([0-9]+)/i,
        Kd = x(function (a) {
          var c = n(a, 'document.documentElement.style'),
            b = n(a, 'InstallTrigger')
          a =
            -1 !== (n(a, 'navigator.userAgent') || '').toLowerCase().search(Cg)
          Cg.lastIndex = 0
          return !(!(c && 'MozAppearance' in c) || ma(b)) || a
        }),
        Md,
        Zq = u(Dg, ka('[object Array]')),
        Hk = Ma(Array.prototype.map, 'map'),
        A =
          Hk && Yq(window, Array.prototype.map)
            ? function (a, c) {
                return c && 0 < c.length ? Hk.call(c, a) : []
              }
            : fk,
        z = A,
        nc = Array.prototype.flatMap
          ? function (a, c) {
              return Array.prototype.flatMap.call(c, a)
            }
          : Xq,
        hb = la(A),
        Mq = Ib(A),
        Ja = Pe(
          function (a, c) {
            return Array.prototype.some.call(c, a)
          },
          function (a, c) {
            for (var b = 0; b < c.length; b += 1)
              if (b in c && a.call(c, c[b], b)) return !0
            return !1
          },
          Ca('some', Array.prototype.some)
        ),
        ze = x(Nb),
        xc = V('0'),
        Dr = la(Eg),
        Ik = Ma(Array.prototype.reverse, 'reverse'),
        ur = Ik
          ? function (a) {
              return Ik.call(a)
            }
          : Wq,
        Jk = Ib(parseInt),
        Ga = Jk(10),
        Sg = Jk(2),
        pa = Object.entries
          ? function (a) {
              return a ? Object.entries(a) : []
            }
          : ck,
        da = Object.keys ? Object.keys : dk,
        Er = u(ck, w(V('1'), fk)),
        Fr = Object.values ? Object.values : Er,
        y = Object.assign || Vq,
        Wh = la(function (a, c) {
          return y({}, a, c)
        }),
        cd = x(u(V('String.fromCharCode'), w('fromCharCode', Ca), Sb)),
        Ne = x(u(gb, Ya(/ipad|iphone|ipod/i))),
        Pf = x(function (a) {
          return n(a, 'navigator.platform') || ''
        }),
        rd = x(function (a) {
          a = Gk(a)
          var c = a.Pg
          return a.Pf && !c.match('CriOS')
        }),
        Gr = Ya(
          /Android.*Version\/[0-9][0-9.]*\sChrome\/[0-9][0-9.]|Android.*Version\/[0-9][0-9.]*\s(?:Mobile\s)?Safari\/[0-9][0-9.]*\sChrome\/[0-9][0-9.]*|; wv\).*Chrome\/[0-9][0-9.]*\sMobile/
        ),
        Hr = Ya(/; wv\)/),
        pd = x(function (a) {
          a = gb(a)
          return Hr(a) || Gr(a)
        }),
        Ir = /Chrome\/(\d+)\./,
        Jr = x(function (a) {
          return (a = (n(a, 'navigator.userAgent') || '').match(Ir)) && a.length
            ? 76 <= Ga(a[1])
            : !1
        }),
        od = x(function (a) {
          var c = (gb(a) || '').toLowerCase()
          a = Pf(a)
          return !(
            -1 === c.indexOf('android') ||
            -1 === c.indexOf(c, 'mobile') ||
            !/^android|linux armv/i.test(a)
          )
        }),
        Kr =
          'other none unknown wifi ethernet bluetooth cellular wimax mixed'.split(
            ' '
          ),
        Lr = x(function (a) {
          var c = n(a, 'navigator.connection.type')
          if (X(c)) return null
          a = ze(a)(c, Kr)
          return -1 === a ? c : '' + a
        }),
        sg = x(u(V('document.addEventListener'), Sb)),
        Kk = x(function (a) {
          var c = n(a, 'navigator') || {}
          return M(
            function (b, d) {
              return b || n(c, d)
            },
            '',
            ['language', 'userLanguage', 'browserLanguage', 'systemLanguage']
          )
        }),
        vh = x(function (a) {
          var c = n(a, 'navigator') || {}
          a = Kk(a)
          xa(a) || ((a = ''), (c = n(c, 'languages.0')), xa(c) && (a = c))
          return a.toLowerCase().split('-')[0]
        }),
        eb = x(function (a) {
          var c = !1
          try {
            c = a.top !== a
          } catch (b) {}
          return c
        }),
        Mr = x(function (a) {
          var c = !1
          try {
            c = a.top.contentWindow
          } catch (b) {}
          return c
        }),
        Nr = x(function (a) {
          var c = !1
          try {
            c = a.navigator.javaEnabled()
          } catch (b) {}
          return c
        }),
        Or = x(function (a) {
          var c =
              '__webdriver_evaluate __selenium_evaluate __webdriver_script_function __webdriver_script_func __webdriver_script_fn __fxdriver_evaluate __driver_unwrapped __webdriver_unwrapped __driver_evaluate __selenium_unwrapped __fxdriver_unwrapped'.split(
                ' '
              ),
            b = n(a, 'external')
          b =
            -1 !==
            (n(b, 'toString') ? '' + b.toString() : '').indexOf('Sequentum')
          var d = n(a, 'document.documentElement'),
            e = ['selenium', 'webdriver', 'driver']
          return !!(
            Ja(w(a, n), [
              '_selenium',
              'callSelenium',
              '_Selenium_IDE_Recorder'
            ]) ||
            Ja(w(n(a, 'document'), n), c) ||
            b ||
            (d && Ja(G(d.getAttribute, d), e))
          )
        }),
        Pr = x(function (a) {
          return !!(
            Ja(w(a, n), ['_phantom', '__nightmare', 'callPhantom']) ||
            /(PhantomJS)|(HeadlessChrome)/.test(gb(a)) ||
            n(a, 'navigator.webdriver') ||
            (n(a, 'isChrome') && !n(a, 'chrome'))
          )
        }),
        Qr = x(function (a) {
          return Jf(w(a, n), ['ia_document.shareURL', 'ia_document.referrer'])
        }),
        Qd = x(function (a) {
          var c = gb(a) || '',
            b = c.match(/Mac OS X ([0-9]+)_([0-9]+)/)
          b = b ? [+b[1], +b[2]] : [0, 0]
          c = c.match(/iPhone OS ([1-9]+)_([0-9]+)/)
          return 14 <= (c ? +c[1] : 0)
            ? !0
            : (Ne(a) || 10 < b[0] || (10 === b[0] && 13 <= b[1])) && rd(a)
        }),
        Uq = /Edg\/(\d+)\./,
        hg = x(function (a) {
          return Qd(a) || of(a, 68) || pf(a, 79)
        }),
        Rr = Tc.construct,
        bc = Tc.host,
        Tg = sg(window),
        ta = {
          ah: 24226447,
          Vg: 26302566,
          eh: 51533966,
          bk: 65446441,
          $a: 'https:',
          pb: '1074',
          vc: Rr,
          $g: Tg ? 512 : 2048,
          Yg: Tg ? 512 : 2048,
          Zg: Tg ? 100 : 400,
          ck: 100,
          bh: 'noindex'
        },
        Ue = [],
        N = x(function (a) {
          return a.id + ':' + a.$
        }),
        gc = {},
        Zd = ka('1'),
        Sr = setTimeout
      Fa.prototype['catch'] = function (a) {
        return this.then(null, a)
      }
      Fa.prototype.then = function (a, c) {
        var b = new this.constructor(fr)
        mk(this, new hr(a, c, b))
        return b
      }
      Fa.prototype['finally'] = function (a) {
        var c = this.constructor
        return this.then(
          function (b) {
            return c.resolve(a()).then(function () {
              return b
            })
          },
          function (b) {
            return c.resolve(a()).then(function () {
              return c.reject(b)
            })
          }
        )
      }
      Fa.all = function (a) {
        return new Fa(function (c, b) {
          function d (h, k) {
            try {
              if (k && ('object' === typeof k || 'function' === typeof k)) {
                var l = k.then
                if ('function' === typeof l) {
                  l.call(
                    k,
                    function (m) {
                      d(h, m)
                    },
                    b
                  )
                  return
                }
              }
              e[h] = k
              0 === --f && c(e)
            } catch (m) {
              b(m)
            }
          }
          if (!a || 'undefined' === typeof a.length)
            return b(new TypeError('Promise.all accepts an array'))
          var e = Array.prototype.slice.call(a)
          if (0 === e.length) return c([])
          for (var f = e.length, g = 0; g < e.length; g++) d(g, e[g])
        })
      }
      Fa.resolve = function (a) {
        return a && 'object' === typeof a && a.constructor === Fa
          ? a
          : new Fa(function (c) {
              c(a)
            })
      }
      Fa.reject = function (a) {
        return new Fa(function (c, b) {
          b(a)
        })
      }
      Fa.race = function (a) {
        return new Fa(function (c, b) {
          if (!a || 'undefined' === typeof a.length)
            return b(new TypeError('Promise.race accepts an array'))
          for (var d = 0, e = a.length; d < e; d++) Fa.resolve(a[d]).then(c, b)
        })
      }
      Fa.cf =
        ('function' === typeof setImmediate &&
          function (a) {
            setImmediate(a)
          }) ||
        function (a) {
          Sr(a, 0)
        }
      Fa.fh = function (a) {
        'undefined' !== typeof console &&
          console &&
          console.warn('Possible Unhandled Promise Rejection:', a)
      }
      var J = window.Promise,
        Tr = Ma(J, 'Promise'),
        Lk = Ma(n(J, 'resolve'), 'resolve'),
        Mk = Ma(n(J, 'reject'), 'reject'),
        Nk = Ma(n(J, 'all'), 'all')
      if (K(!1, [Tr, Lk, Mk, Nk])) J = Fa
      else {
        var Ve = function (a) {
          return new Promise(a)
        }
        Ve.resolve = G(Lk, J)
        Ve.reject = G(Mk, J)
        Ve.all = G(Nk, J)
        J = Ve
      }
      var Zj = uc([26812653]),
        dg = x(u(V('id'), Zj), N),
        Db = [],
        U = [],
        Cc = [],
        Yd = [],
        Ug = [],
        We = [],
        Rq = pb('debuggerEvents', vd, !0),
        Oq = [
          'http.0.st..rt.',
          'network error occurred',
          'send beacon',
          'Content Security Policy',
          'DOM Exception 18'
        ],
        Rd,
        jc = (function (a) {
          return function (c, b) {
            void 0 === b && (b = !1)
            if (Rd) var d = new Rd(c)
            else
              Ca('Error', a.Error)
                ? ((Rd = a.Error), (d = new a.Error(c)))
                : ((Rd = Qq), (d = new Rd(c)))
            b && (d.unk = !0)
            return d
          }
        })(window),
        Pq = Ya(/^http./),
        Nq = Ya(/^err.kn/),
        Yj = [],
        Ur = x(function (a) {
          var c = !1
          if (!a.addEventListener) return c
          try {
            var b = Object.defineProperty({}, 'passive', {
              get: function () {
                c = !0
                return 1
              }
            })
            a.addEventListener('test', B, b)
          } catch (d) {}
          return c
        }),
        Vr = la(function (a, c) {
          return a ? y({ capture: !0, passive: !0 }, c || {}) : !!c
        }),
        ia = x(function (a) {
          a = Ur(a)
          var c = Vr(a),
            b = {}
          return y(b, {
            D: function (d, e, f, g) {
              z(function (h) {
                var k = c(g)
                Xj(d, h, f, k, !1)
              }, e)
              return G(b.kc, b, d, e, f, g)
            },
            kc: function (d, e, f, g) {
              z(function (h) {
                var k = c(g)
                Xj(d, h, f, k, !0)
              }, e)
            }
          })
        }),
        fa = x(eg),
        Uj = la(function (a, c) {
          for (var b = []; !Jd(c); ) {
            var d = Iq(c)
            a(d, function (e) {
              return e(c)
            })
            b.push(d)
          }
          return b
        }),
        Vg = la(function (a, c) {
          return Aa(function (b, d) {
            return c(b, function (e) {
              try {
                d(a(e))
              } catch (f) {
                b(f)
              }
            })
          })
        }),
        Xe = la(function (a, c) {
          return Aa(function (b, d) {
            return c(b, function (e) {
              try {
                a(e)(Ua(b, d))
              } catch (f) {
                b(f)
              }
            })
          })
        }),
        yg = [],
        zg = !1,
        xg = !1,
        Tb = {
          id: 'id',
          Ze: 'ut',
          $: 'type',
          je: 'ldc',
          Cb: 'nck',
          Hc: 'url',
          Wh: 'referrer'
        },
        Wr = /^\d+$/,
        Uc = {
          id: function (a) {
            a = '' + (a || '0')
            Wr.test(a) || (a = '0')
            try {
              var c = Ga(a)
            } catch (b) {
              c = 0
            }
            return c
          },
          $: function (a) {
            return '' + (a || 0 === a ? a : '0')
          },
          Cb: Boolean,
          Ze: Boolean
        }
      Tb.wc = 'defer'
      Uc.wc = Boolean
      Tb.da = 'params'
      Uc.da = function (a) {
        return La(a) || ca(a) ? a : null
      }
      Tb.Ye = 'userParams'
      Tb.Jg = 'triggerEvent'
      Uc.Jg = Boolean
      Tb.sg = 'sendTitle'
      Uc.sg = function (a) {
        return !!a || X(a)
      }
      Tb.Ue = 'trackHash'
      Uc.Ue = Boolean
      Tb.Hg = 'trackLinks'
      Tb.Gh = 'enableAll'
      var ff = M(
          function (a, c) {
            var b = c[0]
            a[b] = { ga: c[1], fb: Uc[b] }
            return a
          },
          {},
          pa(Tb)
        ),
        Ok = la(function (a, c) {
          var b = c || {}
          return {
            l: w(b, O),
            o: function (d, e) {
              var f = b[d]
              return X(f) && !X(e) ? e : f
            },
            C: function (d, e) {
              b[d] = e
              return this
            },
            fc: function (d, e) {
              return '' === e || ma(e) ? this : this.C(d, e)
            },
            Da: w(b, a)
          }
        }),
        Ea = Ok(function (a) {
          var c = ''
          a = M(
            function (b, d) {
              var e = d[0],
                f = '' + e + ':' + d[1]
              't' === e ? (c = f) : b.push(f)
              return b
            },
            [],
            pa(a)
          )
          c && a.push(c)
          return I(':', a)
        }),
        Wg,
        Oj =
          ((Wg = {}),
          (Wg.w = [
            [
              function (a, c) {
                return {
                  Z: function (b, d) {
                    var e,
                      f = b.G
                    f =
                      ((e = {}),
                      (e['page-url'] = (f && f['page-url']) || ''),
                      (e.charset = 'utf-8'),
                      e)
                    '0' !== c.$ && (f['cnt-class'] = c.$)
                    b.H || (b.H = Ea())
                    e = b.H
                    var g = b.Y
                    f = {
                      ia: { ta: 'watch/' + c.id },
                      Y: y(void 0 === g ? {} : g, {
                        Lb: !(!e.o('pv') || e.o('ar') || e.o('wh'))
                      }),
                      G: y(b.G || {}, f)
                    }
                    y(b, f)
                    d()
                  }
                }
              },
              1
            ]
          ]),
          Wg),
        Pk = w(Oj, Pj),
        jb = wg('w'),
        Lj = ['webkitvisibilitychange', 'visibilitychange'],
        ug = Ok(function (a) {
          a = pa(a)
          return I(
            '',
            A(function (c) {
              var b = c[0]
              c = c[1]
              return Va(c) ? '' : b + '(' + c + ')'
            }, a)
          )
        }),
        Qk =
          'A B BIG BODY BUTTON DD DIV DL DT EM FIELDSET FORM H1 H2 H3 H4 H5 H6 HR I IMG INPUT LI OL P PRE SELECT SMALL SPAN STRONG SUB SUP TABLE TBODY TD TEXTAREA TFOOT TH THEAD TR U UL ABBR AREA BLOCKQUOTE CAPTION CENTER CITE CODE CANVAS DFN EMBED FONT INS KBD LEGEND LABEL MAP OBJECT Q S SAMP STRIKE TT ARTICLE AUDIO ASIDE FOOTER HEADER MENU METER NAV PROGRESS SECTION TIME VIDEO NOINDEX NOBR MAIN svg circle clippath ellipse defs foreignobject g glyph glyphref image line lineargradient marker mask path pattern polygon polyline radialgradient rect set text textpath title'.split(
            ' '
          ),
        Jp = /^ *(data|javascript):/i,
        $i = new RegExp(
          I('', [
            '\\.(' +
              I(
                '|',
                '3gp 7z aac ac3 acs ai avi ape apk asf bmp bz2 cab cdr crc32 css csv cue divx dmg djvu? doc(x|m|b)? emf eps exe flac? flv iso swf gif t?gz jpe?g? js m3u8? m4a mp(3|4|e?g?) m4v md5 mkv mov msi ods og(g|m|v) psd rar rss rtf sea sfv sit sha1 svg tar tif?f torrent ts txt vob wave? wma wmv wmf webm ppt(x|m|b)? xls(x|m|b)? pdf phps png xpi g?zip'.split(
                  ' '
                )
              ) +
              ')$'
          ]),
          'i'
        ),
        Qa,
        nk =
          ((Qa = {}),
          (Qa.hit = 'h'),
          (Qa.params = 'p'),
          (Qa.reachGoal = 'g'),
          (Qa.userParams = 'up'),
          (Qa.trackHash = 'th'),
          (Qa.accurateTrackBounce = 'atb'),
          (Qa.notBounce = 'nb'),
          (Qa.addFileExtension = 'fe'),
          (Qa.extLink = 'el'),
          (Qa.file = 'fc'),
          (Qa.trackLinks = 'tl'),
          (Qa.destruct = 'd'),
          (Qa.setUserID = 'ui'),
          (Qa.getClientID = 'ci'),
          (Qa.clickmap = 'cm'),
          (Qa.enableAll = 'ea'),
          Qa),
        Xr = x(function () {
          var a = 0
          return function () {
            return (a += 1)
          }
        }),
        Yr = u(N, Xr, ha),
        ig = {
          mc: function (a) {
            a = Nd(a).o('mt', {})
            a = pa(a)
            return a.length
              ? M(
                  function (c, b, d) {
                    return '' + c + (d ? '-' : '') + b[0] + '-' + b[1]
                  },
                  '',
                  a
                )
              : null
          },
          clc: function (a) {
            var c = H(a).o('cls', { uc: 0, x: 0, y: 0 }),
              b = c.uc,
              d = c.x
            c = c.y
            return b
              ? b + '-' + a.Math.floor(d / b) + '-' + a.Math.floor(c / b)
              : b + '-' + d + '-' + c
          },
          rqnt: function (a, c, b) {
            a = b.G
            return !a || a.nohit ? null : Yr(c)
          }
        },
        Fb = E([1, null], Pe),
        hd = E([1, 0], Pe),
        Aq = x(function (a) {
          Jj(a, '_ymBRC', '1')
          var c = '1' !== Ij(a, '_ymBRC')
          c || Kj(a, '_ymBRC')
          return c
        }),
        Ra = x(rf),
        Vc = x(rf, function (a, c, b) {
          return '' + c + b
        }),
        Zr = x(V('document.documentElement')),
        $r = x(function (a) {
          a = n(a, 'document') || {}
          return ('' + (a.characterSet || a.charset || '')).toLowerCase()
        }),
        ab = x(u(V('document'), w('createElement', ec))),
        bi = x(function (a) {
          var c = n(a, 'Element.prototype')
          return c
            ? (a = bb(
                function (b) {
                  return Ca(b, c[b])
                },
                [
                  'matches',
                  'webkitMatchesSelector',
                  'mozMatchesSelector',
                  'msMatchesSelector',
                  'oMatchesSelector'
                ]
              ))
              ? c[a]
              : null
            : null
        }),
        as = ka('INPUT'),
        He = u(Ia, as),
        bs = ka('TEXTAREA'),
        xq = u(Ia, bs),
        cs = ka('SELECT'),
        yq = u(Ia, cs),
        Ie = u(V('type'), Ya(/^(checkbox|radio)$/)),
        Cf = u(Ia, Ya(/^INPUT|SELECT|TEXTAREA$/)),
        je = u(Ia, Ya(/^INPUT|SELECT|TEXTAREA|BUTTON$/)),
        Gf = 'INPUT CHECKBOX RADIO TEXTAREA SELECT PROGRESS'.split(' '),
        wq = ['submit', 'image', 'hidden'],
        pj = /^\s+|\s+$/g,
        Ej = Ma(String.prototype.trim, 'trim'),
        Rk = la(function (a, c) {
          return c.replace(a, '')
        }),
        Hi = Rk(/\s/g),
        Mb = Rk(/\D/g),
        Tf = x(function () {
          for (var a = 59, c = {}, b = 0; b < Qk.length; b += 1)
            (c[Qk[b]] = String.fromCharCode(a)), (a += 1)
          return c
        }),
        Cj = x(function (a) {
          return { rk: a, vb: null, Db: [] }
        }),
        Aj = {},
        pg = {}
      Aj.p = 500
      var zj = { i: 'id', n: 'name', h: 'href', ty: 'type' }
      pg.h = !0
      pg.c = !0
      var Qc = {}
      Qc.p = qg
      Qc.c = function (a, c, b) {
        ;(a = ob(n(c, 'textContent'))) &&
          b &&
          ((b = b(c)),
          b.length && Ja(u(V('textContent'), ob, ka(a)), b) && (a = ''))
        He(c) && (a = ob((c.getAttribute && c.getAttribute('value')) || a))
        return a
      }
      var Wc,
        og =
          'button,' +
          A(
            function (a) {
              return 'input[type="' + a + '"]'
            },
            ['button', 'submit', 'reset', 'file']
          ).join(',') +
          ',a',
        Vf = w(og, yb),
        tq =
          ((Wc = {}),
          (Wc.A = 'h'),
          (Wc.BUTTON = 'i'),
          (Wc.DIV = 'i'),
          (Wc.INPUT = 'ty'),
          Wc),
        sq = 'hash host hostname href pathname port protocol search'.split(' '),
        ng =
          'ru ua by kz az kg lv md tj tm uz ee fr lt com co.il com.ge com.am com.tr com.ua com.ru'.split(
            ' '
          ),
        yj = /(?:^|\.)(?:(ya\.ru)|(?:yandex)\.(\w+|com?\.\w+))$/,
        xe = x(function (a) {
          return (a ? a.replace(/^www\./, '') : '').toLowerCase()
        }),
        ds = x(function (a) {
          a = S(a).hostname
          var c = !1
          a && (c = -1 !== a.search(yj))
          return c
        }),
        Sk = u(S, V('protocol'), ka('https:')),
        Tk = /\/$/,
        es = x(
          u(
            fa,
            Aa(function (a) {
              return -new a.l.Date().getTimezoneOffset()
            })
          )
        ),
        fs = u(
          fa,
          Aa(function (a) {
            a = new a.l.Date()
            return I(
              '',
              A(Jq, [
                a.getFullYear(),
                a.getMonth() + 1,
                a.getDate(),
                a.getHours(),
                a.getMinutes(),
                a.getSeconds()
              ])
            )
          })
        ),
        gs = u(fa, Aa(jg)),
        Uk = x(
          u(
            fa,
            Aa(function (a) {
              return a.Ca[0]
            })
          )
        ),
        hs = x(Ac),
        qq = x(function (a) {
          return Jr(a) && Sk(a) ? 'SameSite=None;Secure;' : ''
        }),
        mg = ['metrika_enabled'],
        lg = [],
        wj = pb('gsc', uj),
        rq = /:\d+$/,
        ir = x(function (a) {
          var c = (S(a).host || '').split('.')
          return 1 === c.length
            ? c[0]
            : M(
                function (b, d, e) {
                  e += 1
                  2 <= e &&
                    !b &&
                    ((e = I('.', c.slice(-e))), ci(a, e) && (b = e))
                  return b
                },
                '',
                c
              )
        }),
        $b = x(Dc),
        tj = pb('r', function (a, c) {
          var b = sj(a, c),
            d = b[0]
          return !b[1] && d
        }),
        Gd = x(function () {
          return { Ja: {}, pending: {}, children: {} }
        }),
        Xg = V('postMessage'),
        is = C('s.f', function (a, c, b, d, e) {
          c = c(d)
          var f = Gd(a),
            g = I(':', [c.ba.Bc, c.ba.key])
          if (Xg(b)) {
            f.pending[g] = e
            try {
              b.postMessage(c.Cg, '*')
            } catch (h) {
              delete f.pending[g]
              return
            }
            W(
              a,
              function () {
                delete f.pending[g]
              },
              5e3,
              'if.s'
            )
          }
        }),
        js = C('s.fh', function (a, c, b, d, e, f) {
          var g = null,
            h = null,
            k = Gd(a),
            l = null
          try {
            ;(g = tb(a, f.data)), (h = g.__yminfo), (l = g.data)
          } catch (m) {
            return
          }
          if (
            !ma(h) &&
            h.substring &&
            '__yminfo' === h.substring(0, 8) &&
            !ma(l) &&
            ((g = h.split(':')), 4 === g.length)
          )
            if (
              ((h = c.id),
              (c = g[1]),
              (a = g[2]),
              (g = g[3]),
              !ca(l) && l.type && '0' === g && l.counterId)
            ) {
              if (!l.toCounter || l.toCounter == h) {
                k = null
                try {
                  k = f.source
                } catch (m) {}
                !Va(k) &&
                  Xg(k) &&
                  ((f = d.O(l.type, [f, l])),
                  (e = A(u(O, Wh(e)), f.concat([{}]))),
                  (l = b([c, a, l.counterId], e)),
                  k.postMessage(l.Cg, '*'))
              }
            } else
              g === '' + h &&
                ca(l) &&
                Z(function (m) {
                  return !(!m.hid || !m.counterId)
                }, l).length === l.length &&
                (b = k.pending[I(':', [c, a])]) &&
                b.apply(null, [f].concat(l))
        }),
        dd = x(function (a, c) {
          var b,
            d = ec('getElementsByTagName', n(a, 'document')),
            e = Gd(a),
            f = Xg(a),
            g = id(a),
            h = ia(a)
          if (!d || !f) return null
          d = d.call(a.document, 'iframe')
          f = ((b = {}), (b.counterId = c.id), (b.hid = '' + ac(a)), b)
          hg(a) && (f.duid = Hd(a, c))
          mq(a, g)
          nq(a)
          b = oq(a, f)
          var k = E([a, w([], b)], is)
          z(function (l) {
            var m = null
            try {
              m = l.contentWindow
            } catch (p) {}
            m &&
              k(m, { type: 'initToChild' }, function (p, q) {
                g.O('initToParent', [p, q])
              })
          }, d)
          eb(a) &&
            k(a.parent, { type: 'initToParent' }, function (l, m) {
              g.O('parentConnect', [l, m])
            })
          h.D(a, ['message'], E([a, c, b, g, f], js))
          return { ca: g, Ja: e.Ja, children: e.children, Ke: k }
        }, u(zb, N)),
        ed = x(
          function (a, c) {
            if (!hg(a) || !eb(a)) return Hd(a, c)
            var b = dd(a, c)
            return b && b.Ja[c.id] ? b.Ja[c.id].info.duid || Hd(a, c) : Hd(a, c)
          },
          function (a, c) {
            return '{' + c.je + c.Cb
          }
        ),
        ks = x(function (a) {
          a = H(a)
          var c = a.o('counterNum', 0) + 1
          a.C('counterNum', c)
          return c
        }, u(zb, N)),
        ja,
        Ee =
          ((ja = {}),
          (ja.vf = w(Tc.version, O)),
          (ja.nt = Lr),
          (ja.fp = function (a, c, b) {
            if (b.G && b.G.nohit) return null
            c = N(c)
            b = hs(a)
            if (b[c]) return null
            a: {
              var d = Uk(a),
                e = n(a, 'performance.getEntriesByType')
              if (T(e)) {
                if (
                  ((a = Z(
                    u(O, V('name'), ka('first-contentful-paint')),
                    e.call(a.performance, 'paint')
                  )),
                  a.length)
                ) {
                  a = a[0].startTime
                  break a
                }
              } else {
                e = n(a, 'chrome.loadTimes')
                if (
                  T(e) &&
                  ((e = e.call(a.chrome)), (e = n(e, 'firstPaintTime')), d && e)
                ) {
                  a = 1e3 * e - d
                  break a
                }
                if ((a = n(a, 'performance.timing.msFirstPaint'))) {
                  a -= d
                  break a
                }
              }
              a = void 0
            }
            return a ? ((b[c] = a), Math.round(a)) : null
          }),
          (ja.fu = function (a, c, b) {
            var d = b.G
            if (!d) return null
            c = (n(a, 'document.referrer') || '').replace(Tk, '')
            b = (d['page-ref'] || '').replace(Tk, '')
            d = d['page-url']
            a = S(a).href !== d
            c = c !== b
            b = 0
            a && c ? (b = 3) : c ? (b = 1) : a && (b = 2)
            return b
          }),
          (ja.en = $r),
          (ja.la = Kk),
          (ja.ut = function (a, c, b) {
            var d = b.V
            b = b.G
            d = d && d.Uc
            b && (ds(a) || c.Ze || d) && (b.ut = ta.bh)
            return null
          }),
          (ja.v = w(ta.pb, O)),
          (ja.cn = ks),
          (ja.dp = function (a) {
            var c = H(a),
              b = c.o('bt', {})
            if (X(c.o('bt'))) {
              var d = n(a, 'navigator.getBattery')
              try {
                b.p = d && d.call(a.navigator)
              } catch (e) {}
              c.C('bt', b)
              b.p &&
                b.p.then &&
                b.p.then(
                  D(a, 'bi:dp.p', function (e) {
                    b.Uj = n(e, 'charging') && 0 === n(e, 'chargingTime')
                  })
                )
            }
            return hd(b.Uj)
          }),
          (ja.ls = x(function (a, c) {
            var b = Vc(a, c.id),
              d = fa(a),
              e = b.o('lsid')
            return +e ? e : ((d = Wa(a, 0, d(aa))), b.C('lsid', d), d)
          }, zb)),
          (ja.hid = ac),
          (ja.phid = function (a, c) {
            if (!eb(a)) return null
            var b = dd(a, c)
            if (!b) return null
            var d = da(b.Ja)
            return d.length ? b.Ja[d[0]].info.hid : null
          }),
          (ja.z = es),
          (ja.i = fs),
          (ja.et = gs),
          (ja.c = u(V('navigator.cookieEnabled'), Fb)),
          (ja.rn = u(O, Wa)),
          (ja.rqn = function (a, c, b) {
            b = b.G
            if (!b || b.nohit) return null
            c = N(c)
            a = Vc(a, c)
            c = (a.o('reqNum', 0) || 0) + 1
            a.C('reqNum', c)
            if (a.o('reqNum') === c) return c
            a.Sb('reqNum')
            return null
          }),
          (ja.u = ed),
          (ja.w = function (a) {
            a = Rc(a)
            return a[0] + 'x' + a[1]
          }),
          (ja.s = function (a) {
            var c = n(a, 'screen')
            if (c) {
              a = n(c, 'width')
              var b = n(c, 'height')
              c = n(c, 'colorDepth') || n(c, 'pixelDepth')
              return I('x', [a, b, c])
            }
            return null
          }),
          (ja.sk = V('devicePixelRatio')),
          (ja.ifr = u(eb, Fb)),
          (ja.j = u(Nr, Fb)),
          (ja.sti = function (a) {
            return eb(a) ? (Mr(a) ? '1' : null) : null
          }),
          ja),
        lq = x(function () {
          return Oa(da(Ee), da(ig))
        }),
        kq = x(Ac, N),
        qj = x(function () {
          return { yf: null, xa: [] }
        }, N),
        hq = /^[a-z][\w.+-]+:/i,
        Yg,
        Pb = [
          [Ke, 1],
          [De, 2],
          [Hb(), 3],
          [rj, 4]
        ],
        Ce = [],
        Ab = w(Pb, Qj),
        Ob = ((Yg = {}), (Yg.h = Pb), Yg),
        ba = w(Ob, Pj)
      Ab(function (a) {
        return {
          Z: function (c, b) {
            var d = c.G
            if (!c.H || !d) return b()
            var e = d['page-ref'],
              f = d['page-url']
            e && f !== e ? (d['page-ref'] = oj(a, e)) : delete d['page-ref']
            d['page-url'] = oj(a, f).slice(0, ta.$g)
            return b()
          }
        }
      }, -100)
      var dq = /[^a-z0-9.:-]/,
        Zg,
        $g = {},
        Vk = Na([
          fg && [fg, 0],
          wb && [wb, 1],
          [xb, 2],
          Ed && [Ed, 3],
          [Oc, 4]
        ]),
        Xc = Na([fg, wb, xb, Ed, Oc]),
        ah = [xb]
      ah.unshift(wb)
      ah.push(Ed)
      var Wk = Na(ah),
        Yc = Na([Oc])
      Na([wb, xb])
      var ls = Na([wb, Oc]),
        Ye = Na([wb, xb, Ed, Oc]),
        wa = ((Zg = {}), (Zg.h = Wk), Zg),
        bh = x(function (a, c) {
          var b = $g['*'] ? $g['*'] : c && $g[c]
          b || (b = c ? wa[c] || [] : Xc)
          b = M(
            function (d, e) {
              var f = e(a)
              if (f) {
                var g = bb(u(xc, ka(e)), Vk)
                g && d.push([g[1], f])
              }
              return d
            },
            [],
            b
          )
          b.length || Xd()
          return b
        }, zb),
        ch,
        ms = G(J.reject, J, Sa()),
        Ba = ((ch = {}), (ch.h = jb), ch),
        sa = C(
          'g.sen',
          function (a, c, b) {
            var d = bh(a, c)
            b = b ? gq(a, c, b) : []
            var e = Ba[c],
              f = e ? e(a, d, b) : jb(a, d, b)
            return function () {
              var g = Da(arguments),
                h = g[0]
              g = g.slice(1)
              var k = h.Y
              h = y(h, { Y: y(void 0 === k ? {} : k, { ja: [c] }) })
              return f.apply(void 0, ya([h], g))
            }
          },
          ms
        ),
        Wp = la(function (a, c) {
          if (!c[a]) {
            var b,
              d = new J(function (e) {
                b = e
              })
            c[a] = { jg: b, jb: d, kg: !1 }
          }
          return c[a].jb
        }),
        kj = x(u(Ac, Aa)),
        Sd = x(function (a, c) {
          var b = n(a, 'console'),
            d = n(b, 'log')
          d = Qe('log', d) ? G(d, b) : B
          var e = n(b, 'warn')
          e = Qe('warn', e) ? G(e, b) : d
          var f = n(b, 'error')
          b = Qe('error', f) ? G(f, b) : d
          return {
            log: Nc(a, 'log', c, d),
            error: Nc(a, 'error', c, b),
            warn: Nc(a, 'warn', c, e)
          }
        }),
        ns = C('dc.init', function (a, c) {
          function b (k) {
            for (var l = [], m = 1; m < arguments.length; m++)
              l[m - 1] = arguments[m]
            H(a).o('dce:' + c, !1) && e[k].apply(e, l)
            H(a)
              .o('dclq:' + c)
              .push([k, l])
          }
          var d = S(a),
            e = Sd(a, c)
          H(a).Va('dclq:' + c, [])
          var f = $b(a),
            g = If(a),
            h = g.Ii
          g = g.yi
          h && !g && f.C('debug', '1', void 0, d.host)
          return h || g
            ? { log: w('log', b), warn: w('warn', b), error: w('error', b) }
            : Vp(a, c)
        }),
        Cd = x(ns, zb),
        os = C('p.dc', function (a, c) {
          var b = N(c)
          jj(a, '')
          jj(a, b)
        }),
        Jl = D(window, 'h.p', function (a, c) {
          var b,
            d,
            e = sa(a, 'h', c),
            f = c.Hc || '' + S(a).href,
            g = c.Wh || a.document.referrer,
            h = {
              H: Ea(((b = {}), (b.pv = 1), b)),
              G: ((d = {}), (d['page-url'] = f), (d['page-ref'] = g), d),
              V: {}
            }
          h.V.da = c.da
          h.V.Ye = c.Ye
          c.wc && h.G && (h.G.nohit = '1')
          return e(h, c)
            .then(function (k) {
              k &&
                (c.wc ||
                  Gb(
                    a,
                    c,
                    'PageView. Counter ' +
                      c.id +
                      '. URL: ' +
                      f +
                      '. Referrer: ' +
                      g,
                    c.da
                  )(),
                Jb(a, E([a, c, k], Xp)))
            })
            ['catch'](D(a, 'h.g.s'))
        }),
        dh = [
          'yandex_metrika_callback' + Tc.callbackPostfix,
          'yandex_metrika_callbacks' + Tc.callbackPostfix
        ],
        ps = C('cb.i', function (a) {
          var c = dh[0],
            b = dh[1]
          if (T(a[c])) a[c]()
          'object' === typeof a[b] &&
            z(function (d, e) {
              a[b][e] = null
              $f(a, d)
            }, a[b])
          z(function (d) {
            try {
              delete a[d]
            } catch (e) {
              a[d] = void 0
            }
          }, dh)
        }),
        Xk = x(function (a) {
          return (
            n(a, 'crypto.subtle.digest') &&
            n(a, 'TextEncoder') &&
            n(a, 'FileReader') &&
            n(a, 'Blob')
          )
        }),
        qs = C('fpm', function (a, c) {
          if (!Sk(a)) return B
          var b = N(c)
          if (!Xk(a)) return Eb(a, b, 'Not supported'), B
          var d = Ha(a, c)
          return d
            ? function (e) {
                return new J(function (f, g) {
                  return La(e)
                    ? da(e).length
                      ? f(
                          gj(a, e).then(function (h) {
                            var k, l
                            h &&
                              h.length &&
                              d.params(
                                ((k = {}),
                                (k.__ym = ((l = {}), (l.fpp = h), l)),
                                k)
                              )
                          }, B)
                        )
                      : g(Sa('fpm.l'))
                    : g(Sa('fpm.o'))
                })['catch'](D(a, 'fpm.en'))
              }
            : B
        }),
        Ze = la(function (a, c) {
          var b = {}
          bg(a)(function (d) {
            b = d[c] || {}
          })
          return b
        }),
        rs = C('c.c.cc', function (a) {
          var c = H(a),
            b = u(Ze(a), function (d) {
              var e,
                f = ((e = {}), (e.clickmap = !!d.clickmap), e)
              return y({}, d, f)
            })
          return D(a, 'g.c.cc', u(G(c.o, c, 'counters', {}), da, hb(b)))
        }),
        ss = C('gt.c.rs', function (a, c) {
          var b,
            d = N(c),
            e = c.id,
            f = c.$,
            g = c.nf,
            h = c.Ue,
            k = E([a, d], Rp)
          ag(
            a,
            d,
            ((b = {}),
            (b.id = e),
            (b.type = +f),
            (b.clickmap = g),
            (b.trackHash = !!h),
            b)
          )
          return k
        }),
        ej = x(vd),
        Bd = x(Ac, N),
        ts = C('pa.int', function (a, c) {
          var b
          return (
            (b = {}),
            (b.params = function () {
              var d,
                e,
                f = Da(arguments),
                g = Qp(f)
              if (!g) return null
              f = g.Bh
              var h = g.da
              g = g.qc
              if (!La(h) && !ca(h)) return null
              var k = sa(a, '1', c),
                l = Bd(c).url,
                m = !dg(c),
                p = 'arams. Counter ' + c.id,
                q = 'P' + p,
                r = h,
                t = ''
              ;(t = n(h, '__ym.user_id')) && (q = 'Set user id ' + t)
              K('__ymu', da(h)) && (q = 'User p' + p)
              r.__ym &&
                ((r = y({}, h)),
                (r.__ym = M(
                  function (v, F) {
                    var Y = n(h, '__ym.' + F)
                    Y && (v[F] = Y)
                    return v
                  },
                  {},
                  Ue
                )),
                da(r.__ym).length || delete r.__ym,
                (m = !!da(r).length))
              r = t ? void 0 : JSON.stringify(r)
              p = Gb(a, c, q, r)
              k = k(
                {
                  V: { da: h },
                  H: Ea(((d = {}), (d.pa = 1), (d.ar = 1), d)),
                  G: ((e = {}), (e['page-url'] = l || S(a).href), e)
                },
                c
              ).then(m ? p : B)
              return Mc(a, 'p.s', k, g, f)
            }),
            b
          )
        }),
        ee = x(bj, u(zb, N)),
        us = C('y.p', function (a, c) {
          var b = bj(a, c)
          if (b) {
            var d = $d(a),
              e = E([a, b, c], Mp)
            yh(a, d, function (f) {
              f.D(['params'], e)
            })
            b.ca.D(['params'], u(V('1'), e))
          }
        }),
        jr = x(function (a) {
          if ((a = ab(a))) return a('a')
        }),
        Yk = { xk: Ya(/[/&=?#]/) },
        ue = C('go.in', function (a, c, b, d) {
          var e
          void 0 === b && (b = 'goal')
          return (
            (e = {}),
            (e.reachGoal = function (f, g, h, k) {
              var l, m
              if (!f || (Yk[b] && Yk[b](f))) return null
              var p = g,
                q = h || B
              T(g) && ((q = g), (p = void 0), (k = h))
              var r = Gb(
                  a,
                  c,
                  'Reach goal. Counter: ' + c.id + '. Goal id: ' + f,
                  p
                ),
                t = 'goal' === b
              g = sa(a, 'g', c)
              var v = Lp(a, c, f, b)
              h = v[0]
              v = v[1]
              p = g(
                {
                  V: { da: p },
                  H: Ea(((l = {}), (l.ar = 1), l)),
                  G: ((m = {}), (m['page-url'] = h), (m['page-ref'] = v), m)
                },
                c
              ).then(function () {
                var F, Y
                t && r()
                nb(
                  a,
                  ((F = {}),
                  (F.counterKey = N(c)),
                  (F.name = 'event'),
                  (F.data = ((Y = {}), (Y.schema = b), (Y.name = f), Y)),
                  F)
                )
                d && d()
              })
              return Mc(a, 'g.s', p, q, k)
            }),
            e
          )
        }),
        vs = C('guid.int', function (a, c) {
          var b
          return (
            (b = {}),
            (b.getClientID = function (d) {
              var e = Hd(a, c)
              d && $f(a, d, null, e)
              return e
            }),
            b
          )
        }),
        pk,
        ws = C('th.e', function (a, c) {
          function b () {
            g ||
              (k = zd(a, 'onhashchange')
                ? ia(a).D(a, ['hashchange'], h)
                : kr(a, h))
          }
          var d,
            e = sa(a, 't', c),
            f = Ae(a, N(c)),
            g = !1,
            h = D(a, 'h.h.ch', G(lr, null, a, c, e)),
            k = B
          c.Ue && (b(), (g = !0))
          e = D(a, 'tr.hs.h', function (l) {
            var m
            l ? b() : k()
            g = !!l
            f(((m = {}), (m.trackHash = g), m))
          })
          return (d = {}), (d.trackHash = e), (d.u = k), d
        }),
        xs = la(function (a, c) {
          xa(c) ? a.push(c) : z(u(O, qa('push', a)), c)
        }),
        ys = C('cl.p', function (a, c) {
          function b (p, q, r, t) {
            void 0 === t && (t = {})
            r
              ? we(a, c, { url: r, zb: !0, Pc: p, Uc: q, sender: e, Qg: t })
              : g.warn('Empty link')
          }
          var d,
            e = sa(a, '2', c),
            f = [],
            g = Sd(a, N(c)),
            h = N(c),
            k = D(a, 's.s.tr', w(Ae(a, h), Kp))
          h = {
            l: a,
            qb: c,
            Oh: f,
            sender: e,
            globalStorage: H(a),
            Ah: Vc(a, c.id),
            yk: ac(a),
            Nj: w(w(h, Ze(a)), u(ha, V('trackLinks')))
          }
          h = D(a, 'cl.p.c', w(h, Hp))
          h = ia(a).D(a, ['click'], h)
          c.Hg && k(c.Hg)
          var l = D(a, 'file.clc', E([!0, !1], b)),
            m = D(a, 'e.l.l.clc', E([!1, !0], b))
          f = D(a, 'add.f.e.clc', xs(f))
          return (
            (d = {}),
            (d.file = l),
            (d.extLink = m),
            (d.addFileExtension = f),
            (d.trackLinks = k),
            (d.u = h),
            d
          )
        }),
        Ad = pb(
          'retryReqs',
          function (a) {
            var c = Ra(a),
              b = c.o('retryReqs', {}),
              d = fa(a)(aa)
            z(function (e) {
              var f = e[0]
              e = e[1]
              ;(!e || !e.time || e.time + 864e5 < d) && delete b[f]
            }, pa(b))
            c.C('retryReqs', b)
            return b
          },
          !0
        ),
        Zk = Ib(u(ie, ka(0))),
        zs = [Zk('watch'), Zk('clmap')],
        As = C('g.r', function (a) {
          var c = fa(a),
            b = Ad(a),
            d = c(aa),
            e = ac(a)
          return M(
            function (f, g) {
              var h = g[0],
                k = g[1]
              k &&
                Ja(Aa(k.resource), zs) &&
                !k.d &&
                k.ghid &&
                k.ghid !== e &&
                k.time &&
                500 < d - k.time &&
                k.time + 864e5 > d &&
                2 >= k.browserInfo.rqnl &&
                ((k.d = 1),
                (h = {
                  protocol: k.protocol,
                  host: k.host,
                  ta: k.resource,
                  nj: k.postParams,
                  da: k.params,
                  nh: k.browserInfo,
                  wk: k.ghid,
                  time: k.time,
                  cc: Ga(h),
                  zh: k.counterId,
                  $: k.counterType
                }),
                k.telemetry && (h.La = k.telemetry),
                f.push(h))
              return f
            },
            [],
            pa(b)
          )
        }),
        Bs = C('nb.p', function (a, c) {
          function b (F) {
            l() ||
              ((F = 'number' === typeof F ? F : 15e3),
              (v = mr(a, d(!1), F)),
              m())
          }
          function d (F) {
            return function (Y) {
              var Q, oa, ua
              void 0 === Y &&
                (Y = ((Q = {}), (Q.ctx = {}), (Q.callback = B), Q))
              if (F || (!r && !k.$d)) {
                r = !0
                m()
                v && v()
                var vb = p(aa)
                Q = (Ga(k.o('lastHit')) || 0) < vb - 18e5
                var ud = 0.1 > Math.random()
                k.C('lastHit', vb)
                vb = Ea(((oa = {}), (oa.nb = 1), (oa.cl = t), (oa.ar = 1), oa))
                oa = Bd(c)
                oa = {
                  G: ((ua = {}), (ua['page-url'] = oa.url || S(a).href), ua),
                  H: vb,
                  V: { force: F }
                }
                ua = Sd(a, N(c)).warn
                !Y.callback && Y.ctx && ua('"callback" argument missing')
                ;(ua = F || Q || ud) ||
                  ((ua = a.location.href),
                  (Q = a.document.referrer),
                  (ua = !(ua && Q ? aj(ua) === aj(Q) : !ua && !Q)))
                if (ua)
                  return (ua = g(oa, c)), Mc(a, 'l.o.l', ua, Y.callback, Y.ctx)
              }
              return null
            }
          }
          var e,
            f,
            g = sa(a, 'n', c),
            h = N(c),
            k = Vc(a, c.id),
            l = w(w(h, Ze(a)), u(ha, V('accurateTrackBounce'))),
            m = w(((e = {}), (e.accurateTrackBounce = !0), e), Ae(a, h)),
            p = fa(a),
            q = p(aa),
            r = !1,
            t = 0,
            v
          ra(c, function (F) {
            t = F.Qh - q
          })
          c.ef && b(c.ef)
          e = ((f = {}), (f.notBounce = d(!0)), (f.u = v), f)
          e.accurateTrackBounce = b
          return e
        }),
        Ep = la(Zb)('(ym-disable-clickmap|ym-clickmap-ignore)'),
        Cs = C('clm.p', function (a, c) {
          if (cd(a)) return B
          var b = sa(a, 'm', c),
            d = N(c),
            e = fa(a),
            f = e(aa),
            g = w(w(d, Ze(a)), u(ha, V('clickmap'))),
            h,
            k = null
          d = D(a, 'clm.p.c', function (l) {
            var m = g()
            if (m) {
              var p = H(a),
                q = p.o('cls', { uc: 0, x: 0, y: 0 })
              p.C('cls', {
                uc: q.uc + 1,
                x: q.x + l.clientX,
                y: q.y + l.clientY
              })
              p = 'object' === typeof m ? m : {}
              q = p.filter
              m = p.isTrackHash || !1
              var r = A(function (v) {
                return ('' + v).toUpperCase()
              }, p.ignoreTags || [])
              X(h) && (h = p.quota || null)
              var t = !!p.quota
              l = {
                element: Fp(a, l),
                position: Xi(a, l),
                button: Gp(l),
                time: e(aa)
              }
              p = S(a).href
              if (Dp(a, l, k, r, q)) {
                if (t) {
                  if (!h) return
                  --h
                }
                r = Ge(a, l.element)
                q = r[0]
                r = r[1]
                t = rg(a, l.element)
                q = [
                  'rn',
                  Wa(a),
                  'x',
                  Math.floor((65535 * (l.position.x - t.left)) / (q || 1)),
                  'y',
                  Math.floor((65535 * (l.position.y - t.top)) / (r || 1)),
                  't',
                  Math.floor((l.time - f) / 100),
                  'p',
                  qg(a, l.element),
                  'X',
                  l.position.x,
                  'Y',
                  l.position.y
                ]
                q = I(':', q)
                m && (q += ':wh:1')
                Cp(a, p, q, b, c)
                k = l
              }
            }
          })
          return ia(a).D(n(a, 'document'), ['click'], d)
        }),
        Ds = C('trigger.in', function (a, c) {
          c.Jg && Jb(a, E([a, 'yacounter' + c.id + 'inited'], zq), 't.i')
        }),
        Es = C('c.m.p', function (a, c) {
          var b,
            d = N(c)
          return (b = {}), (b.clickmap = w(Ae(a, d), Bp)), b
        }),
        wi = w('form', dc),
        lp = w('form', yb),
        Ap = x(function (a, c) {
          return ra(c, V('settings.form_goals'))
        }, zb),
        Fs = w(!0, Ui),
        Gs = C('s.f.i', function (a, c) {
          var b = []
          ia(a).D(a, ['click'], D(a, 's.f.c', E([a, c, b], zp)))
          ia(a).D(
            a,
            ['submit'],
            D(a, 's.f.e', u(V('target'), E([a, c, b], Fs)))
          )
          Vi(a, c, 'Form goal. Counter ' + c.id + '. Init.')
        }),
        Hs = C('s.f.i', function (a, c) {
          return ra(c, function (b) {
            if (
              n(b, 'settings.button_goals') ||
              -1 !== S(a).href.indexOf('yagoalsbuttons=1')
            )
              ia(a).D(
                a,
                ['click'],
                D(a, 'c.t.c', u(V('target'), E([a, c], ef(a, c, '', yp))))
              ),
                Gb(a, c, 'Button goal. Counter ' + c.id + '. Init.')()
          })
        }),
        Ub,
        Td,
        eh,
        Bc,
        Xf =
          ((Ub = {}),
          (Ub.transaction_id = 'id'),
          (Ub.item_brand = 'brand'),
          (Ub.index = 'position'),
          (Ub.item_variant = 'variant'),
          (Ub.value = 'revenue'),
          (Ub.item_category = 'category'),
          (Ub.item_list_name = 'list'),
          Ub),
        vc =
          ((Td = {}),
          (Td.item_id = 'id'),
          (Td.item_name = 'name'),
          (Td.promotion_name = 'coupon'),
          Td),
        xp = ((eh = {}), (eh.promotion_name = 'name'), eh),
        Ti = 'currencyCode add delete remove purchase checkout detail'.split(
          ' '
        ),
        yd =
          ((Bc = {}),
          (Bc.view_item = { event: 'detail', Aa: vc, Ma: 'products' }),
          (Bc.add_to_cart = { event: 'add', Aa: vc, Ma: 'products' }),
          (Bc.remove_from_cart = { event: 'remove', Aa: vc, Ma: 'products' }),
          (Bc.begin_checkout = { event: 'checkout', Aa: vc, Ma: 'products' }),
          (Bc.purchase = { event: 'purchase', Aa: vc, Ma: 'products' }),
          Bc),
        Ri = C('dl.w', function (a, c, b) {
          function d () {
            var g = n(a, c)
            ;(e = ca(g) && ye(a, g, b)) || (f = W(a, d, 1e3, 'ec.dl'))
          }
          var e,
            f = 0
          d()
          return function () {
            return na(a, f)
          }
        }),
        Is = C('p.e', function (a, c) {
          var b = Ha(a, c)
          if (b) {
            var d = H(a)
            b = b.params
            var e = D(a, 'h.ee', E([a, N(c), b], up))
            return c.Hd
              ? (d.C('ecs', 0), Qi(a, c.Hd, e))
              : ra(c, function (f) {
                  if ((f = n(f, 'settings.ecommerce')))
                    return d.C('ecs', 1), Qi(a, f, e)
                })
          }
        }),
        Ni = x(function (a) {
          return I('[^\\d<>]*', a.split(''))
        }),
        Bm = x(function (a) {
          return new RegExp(Ni(a), 'g')
        }),
        rp = /\S/,
        Gi = w(
          [
            'style',
            'display:inline;margin:0;padding:0;font-size:inherit;color:inherit;line-height:inherit'
          ],
          Gc
        ),
        $k = x(function (a) {
          return cd(a) || !Id(a)
        }),
        Js = C('phc.h', function (a, c) {
          return bk(a) || $k(a)
            ? null
            : ra(c, function (b) {
                if (!n(b, 'settings.phchange')) {
                  var d = Dc(a, '').o('yaHidePhones')
                  d = d ? tb(a, d) : ''
                  ;(b = n(b, 'settings.phhide') || d) && yi(a, c, b)
                }
              })
        }),
        al = x(function (a) {
          a = S(a)
          a = Dq(a.search.substring(1))
          a['_ym_status-check'] = a['_ym_status-check'] || ''
          a._ym_lang = a._ym_lang || 'ru'
          return a
        }),
        Bi = u(al, V('_ym_status-check'), Ga),
        Ks = u(al, V('_ym_lang')),
        Ai = Ya(
          /^https:\/\/(yastatic\.net\/s3\/metrika|s3\.mds\.yandex\.net\/internal-metrika-betas|[\w-]+\.dev\.webvisor\.com|[\w-]+\.dev\.metrika\.yandex\.ru)\/(\w|-|\/|(\.)(?!\.))+\.js$/
        ),
        np = ['form', 'button', 'phone', 'status'],
        fh = [],
        kp = x(
          function (a, c, b) {
            z(u(Pc([a, c, b]), ha), fh)
            if (b.inline) {
              c = zi(b)
              var d = b.data
              b = b.id
              vi(a, c, void 0 === b ? '' : b, void 0 === d ? '' : d)
            } else
              b.resource &&
                Ai(b.resource) &&
                ((a._ym__postMessageEvent = c),
                (a._ym__inpageMode = b.inpageMode),
                (a._ym__initMessage = b.initMessage),
                op(a, b.resource))
          },
          function (a, c, b) {
            return b.id
          }
        ),
        Ls = C('cs.init', function (a, c) {
          var b,
            d = Bi(a)
          if (d && c.id === d && '0' === c.$) {
            var e = zi(((b = {}), (b.lang = Ks(a)), (b.fileId = 'status'), b))
            W(a, E([a, e, '' + d], vi), 0, 'cs')
          }
        }),
        Ms = C('suid.int', function (a, c) {
          var b
          return (
            (b = {}),
            (b.setUserID = function (d, e, f) {
              if (xa(d) || re(a, d)) {
                var g = Ha(a, c)
                d = Gc(['__ym', 'user_id', d])
                g.params(d, e || B, f)
              } else Sd(a, N(c)).error('Incorrect user ID')
            }),
            b
          )
        }),
        Kc = { position: 'absolute' },
        ui = { position: 'fixed' },
        Sf = { borderRadius: '50%' },
        Ns = pb('siteStatistics', function (a, c) {
          if (!bk(a))
            return cc(a)(
              Ua(
                B,
                E(
                  [
                    c,
                    u(V('settings.sm'), ka(1), E([E([a, c.id], ip), B], Pe), ha)
                  ],
                  ra
                )
              )
            )
        }),
        Os = C('up.int', function (a, c) {
          var b
          return (
            (b = {}),
            (b.userParams = D(a, 'up.c', function (d, e, f) {
              var g,
                h = Ha(a, c),
                k = Cd(a, N(c)).warn
              h
                ? La(d)
                  ? ((d = ((g = {}), (g.__ymu = d), g)),
                    (g = h.params) && g(d, e || B, f))
                  : k('Wrong user params')
                : k('No counter instance found')
            })),
            b
          )
        }),
        Ps = /[\*\.\?\(\)]/g,
        Qs = x(function (a, c, b) {
          try {
            var d = b.replace('\\s', ' ').replace(Ps, '')
            Cd(a, '').warn(
              'Function "' +
                d +
                '" has been overridden, this may cause issues with Metrika counter'
            )
          } catch (e) {}
        }, zb),
        Rs = C('r.nn', function (a) {
          If(a).isEnabled &&
            ye(a, Ig, function (c) {
              c.Ba.D(function (b) {
                Qs(a, b[1], b[0])
                Ig.splice(100)
              })
            })
        }),
        Ss = C('e.a.p', function (a, c) {
          var b,
            d = Ha(a, c)
          d = E(
            [
              u(O, Aa(!0)),
              Z(
                Boolean,
                A(w(d, n), ['clickmap', 'trackLinks', 'accurateTrackBounce'])
              )
            ],
            A
          )
          c.Gh && d()
          return (b = {}), (b.enableAll = d), b
        }),
        Ts = w('add', qe),
        Us = w('remove', qe),
        Vs = w('detail', qe),
        Ws = w('purchase', qe),
        Xs =
          'FB_IAB FBAV OKApp GSA/ yandex yango uber EatsKit YKeyboard iOSAppUslugi YangoEats PassportSDK'.split(
            ' '
          ),
        hf = x(function (a) {
          var c = Gk(a)
          a = c.Pg
          if (!c.Pf) return !1
          c = qa('indexOf', a)
          c = Ja(u(c, ka(-1), Sb), Xs)
          var b = /CFNetwork\/[0-9][0-9.]*.*Darwin\/[0-9][0-9.]*/.test(a),
            d = /YaBrowser\/[\d.]+/.test(a),
            e = /Mobile/.test(a)
          return c || b || (d && e) || (!/Safari/.test(a) && e)
        }),
        Ys = ['YangoEats'],
        bm = x(function (a) {
          var c = gb(a)
          if (!c) return !1
          c = qa('indexOf', c)
          return Ja(u(c, ka(-1), Sb), Ys) || pd(a)
        }),
        gp = /([0-9\\.]+) Safari/,
        Zs = /\sYptp\/\d\.(\d+)\s/,
        bl = x(function (a) {
          var c
          a: {
            if ((c = gb(a)) && (c = Zs.exec(c)) && 1 < c.length) {
              c = Ga(c[1])
              break a
            }
            c = 0
          }
          return (50 <= c && 99 >= c) || pf(a, 79) ? !1 : !Qd(a) || hf(a)
        }),
        cl =
          'monospace;sans-serif;serif;Andale Mono;Arial;Arial Black;Arial Hebrew;Arial MT;Arial Narrow;Arial Rounded MT Bold;Arial Unicode MS;Bitstream Vera Sans Mono;Book Antiqua;Bookman Old Style;Calibri;Cambria;Cambria Math;Century;Century Gothic;Century Schoolbook;Comic Sans;Comic Sans MS;Consolas;Courier;Courier New;Garamond;Geneva;Georgia;Helvetica;Helvetica Neue;Impact;Lucida Bright;Lucida Calligraphy;Lucida Console;Lucida Fax;LUCIDA GRANDE;Lucida Handwriting;Lucida Sans;Lucida Sans Typewriter;Lucida Sans Unicode;Microsoft Sans Serif;Monaco;Monotype Corsiva;MS Gothic;MS Outlook;MS PGothic;MS Reference Sans Serif;MS Sans Serif;MS Serif;MYRIAD;MYRIAD PRO;Palatino;Palatino Linotype;Segoe Print;Segoe Script;Segoe UI;Segoe UI Light;Segoe UI Semibold;Segoe UI Symbol;Tahoma;Times;Times New Roman;Times New Roman PS;Trebuchet MS;Verdana;Wingdings;Wingdings 2;Wingdings 3'.split(
            ';'
          ),
        $s = x(function (a) {
          a = ab(a)('canvas')
          var c = n(a, 'getContext')
          if (!c) return null
          try {
            var b = G(c, a)('2d')
            b.font = '72px mmmmmmmmmmlli'
            var d = b.measureText('mmmmmmmmmmlli').width
            return function (e) {
              b.font = '72px ' + e
              return b.measureText('mmmmmmmmmmlli').width === d
            }
          } catch (e) {
            return null
          }
        }),
        dl = Ma(String.prototype.repeat, 'repeat'),
        at = dl
          ? function (a, c) {
              return dl.call(a, c)
            }
          : dp,
        Ph = w(!0, function (a, c, b, d) {
          b = c.length && (b - d.length) / c.length
          if (0 >= b) return d
          c = at(c, b)
          return a ? c + d : d + c
        }),
        Re = [2277735313, 289559509],
        Se = [1291169091, 658871167],
        bt = C('p.cd', function (a, c) {
          if (od(a) || Ne(a)) {
            var b = Ra(a)
            if (ma(b.o('jn'))) {
              b.C('jn', !1)
              var d = a.lk || rd(a) ? function () {} : /./,
                e = Sd(a, N(c))
              d.toString = function () {
                b.C('jn', !0)
                return 'Yandex.Metrika counter is initialized'
              }
              e.log('%c%s', 'color: inherit', d)
            }
          }
        }),
        ct = x(function (a) {
          a = n(a, 'navigator.plugins')
          return !!(a && Pa(a) && Ja(u(V('name'), Ya(/Chrome PDF Viewer/)), a))
        }),
        ic = la(function (a, c) {
          return H(c).o(a, null)
        }),
        ap = { '*': '+', '-': '/', fk: '=', '+': '*', '/': '-', '=': '_' },
        dt = x(function (a) {
          return T(n(a, 'yandex.getSiteUid')) ? a.yandex.getSiteUid() : null
        }),
        Xo = [
          ['domainLookupEnd', 'domainLookupStart'],
          ['connectEnd', 'connectStart'],
          ['responseStart', 'requestStart'],
          ['responseEnd', 'responseStart'],
          ['fetchStart', 'navigationStart'],
          ['redirectEnd', 'redirectStart'],
          [
            function (a, c) {
              return n(c, 'redirectCount') || n(a, 'navigation.redirectCount')
            }
          ],
          ['domInteractive', 'domLoading'],
          ['domContentLoadedEventEnd', 'domContentLoadedEventStart'],
          ['domComplete', 'navigationStart'],
          ['loadEventStart', 'navigationStart'],
          ['loadEventEnd', 'loadEventStart'],
          ['domContentLoadedEventStart', 'navigationStart']
        ],
        rb,
        Wo = [
          ['domainLookupEnd', 'domainLookupStart'],
          ['connectEnd', 'connectStart'],
          ['responseStart', 'requestStart'],
          ['responseEnd', 'responseStart'],
          ['fetchStart'],
          ['redirectEnd', 'redirectStart'],
          ['redirectCount'],
          ['domInteractive', 'responseEnd'],
          ['domContentLoadedEventEnd', 'domContentLoadedEventStart'],
          ['domComplete'],
          ['loadEventStart'],
          ['loadEventEnd', 'loadEventStart'],
          ['domContentLoadedEventStart']
        ],
        si =
          ((rb = {}),
          (rb.responseEnd = 1),
          (rb.domInteractive = 1),
          (rb.domContentLoadedEventStart = 1),
          (rb.domContentLoadedEventEnd = 1),
          (rb.domComplete = 1),
          (rb.loadEventStart = 1),
          (rb.loadEventEnd = 1),
          (rb.unloadEventStart = 1),
          (rb.unloadEventEnd = 1),
          (rb.secureConnectionStart = 1),
          rb),
        Zo = x(vd),
        To = x(Ac),
        Uo = x(function (a) {
          var c = n(a, 'webkitRequestFileSystem')
          if (T(c) && !od(a))
            return new J(G(c, a, 0, 0))
              .then(function () {
                var d = n(a, 'navigator.storage') || {}
                return d.estimate ? d.estimate() : {}
              })
              .then(function (d) {
                return (d = d.quota) && 12e7 > d ? !0 : !1
              })
              ['catch'](w(!0, O))
          if (Kd(a))
            return (c = n(a, 'navigator.serviceWorker')), J.resolve(X(c))
          c = n(a, 'openDatabase')
          if (rd(a) && T(c)) {
            var b = !1
            try {
              c(null, null, null, null)
            } catch (d) {
              b = !0
            }
            return J.resolve(b)
          }
          return J.resolve(
            !n(a, 'indexedDB') &&
              (n(a, 'PointerEvent') || n(a, 'MSPointerEvent'))
          )
        }),
        et = /(\?|&)turbo_uid=([\w\d]+)($|&)/,
        ft = x(function (a, c) {
          var b = $b(a),
            d = S(a).search.match(et)
          return d && 2 <= d.length
            ? ((d = d[2]), c.Cb || b.C('turbo_uid', d), d)
            : (b = b.o('turbo_uid'))
            ? b
            : ''
        }),
        gt = C('pa.plgn', function (a, c) {
          var b = ee(a, c)
          b &&
            b.ca.D(
              ['pluginInfo'],
              D(a, 'c.plgn', function () {
                var d = H(a)
                d.C('cmc', d.o('cmc', 0) + 1)
                return Sq(c, ff)
              })
            )
        }),
        el = bc.split('.'),
        ht = el.pop(),
        fl = I('.', el),
        Ul = x(function (a) {
          a = S(a).hostname.split('.')
          return a[a.length - 1]
        }),
        uh = x(function (a) {
          return (
            -1 !==
            S(a).hostname.search(
              /(?:^|\.)(?:ya|yandex|beru|kinopoisk|edadeal)\.(?:\w+|com?\.\w+)$/
            )
          )
        }),
        it =
          /^(.*\.)?((yandex(-team)?)\.(com?\.)?[a-z]+|(auto|kinopoisk|beru|bringly)\.ru|ya\.(ru|cc)|yadi\.sk|yastatic\.net|meteum\.(ai|es|io)|.*\.yandex|turbopages\.org|turbo\.site)$/,
        ce = x(function (a) {
          a = S(a).hostname
          var c = !1
          a && (c = -1 !== a.search(it))
          return c
        }),
        jt =
          /^(.*\.)?((yandex(-team)?)\.(com?\.)?[a-z]+|(auto|kinopoisk|beru|bringly)\.ru|ya\.(ru|cc)|yadi\.sk|.*\.yandex|turbopages\.org|turbo\.site)$/,
        Io = x(function (a) {
          a = S(a).hostname
          var c = !1
          a && (c = -1 !== a.search(jt))
          return c
        }),
        gl = ta.$a + '//' + bc + '/metrika',
        hl = gl + '/metrika_match.html',
        sb,
        db,
        Vl =
          ((sb = {}),
          (sb.am = 'com.am'),
          (sb.tr = 'com.tr'),
          (sb.ge = 'com.ge'),
          (sb.il = 'co.il'),
          (sb['\u0440\u0444'] = 'ru'),
          (sb['xn--p1ai'] = 'ru'),
          (sb['\u0443\u043a\u0440'] = 'ua'),
          (sb['xn--j1amh'] = 'ua'),
          (sb['\u0431\u0435\u043b'] = 'by'),
          (sb['xn--90ais'] = 'by'),
          sb),
        il = {
          'mc.edadeal.ru': /^([^/]+\.)?edadeal\.ru$/,
          'mc.yandexsport.ru': /^([^/]+\.)?yandexsport\.ru$/,
          'mc.kinopoisk.ru': /^([^/]+\.)?kinopoisk\.ru$/
        },
        Wl =
          ((db = {}),
          (db.ka = 'ge'),
          (db.ro = 'md'),
          (db.tg = 'tj'),
          (db.tk = 'tm'),
          (db.et = 'ee'),
          (db.hy = 'com.am'),
          (db.he = 'co.li'),
          (db.ky = 'kg'),
          (db.uk = 'ua'),
          (db.be = 'by'),
          (db.tr = 'com.tr'),
          (db.kk = 'kz'),
          db),
        Po = 'ar:1:pv:1:v:' + ta.pb + ':vf:' + Tc.version,
        Qo = ta.$a + '//' + bc + '/watch/' + ta.Vg,
        jl = {},
        kt = C('exps.int', function (a, c) {
          var b
          return (
            (b = {}),
            (b.experiments = function (d, e, f) {
              var g, h
              void 0 === e && (e = B)
              if (d && 0 < d.length) {
                var k = sa(a, 'e', c),
                  l = Bd(c).url
                d = k(
                  {
                    H: Ea(((g = {}), (g.ex = 1), (g.ar = 1), g)),
                    G:
                      ((h = {}),
                      (h['page-url'] = l || S(a).href),
                      (h.exp = d),
                      h)
                  },
                  c
                )
                return Mc(a, 'exps.s', d, e, f)
              }
            }),
            b
          )
        }),
        jf = [],
        lt = C('p.fh', function (a, c) {
          var b, d
          void 0 === c && (c = !0)
          var e = Ra(a),
            f = fa(a),
            g = e.o('wasSynced'),
            h = { id: 3, $: '0' }
          return c && g && g.time + 864e5 > f(aa)
            ? J.resolve(g)
            : sa(
                a,
                'f',
                h
              )(
                {
                  H: Ea(((b = {}), (b.pv = 1), b)),
                  G:
                    ((d = {}),
                    (d['page-url'] = S(a).href),
                    (d['page-ref'] = a.document.referrer),
                    d)
                },
                h
              )
                .then(function (k) {
                  var l
                  k =
                    ((l = {}),
                    (l.time = f(aa)),
                    (l.params = n(k, 'settings')),
                    (l.bkParams = n(k, 'userData')),
                    l)
                  e.C('wasSynced', k)
                  return k
                })
                ['catch'](D(a, 'f.h'))
        }),
        mt = la(function (a, c) {
          0 === parseFloat(n(c, 'settings.c_recp')) &&
            (a.ke.C('ymoo' + a.va, a.Gg(kb)),
            a.Cd && a.Cd.destruct && a.Cd.destruct())
        }),
        qi = u(V('settings.pcs'), ka('1')),
        Fo = [
          [
            ["'(-$&$&$'", 30102, 0],
            ["'(-$&$&$'", 29009, 0]
          ],
          [
            ['oWdZ[nc[jh_YW$Yec', 30103, 1],
            ['oWdZ[nc[jh_YW$Yec', 29010, 1]
          ]
        ],
        Go = [
          [['oWdZ[nc[jh_YW$Yec', 30103, 1]],
          [['oWdZ[nc[jh_YW$Yec', 29010, 1]]
        ],
        ri = { G: { t: 'UV|L7,!"T[rwe&D_>ZIb\\aW#98Y.PC6k' } },
        pi = { id: 42822899, $: '0' },
        $e,
        Mo = (($e = {}), ($e.s = 'p'), ($e['8'] = 'i'), $e),
        Jo = pb('csp', function (a, c) {
          return sa(a, 's', c)({}, ['https://ymetrica1.com/watch/3/1'])
        }),
        gh = 'et w v z i u vf'.split(' '),
        yo = {
          L: 'stamp',
          M: 'frameId',
          ba: 'meta',
          jf: 'base',
          Lf: 'hasBase',
          ff: 'address',
          Mg: 'ua',
          ze: 'prev',
          Xf: 'namespace',
          Sc: 'keystrokes',
          Qf: 'isMeta',
          Tc: 'modifier',
          Fb: 'pageWidth',
          Eb: 'pageHeight',
          Ag: 'startNode',
          rf: 'endNode',
          Sg: 'zoomFrom',
          Ug: 'zoomTo',
          level: 'level',
          duration: 'duration',
          Ha: 'i',
          Wc: 'o',
          n: 'n',
          r: 'r',
          Ac: 'ct',
          Ob: 'at',
          Yf: 'nm',
          Zf: 'ns',
          ue: 'pa',
          xe: 'pr',
          ne: 'nx',
          Qa: 'h',
          Oa: 'changes',
          df: 'a',
          hf: 'b',
          wd: 'c',
          te: 'op'
        },
        zo = ['attributes', 'attrs'],
        af = (function () {
          function a (c) {
            this.l = c
          }
          a.prototype.Da = function (c) {
            var b = ne(c)
            c = A(G(this.Ua, this), b)
            return xf(
              lb(
                this.l,
                A(function (d, e) {
                  var f
                  return y({}, b[e], ((f = {}), (f.data = d), f))
                }, c)
              )
            )
          }
          a.prototype.Ua = function (c) {
            var b = c.data
            'string' !== typeof b && (b = lb(this.l, ne(c.data)))
            return b
          }
          a.prototype.ab = function (c) {
            return encodeURIComponent(c).length
          }
          a.prototype.ld = function (c, b) {
            for (var d = Math.ceil(c.length / b), e = [], f = 0; f < b; f += 1)
              e.push(c.slice(f * d, d * (f + 1)))
            return e
          }
          a.prototype.isEnabled = function () {
            return !!this.l.JSON
          }
          return a
        })(),
        wo = x(function (a) {
          function c (f, g, h, k) {
            d[0] = g
            h[k] = e[3]
            h[k + 1] = e[2]
            h[k + 2] = e[1]
            h[k + 3] = e[0]
          }
          function b (f, g, h, k) {
            d[0] = g
            h[k] = e[0]
            h[k + 1] = e[1]
            h[k + 2] = e[2]
            h[k + 3] = e[3]
          }
          if (
            'undefined' === typeof a.Float32Array ||
            'undefined' === typeof a.Uint8Array
          )
            return xo
          var d = new Float32Array([-0]),
            e = new Uint8Array(d.buffer)
          return 128 === e[3] ? b : c
        }),
        so = mi(!1),
        ro = mi(!0),
        nt = {
          Ij: 'topics',
          pj: 'publicationDate',
          mj: 'pageUrlCanonical',
          Sj: 'updateDate',
          lh: 'authors',
          ih: 'articleInfo',
          uj: 'rubric',
          qj: 'publishersHeader',
          bb: 'involvedTime',
          lj: 'pageTitle',
          Si: 'maxScrolled',
          lf: 'chars',
          jh: 'articleMeta'
        },
        ot = (function () {
          function a (c) {
            this.l = c
            this.Yb = u(
              pa,
              xd(function (b, d) {
                b[d[1]] = d[0]
                return b
              }, {})
            )(nt)
          }
          a.prototype.Eg = function (c) {
            var b,
              d = this.ye(c.data)
            return {
              L: fa(this.l)(Ag),
              data: ((b = {}), (b[this.Yb[c.type]] = d), b)
            }
          }
          a.prototype.ye = function (c) {
            var b = this
            return ca(c)
              ? A(G(this.ye, this), c)
              : La(c)
              ? u(
                  pa,
                  xd(function (d, e) {
                    var f = e[0]
                    d[b.Yb[f] || f] = b.ye(e[1])
                    return d
                  }, {})
                )(c)
              : c
          }
          a.prototype.Ua = function (c) {
            return le(this.l, Nf, this.Eg(c))(Me(B))
          }
          a.prototype.ab = function (c) {
            return c[0]
          }
          a.prototype.ld = function (c) {
            return [c]
          }
          a.prototype.Da = function (c) {
            var b = this
            c = le(this.l, fi, { buffer: A(G(this.Eg, this), c) })
            return lc(
              this.l,
              c,
              20,
              Le
            )(
              Xe(function (d) {
                d = Kf(b.l, d.slice(-4))
                return lc(b.l, d, 20, Le)
              })
            )(
              Vg(function (d) {
                return d[d.length - 1]
              })
            )
          }
          a.prototype.isEnabled = function () {
            return ei(this.l)
          }
          return a
        })(),
        kl =
          'resize scroll mousemove mousedown click windowfocus keydown orientationchange change focus touchmove touchstart'.split(
            ' '
          ),
        pt =
          'id pageTitle stamp chars authors updateDate publicationDate pageUrlCanonical topics rubric'.split(
            ' '
          ),
        qt = (function () {
          function a (c, b, d, e, f) {
            var g = this
            this.Qc = !1
            this.ba = {}
            this.scroll = { x: 0, y: 0 }
            this.bb = this.Vf = 0
            this.le = this.dg = ''
            this.ha = []
            this.Le = this.Xa = 0
            this.Kb = { Qa: 0, qd: 0 }
            this.buffer = []
            this.Wg = pt
            this.flush = function () {
              g.Le = W(g.l, g.flush, 2500)
              var h = g.Qd()
              if (g.buffer.length || h) {
                var k = Dd(g.buffer)
                h && k.push(h)
                g.dg = g.le
                g.ra.Da(k)(
                  Ua(D(g.l, 'p.b.st'), function (l) {
                    l && g.ec(l)
                  })
                )
              }
            }
            this.ec = e
            this.ra = d
            this.oc = G(this.oc, this)
            this.Qd = G(this.Qd, this)
            this.flush = G(this.flush, this)
            this.l = c
            this.va = f
            this.gd = b
            this.ee = 'pai' + b.id
            this.Vb()
            this.tf = ia(this.l)
            this.time = fa(this.l)
            this.Ng()
            this.Td = H(this.l)
          }
          a.prototype.start = function () {
            var c = this
            this.Le = W(this.l, this.flush, 2500)
            if (!this.Qc) {
              this.Cj()
              var b = this.Td.o(this.ee, []),
                d = !b.length
              b.push(G(this.Oi, this))
              this.Td.Va(this.ee, b)
              d && this.mg()
              var e = function (f, g) {
                return (f.Ie || 0) <= (g.Ie || 0) ? g : f
              }
              ia(this.l).D(this.l, ['click'], function (f) {
                if (c.ha.length) {
                  f = Zi(f)
                  var g = S(c.l).hostname,
                    h
                  if ((h = f)) h = xe(f.hostname) === xe(g)
                  h &&
                    ((f = M(e, c.ha[0], c.ha).id),
                    (g = ac(c.l)),
                    Vc(c.l, c.va.split(':')[0]).C('pai', f + '-' + g))
                }
              })
              this.oc({ type: 'page', target: this.l })
            }
          }
          a.prototype.stop = function () {
            this.Qj()
            this.Qc = !0
            this.flush()
            na(this.l, this.Le)
          }
          a.prototype.Sf = function (c) {
            return dc('html', this.l, c) !== this.l.document.documentElement
          }
          a.prototype.mg = function () {
            var c = this
            D(this.l, 'p.ic' + this.gd.id, function () {
              if (!c.Qc) {
                var b = c.Td.o(c.ee),
                  d = c.gd.Ph()
                z(function (e) {
                  var f = A(function (g) {
                    return y({}, g)
                  }, d)
                  T(e) && e(f)
                }, b)
                c.Xa = W(c.l, G(c.mg, c), 1e3, 'p')
              }
            })()
          }
          a.prototype.Oi = function (c) {
            this.Qc || (this.Rj(c), this.Tj(), this.sh())
          }
          a.prototype.oc = function (c) {
            var b = this
            D(this.l, 'p.ec.' + this.gd.id, function () {
              var d, e
              try {
                var f = c.type
                var g = c.target
              } catch (p) {
                return
              }
              var h = 'page' === f
              if ('scroll' === f || h) {
                var k = [
                  b.l,
                  b.l.document,
                  b.l.document.documentElement,
                  yc(b.l)
                ]
                K(g, k) && b.Vb()
              }
              ;('resize' === f || h) && b.Ng()
              f = b.time(aa)
              var l = Math.min(f - b.Vf, 5e3)
              b.bb += Math.round(l)
              b.Vf = f
              if (b.ba && b.scroll && b.Kb) {
                var m = b.Kb.Qa * b.Kb.qd
                b.ha = A(function (p) {
                  var q = y({}, p),
                    r = b.ba[q.id],
                    t = Ic(p.Qb)
                  if (!r || b.Sf(q.element) || !t) return q
                  p = b.l.Math
                  r = p.max((b.scroll.y + b.Kb.Qa - r.y) / r.height, 0)
                  var v = t.height * t.width
                  t = Fj(b.l, t, b.Kb)
                  q.Ie = t / m
                  q.visibility = t / v
                  if (0.9 <= q.visibility || 0.1 <= q.Ie) q.involvedTime += l
                  q.maxScrolled = p.round(1e4 * r) / 1e4
                  return q
                }, b.ha)
                nb(
                  b.l,
                  ((d = {}),
                  (d.name = 'publishers'),
                  (d.counterKey = b.va),
                  (d.data =
                    ((e = {}),
                    (e.involvedTime = b.bb),
                    (e.contentItems = b.ha.map(function (p) {
                      var q
                      return y(((q = {}), (q.contentElement = p.Qb), q), p)
                    })),
                    e)),
                  d)
                )
              }
            })()
          }
          a.prototype.Rj = function (c) {
            var b = A(function (d) {
              return d.id
            }, this.ha)
            this.ha = this.ha.concat(
              Z(function (d) {
                return !K(d.id, b)
              }, c)
            )
          }
          a.prototype.Ng = function () {
            var c = Je(this.l) || Rc(this.l)
            this.Kb = { qd: c[0], Qa: c[1] }
          }
          a.prototype.Tj = function () {
            var c = this
            D(this.l, 'p.um.' + this.gd.id, function () {
              var b = []
              c.Vb()
              c.ba = M(
                function (d, e) {
                  var f
                  if (c.Sf(e.element)) b.push(e), delete d[e.id]
                  else {
                    var g =
                      ((f = {}),
                      (f.id = e.id),
                      (f.involvedTime = Math.max(e.involvedTime, 0)),
                      (f.maxScrolled = e.maxScrolled || 0),
                      (f.chars = e.update ? e.update('chars') || 0 : 0),
                      f)
                    e.Qb &&
                      (f = Ic(e.Qb)) &&
                      ((g.x = Math.max(Math.round(f.left) + c.scroll.x, 0)),
                      (g.y = Math.max(Math.round(f.top) + c.scroll.y, 0)),
                      (g.width = Math.round(f.width)),
                      (g.height = Math.round(f.height)))
                    d[e.id] = g
                  }
                  return d
                },
                {},
                c.ha
              )
              z(function (d) {
                d = ze(c.l)(d, c.ha)
                c.ha.splice(d, 1)
              }, b)
            })()
          }
          a.prototype.Qd = function () {
            var c,
              b,
              d = A(w(this.ba, n), da(this.ba))
            return d.length && ((this.le = lb(this.l, d)), this.dg !== this.le)
              ? ((c = {}),
                (c.type = 'publishersHeader'),
                (c.data =
                  ((b = {}),
                  (b.articleMeta = d || []),
                  (b.involvedTime = this.bb),
                  b)),
                c)
              : null
          }
          a.prototype.sh = function () {
            var c = this
            if (this.ha.length) {
              var b = A(
                function (d) {
                  var e,
                    f = M(
                      function (g, h) {
                        d[h] && (g[h] = d[h])
                        return g
                      },
                      {},
                      c.Wg
                    )
                  d.wg = !0
                  return (
                    (e = {}),
                    (e.type = 'articleInfo'),
                    (e.stamp = f.stamp),
                    (e.data = f),
                    e
                  )
                },
                Z(function (d) {
                  return !d.wg
                }, this.ha)
              )
              b.length &&
                ((this.buffer = this.buffer.concat(b)),
                Eb(this.l, this.va, 'Publisher content info found: ', b))
            }
          }
          a.prototype.Cj = function () {
            this.tf.D(this.l, kl, this.oc)
          }
          a.prototype.Qj = function () {
            this.tf.kc(this.l, kl, this.oc)
          }
          a.prototype.Vb = function () {
            this.scroll = {
              x:
                this.l.pageXOffset ||
                n(this.l, 'document.documentElement.scrollLeft') ||
                0,
              y:
                this.l.pageYOffset ||
                n(this.l, 'document.documentElement.scrollLeft') ||
                0
            }
          }
          return a
        })(),
        Ud,
        hh = ((Ud = {}), (Ud[1] = 500), (Ud[2] = 500), (Ud[3] = 0), Ud),
        ih = (function () {
          function a (c, b) {
            var d,
              e = this
            this.id = 'a'
            this.Yd = !1
            this.Tb = {}
            this.Hb = {
              'schema.org':
                'Article NewsArticle Movie BlogPosting Review Recipe Answer'.split(
                  ' '
                ),
              ag: ['article']
            }
            this.We = ((d = {}), (d.Answer = 3), (d.Review = 2), d)
            this.yh = x(function (f, g) {
              Eb(
                e.l,
                e.va,
                'Warning: content has only ' +
                  g.chars +
                  ' chars. Required ' +
                  hh[g.type],
                g
              )
            })
            this.l = c
            this.root = Xb(c)
            this.va = b
          }
          a.prototype.Pa = function (c) {
            return c.element
          }
          a.prototype.Ef = function (c, b) {
            var d = this,
              e
            D(this.l, 'P.s.' + b, function () {
              e = d.Tb[b].call(d, c)
            })()
            return e
          }
          a.prototype.oj = function (c) {
            var b = y({}, c)
            this.Yd &&
              !b.id &&
              K(c.type, [3, 2]) &&
              ((c = I(', ', A(V('name'), b.authors || []))),
              (b.pageTitle = c + ': ' + b.pageTitle))
            b.pageTitle || (b.pageTitle = this.ni(b.Qb))
            b.pageUrlCanonical ||
              ((c = b.id),
              (b.pageUrlCanonical = (
                'string' !== typeof c ? 0 : /^(https?:)\/\//.test(c)
              )
                ? b.id
                : this.li()))
            b.id || (b.id = b.pageTitle || b.pageUrlCanonical)
            return b
          }
          a.prototype.Ga = function (c) {
            var b = this,
              d = {},
              e = this.Pa(c)
            if (!e) return null
            d.type = c.type
            z(function (g) {
              d[g] = b.Ef(c, g)
            }, da(this.Tb))
            var f = fa(this.l)
            d.stamp = f(Ag)
            d.element = c.element
            d.Qb = e
            d = this.oj(d)
            d.id = d.id ? pc(d.id) : 1
            d.update = function (g) {
              return b.Pa(c) ? b.Ef(c, g) : void 0
            }
            return d
          }
          a.prototype.ni = function (c) {
            for (var b = 1; 5 >= b; b += 1) {
              var d = Za(qc('h' + b, c))
              if (d) return d
            }
          }
          a.prototype.li = function () {
            var c = qc('[rel="canonical"]', this.root)
            if (c) return c.href
          }
          a.prototype.Jf = function () {
            return 1
          }
          a.prototype.Gc = function () {
            return []
          }
          a.prototype.Ph = function () {
            var c = this,
              b = this.Gc(),
              d = 1
            return M(
              function (e, f) {
                var g = c.Ga({ element: f, type: c.Jf(f) }) || []
                ca(g) || (g = [g])
                g = M(
                  function (h, k) {
                    var l = h.values,
                      m = h.Mf
                    k && k.chars > hh[k.type] && !K(k.id, m)
                      ? (l.push(k), m.push(k.id))
                      : k && k.chars <= hh[k.type] && c.yh(k.id, k)
                    return { values: l, Mf: m }
                  },
                  { values: [], Mf: A(V('id'), e) },
                  g
                ).values
                return e.concat(
                  A(function (h) {
                    var k
                    h = y(
                      ((k = { index: d, wg: !1 }), (k.involvedTime = 0), k),
                      h
                    )
                    d += 1
                    return h
                  }, g)
                )
              },
              [],
              b
            )
          }
          return a
        })(),
        ll = (function (a) {
          function c () {
            var b,
              d = (null !== a && a.apply(this, arguments)) || this
            d.id = 'j'
            d.Yd = !0
            d.pf = I(',', [
              'script[type="application/ld+json"]',
              'script[type="application/json+ld"]',
              'script[type="ld+json"]',
              'script[type="json+ld"]'
            ])
            d.Tb =
              ((b = {}),
              (b.id = function (e) {
                var f = e.data['@id']
                e = e.data.mainEntity || e.data.mainEntityOfPage
                !f && e && (f = e['@id'])
                return f
              }),
              (b.chars = function (e) {
                return 'string' === typeof e.data.text
                  ? e.data.text.length
                  : Qb(this.Pa(e)).length
              }),
              (b.authors = function (e) {
                var f = []
                f = f.concat(this.Fc(e.data, 'author'))
                f = f.concat(this.Fc(e.data.mainEntity, 'author'))
                return f.concat(this.Fc(e.data.mainEntityOfPage, 'author'))
              }),
              (b.pageTitle = function (e) {
                var f = e.data.headline || ''
                e.data.hk && (f += ' ' + e.data.alternativeHeadline)
                '' === f &&
                  (e.data.name
                    ? (f = e.data.name)
                    : e.data.itemReviewed && (f = e.data.itemReviewed))
                3 === e.type &&
                  e.data.parentItem &&
                  (f = e.data.parentItem.text)
                return f
              }),
              (b.updateDate = function (e) {
                return e.data.dateModified || ''
              }),
              (b.publicationDate = function (e) {
                return e.data.datePublished || ''
              }),
              (b.pageUrlCanonical = function (e) {
                return e.data.url
              }),
              (b.topics = function (e) {
                return this.Fc(e.data, 'about', ['name', 'alternateName'])
              }),
              (b.rubric = function (e) {
                var f = this,
                  g = this.Pa(e)
                e = Z(
                  Boolean,
                  A(function (h) {
                    if ((h = tb(f.l, Qb(h)))) {
                      var k = f.Ff(h)
                      if (k)
                        return M(
                          function (l, m) {
                            return l
                              ? l
                              : 'BreadcrumbList' === m['@type']
                              ? m
                              : l
                          },
                          null,
                          k
                        )
                      if ('BreadcrumbList' === h['@type']) return h
                    }
                    return null
                  }, [e.element].concat(
                    yb(
                      this.pf,
                      document.body === g ? document.documentElement : g
                    )
                  ))
                )
                return e.length && ((e = e[0].itemListElement), ca(e))
                  ? Z(
                      Boolean,
                      A(function (h) {
                        return La(h) &&
                          h.item &&
                          La(h.item) &&
                          !f.l.isNaN(h.position)
                          ? {
                              name: h.item.name || h.name,
                              position: h.position
                            }
                          : null
                      }, e)
                    )
                  : []
              }),
              b)
            return d
          }
          Ka(c, a)
          c.prototype.Fc = function (b, d, e) {
            void 0 === e && (e = ['name'])
            if (!b || !b[d]) return []
            b = ca(b[d]) ? b[d] : [b[d]]
            b = Z(
              O,
              A(function (f) {
                return f
                  ? 'string' === typeof f
                    ? f
                    : M(
                        function (g, h) {
                          return g || '' + f[h]
                        },
                        '',
                        e
                      )
                  : null
              }, b)
            )
            return A(function (f) {
              var g
              return (g = {}), (g.name = f), g
            }, b)
          }
          c.prototype.Pa = function (b) {
            var d = b.element,
              e = b.data['@id'],
              f = b.data.url
            b = null
            f && 'string' === typeof f && (b = this.xf(f))
            !b && e && 'string' === typeof e && (b = this.xf(e))
            b ||
              ((b = e = d.parentNode),
              !dc('head', this.l, d) && e && 0 !== Qb(e).length) ||
              (b = this.l.document.body)
            return b
          }
          c.prototype.xf = function (b) {
            try {
              var d = Hc(this.l, b).hash
              if (d) {
                var e = qc(d, this.l.document.body)
                if (e) return e
              }
            } catch (f) {}
            return null
          }
          c.prototype.ve = function (b) {
            return this.We[b['@type']] || 1
          }
          c.prototype.Ga = function (b) {
            var d = this,
              e = b.element
            if (
              !b.data &&
              ((b.data = tb(this.l, Qb(e))),
              !b.data ||
                (!/schema\.org/.test(b.data['@context']) && !ca(b.data)))
            )
              return null
            var f = this.Ff(b.data)
            if (f)
              return A(function (h) {
                if (!K(h['@type'], d.Hb['schema.org'])) return null
                h = { element: e, data: h, type: d.ve(h) }
                return a.prototype.Ga.call(d, h)
              }, f)
            if ('QAPage' === b.data['@type']) {
              var g = b.data.mainEntity || b.data.mainEntityOfPage
              if (!g) return null
            }
            'Question' === b.data['@type'] && (g = b.data)
            return g
              ? ((b = nc(w(g, n), ['acceptedAnswer', 'suggestedAnswer'])),
                A(function (h) {
                  var k
                  if (!h || !K(h['@type'], d.Hb['schema.org'])) return null
                  h = {
                    element: e,
                    type: d.ve(h),
                    data: y(((k = {}), (k.parentItem = g), k), h)
                  }
                  return a.prototype.Ga.call(d, h)
                }, b))
              : K(b.data['@type'], this.Hb['schema.org'])
              ? a.prototype.Ga.call(this, y(b, { type: this.ve(b.data) }))
              : null
          }
          c.prototype.Gc = function () {
            return yb(this.pf, this.root)
          }
          c.prototype.Ff = function (b) {
            return (ca(b) && b) || (b && ca(b['@graph']) && b['@graph'])
          }
          return c
        })(ih),
        jh = (function (a) {
          function c () {
            var b,
              d = (null !== a && a.apply(this, arguments)) || this
            d.id = 's'
            d.Yd = !0
            d.Pj = qa(
              'exec',
              new RegExp('schema.org\\/(' + I('|', da(d.We)) + ')$')
            )
            d.Tb =
              ((b = {}),
              (b.id = function (e) {
                e = e.element
                var f = cb(this.l, e, 'identifier')
                return f
                  ? Za(f)
                  : (f = cb(this.l, e, 'mainEntityOfPage')) &&
                    f.getAttribute('itemid')
                  ? f.getAttribute('itemid')
                  : null
              }),
              (b.chars = function (e) {
                var f = 0
                e = e.element
                for (
                  var g = [
                      'articleBody',
                      'reviewBody',
                      'recipeInstructions',
                      'description',
                      'text'
                    ],
                    h = 0;
                  h < g.length;
                  h += 1
                ) {
                  var k = cb(this.l, e, g[h])
                  if (k) {
                    f = Za(k).length
                    break
                  }
                }
                e = Qb(e)
                0 === f && e && (f += e.length)
                return f
              }),
              (b.topics = function (e) {
                var f = this,
                  g = Pd(this.l, e.element, 'about')
                return A(function (h) {
                  var k = { name: Za(h) }
                  if ((g = cb(f.l, h, 'name'))) k.name = Za(g)
                  return k
                }, g)
              }),
              (b.rubric = function (e) {
                var f = this
                ;(e = qc(
                  '[itemtype$="schema.org/BreadcrumbList"]',
                  e.element
                )) ||
                  (e = qc('[itemtype$="schema.org/BreadcrumbList"]', this.root))
                return e
                  ? A(function (g) {
                      return {
                        name: Za(cb(f.l, g, 'name')),
                        position: Za(cb(f.l, g, 'position'))
                      }
                    }, Pd(this.l, e, 'itemListElement'))
                  : []
              }),
              (b.updateDate = function (e) {
                return (e = cb(this.l, e.element, 'dateModified')) ? rk(e) : ''
              }),
              (b.publicationDate = function (e) {
                return (e = cb(this.l, e.element, 'datePublished')) ? rk(e) : ''
              }),
              (b.pageUrlCanonical = function (e) {
                e = Pd(this.l, e.element, 'url')
                if (e.length) {
                  var f = e[0]
                  return f.href ? f.href : Za(e)
                }
                return null
              }),
              (b.pageTitle = function (e) {
                var f = '',
                  g = e.element,
                  h = cb(this.l, g, 'headline')
                h && (f += Za(h))
                ;(h = cb(this.l, g, 'alternativeHeadline')) &&
                  (f += ' ' + Za(h))
                '' === f &&
                  ((h = cb(this.l, g, 'name')) ||
                    (h = cb(this.l, g, 'itemReviewed')),
                  h && (f += Za(h)))
                3 === e.type &&
                  (e = dc('[itemtype$="schema.org/Question"]', this.l, g)) &&
                  (e = cb(this.l, e, 'text')) &&
                  (f += Za(e))
                return f
              }),
              (b.authors = function (e) {
                var f = this
                e = Pd(this.l, e.element, 'author')
                return A(function (g) {
                  var h,
                    k = ((h = {}), (h.name = ''), h)
                  ;/.+schema.org\/(Person|Organization)/.test(
                    g.getAttribute('itemtype') || ''
                  ) &&
                    (h = cb(f.l, g, 'name')) &&
                    (k.name = Za(h))
                  k.name ||
                    (k.name =
                      g.getAttribute('content') ||
                      Qb(g) ||
                      g.getAttribute('href'))
                  return k
                }, e)
              }),
              b)
            return d
          }
          Ka(c, a)
          c.prototype.Jf = function (b) {
            b = b.getAttribute('itemtype') || ''
            return (b = this.Pj(b)) ? this.We[b[1]] : 1
          }
          c.prototype.Ga = function (b) {
            return b.element && Qb(b.element).length
              ? a.prototype.Ga.call(this, b)
              : null
          }
          c.prototype.Gc = function () {
            var b = I(
              ',',
              A(function (d) {
                return '[itemtype$="schema.org/' + d + '"]'
              }, this.Hb['schema.org'])
            )
            return yb(b, this.root)
          }
          return c
        })(ih),
        ml = (function (a) {
          function c (b, d) {
            var e,
              f = a.call(this, b, d) || this
            f.id = 'o'
            f.Tb =
              ((e = {}),
              (e.chars = function (g) {
                g = this.Pa(g)
                return Qb(g).length
              }),
              (e.authors = function (g) {
                return this.Md(g.data.author)
              }),
              (e.pageTitle = function (g) {
                return this.Kc(g.data.title) || ''
              }),
              (e.updateDate = function (g) {
                return this.Kc(g.data.modified_time)
              }),
              (e.publicationDate = function (g) {
                return this.Kc(g.data.published_time)
              }),
              (e.pageUrlCanonical = function (g) {
                return this.Kc(g.data.url)
              }),
              (e.rubric = function (g) {
                return this.Md(g.data.section)
              }),
              (e.topics = function (g) {
                return this.Md(g.data.tag)
              }),
              e)
            f.Hh = new RegExp('^(og:)?((' + I('|', f.Hb.ag) + '):)?')
            return f
          }
          Ka(c, a)
          c.prototype.Md = function (b) {
            var d
            return b
              ? ca(b)
                ? A(function (e) {
                    var f
                    return (f = {}), (f.name = e), f
                  }, b)
                : [((d = {}), (d.name = b), d)]
              : []
          }
          c.prototype.Kc = function (b) {
            return ca(b) ? (b.length ? b[0] : null) : b
          }
          c.prototype.Gc = function () {
            var b = yb('meta[property="og:type"]', this.l.document.body)
            return [this.l.document.head].concat(b)
          }
          c.prototype.bi = function (b) {
            var d = this,
              e = b.element,
              f = {},
              g = this.Pa(b)
            e = yb('meta[property]', e === this.l.document.head ? e : g)
            if (e.length)
              z(function (h) {
                try {
                  if (
                    h.parentNode === g ||
                    h.parentNode === d.l.document.head
                  ) {
                    var k = h.getAttribute('property').replace(d.Hh, ''),
                      l = Za(h)
                    f[k]
                      ? ca(f[k])
                        ? f[k].push(l)
                        : (f[k] = [f[k], l])
                      : (f[k] = l)
                  }
                } catch (m) {
                  pe(d.l, 'og.ed', m)
                }
              }, e)
            else return null
            return K(f.type, this.Hb.ag) ? y(b, { data: f }) : null
          }
          c.prototype.Pa = function (b) {
            b = b.element
            var d = this.l.document
            return b === d.head ? d.body : b.parentNode
          }
          c.prototype.Ga = function (b) {
            return (b = this.bi(b)) ? a.prototype.Ga.call(this, b) : null
          }
          return c
        })(ih),
        Vd = {}
      ll && (Vd.json_ld = ll)
      jh && ((Vd.schema = jh), (Vd.microdata = jh))
      ml && (Vd.opengraph = ml)
      var rt = C('p.p', function (a, c) {
          function b (l) {
            var m = y({}, k)
            m.Y.ea = l
            return e(m, c)['catch'](D(a, 's.ww.p'))
          }
          if (!Ca('querySelectorAll', a.document.querySelectorAll))
            return J.resolve()
          var d = [new af(a)]
          d.unshift(new ot(a))
          var e = sa(a, 'p', c),
            f = bb(function (l) {
              return l.isEnabled()
            }, d)
          d = Ea()
          var g = Vc(a, c.id),
            h = g.o('pai')
          h && (g.Sb('pai'), d.C('pai', h))
          var k = { G: {}, H: d, Sa: { Zd: !(f instanceof af) }, Y: {} }
          return ra(
            c,
            D(a, 'ps.s', function (l) {
              if ((l = n(l, 'settings.publisher.schema'))) {
                ak(c) && (l = 'microdata')
                var m = Vd[l]
                if (m && f) {
                  var p = N(c)
                  m = new m(a, p)
                  new qt(a, m, f, b, p).start()
                  Eb(a, p, 'Publishers analytics schema "' + l + '"')
                }
              }
            })
          )
        }),
        st = (function () {
          function a (c, b) {
            this.l = c
            this.$h = b
          }
          a.prototype.Da = function (c) {
            return xf(nc(G(this.Ua, this), c))
          }
          a.prototype.Ua = function (c, b) {
            var d = this,
              e = [],
              f = this.$h(this.l, b && b.type, c.type)
            f &&
              (e = nc(function (g) {
                return g({ l: d.l, sa: c }) || []
              }, f))
            return e
          }
          a.prototype.ab = function (c) {
            return c.length
          }
          a.prototype.ld = function (c) {
            return [c]
          }
          a.prototype.isEnabled = function () {
            return !0
          }
          return a
        })(),
        nl = (function () {
          function a (c, b, d) {
            this.qf = 0
            this.we = 1
            this.rd = 5e3
            this.l = c
            this.ra = b
            this.ec = d
          }
          a.prototype.kd = function () {
            this.qf = W(
              this.l,
              u(G(this.flush, this), G(this.kd, this)),
              this.rd,
              'b.f'
            )
          }
          a.prototype.send = function (c, b) {
            var d = this.ec(c, b || [], this.we)
            this.we += 1
            return d
          }
          a.prototype.push = function () {}
          a.prototype.flush = function () {}
          return a
        })(),
        mn = (function (a) {
          function c (b, d, e) {
            b = a.call(this, b, d, e) || this
            b.buffer = []
            b.Xg = 7500
            b.rd = 3e4
            b.kd()
            return b
          }
          Ka(c, a)
          c.prototype.push = function (b, d) {
            var e = this.ra.Ua(b, d)
            Oa(this.buffer, e)
            this.ra.ab(this.buffer) > this.Xg && this.flush()
          }
          c.prototype.flush = function () {
            var b = this.buffer
            b.length && (this.send(b), (this.buffer = []))
          }
          return c
        })(nl),
        Cn = /opera mini/i,
        $h = ['phone', 'email'],
        ol =
          'first(-|\\.|_|\\s){0,2}name last(-|\\.|_|\\s){0,2}name zip postal address passport (bank|credit)(-|\\.|_|\\s){0,2}card card(-|\\.|_|\\s){0,2}number card(-|\\.|_|\\s){0,2}holder cvv card(-|\\.|_|\\s){0,2}exp card(-|\\.|_|\\s){0,2}name card.*month card.*year card.*month card.*year password birth(-|\\.|_|\\s){0,2}(day|date) second(-|\\.|_|\\s){0,2}name third(-|\\.|_|\\s){0,2}name patronymic middle(-|\\.|_|\\s){0,2}name birth(-|\\.|_|\\s){0,2}place house street city flat state contact.*'.split(
            ' '
          ),
        zn = /^[\w\u0410-\u042f\u0430-\u044f]$/,
        An = [65, 90],
        Bn = [97, 122],
        xn =
          'color radio checkbox date datetime-local email month number password range search tel text time url week'.split(
            ' '
          ),
        vn = new RegExp('(' + I('|', ol) + ')', 'i'),
        un = new RegExp('(' + I('|', $h) + ')', 'i'),
        sk = ['password', 'passwd', 'pswd'],
        wn = new RegExp(
          '(' +
            I(
              '|',
              ol.concat(
                '\u0438\u043c\u044f \u0444\u0430\u043c\u0438\u043b\u0438\u044f \u043e\u0442\u0447\u0435\u0441\u0442\u0432\u043e \u0438\u043d\u0434\u0435\u043a\u0441 \u0442\u0435\u043b\u0435\u0444\u043e\u043d \u0430\u0434\u0440\u0435\u0441 \u043f\u0430\u0441\u043f\u043e\u0440\u0442 \u043d\u043e\u043c\u0435\u0440(-|\\.|_|\\s){0,2}\u043a\u0430\u0440\u0442\u044b \u0434\u0430\u0442\u0430(-|\\.|_|\\s){0,2}\u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f \u0434\u043e\u043c \u0443\u043b\u0438\u0446\u0430 \u043a\u0432\u0430\u0440\u0442\u0438\u0440\u0430 \u0433\u043e\u0440\u043e\u0434 \u043e\u0431\u043b\u0430\u0441\u0442\u044c'.split(
                  ' '
                )
              )
            ) +
            ')',
          'i'
        ),
        Xa = 'metrikaId_' + Math.random(),
        sc = { Bd: 0 },
        rr = x(function () {
          var a
          return (
            (a = {}),
            (a.A = 1),
            (a.ABBR = 2),
            (a.ACRONYM = 3),
            (a.ADDRESS = 4),
            (a.APPLET = 5),
            (a.AREA = 6),
            (a.B = 7),
            (a.BASE = 8),
            (a.BASEFONT = 9),
            (a.BDO = 10),
            (a.BIG = 11),
            (a.BLOCKQUOTE = 12),
            (a.BODY = 13),
            (a.BR = 14),
            (a.BUTTON = 15),
            (a.CAPTION = 16),
            (a.CENTER = 17),
            (a.CITE = 18),
            (a.CODE = 19),
            (a.COL = 20),
            (a.COLGROUP = 21),
            (a.DD = 22),
            (a.DEL = 23),
            (a.DFN = 24),
            (a.DIR = 25),
            (a.DIV = 26),
            (a.DL = 27),
            (a.DT = 28),
            (a.EM = 29),
            (a.FIELDSET = 30),
            (a.FONT = 31),
            (a.FORM = 32),
            (a.FRAME = 33),
            (a.FRAMESET = 34),
            (a.H1 = 35),
            (a.H2 = 36),
            (a.H3 = 37),
            (a.H4 = 38),
            (a.H5 = 39),
            (a.H6 = 40),
            (a.HEAD = 41),
            (a.HR = 42),
            (a.HTML = 43),
            (a.I = 44),
            (a.IFRAME = 45),
            (a.IMG = 46),
            (a.INPUT = 47),
            (a.INS = 48),
            (a.ISINDEX = 49),
            (a.KBD = 50),
            (a.LABEL = 51),
            (a.LEGEND = 52),
            (a.LI = 53),
            (a.LINK = 54),
            (a.MAP = 55),
            (a.MENU = 56),
            (a.META = 57),
            (a.NOFRAMES = 58),
            (a.NOSCRIPT = 59),
            (a.OBJECT = 60),
            (a.OL = 61),
            (a.OPTGROUP = 62),
            (a.OPTION = 63),
            (a.P = 64),
            (a.PARAM = 65),
            (a.PRE = 66),
            (a.Q = 67),
            (a.S = 68),
            (a.SAMP = 69),
            (a.SCRIPT = 70),
            (a.SELECT = 71),
            (a.SMALL = 72),
            (a.SPAN = 73),
            (a.STRIKE = 74),
            (a.STRONG = 75),
            (a.STYLE = 76),
            (a.SUB = 77),
            (a.SUP = 78),
            (a.TABLE = 79),
            (a.TBODY = 80),
            (a.TD = 81),
            (a.TEXTAREA = 82),
            (a.TFOOT = 83),
            (a.TH = 84),
            (a.THEAD = 85),
            (a.TITLE = 86),
            (a.TR = 87),
            (a.TT = 88),
            (a.U = 89),
            (a.UL = 90),
            (a.VAR = 91),
            (a.NOINDEX = 100),
            a
          )
        }),
        or = [17, 18, 38, 32, 39, 15, 11, 7, 1],
        tt = (function () {
          var a =
            'first(-|\\.|_|\\s){0,2}name last(-|\\.|_|\\s){0,2}name zip postal phone address passport (bank|credit)(-|\\.|_|\\s){0,2}card card(-|\\.|_|\\s){0,2}number card(-|\\.|_|\\s){0,2}holder cvv card(-|\\.|_|\\s){0,2}exp card(-|\\.|_|\\s){0,2}name card.*month card.*year card.*month card.*year password email birth(-|\\.|_|\\s){0,2}(day|date) second(-|\\.|_|\\s){0,2}name third(-|\\.|_|\\s){0,2}name patronymic middle(-|\\.|_|\\s){0,2}name birth(-|\\.|_|\\s){0,2}place house street city flat state'.split(
              ' '
            )
          return {
            vk: new RegExp('(' + I('|', a) + ')', 'i'),
            Fk: new RegExp(
              '(' +
                I(
                  '|',
                  a.concat(
                    '\u0438\u043c\u044f;\u0444\u0430\u043c\u0438\u043b\u0438\u044f;\u043e\u0442\u0447\u0435\u0441\u0442\u0432\u043e;\u0438\u043d\u0434\u0435\u043a\u0441;\u0442\u0435\u043b\u0435\u0444\u043e\u043d;\u0430\u0434\u0440\u0435\u0441;\u043f\u0430\u0441\u043f\u043e\u0440\u0442;\u041d\u043e\u043c\u0435\u0440(-|\\.|_|\\s){0,2}\u043a\u0430\u0440\u0442\u044b;\u0434\u0430\u0442\u0430(-|\\.|_|\\s){0,2} \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f;\u0434\u043e\u043c;\u0443\u043b\u0438\u0446\u0430;\u043a\u0432\u0430\u0440\u0442\u0438\u0440\u0430;\u0433\u043e\u0440\u043e\u0434;\u043e\u0431\u043b\u0430\u0441\u0442\u044c'.split(
                      ';'
                    )
                  )
                ) +
                ')',
              'i'
            ),
            qk: /ym-record-keys/i,
            $i: '\u2022',
            Ek: 88
          }
        })(),
        xk = hb(w(tt.$i, O)),
        kd = !0,
        Ng = '',
        Og = !1,
        Pg = !0,
        Qg = !1,
        sn = la(function (a, c) {
          var b = E([a, 'efv.' + c.event], D)
          c.N = A(u(O, b), c.N)
          return c
        }),
        pl = x(function (a) {
          var c = [],
            b = [],
            d = []
          a.document.attachEvent &&
            !a.opera &&
            (c.push(Df), b.push(vr), b.push(wr))
          a.document.addEventListener ? c.push(vk) : (b.push(uk), d.push(vk))
          c = ya(
            [
              { target: a, type: 'window', event: 'beforeunload', N: [B] },
              { target: a, type: 'window', event: 'unload', N: [B] },
              { event: 'click', N: [Te] },
              { event: 'dblclick', N: [Te] },
              { event: 'mousedown', N: [Te] },
              { event: 'mouseup', N: [yr] },
              { event: 'keydown', N: [zr] },
              { event: 'keypress', N: [Ar] },
              { event: 'copy', N: [zk] },
              { event: 'blur', N: c },
              { event: 'focusin', N: b },
              { event: 'focusout', N: d }
            ],
            !a.document.attachEvent || a.opera
              ? [
                  { target: a, type: 'window', event: 'focus', N: [Yh] },
                  { target: a, type: 'window', event: 'blur', N: [Df] }
                ]
              : [],
            a.document.addEventListener
              ? [
                  { event: 'focus', N: [uk] },
                  { event: 'change', N: [wk] },
                  { event: 'submit', N: [Bk] }
                ]
              : [
                  { type: 'formInput', event: 'change', N: [wk] },
                  { type: 'form', event: 'submit', N: [Bk] }
                ]
          )
          return rn(a, c)
        }),
        pn = x(function (a) {
          return ya(
            yc(a)
              ? [{ target: a, type: 'document', event: 'mouseleave', N: [Br] }]
              : []
          )
        }),
        ut = ['submit', 'beforeunload', 'unload'],
        vt = x(function (a, c) {
          var b = c(a)
          return M(
            function (d, e) {
              d[e.type + ':' + e.event] = e.N
              return d
            },
            {},
            b
          )
        }),
        wt = w(pl, function (a, c, b, d) {
          return vt(c, a)[b + ':' + d] || []
        }),
        qn = /^\s*function submit\(\)/,
        xt = C('fw.p', function (a, c) {
          var b
          if (!(b = c.Eh || !c.ob)) {
            var d = H(a),
              e = !1
            b = d.o('hitParam', {})
            var f = N(c)
            b[f] && ((d = d.o('counters', {})), (e = !(!Zd(c.$) || d[f])))
            b[f] = 1
            b = e
          }
          if (b) return J.resolve(B)
          b = new st(a, wt)
          return ln(a, c, b, pl, ut)
        }),
        kh,
        ql =
          ((kh = (function (a) {
            function c (b, d, e, f) {
              void 0 === f && (f = 0)
              d = a.call(this, b, d, e) || this
              d.Te = 0
              d.Nb = 0
              d.Se = 0
              d.buffer = []
              d.rd = 2e3
              d.ca = id(b)
              d.kd()
              d.Se = f
              return d
            }
            Ka(c, a)
            c.prototype.Cf = function (b) {
              return Z(Boolean, this.ca.O('ag', b))
            }
            c.prototype.Bf = function (b, d) {
              var e = this
              b(
                Ua(D(this.l, 'wv2.b.st'), function (f) {
                  e.send(f, d)
                })
              )
            }
            c.prototype.Aj = function (b, d) {
              var e = this
              na(this.l, this.qf)
              var f = Math.ceil(this.ra.ab(d) / 63e4),
                g = this.ra.ld(d, f)
              z(function (h, k) {
                var l,
                  m = y(
                    {},
                    b,
                    ((l = {}),
                    (l.data = h),
                    (l.partNum = k + 1),
                    (l.end = k + 1 === f),
                    l)
                  )
                l = e.ra.Da([m], !1)
                e.Bf(l, [m])
              }, g)
              this.kd()
            }
            c.prototype.send = function (b, d) {
              var e = this
              this.ca.O('se', d)
              return a.prototype.send.call(this, b, d).then(O, function () {
                e.ca.O('see', d)
              })
            }
            c.Df = function (b, d, e, f, g) {
              c.ud['' + b + d] ||
                (this.ud[d] = new c(g, f, e, 'm' === d ? 31457280 : 0))
              return this.ud[d]
            }
            c.prototype.Mi = function () {
              return this.Se && this.Te >= this.Se
            }
            c.prototype.push = function (b) {
              var d = this
              if (!this.Mi()) {
                this.ca.O('p', b)
                var e = this.ra.Ua(b),
                  f = this.ra.ab(e)
                7e5 < f
                  ? this.Aj(b, e)
                  : ((e = this.Cf(this.buffer.concat([b]))),
                    (e = M(
                      function (g, h) {
                        return g + d.ra.ab(d.ra.Ua(h))
                      },
                      0,
                      e
                    )),
                    this.Nb + e + f >= 7e5 * 0.7 && this.flush(),
                    this.buffer.push(b),
                    (this.Nb += f))
              }
            }
            c.prototype.D = function (b, d) {
              this.ca.D([b], d)
            }
            c.prototype.oa = function (b, d) {
              this.ca.oa([b], d)
            }
            c.prototype.flush = function () {
              var b = this.buffer.concat(this.Cf(this.buffer))
              if (b.length) {
                this.buffer = []
                this.Te += this.Nb
                this.Nb = 0
                var d = this.ra.Da(b)
                this.Bf(d, b)
              }
            }
            return c
          })(nl)),
          (kh.ud = {}),
          kh),
        $a = (function () {
          function a (c, b, d) {
            this.Qi = 'wv2.c'
            this.$b = []
            this.ma = []
            this.l = c
            this.K = Bf(c, this, d, this.Qi)
            this.F = b
            this.rb = this.F.gi()
            this.start = this.K.J(this.start, 'st')
            this.stop = this.K.J(this.stop, 'sp')
          }
          a.prototype.start = function () {
            var c = this
            this.$b = A(function (b) {
              var d = b[0],
                e = b[2]
              b = G(c.K.J(b[1], d[0]), c)
              return c.rb.D(e || c.l, d, b)
            }, this.ma)
          }
          a.prototype.stop = function () {
            z(ha, this.$b)
          }
          a.prototype.aa = function (c) {
            return this.F.wa().aa(c)
          }
          return a
        })(),
        jn = ['checkbox', 'radio'],
        kn = /pwd|value|password/i,
        lh = V('location.href'),
        yt = (function (a) {
          function c (b, d, e) {
            d = a.call(this, b, d, e) || this
            d.ua = { elements: [], attributes: [] }
            d.index = 0
            d.oe = d.K.J(d.oe, 'o')
            d.Dd = d.K.J(d.Dd, 'io')
            d.sd = d.K.J(d.sd, 'ao')
            d.Ce = d.K.J(d.Ce, 'a')
            d.Ae = d.K.J(d.Ae, 'at')
            d.De = d.K.J(d.De, 'r')
            d.Be = d.K.J(d.Be, 'c')
            d.Ba = new b.MutationObserver(d.oe)
            return d
          }
          Ka(c, a)
          c.prototype.start = function () {
            this.Ba.observe(this.l.document.documentElement, {
              attributes: !0,
              characterData: !0,
              childList: !0,
              subtree: !0,
              attributeOldValue: !0,
              characterDataOldValue: !0
            })
          }
          c.prototype.stop = function () {
            this.Ba.disconnect()
          }
          c.prototype.sd = function (b) {
            var d = b.target
            b = b.attributeName
            var e = this.ua.elements.indexOf(d)
            ;-1 === e &&
              ((e = this.ua.elements.push(d) - 1), (this.ua.attributes[e] = {}))
            this.ua.attributes[e] || (this.ua.attributes[e] = {})
            e = this.ua.attributes[e]
            var f = d.getAttribute(b)
            e[b] = he(this.l, d, b, f, this.F.Ub()).value
          }
          c.prototype.Dd = function (b) {
            function d (k) {
              var l = Nb(e.l)(k, f)
              return -1 === l
                ? (f.push(k), (k = { Kd: {} }), g.push(k), k)
                : g[l]
            }
            var e = this,
              f = [],
              g = []
            z(function (k) {
              var l = k.attributeName,
                m = k.removedNodes,
                p = k.oldValue,
                q = k.target,
                r = k.nextSibling,
                t = k.previousSibling
              switch (k.type) {
                case 'attributes':
                  e.sd(k)
                  var v = d(q)
                  v.Kd[l] || (v.Kd[l] = he(e.l, q, l, p, e.F.Ub()).value)
                  break
                case 'childList':
                  m &&
                    z(function (F) {
                      v = d(F)
                      v.zf ||
                        y(v, { zf: q, Uh: r ? r : void 0, Vh: t ? t : void 0 })
                    }, za(m))
                  break
                case 'characterData':
                  ;(v = d(q)), v.Af || (v.Af = p)
              }
            }, b)
            var h = this.F.wa()
            z(function (k, l) {
              h.Me(k, g[l])
            }, f)
          }
          c.prototype.oe = function (b) {
            var d = this
            if (lh(this.l)) {
              var e = this.F.L()
              this.Dd(b)
              z(function (f) {
                var g = f.addedNodes,
                  h = f.removedNodes,
                  k = f.target
                switch (f.type) {
                  case 'childList':
                    h && h.length && d.De(za(h), e)
                    g && g.length && d.Ce(za(g), e)
                    break
                  case 'characterData':
                    d.Be(k, e)
                }
              }, b)
              this.Ae(e)
            } else this.stop()
          }
          c.prototype.Ae = function (b) {
            var d = this
            z(function (e, f) {
              var g = d.Ic()
              d.F.X(
                'mutation',
                { index: g, attributes: d.ua.attributes[f], target: d.aa(e) },
                'ac',
                b
              )
            }, this.ua.elements)
            this.ua.elements = []
            this.ua.attributes = []
          }
          c.prototype.Ce = function (b, d) {
            var e = this,
              f = this.Ic()
            this.F.wa().Mc({
              na: b,
              jd: function (g) {
                g = A(function (h) {
                  h.node = void 0
                  return h
                }, g)
                e.F.X('mutation', { index: f, na: g }, 'ad', d)
              }
            })
          }
          c.prototype.De = function (b, d) {
            var e = this,
              f = this.Ic(),
              g = this.F.wa(),
              h = A(function (k) {
                var l = g.removeNode(k)
                Oi(e.l, k, function (m) {
                  g.removeNode(m)
                })
                return l
              }, b)
            this.F.X('mutation', { index: f, na: h }, 're', d)
          }
          c.prototype.Be = function (b, d) {
            var e = this.Ic()
            this.F.X(
              'mutation',
              { value: b.textContent, target: this.aa(b), index: e },
              'tc',
              d
            )
          }
          c.prototype.Ic = function () {
            var b = this.index
            this.index += 1
            return b
          }
          return c
        })($a),
        zt = (function () {
          function a (c, b) {
            var d = this
            this.Ec = []
            this.sb = []
            this.me = 1
            this.Xa = 0
            this.eb = {}
            this.Oc = {}
            this.Vd = function (f) {
              return d.sb.length ? K(f, d.sb) : !1
            }
            this.removeNode = function (f) {
              var g = d.aa(f),
                h = Ia(f)
              if (h)
                return (
                  (h = 'NR:' + h.toLowerCase()),
                  d.Vd(h) && d.ca.O(h, { data: { node: f, id: g } }),
                  g
                )
            }
            this.xb = function (f) {
              var g = Ia(f)
              if (g) {
                var h = f.__ym_indexer
                h ||
                  ((h = d.me),
                  (f.__ym_indexer = h),
                  (d.me += 1),
                  (g = 'NA:' + g.toLowerCase()),
                  d.Vd(g) && d.ca.O(g, { data: { node: f, id: h } }))
                return h
              }
              return null
            }
            this.l = c
            var e = Bf(c, this, 'i')
            this.ca = id(c)
            this.options = b
            this.start = e.J(this.start, 'st')
            this.stop = e.J(this.stop, 'sp')
            this.aa = e.J(this.aa, 'i')
            this.Me = e.J(this.Me, 'o')
            this.Mc = e.J(this.Mc, 'a')
            this.removeNode = e.J(this.removeNode, 'r')
            this.fa = e.J(this.fa, 's')
          }
          a.prototype.Me = function (c, b) {
            var d = this.xb(c)
            Va(d) || (this.Oc[d] && this.aa(c), (this.Oc[d] = b))
          }
          a.prototype.D = function (c, b, d) {
            c = '' + b + c
            this.sb.push(c)
            this.Vd(c) || this.sb.push(c)
            this.ca.D([c], d)
          }
          a.prototype.oa = function (c, b, d) {
            var e = '' + b + c
            this.sb = Z(function (f) {
              return f !== e
            }, this.sb)
            this.ca.oa([e], d)
          }
          a.prototype.start = function () {
            this.Xa = W(this.l, u(G(this.fa, this, !1), this.start), 50, 'i.s')
          }
          a.prototype.stop = function () {
            this.flush()
            na(this.l, this.Xa)
            this.Ec = []
          }
          a.prototype.Mc = function (c) {
            var b = this,
              d = [],
              e = 0,
              f = { jd: c.jd, result: [], Nc: 0, na: d }
            this.Ec.push(f)
            z(function (g) {
              Oi(b.l, g, function (h) {
                var k = b.xb(h)
                Va(k) ||
                  (d.push(h),
                  b.eb[k] && b.aa(h),
                  (b.eb[k] = { node: h, event: f, Oj: e }),
                  (e += 1))
              })
            }, c.na)
          }
          a.prototype.aa = function (c) {
            if (c === this.l) return 0
            var b = this.xb(c),
              d = this.eb[b],
              e = this.Yh(b),
              f = e.zf,
              g = e.Kd,
              h = e.Af,
              k = e.Uh,
              l = e.Vh
            if (d) {
              e = d.event
              d = d.Oj
              var m = Zr(this.l) === c
              k = k || c.nextSibling
              var p = l || c.previousSibling
              l = !m && k ? this.xb(k) : null
              p = !m && p ? this.xb(p) : null
              m = this.l
              k = this.options
              f = this.xb(f || c.parentNode || c.parentElement) || 0
              var q = g,
                r = void 0
              void 0 === p && (p = null)
              void 0 === l && (l = null)
              void 0 === q && (q = {})
              void 0 === r && (r = Ia(c))
              if (X(r)) c = void 0
              else {
                g = {
                  id: b,
                  ze: p !== f ? p : null,
                  next: l !== f ? l : null,
                  parent: f,
                  name: r.toLowerCase(),
                  node: c
                }
                if (Hf(c)) {
                  if (((h = fn(c, h)), (g.attributes = {}), (g.content = h)))
                    if ((c = jd(m, c)))
                      (g.content = '' !== h.trim() ? yn(m, h) : h),
                        (g.hidden = c)
                } else
                  (h = gn(m, c, k, q, r)),
                    (m = h.Ab),
                    (g.attributes = h.kh),
                    m && (g.hidden = m),
                    c.namespaceURI &&
                      Fc(c.namespaceURI, 'svg') &&
                      (g.Xf = c.namespaceURI)
                c = g
              }
              if (X(c)) return
              this.eb[b] = null
              e.result[d] = c
              e.Nc += 1
              e.na.length === e.Nc && e.jd(e.result)
            }
            return b
          }
          a.prototype.flush = function () {
            this.fa(!0)
          }
          a.prototype.fa = function (c) {
            var b = this
            if (lh(this.l)) {
              var d = da(this.eb)
              d = M(
                function (e, f) {
                  b.eb[f] && e.push(b.eb[f].node)
                  return e
                },
                [],
                d
              )
              d = kc(d, this.aa)
              c = c ? Uj(B) : Sj(this.l, 20)
              d(c)
              this.Ec = Z(function (e) {
                return e.Nc !== e.result.length
              }, this.Ec)
            }
          }
          a.prototype.Yh = function (c) {
            if (Va(c)) return {}
            var b = this.Oc[c]
            return b ? ((this.Oc[c] = null), b) : {}
          }
          return a
        })(),
        At = ['input', 'change', 'keyup', 'paste', 'cut'],
        Bt = (function (a) {
          function c (b, d, e) {
            b = a.call(this, b, d, e) || this
            b.inputs = {}
            b.Gd = !1
            b.Xc = b.K.J(b.Xc, 'ii')
            b.Yc = b.K.J(b.Yc, 'ir')
            b.cd = b.K.J(b.cd, 'ri')
            b.pd = b.K.J(b.pd, 'ur')
            b.Ud = b.K.J(b.Ud, 'ce')
            b.Lc = b.K.J(b.Lc, 'vc')
            return b
          }
          Ka(c, a)
          c.prototype.start = function () {
            var b = this,
              d = this.F.wa()
            this.Gd = this.th()
            z(function (e) {
              e = e.toLowerCase()
              d.D(e, 'NA:', G(b.Xc, b))
              d.D(e, 'NR:', G(b.Yc, b))
            }, Gf)
            this.$b = [
              this.rb.D(this.l.document, At, G(this.Ud, this)),
              function () {
                z(function (e) {
                  e = e.toLowerCase()
                  d.oa(e, 'NA:', b.Xc)
                  d.oa(e, 'NR:', b.Yc)
                }, Gf)
                z(b.pd, da(b.inputs))
              }
            ]
          }
          c.prototype.pd = function (b) {
            if (this.Gd) {
              var d = this.inputs[b]
              d &&
                ((b = d.jj),
                (d = d.element),
                b && this.l.Object.defineProperty(d, this.Jc(d), b))
            }
          }
          c.prototype.Yc = function (b) {
            b && this.pd(b.data.id)
          }
          c.prototype.Xc = function (b) {
            b && ((b = b.data), this.cd(b.node, b.id))
          }
          c.prototype.Jc = function (b) {
            return Ie(b) ? 'checked' : 'value'
          }
          c.prototype.Ud = function (b) {
            if ((b = b.target)) {
              var d = this.Jc(b)
              this.Lc(b[d], b)
            }
          }
          c.prototype.Lc = function (b, d) {
            var e = this.aa(d),
              f = this.inputs[e]
            if (!f && ((f = this.cd(f, e)), !f)) return
            e = f.vh
            var g = f.value,
              h = this.Jc(d),
              k = !b || K(typeof b, ['string', 'boolean', 'number']),
              l = this.F.Ub().ae
            k &&
              b !== g &&
              ((g = he(this.l, d, h, b, this.F.Ub()).value),
              e
                ? this.F.X(
                    'event',
                    { target: this.aa(d), checked: !!b },
                    'change'
                  )
                : ((e = Jc(this.l, d, l)),
                  (l = e.ub),
                  this.F.X(
                    'event',
                    { value: g, hidden: e.Bb && !l, target: this.aa(d) },
                    'change'
                  )),
              (f.value = b))
          }
          c.prototype.cd = function (b, d) {
            var e = this
            if (
              !zf(b) ||
              '__ym_input_override_test' === b.getAttribute('class') ||
              this.inputs[d]
            )
              return null
            var f = Ie(b),
              g = this.Jc(b),
              h = { element: b, vh: f, value: b[g] }
            this.inputs[d] = h
            this.Gd &&
              Jb(this.l, function () {
                var k =
                    e.l.Object.getOwnPropertyDescriptor(
                      Object.getPrototypeOf(b),
                      g
                    ) || {},
                  l = e.l.Object.getOwnPropertyDescriptor(b, g) || {},
                  m = y({}, k, l)
                if (Ca('((set)?(\\s?' + g + ')?)?', m.set)) {
                  try {
                    e.l.Object.defineProperty(
                      b,
                      g,
                      y({}, m, {
                        configurable: !0,
                        set: function (p) {
                          e.Lc(p, this)
                          return m.set.call(this, p)
                        }
                      })
                    )
                  } catch (p) {}
                  h.jj = m
                }
              })
            return h
          }
          c.prototype.th = function () {
            var b = !0,
              d = ab(this.l)('input')
            try {
              d = ab(this.l)('input')
              d.value = 'INPUT_VALUE'
              d.style.setProperty('display', 'none', 'important')
              d.setAttribute('type', 'text')
              d.setAttribute('class', '__ym_input_override_test')
              var e =
                  this.l.Object.getOwnPropertyDescriptor(
                    Object.getPrototypeOf(d),
                    'value'
                  ) || {},
                f = this.l.Object.getOwnPropertyDescriptor(d, 'value') || {},
                g = y({}, e, f)
              this.l.Object.defineProperty(
                d,
                'value',
                y({}, g, {
                  configurable: !0,
                  set: function (h) {
                    return g.set.call(d, h)
                  }
                })
              )
              'INPUT_VALUE' !== d.value && (b = !1)
              d.value = 'INPUT_TEST'
              'INPUT_TEST' !== d.value && (b = !1)
            } catch (h) {
              b = !1
            }
            return b
          }
          return c
        })($a),
        Ct = (function (a) {
          function c (b, d, e) {
            b = a.call(this, b, d, e) || this
            b.ib = { width: 0, height: 0, Eb: 0, Fb: 0, orientation: 0 }
            b.ma.push([['resize'], b.hj])
            b.ma.push([['orientationchange'], b.fj])
            return b
          }
          Ka(c, a)
          c.prototype.start = function () {
            a.prototype.start.call(this)
            this.pg()
          }
          c.prototype.hj = function () {
            var b = this.Sd()
            this.zi(b) && ((this.ib = b), this.qg(b))
          }
          c.prototype.fj = function () {
            var b = this.Sd()
            this.ib.orientation !== b.orientation && ((this.ib = b), this.yj(b))
          }
          c.prototype.Tf = function (b) {
            return !b.height || !b.width || !b.Fb || !b.Eb
          }
          c.prototype.zi = function (b) {
            return b.height !== this.ib.height || b.width !== this.ib.width
          }
          c.prototype.Sd = function () {
            var b = this.F.wb(),
              d = Rc(this.l),
              e = d[0]
            d = d[1]
            b = b.Rd()
            return {
              width: e,
              height: d,
              Fb: b ? b.scrollWidth : 0,
              Eb: b ? b.scrollHeight : 0,
              orientation: this.F.wb().ii()
            }
          }
          c.prototype.yj = function (b) {
            var d
            void 0 === d && (d = this.F.L())
            this.F.X(
              'event',
              { width: b.width, height: b.height, orientation: b.orientation },
              'deviceRotation',
              d
            )
          }
          c.prototype.qg = function (b, d) {
            void 0 === d && (d = this.F.L())
            this.F.X(
              'event',
              { width: b.width, height: b.height, Fb: b.Fb, Eb: b.Eb },
              'resize',
              d
            )
          }
          c.prototype.pg = function () {
            var b = this.Sd()
            this.Tf(b)
              ? W(this.l, G(this.pg, this), 300)
              : (this.Tf(this.ib) && (this.ib = b), this.qg(b, 0))
          }
          return c
        })($a),
        bf = (function () {
          function a (c) {
            this.index = 0
            this.Jb = {}
            this.l = c
          }
          a.prototype.zc = function (c, b, d) {
            void 0 === d && (d = {})
            var e = fa(this.l),
              f = this.index
            this.index += 1
            this.Jb[f] = { Xa: 0, dc: !1, Sh: c, pc: [], fe: e(aa) }
            var g = this
            return function () {
              var h = Da(arguments),
                k = d.tb && !g.Jb[f].dc,
                l = g.Jb[f]
              na(g.l, l.Xa)
              l.pc = h
              l.dc = !0
              var m = e(aa)
              if (k || m - l.fe >= b) c.apply(void 0, h), (l.fe = m)
              l.Xa = W(
                g.l,
                function () {
                  k || (c.apply(void 0, h), (l.fe = e(aa)))
                  l.dc = !1
                  l.pc = []
                },
                b,
                'th'
              )
            }
          }
          a.prototype.flush = function () {
            var c = this
            z(function (b) {
              var d = c.Jb[b],
                e = d.Xa,
                f = d.Sh,
                g = d.pc
              d.dc && ((c.Jb[b].dc = !1), f.apply(void 0, g), na(c.l, e))
            }, da(this.Jb))
          }
          return a
        })(),
        Dt = (function (a) {
          function c (b, d, e) {
            d = a.call(this, b, d, e) || this
            d.Fg = []
            d.$e = { x: 0, y: 0 }
            d.Ea = new bf(b)
            d.ad = d.K.J(d.ad, 'o')
            d.ma.push([['scroll'], d.ij])
            return d
          }
          Ka(c, a)
          c.prototype.start = function () {
            a.prototype.start.call(this)
            this.F.X(
              'event',
              {
                x: Math.max(this.l.scrollX, 0),
                y: Math.max(this.l.scrollY, 0),
                page: !0,
                target: -1
              },
              'scroll',
              0
            )
          }
          c.prototype.stop = function () {
            a.prototype.stop.call(this)
            this.Ea.flush()
          }
          c.prototype.ij = function (b) {
            if (this.F.wb().Of()) this.ad(b)
            else {
              var d = b.target,
                e = Z(function (f) {
                  return f[0] === d
                }, this.Fg).pop()
              e
                ? (e = e[1])
                : ((e = this.Ea.zc(G(this.ad, this), 100, { tb: !0 })),
                  this.Fg.push([d, e]))
              e(b)
            }
          }
          c.prototype.ad = function (b) {
            var d = this.F.wb().Rd()
            b = b.target
            var e = this.Vb(b)
            d = Ja(ka(b), [d, this.l, this.l.document])
            var f = Math.max(e.left, 0)
            e = Math.max(e.top, 0)
            if (d) {
              if (this.$e.x === f && this.$e.y === e) return
              this.$e = { x: f, y: e }
            }
            this.F.X(
              'event',
              { x: f, y: e, page: d, target: d ? -1 : this.aa(b) },
              'scroll'
            )
          }
          c.prototype.Vb = function (b) {
            var d = { left: 0, top: 0 }
            if (!b) return d
            if (b.window === b)
              return { top: b.scrollY || 0, left: b.scrollX || 0 }
            var e = b.ownerDocument || b,
              f = b.documentElement,
              g = e.defaultView || e.parentWindow,
              h = e.body
            return b !== e || ((b = this.F.wb().Rd()), b)
              ? K(b, [f, h])
                ? {
                    top: b.scrollTop || g.scrollY,
                    left: b.scrollLeft || g.scrollX
                  }
                : { top: b.scrollTop || 0, left: b.scrollLeft || 0 }
              : d
          }
          return c
        })($a),
        Et = ['mousemove', 'mousedown', 'mouseup', 'click'],
        Ft = (function (a) {
          function c (b, d, e) {
            d = a.call(this, b, d, e) || this
            d.ma.push([Et, d.ej])
            d.Ea = new bf(b)
            d.Vc = d.K.J(d.Vc, 'n')
            d.Gj = d.K.J(d.Ea.zc(G(d.Vc, d), 100), 't')
            return d
          }
          Ka(c, a)
          c.prototype.stop = function () {
            a.prototype.stop.call(this)
            this.Ea.flush()
          }
          c.prototype.ej = function (b) {
            var d = null
            try {
              d = b.type
            } catch (e) {
              return
            }
            'mousemove' === d ? this.Gj(b) : this.Vc(b)
          }
          c.prototype.Vc = function (b) {
            var d = b.type,
              e = b.clientX
            e = void 0 === e ? null : e
            var f = b.clientY
            f = void 0 === f ? null : f
            b = b.target || this.l.document.elementFromPoint(e, f)
            this.F.X('event', { x: e || 0, y: f || 0, target: this.aa(b) }, d)
          }
          return c
        })($a),
        Gt = ['focus', 'blur'],
        Ht = (function (a) {
          function c (b, d, e) {
            b = a.call(this, b, d, e) || this
            b.ma.push([Gt, b.Th])
            return b
          }
          Ka(c, a)
          c.prototype.Th = function (b) {
            var d = b.target
            b = b.type
            this.F.X(
              'event',
              {
                target: this.aa(
                  d === this.l ? this.l.document.documentElement : d
                )
              },
              b
            )
          }
          return c
        })($a),
        It = x(function (a) {
          var c = Ma(a.getSelection, 'getSelection')
          return c ? G(c, a) : B
        }),
        Jt = u(It, ha),
        Kt = ['mousemove', 'touchmove', 'mousedown', 'touchdown', 'select'],
        Lt = /text|search|password|tel|url/,
        Mt = (function (a) {
          function c (b, d, e) {
            b = a.call(this, b, d, e) || this
            b.Wd = !1
            b.ma.push([Kt, b.wi])
            return b
          }
          Ka(c, a)
          c.prototype.wi = function (b) {
            var d = this.F,
              e = b.type,
              f = b.which
            b = b.target
            if ('mousemove' !== e || 1 === f)
              (e = 'select' === e ? this.mi(b) : this.ki()) && e.start !== e.end
                ? ((this.Wd = !0), d.X('event', e, 'selection'))
                : this.Wd &&
                  ((this.Wd = !1),
                  d.X('event', { start: 0, end: 0 }, 'selection'))
          }
          c.prototype.ki = function () {
            var b = Jt(this.l)
            if (b && 0 < b.rangeCount) {
              b = b.getRangeAt(0) || this.l.document.createRange()
              var d = this.aa(b.startContainer),
                e = this.aa(b.endContainer)
              if (!X(d) && !X(e))
                return { start: b.startOffset, end: b.endOffset, Ag: d, rf: e }
            }
          }
          c.prototype.mi = function (b) {
            if (Lt.test(b.type || '')) {
              var d = this.aa(b)
              if (!X(d))
                return {
                  start: b.selectionStart,
                  end: b.selectionEnd,
                  target: d
                }
            }
          }
          return c
        })($a),
        Nt = { focus: 'windowfocus', blur: 'windowblur' },
        Ot = (function (a) {
          function c (b, d, e) {
            b = a.call(this, b, d, e) || this
            b.visibility = null
            X(b.l.document.hidden)
              ? X(b.l.document.msHidden)
                ? X(b.l.document.webkitHidden) ||
                  (b.visibility = {
                    hidden: 'webkitHidden',
                    event: 'webkitvisibilitychange'
                  })
                : (b.visibility = {
                    hidden: 'msHidden',
                    event: 'msvisibilitychange'
                  })
              : (b.visibility = { hidden: 'hidden', event: 'visibilitychange' })
            b.handleEvent = b.K.J(b.handleEvent, 'e')
            return b
          }
          Ka(c, a)
          c.prototype.start = function () {
            this.$b = [
              this.rb.D(
                this.l,
                this.visibility ? [this.visibility.event] : ['focus', 'blur'],
                G(this.handleEvent, this)
              )
            ]
          }
          c.prototype.handleEvent = function (b) {
            this.F.X(
              'event',
              {},
              Nt[
                this.visibility
                  ? this.l.document[this.visibility.hidden]
                    ? 'blur'
                    : 'focus'
                  : b.type
              ]
            )
          }
          return c
        })($a),
        Pt = [
          'touchmove',
          'touchstart',
          'touchend',
          'touchcancel',
          'touchforcechange'
        ],
        Qt = (function (a) {
          function c (b, d, e) {
            d = a.call(this, b, d, e) || this
            d.nd = {}
            d.scrolling = !1
            d.ng = 0
            d.ma.push([['scroll'], d.wj, d.l.document])
            d.ma.push([Pt, d.Kj, d.l.document])
            d.Ea = new bf(b)
            d.Zb = d.K.J(d.Zb, 'nh')
            d.Hj = d.K.J(
              d.Ea.zc(d.Zb, d.F.wb().Of() ? 0 : 50, { tb: !0 }),
              'th'
            )
            return d
          }
          Ka(c, a)
          c.prototype.wj = function () {
            var b = this
            this.scrolling = !0
            na(this.l, this.ng)
            this.ng = W(
              this.l,
              function () {
                b.scrolling = !1
              },
              150
            )
          }
          c.prototype.Kj = function (b) {
            var d = this,
              e = 'touchcancel' === b.type || 'touchend' === b.type
            b.changedTouches &&
              0 < b.changedTouches.length &&
              z(function (f) {
                var g = d.oi(f)
                f.__ym_touch_id = g
                e && delete d.nd[f.identifier]
              }, za(b.changedTouches))
            'touchmove' === b.type
              ? this.scrolling
                ? this.Zb(b)
                : this.Hj(b, this.F.L())
              : this.Zb(b)
          }
          c.prototype.oi = function (b) {
            this.nd[b.identifier] || (this.nd[b.identifier] = Sh())
            return this.nd[b.identifier]
          }
          c.prototype.Zb = function (b, d) {
            void 0 === d && (d = this.F.L())
            var e = b.type,
              f = A(function (g) {
                return {
                  id: g.__ym_touch_id,
                  x: Math.round(g.clientX),
                  y: Math.round(g.clientY),
                  force: g.force
                }
              }, za(b.changedTouches))
            0 < f.length &&
              this.F.X('event', { touches: f, target: this.aa(b.target) }, e, d)
          }
          return c
        })($a),
        Rt = (function (a) {
          function c (b, d, e) {
            b = a.call(this, b, d, e) || this
            b.ma.push([['load'], b.dj, b.l.document])
            return b
          }
          Ka(c, a)
          c.prototype.dj = function (b) {
            b = b.target
            'IMG' === Ia(b) &&
              b.getAttribute('srcset') &&
              this.F.X(
                'event',
                { target: this.aa(b), value: b.currentSrc },
                'srcset'
              )
          }
          return c
        })($a),
        St = (function (a) {
          function c (b, d, e) {
            d = a.call(this, b, d, e) || this
            d.Tg = 1
            d.Ea = new bf(b)
            d.sc = d.K.J(d.sc, 'z')
            return d
          }
          Ka(c, a)
          c.prototype.start = function () {
            if (this.Kf()) {
              a.prototype.start.call(this)
              this.sc()
              var b = this.rb.D(
                n(this.l, 'visualViewport'),
                ['resize'],
                this.Ea.zc(this.sc, 10)
              )
              this.$b.push(b)
            }
          }
          c.prototype.stop = function () {
            a.prototype.stop.call(this)
            this.Ea.flush()
          }
          c.prototype.sc = function () {
            var b = this.Kf()
            b && b !== this.Tg && ((this.Tg = b), this.zj(b))
          }
          c.prototype.Kf = function () {
            var b = Je(this.l)
            return b ? b[2] : null
          }
          c.prototype.zj = function (b) {
            var d = Yf(this.l)
            this.F.X('event', { x: d.x, y: d.y, level: b }, 'zoom')
          }
          return c
        })($a),
        Wd,
        cf = {
          91: 'super',
          93: 'super',
          224: 'super',
          18: 'alt',
          17: 'ctrl',
          16: 'shift',
          9: 'tab',
          8: 'backspace',
          46: 'delete'
        },
        rl = { super: 1, mk: 2, alt: 3, shift: 4, Mk: 5, delete: 6, ik: 6 },
        Tt = [4, 9, 8, 32, 37, 38, 39, 40, 46],
        sl =
          ((Wd = {}),
          (Wd['1'] = {
            91: '&#8984;',
            93: '&#8984;',
            224: '&#8984;',
            18: '&#8997;',
            17: '&#8963;',
            16: '&#8679;',
            9: '&#8677;',
            8: '&#9003;',
            46: '&#9003;'
          }),
          (Wd['2'] = {
            91: '&#xff;',
            93: '&#xff;',
            224: '&#xff;',
            18: 'Alt',
            17: 'Ctrl',
            16: 'Shift',
            9: 'Tab',
            8: 'Backspace',
            46: 'Delete'
          }),
          (Wd.Ui = {
            32: 'SPACEBAR',
            37: '&larr;',
            38: '&uarr;',
            39: '&rarr;',
            40: '&darr;',
            13: 'Enter'
          }),
          Wd),
        Ut = /flash/,
        Vt = /ym-disable-keys/,
        Wt = /^&#/,
        Xt = (function (a) {
          function c (b, d, e) {
            d = a.call(this, b, d, e) || this
            d.yb = {}
            d.Ra = 0
            d.Ia = []
            d.Dg = []
            d.Cc = 0
            d.ig = 0
            d.ma.push([['keydown'], d.ti])
            d.ma.push([['keyup'], d.ui])
            d.dh =
              -1 !== (n(b, 'navigator.appVersion') || '').indexOf('Mac')
                ? '1'
                : '2'
            d.Rc = d.K.J(d.Rc, 'v')
            d.Id = d.K.J(d.Id, 'ec')
            d.hd = d.K.J(d.hd, 'sk')
            d.Pd = d.K.J(d.Pd, 'gk')
            d.Ne = d.K.J(d.Ne, 'sc')
            d.rc = d.K.J(d.rc, 'cc')
            d.reset = d.K.J(d.reset, 'r')
            d.ed = d.K.J(d.ed, 'rs')
            return d
          }
          Ka(c, a)
          c.prototype.ti = function (b) {
            if (this.Rc(b) && !this.Li(b)) {
              var d = b.keyCode
              b.repeat ||
                this.yb[d] ||
                ((this.yb[b.keyCode] = !0),
                cf[b.keyCode] && !this.Ra
                  ? ((this.Ra += 1), this.Ne(b), this.reset(300))
                  : this.Ra
                  ? (this.ph(), this.Fe(b), this.Id())
                  : (this.reset(), this.Fe(b)))
            }
          }
          c.prototype.ui = function (b) {
            if (this.Rc(b)) {
              var d = b.keyCode,
                e = cf[b.keyCode]
              this.yb[b.keyCode] && (this.yb[d] = !1)
              e && this.Ra && ((this.Ra = 0), (this.yb = {}))
              1 === this.Ia.length &&
                ((b = this.Ia[0]),
                K(b.keyCode, Tt) && (this.hd([b], !0), this.reset()))
              this.Ia = Z(u(ka(d), Sb), this.Ia)
              na(this.l, this.Cc)
            }
          }
          c.prototype.Rc = function (b) {
            var d = this.l.document.activeElement
            b = b.target
            return !Ja(Boolean, [
              d &&
                'OBJECT' === d.nodeName &&
                Ut.test(d.getAttribute('type') || ''),
              'INPUT' === b.nodeName &&
                'password' === b.getAttribute('type') &&
                Vt.test(b.className)
            ])
          }
          c.prototype.Id = function () {
            this.Dg = this.Ia.slice(0)
            na(this.l, this.Cc)
            this.Cc = W(this.l, w(this.Dg, G(this.hd, this)), 0, 'e.c')
          }
          c.prototype.hd = function (b, d) {
            void 0 === d && (d = !1)
            if (1 < b.length || d) {
              var e = this.Pd(b)
              this.F.X('event', { Sc: e }, 'keystroke')
            }
          }
          c.prototype.Pd = function (b) {
            var d = this
            b = A(function (e) {
              e = e.keyCode
              var f = cf[e],
                g = d.hi(e)
              return { id: e, key: g, Qf: !!f && Wt.test(g), Tc: f }
            }, b)
            return Eg(function (e, f) {
              return (rl[e.Tc] || 100) - (rl[f.Tc] || 100)
            }, b)
          }
          c.prototype.hi = function (b) {
            return sl[this.dh][b] || sl.Ui[b] || String.fromCharCode(b)
          }
          c.prototype.Fe = function (b) {
            K(b, this.Ia) || this.Ia.push(b)
          }
          c.prototype.Ne = function (b) {
            this.Fe(b)
            this.rc()
          }
          c.prototype.rc = function () {
            this.Ra ? W(this.l, this.rc, 100) : (this.Ia = [])
          }
          c.prototype.ph = function () {
            na(this.l, this.ig)
          }
          c.prototype.reset = function (b) {
            b ? (this.ig = W(this.l, G(this.ed, this), b)) : this.ed()
          }
          c.prototype.ed = function () {
            this.Ra = 0
            this.Ia = []
            this.yb = {}
            na(this.l, this.Cc)
          }
          c.prototype.Li = function (b) {
            return b.target && 'INPUT' === b.target.nodeName
              ? b.shiftKey || 32 === b.keyCode || 'shift' === cf[b.keyCode]
              : !1
          }
          return c
        })($a),
        en = ['sr', 'sd', '\u043d'],
        Yt = /allow-same-origin/,
        Zt = (function (a) {
          function c (b, d, e) {
            d = a.call(this, b, d, e) || this
            d.ic = []
            d.Ld = {}
            d.pe = d.K.J(d.pe, 'fi')
            d.qe = d.K.J(d.qe, 'sd')
            d.se = d.K.J(d.se, 'src')
            d.Ba = new b.MutationObserver(d.se)
            return d
          }
          Ka(c, a)
          c.prototype.start = function () {
            a.prototype.start.call(this)
            this.F.Ub().tc && this.F.wa().D('iframe', 'NA:', G(this.pe, this))
            this.F.Gf().Nd().D(['sdr'], G(this.qe, this))
          }
          c.prototype.stop = function () {
            a.prototype.stop.call(this)
            z(function (b) {
              b.F.stop()
            }, this.ic)
          }
          c.prototype.se = function (b) {
            var d = b.pop().target
            if (
              (b = bb(function (f) {
                return f.Nf === d
              }, this.ic))
            ) {
              this.ic = Z(function (f) {
                return f.Nf !== d
              }, this.ic)
              var e = b.F.Od()
              try {
                b.F.stop()
              } catch (f) {}
              this.yc(d, e)
            }
          }
          c.prototype.pe = function (b) {
            if (b) {
              var d = b.data.node
              this.Ba.observe(d, { attributes: !0, attributeFilter: ['src'] })
              this.yc(d, b.data.id)
            }
          }
          c.prototype.yc = function (b, d) {
            var e = this
            this.Hi(b) &&
              cc(
                this.l,
                b
              )(
                Ua(B, function () {
                  var f = e.F.yc(b.contentWindow, d)
                  e.ic.push({ F: f, Nf: b })
                })
              )
          }
          c.prototype.qe = function (b) {
            var d = this,
              e = b.M
            b = b.data
            this.Ld[e] || (this.Ld[e] = { data: [] })
            var f = this.Ld[e]
            f.data = f.data.concat(b)
            this.l.isNaN(f.Fd) &&
              z(function (g) {
                'page' === g.type && (f.Fd = g.data.Ka - d.F.Hf())
              }, f.data)
            this.l.isNaN(f.Fd) ||
              (this.F.fa(
                A(function (g) {
                  g.L += f.Fd
                  g.L = d.l.Math.max(0, g.L)
                  return g
                }, f.data)
              ),
              (f.data = []))
          }
          c.prototype.Hi = function (b) {
            var d = b.getAttribute('src'),
              e = b.getAttribute('sandbox')
            return b.getAttribute('_ym_ignore') ||
              (e && !e.match(Yt)) ||
              (d &&
                'about:blank' !== d &&
                (d = Hc(this.l, d).host) &&
                S(this.l).host !== d)
              ? !1
              : n(b, 'contentWindow.location.href')
          }
          return c
        })($a),
        $t = x(function (a) {
          var c = n(a, 'sessionStorage')
          if (!c) return null
          try {
            var b = c.getItem('__ym_tab_guid')
            c = !1
            var d = n(a, 'opener.sessionStorage')
            try {
              c = !!d && b === d.getItem('__ym_tab_guid')
            } catch (e) {
              c = !0
            }
            if (!b || c)
              (b = Sh()), a.sessionStorage.setItem('__ym_tab_guid', b)
            return b
          } catch (e) {
            return null
          }
        }),
        au = (function (a) {
          function c (b, d, e) {
            b = a.call(this, b, d, e) || this
            b.Je = b.K.J(b.Je, 'ps')
            return b
          }
          Ka(c, a)
          c.prototype.start = function () {
            this.F.wa().Mc({
              na: [this.l.document.documentElement],
              jd: this.Je
            })
          }
          c.prototype.Je = function (b) {
            var d = this.F.ji(),
              e = d.Zh(),
              f = S(this.l),
              g = f.host,
              h = f.protocol
            f = f.pathname
            var k = Rc(this.l),
              l = k[0]
            k = k[1]
            this.F.X(
              'page',
              {
                content: A(function (m) {
                  m.node = void 0
                  return m
                }, b),
                jf: e || '',
                Lf: !!e,
                viewport: { width: l, height: k },
                title: this.l.document.title,
                doctype: d.ai() || '',
                ff: this.l.location.href,
                Mg: this.l.navigator.userAgent,
                referrer: this.l.document.referrer,
                screen: {
                  width: this.l.screen.width,
                  height: this.l.screen.height
                },
                location: { host: g, protocol: h, path: f },
                Ka: this.F.Hf(),
                md: $t(this.l)
              },
              'page',
              0
            )
          }
          return c
        })($a),
        bu = ['addRule', 'removeRule', 'insertRule', 'deleteRule'],
        mh = [
          [
            (function (a) {
              function c (b, d, e) {
                b = a.call(this, b, d, e) || this
                b.lb = {}
                b.jc = {}
                b.gf = 0
                b.Zc = b.K.J(b.Zc, 'a')
                b.Ib = b.K.J(b.Ib, 'sr')
                b.$c = b.K.J(b.$c, 'r')
                b.fa = b.K.J(b.fa, 'd')
                return b
              }
              Ka(c, a)
              c.prototype.start = function () {
                var b = this.F.wa()
                b.D('style', 'NA:', this.Zc)
                b.D('style', 'NR:', this.$c)
                this.fa()
              }
              c.prototype.stop = function () {
                var b = this
                a.prototype.stop.call(this)
                var d = this.F.wa()
                d.oa('style', 'NA:', this.Zc)
                d.oa('style', 'NR:', this.$c)
                this.fa()
                na(this.l, this.gf)
                z(function (e) {
                  b.lb[e].sheet && b.lg(b.lb[e].sheet)
                }, da(this.lb))
                this.lb = {}
              }
              c.prototype.fa = function () {
                var b = this
                z(function (d) {
                  var e = d[0]
                  d = d[1]
                  if (d.length) {
                    for (
                      var f = [], g = d[0].L, h = [], k = 0;
                      k < d.length;
                      k += 1
                    ) {
                      var l = d[k],
                        m = l.L
                      delete l.L
                      m <= g + 50 ? f.push(l) : (h.push(f), (g = m), (f = [l]))
                    }
                    f.length && h.push(f)
                    h.length &&
                      z(function (p) {
                        b.F.X(
                          'event',
                          { target: Ga(e), Oa: p },
                          'stylechange',
                          g
                        )
                      }, h)
                    delete b.jc[e]
                  }
                }, pa(this.jc))
                this.gf = W(this.l, this.fa, 100)
              }
              c.prototype.Ib = function (b, d, e, f, g) {
                void 0 === f && (f = '')
                void 0 === g && (g = -1)
                this.jc[b] || (this.jc[b] = [])
                this.jc[b].push({ te: d, style: f, index: g, L: e })
              }
              c.prototype.kj = function (b, d) {
                var e = this,
                  f = b.addRule,
                  g = b.removeRule,
                  h = b.insertRule,
                  k = b.deleteRule
                T(f) &&
                  (b.addRule = function (l, m, p) {
                    e.Ib(d, 'a', e.F.L(), l + '{' + m + '}', p)
                    return f.call(b, l, m, p)
                  })
                T(g) &&
                  (b.removeRule = function (l) {
                    e.Ib(d, 'r', e.F.L(), '', l)
                    return g.call(b, l)
                  })
                T(h) &&
                  (b.insertRule = function (l, m) {
                    e.Ib(d, 'a', e.F.L(), l, m)
                    return h.call(b, l, m)
                  })
                T(k) &&
                  (b.deleteRule = function (l) {
                    e.Ib(d, 'r', e.F.L(), '', l)
                    return k.call(b, l)
                  })
              }
              c.prototype.lg = function (b) {
                var d = this
                z(function (e) {
                  var f = d.l.CSSStyleSheet.prototype[e]
                  T(f) && (b[e] = G(f, b))
                }, bu)
              }
              c.prototype.Lh = function (b) {
                try {
                  return b.cssRules || b.rules
                } catch (d) {
                  return null
                }
              }
              c.prototype.Zc = function (b) {
                var d = b.data
                b = d.id
                d = d.node
                if (d.sheet && !d.getAttribute('src') && !d.innerText) {
                  var e = d.sheet,
                    f = this.Lh(e)
                  if (f && f.length) {
                    for (var g = [], h = 0; h < f.length; h += 1)
                      g.push({ style: f[h].cssText, index: h, te: 'a' })
                    this.F.X('event', { Oa: g, target: b }, 'stylechange')
                  }
                  this.kj(e, b)
                  this.lb[b] = d
                }
              }
              c.prototype.$c = function (b) {
                b = b.data.id
                var d = this.lb[b]
                d && (delete this.lb[b], d.sheet && this.lg(d.sheet))
              }
              return c
            })($a),
            'ss'
          ],
          [Bt, 'in'],
          [yt, 'mu'],
          [Ct, 'r'],
          [Dt, 'sc'],
          [Ft, 'mo'],
          [Ht, 'f'],
          [Mt, 'se'],
          [Ot, 'wf'],
          [Qt, 't'],
          [Rt, 'src'],
          [St, 'z'],
          [Xt, 'ks']
        ]
      mh.push([Zt, 'if'])
      mh.push([au, 'pa'])
      var cu = x(function (a) {
          var c = a.document
          return {
            Rd: function () {
              if (c.scrollingElement) return c.scrollingElement
              var b =
                0 === c.compatMode.indexOf('CSS1') ? c.documentElement : c.body
              return n(c, 'documentElement.scrollHeight') >=
                n(c, 'body.scrollHeight')
                ? b
                : null
            },
            ii: function () {
              var b = a.screen
              if (!b) return 0
              var d = bb(w(b, n), [
                'orientation',
                'mozOrientation',
                'msOrientation'
              ])
              return n(b, d + '.angle') || 0
            },
            Bk: w(a, eb),
            Of: w(a, od),
            Ak: w(a, Ne)
          }
        }),
        du = (function () {
          function a (c, b) {
            var d = this
            this.Xb = 0
            this.Ed = []
            this.Wb = null
            this.ya = this.nc = this.Bg = !1
            this.Ka = 0
            this.ji = function () {
              return d.page
            }
            this.Od = function () {
              return d.Xb
            }
            this.Hf = function () {
              return d.Ka
            }
            this.gi = function () {
              return d.rb
            }
            this.Gf = function () {
              return d.Wb
            }
            this.wa = function () {
              return d.Xd
            }
            this.L = function () {
              return d.Re ? d.l.Math.max(d.Re(aa) - d.Ka, 0) : 0
            }
            this.Ub = function () {
              return d.options
            }
            this.wb = function () {
              return d.mh
            }
            this.X = function (f, g, h, k) {
              void 0 === k && (k = d.L())
              f = d.ei(f, g, h, k)
              d.fa(f)
            }
            this.ei = function (f, g, h, k) {
              void 0 === k && (k = d.L())
              return { type: f, data: g, L: k, M: d.Xb, event: h }
            }
            this.fa = function (f) {
              f = ca(f) ? f : [f]
              d.Bg && !d.nc
                ? d.ya
                  ? ((f = A(function (g) {
                      return g.M ? g : y(g, { M: d.Xb })
                    }, f)),
                    d.Gf().rg(f))
                  : ((f = A(an, f)), d.ec(f))
                : (d.Ed = d.Ed.concat(f))
            }
            this.l = c
            var e = Bf(c, this, 'R')
            this.Oe = e.J(this.Oe, 's')
            this.fa = e.J(this.fa, 'sd')
            e = H(c)
            e.o('wv2e') && Xd()
            e.C('wv2e', !0)
            this.options = b
            this.rb = ia(c)
            this.Xd = new zt(this.l, b)
            this.mh = cu(c)
            this.kf = A(function (f) {
              return new f[0](c, d, f[1])
            }, mh)
            this.Fi()
            this.page = cn(this.l)
            this.Oe()
          }
          a.prototype.start = function (c) {
            this.Bg = !0
            this.ec = c
            this.og()
          }
          a.prototype.stop = function () {
            lh(this.l) &&
              (z(function (c) {
                return c.stop()
              }, this.kf),
              this.Xd.stop(),
              this.Wb && this.Wb.stop(),
              this.ya || this.X('event', {}, 'eof'))
          }
          a.prototype.yc = function (c, b) {
            var d = new a(c, y({}, this.options, { M: b }))
            d.start(B)
            return d
          }
          a.prototype.Fi = function () {
            var c = this
            this.ya = !!this.options.M
            this.Xb = this.options.M || 0
            this.nc = !this.ya
            var b = this.options.Lg || []
            b.push(S(this.l).host)
            this.Wb = dn(this.l, this, b)
            b = this.Wb.Nd()
            eb(this.l)
              ? this.nc &&
                b.D(['i'], function (d) {
                  c.ya = d.ya
                  c.nc = !1
                  d.M && (c.Xb = d.M)
                  c.og()
                })
              : (this.nc = this.ya = !1)
          }
          a.prototype.og = function () {
            var c = Dd(this.Ed)
            this.fa(c)
          }
          a.prototype.Oe = function () {
            this.Re = eg(this.l)
            this.Ka = this.Re(aa)
            z(function (c) {
              c.start()
            }, this.kf)
            this.Xd.start()
          }
          return a
        })(),
        fd = u(da, xc),
        ea,
        eu =
          ((ea = {}),
          (ea.mousemove = 0),
          (ea.mouseup = 1),
          (ea.mousedown = 2),
          (ea.click = 3),
          (ea.scroll = 4),
          (ea.windowblur = 5),
          (ea.windowfocus = 6),
          (ea.focus = 7),
          (ea.blur = 8),
          (ea.eof = 9),
          (ea.selection = 10),
          (ea.change = 11),
          (ea.input = 12),
          (ea.touchmove = 13),
          (ea.touchstart = 14),
          (ea.touchend = 15),
          (ea.touchcancel = 16),
          (ea.touchforcechange = 17),
          (ea.canvasMethod = 18),
          (ea.canvasProperty = 19),
          (ea.zoom = 20),
          (ea.resize = 21),
          (ea.mediaMethod = 22),
          (ea.mediaProperty = 23),
          (ea.keystroke = 24),
          (ea.deviceRotation = 25),
          (ea.fatalError = 26),
          (ea.hashchange = 27),
          (ea.stylechange = 28),
          ea),
        nh = la(function (a, c) {
          var b
          return (b = {}), (b[fd(a)] = c), b
        }),
        fu = (function () {
          function a (c) {
            var b
            this.isSync = !1
            this.Rb = []
            this.uf = []
            this.l = c
            this.Yb =
              ((b = {}),
              (b.event = G(this.Ih, this)),
              (b.page = nh({ page: 1 })),
              (b.mutation = nh({ Vi: 1 })),
              (b.activity = nh({ gh: 1 })),
              b)
            this.uf = [
              [['scroll'], { vj: 1 }],
              [['selection'], { xj: 1 }],
              [['change', 'input'], { rh: 1 }],
              [['keystroke'], { Pi: 1 }, { Sc: 1 }],
              [['zoom'], { ak: 1 }],
              [['resize'], { sj: 1 }],
              [
                ['windowfocus', 'windowblur', 'focus', 'blur', 'eof'],
                { Yj: 1 }
              ],
              [['mousemove', 'mouseup', 'mousedown', 'click'], { Ti: 1 }],
              [['deviceRotation'], { Dh: 1 }],
              [['fatalError'], { Nh: 1 }],
              [
                [
                  'touchmove',
                  'touchstart',
                  'touchend',
                  'touchcancel',
                  'touchforcechange'
                ],
                { Jj: 1 },
                { touches: 1 },
                { touches: 1 }
              ],
              [['hashchange'], { Ai: 1 }],
              [['stylechange'], { Bj: 1 }, { Oa: 1 }, { Oa: 1 }]
            ]
          }
          a.prototype.Ih = function (c) {
            var b,
              d,
              e = c.type,
              f = bb(u(xc, w(e, K)), this.uf)
            f || Ta(jc('vem.' + e))
            'eof' === e && (this.isSync = !0)
            var g = f[1],
              h = f[2]
            f = f[3]
            var k = c.ba
            return {
              event:
                ((b = { type: eu[e], target: c.target, M: c.M }),
                (b[fd(g)] = h
                  ? ((d = {}), (d[fd(h)] = f ? k[fd(f)] : k), d)
                  : k),
                b)
            }
          }
          a.prototype.Da = function (c, b) {
            var d = this
            void 0 === b && (b = !1)
            var e = kc(c, function (h) {
                var k = !X(h.partNum)
                return {
                  data: k ? void 0 : d.Yb[h.type](h.data),
                  xh: k ? h.data : void 0,
                  page: h.partNum,
                  end: h.end,
                  L: h.L
                }
              }),
              f = this.isSync || b ? Infinity : 10
            e = lc(this.l, e, f)
            var g = [e]
            this.Rb.push(e)
            return e(
              Xe(function (h) {
                h = le(d.l, fi, { buffer: h })
                h = lc(d.l, h, f, Le)
                g.push(h)
                d.Rb.push(h)
                return h
              })
            )(
              Xe(function (h) {
                h = Kf(d.l, h.slice(-4))
                h = lc(d.l, h, f, Le)
                g.push(h)
                d.Rb.push(h)
                return h
              })
            )(
              Vg(function (h) {
                h = h[h.length - 1]
                z(function (k) {
                  k = ze(d.l)(k, d.Rb)
                  d.Rb.splice(k, 1)
                }, g)
                return h
              })
            )
          }
          a.prototype.Ua = function (c) {
            return le(this.l, Nf, this.Yb[c.type](c.data))(Me(B))
          }
          a.prototype.ab = function (c) {
            return c[0]
          }
          a.prototype.ld = function (c, b) {
            for (
              var d = Kf(this.l, c)(Me(B)),
                e = Math.ceil(d.length / b),
                f = [],
                g = 0;
              g < b;
              g += 1
            )
              f.push(d.slice(g * e, e * (g + 1)))
            return f
          }
          a.prototype.isEnabled = function () {
            return ei(this.l)
          }
          return a
        })(),
        gu = (function () {
          return function (a, c, b, d) {
            var e = this
            this.vd = this.bc = !1
            this.hb = []
            this.Wf = []
            this.sf = []
            this.send = function (f, g, h, k) {
              f = e.sender(f, e.xc, g)
              h && k && f.then(h, k)
              return f
            }
            this.Qe = function (f, g, h, k) {
              return new J(function (l, m) {
                f.push([g, h, l, m, k])
              })
            }
            this.xi = function () {
              e.hb = Eg(function (h, k) {
                return h[4].partNum - k[4].partNum
              }, e.hb)
              var f = M(
                  function (h, k, l) {
                    k = k[4]
                    return h && l + 1 === k.partNum
                  },
                  !0,
                  e.hb
                ),
                g = !!e.hb[e.hb.length - 1][4].end
              return f && g
            }
            this.Jd = function (f) {
              th(
                e.l,
                f.slice(),
                function (g) {
                  e.send(g[0], g[1], g[2], g[3])
                },
                20,
                's.w2.sf.fes'
              )
              Dd(f)
            }
            this.Rh = function () {
              e.vd || ((e.vd = !0), e.Jd(e.Wf), e.Jd(e.sf))
            }
            this.uh = function (f) {
              return M(
                function (g, h) {
                  var k = 'page' === h.type && !h.M,
                    l = 'eof' === h.data.type,
                    m = k && !!h.partNum
                  return { Ad: g.Ad || m, zd: g.zd || k, yd: g.yd || l }
                },
                { zd: !1, yd: !1, Ad: !1 },
                f
              )
            }
            this.vi = function (f, g, h, k) {
              k
                ? ((f = e.Qe(e.hb, f, g, h[0])),
                  e.xi() && (e.Jd(e.hb), (e.bc = !0)))
                : ((e.bc = !0), (f = e.send(f, g)))
              return f
            }
            this.ri = function (f) {
              var g
              return e.Ji
                ? ((g = {}),
                  (g['wv-type'] = Ja(function (h) {
                    return 'eof' === n(h, 'data.type')
                  }, f)
                    ? '2'
                    : '8'),
                  g)
                : {}
            }
            this.If = function (f, g, h) {
              g = { G: e.ri(h), H: Ea(), Y: { ea: g }, Sa: { Zd: e.Gi } }
              f && g.H.C('bt', 1)
              return g
            }
            this.Jh = function (f, g, h) {
              f = e.If(!1, f, g)
              return e.bc ? e.send(f, h) : e.Qe(e.sf, f, h, g)
            }
            this.Wi = function (f, g, h) {
              f = e.If(!0, f, g)
              if (e.bc) return e.send(f, h)
              var k = e.uh(g),
                l = k.zd,
                m = k.yd
              k = k.Ad
              var p
              l && (p = e.vi(f, h, g, k))
              e.vd
                ? l || (p = e.send(f, h))
                : (l || (p = e.Qe(e.Wf, f, h, g)), (e.bc || m) && e.Rh())
              return p
            }
            this.Ji = d
            this.l = a
            this.Gi = b
            this.sender = sa(a, 'W', c)
            this.xc = c
          }
        })(),
        tl = x(
          function (a) {
            var c = H(a),
              b = c.o('isEU')
            if (X(b)) {
              var d = Ga(ke(a, 'is_gdpr') || '')
              if (K(d, [0, 1])) c.C('isEU', d), (b = !!d)
              else if (((a = Ra(a).o('wasSynced')), (a = n(a, 'params.eu'))))
                c.C('isEU', a), (b = !!a)
            }
            return b
          },
          function (a) {
            return H(a).o('isEU')
          }
        ),
        wf = C('i.e', tl),
        hu = C('i.ep', function (a) {
          tl(a)
        }),
        iu = C('w2', function (a, c) {
          function b () {
            h = !0
          }
          var d = H(a),
            e = N(c)
          if (
            !c.ob ||
            cd(a) ||
            !a.MutationObserver ||
            !Ca('Element', a.Element)
          )
            return B
          Ca('MutationObserver', a.MutationObserver) ||
            Cd(a, e).warn(
              'MutationObserver is overriden, webvisor is not guaranteed to work in this environment'
            )
          var f = Aa(function (k, l) {
              ra(c, l)['catch'](k)
            }),
            g = cc(a)(Xe(E([a, c], Zm)))(
              Vg(function (k) {
                return new du(a, k)
              })
            ),
            h = !1
          Hq([g, f])(
            Ua(D(a, 'wv2.R.c'), function (k) {
              var l = k[0]
              k = k[1]
              if (!h) {
                b = function () {
                  h || ((h = !0), l && l.stop())
                }
                var m = d.o('wv2Counter')
                if (!Uh(a, k) || m) b()
                else if (
                  (ia(a).D(a, ['beforeunload', 'unload'], b),
                  d.C('wv2Counter', e),
                  d.C('stopRecorder', b),
                  (k = [new af(a)]),
                  k.unshift(new fu(a)),
                  (k = bb(function (t) {
                    return t.isEnabled()
                  }, k)))
                ) {
                  m = new gu(a, c, !(k instanceof af), 0)
                  var p = ql.Df(e, 'm', G(m.Wi, m), k, a),
                    q = ql.Df(e, 'e', G(m.Jh, m), k, a)
                  k = $m()
                  m = k.bj
                  q.D('ag', k.hh)
                  q.D('p', m)
                  p.D('see', function (t) {
                    var v = !1
                    z(function (F) {
                      'page' === F.type && (v = !0)
                    }, t)
                    v &&
                      (h ||
                        q.push({
                          type: 'event',
                          data: {
                            type: 'fatalError',
                            ba: {
                              code: 'invalid-snapshot',
                              Kh: 'p.s.f',
                              stack: ''
                            }
                          }
                        }),
                      b())
                  })
                  var r = hb(function (t) {
                    'eof' === n(t, 'data.type')
                      ? (q.push(t), p.push(t), q.flush(), p.flush())
                      : ('event' === t.type ? q : p).push(t)
                  })
                  W(a, b, 864e5)
                  Jb(a, function () {
                    var t, v
                    nb(
                      a,
                      ((t = {}),
                      (t.counterKey = e),
                      (t.name = 'webvisor'),
                      (t.data = ((v = {}), (v.version = 2), v)),
                      t)
                    )
                    l.start(r)
                  })
                }
              }
            })
          )
          return function () {
            return b()
          }
        }),
        ju = C('w2.cs', function (a, c) {
          var b,
            d = N(c)
          ag(a, d, ((b = {}), (b.webvisor = !!c.ob), b))
        }),
        ul = x(Ac, N),
        Qh = u(ed, pc),
        vl = B,
        ku = pb('isp.stat', function (a, c) {
          return new J(function (b, d) {
            if (uq(a, hl, 'isp')) {
              var e = function (f) {
                ;('1' === f ? b : d)()
                vl()
                f = Cj(hl)
                K('isp', f.Db) &&
                  ((f.Db = Z(u(ka('isp'), Sb), f.Db)),
                  f.Db.length || (oc(f.vb), (f.vb = null)))
              }
              vl = ia(a).D(a, ['message'], E([c, e], D(a, 'isp.stat.m', Ym)))
              W(a, e, 1500)
            } else d()
          })
        }),
        lu = pb('isp', function (a, c) {
          ra(c, function (b) {
            var d = bb(
              function (g) {
                return n(b, 'settings.' + g)
              },
              ['rt', 'mf']
            )
            if (d && Qd(a)) {
              var e = qi(b) && !ce(a),
                f = ul(c)
              y(f, { bd: d, status: e ? 3 : 4 })
              if (!e)
                return (
                  (d = Xm(a, c, d)),
                  (e = function (g) {
                    f.status = g
                  }),
                  ku(a, d).then(w(1, e))['catch'](w(2, e))
                )
            }
          })['catch'](D(a, 'l.isp'))
        }),
        wl = C('fbq.o', function (a, c, b) {
          var d = n(a, 'fbq')
          if (d && d.callMethod) {
            var e = function () {
              var g = Da(arguments),
                h = d.apply(void 0, g)
              c(g)
              return h
            }
            y(e, d)
            b && z(c, b)
            a.fbq = e
          } else var f = W(a, E([a, c, ya(za(d && d.queue))], wl), 1e3, 'fbq.d')
          return G(na, null, a, f)
        }),
        Zc,
        Bb,
        $c,
        oh =
          ((Zc = {}),
          (Zc.add_to_wishlist = 'add-to-wishlist'),
          (Zc.begin_checkout = 'begin-checkout'),
          (Zc.generate_lead = 'submit-lead'),
          (Zc.add_payment_info = 'add-payment-info'),
          Zc),
        ph =
          ((Bb = {}),
          (Bb.AddToCart = 'add-to-cart'),
          (Bb.Lead = 'submit-lead'),
          (Bb.InitiateCheckout = 'begin-checkout'),
          (Bb.Purchase = 'purchase'),
          (Bb.CompleteRegistration = 'register'),
          (Bb.Contact = 'submit-contact'),
          (Bb.AddPaymentInfo = 'add-payment-info'),
          (Bb.AddToWishlist = 'add-to-wishlist'),
          (Bb.Subscribe = 'subscribe'),
          Bb),
        Vm =
          (($c = {}),
          ($c['1'] = oh),
          ($c['2'] = oh),
          ($c['3'] = oh),
          ($c['0'] = ph),
          $c),
        Wm = [ph.AddToCart, ph.Purchase],
        mu = la(function (a, c) {
          var b = n(c, 'ecommerce'),
            d = n(c, 'event') || ''
          if (!(b = b && d && { version: '3', Dc: d }))
            a: {
              if (ca(c) || Pa(c))
                if (((b = Da(c)), (d = b[1]), 'event' === b[0] && d)) {
                  b = { version: '2', Dc: d }
                  break a
                }
              b = void 0
            }
          b ||
            (b = (b = n(c, 'ecommerce')) && { version: '1', Dc: I(',', da(b)) })
          b && a(b)
        }),
        nu = C('ag.e', function (a, c) {
          var b = [],
            d = D(a, 'ag.s', E([ha, b], z))
          '0' === c.$ &&
            ra(c, function (e) {
              if (
                n(e, 'settings.auto_goals') &&
                Ha(a, c) &&
                (e = ue(a, c, 'autogoal').reachGoal)
              ) {
                e = E([e, c.Hd], Um)
                var f = mu(e)
                e = E([a, e], Tm)
                b.push(wl(a, e))
                b.push(
                  Ri(a, 'dataLayer', function (g) {
                    g.Ba.D(f)
                  })
                )
              }
            })
          return d
        }),
        ou = /[^\d.,]/g,
        pu = /[.,]$/,
        Rm = C('ep.pp', function (a, c) {
          if (!c) return 0
          a: {
            var b = c.replace(ou, '').replace(pu, '')
            var d = '0' === b[b.length - 1]
            for (var e = b.length; 0 < e && !(3 < b.length - e + 1 && d); --e) {
              var f = b[e - 1]
              if (K(f, [',', '.'])) {
                d = f
                break a
              }
            }
            d = ''
          }
          b = d ? c.split(d) : [c]
          d = d ? b[1] : '00'
          b = parseFloat(Mb(b[0]) + '.' + Mb(d))
          d = Math.pow(10, 8) - 0.01
          a.isNaN(b)
            ? (b = 0)
            : ((b = a.Math.min(b, d)), (b = a.Math.max(b, 0)))
          return b
        }),
        qu = [
          [['EUR', '\u20ac'], '978'],
          [['USD', '\u0423\\.\u0415\\.', '\\$'], '840'],
          [['UAH', '\u0413\u0420\u041d', '\u20b4'], '980'],
          [
            '\u0422\u0413 KZT \u20b8 \u0422\u04a2\u0413 TENGE \u0422\u0415\u041d\u0413\u0415'.split(
              ' '
            ),
            '398'
          ],
          [['GBP', '\u00a3', 'UKL'], '826'],
          [
            'RUR RUB \u0420 \u0420\u0423\u0411 \u20bd P \u0420UB P\u0423\u0411 P\u0423B PY\u0411 \u0420Y\u0411 \u0420\u0423B P\u0423\u0411'.split(
              ' '
            ),
            '643'
          ]
        ],
        ru = x(function (a) {
          return new RegExp(a.join('|'), 'i')
        }),
        su = C('ep.cp', function (a) {
          if (!a) return '643'
          var c = Hi(a)
          return (a = bb(function (b) {
            return ru(b[0]).test(c)
          }, qu))
            ? a[1]
            : '643'
        }),
        tu = x(function () {
          function a () {
            var k = h + '0',
              l = h + '1'
            f[k]
              ? f[l]
                ? ((h = h.slice(0, -1)), --g)
                : ((e[l] = b(8)), (f[l] = 1))
              : ((e[k] = b(8)), (f[k] = 1))
          }
          function c () {
            var k = h + '1'
            f[h + '0']
              ? f[k]
                ? ((h = h.slice(0, -1)), --g)
                : ((h += '1'), (f[h] = 1))
              : ((h += '0'), (f[h] = 1))
          }
          function b (k) {
            void 0 === k && (k = 1)
            var l = d.slice(g, g + k)
            g += k
            return l
          }
          for (
            var d = Oh(
                'Cy2FcreLJLpYXW3BXFJqldVsGMwDcBw2BGnHL5uj1TKstzse3piMo3Osz+EqDotgqs1TIoZvKtMKDaSRFztgUS8qkqZcaETgKWM54tCpTXjV5vW5OrjBpC0jF4mspUBQGd95fNSfv+vz+g+Hze33Hg8by+Yen1PP6zsdl7PQCwX9mf+f7FMb9x/Pw+v2Pp8Xy74eTwuBwTt913u4On1XW6hxOO5nIzFam00tC218S0kaeugpqST+XliLOlMoTpRQkuewUxoy4CT3efWtdFjSAAm+1BkjIhyeU4vGOf13a6U8wzNY4bGo6DIUemE7N3SBojDr7ezXahpWF022y8mma1NuTnZbq8XZZlPStejfG/CsbPhV6/bSnA=='
              ).join(''),
              e = {},
              f = {},
              g = 1,
              h = '';
            g < d.length - 1;

          )
            ('0' === b() ? c : a)()
          return e
        }),
        Om = C('ep.dec', function (a, c) {
          if (!c || cd(a)) return []
          var b = Oh(c),
            d = b[1],
            e = b[2],
            f = b.slice(3)
          if (2 !== Sg(b[0])) return []
          b = tu()
          f = f.join('')
          e = Sg(d + e)
          var g = ''
          d = ''
          for (var h = 0; d.length < e && f[h]; )
            (g += f[h]),
              b[g] && ((d += String.fromCharCode(Sg(b[g]))), (g = '')),
              (h += 1)
          b = ''
          for (f = 0; f < d.length; )
            (e = d.charCodeAt(f)),
              128 > e
                ? ((b += String.fromCharCode(e)), f++)
                : 191 < e && 224 > e
                ? ((g = d.charCodeAt(f + 1)),
                  (b += String.fromCharCode(((e & 31) << 6) | (g & 63))),
                  (f += 2))
                : ((g = d.charCodeAt(f + 1)),
                  (b += String.fromCharCode(
                    ((e & 15) << 12) |
                      ((g & 63) << 6) |
                      (d.charCodeAt(f + 2) & 63)
                  )),
                  (f += 3))
          d = tb(a, b)
          return ca(d) ? A(er, d) : []
        }),
        Qm = C('ep.ent', function (a, c, b) {
          a = '' + Wa(a, 10, 99)
          b = '' + 100 * c + b + a
          if (16 < Pa(b)) return ''
          b = Ph('0', 16, b)
          c = b.slice(0, 8)
          b = b.slice(-8)
          c = (+c ^ 92844).toString(35)
          b = (+b ^ 92844).toString(35)
          return '' + c + 'z' + b
        }),
        xl = u(Nh, su),
        yl = C('ep.ctp', function (a, c, b, d) {
          var e = xl(a, b),
            f = Mh(a, d)
          Lh(a, c, e, f)
          Ca('MutationObserver', a.MutationObserver) &&
            new a.MutationObserver(function () {
              var g = xl(a, b),
                h = Mh(a, d)
              if (e !== g || f !== h) (e = g), (f = h), Lh(a, c, e, f)
            }).observe(a.document.body, {
              attributes: !0,
              childList: !0,
              subtree: !0,
              characterData: !0
            })
        }),
        uu = C('ep.chp', function (a, c, b, d, e) {
          b && uf(a, c)
          return d || e
            ? ia(a).D(
                a.document,
                ['click'],
                D(a, 'ep.chp.cl', E([a, c, d, e], Pm))
              )
            : B
        }),
        yu = C('ep.i', function (a, c) {
          return Id(a)
            ? Nm(a, c).then(function (b) {
                var d = b.Fh,
                  e = d[0],
                  f = d[1],
                  g = d[2],
                  h = d[3],
                  k = d[4],
                  l = d[5],
                  m = d[6],
                  p = d[7],
                  q = d[8],
                  r = d[9],
                  t = d[10],
                  v = d[11],
                  F = d[12],
                  Y = d[13],
                  Q = d[14],
                  oa = d[15]
                if (!b.isEnabled) return J.resolve(B)
                var ua = fe(a, e),
                  vb = fe(a, h),
                  ud = fe(a, m),
                  te = fe(a, q),
                  vu = '' + e + f + g === '' + h + k + l
                return new J(function (wu, xu) {
                  cc(a)(
                    Ua(xu, function () {
                      ua && yl(a, c, f, g, t, v, F)
                      vb && !vu && yl(a, c, k, l, Y, Q, oa)
                      wu(uu(a, c, ud || te, p, r))
                    })
                  )
                })
              })
            : J.resolve(B)
        }),
        vm = [
          'RTCPeerConnection',
          'mozRTCPeerConnection',
          'webkitRTCPeerConnection'
        ],
        zu = C('cc.i', function (a, c) {
          var b = E([a, c], Mm)
          b = E([a, b, 300, void 0], W)
          ra(c, b)
        }),
        Au = w('9-d5ve+.r%7', O),
        Bu = C('ad', function (a, c) {
          if (!c.Cb) {
            var b = H(a)
            if (!b.o('adBlockEnabled')) {
              var d = function (m) {
                  K(m, ['2', '1']) && b.C('adBlockEnabled', m)
                },
                e = $b(a),
                f = e.o('isad')
              if (f) d(f)
              else {
                var g = w('adStatus', b.C),
                  h = function (m) {
                    m = m ? '1' : '2'
                    d(m)
                    g('complete')
                    e.C('isad', m, 1200)
                    return m
                  },
                  k = sa(a, 'adb', c)
                if (!b.o('adStatus')) {
                  g('process')
                  var l = 'metrika/a' + Au().replace(/[^a-v]+/g, '') + 't.gif'
                  Jm(a, function () {
                    return k({ ia: { ta: l } })
                      .then(w(!1, h))
                      ['catch'](w(!0, h))
                  })
                }
              }
            }
          }
        }),
        Cu = C('pr.p', function (a, c) {
          var b, d
          if (vg(a)) {
            var e = sa(a, '5', c),
              f = Ea(((b = {}), (b.pq = 1), (b.ar = 1), b))
            e(
              {
                H: f,
                G:
                  ((d = {}),
                  (d['page-url'] = S(a).href),
                  (d['page-ref'] = n(a, 'document.referrer') || ''),
                  d)
              },
              c
            )['catch'](D(a, 'pr.p.s'))
          }
        }),
        Kh = !1,
        Du = C('fid', function (a) {
          var c,
            b = B
          if (!T(a.PerformanceObserver)) return b
          var d = H(a)
          if (d.o('fido')) return b
          d.C('fido', !0)
          var e = new a.PerformanceObserver(
            D(a, 'fid', function (f) {
              f = f.getEntries()[0]
              d.C('fid', a.Math.round(100 * (f.processingStart - f.startTime)))
              b()
            })
          )
          b = function () {
            return e.disconnect()
          }
          try {
            e.observe(
              ((c = {}), (c.type = 'first-input'), (c.buffered = !0), c)
            )
          } catch (f) {}
          return b
        }),
        Ih = {
          1882689622: 1,
          2318205080: 1,
          3115871109: 1,
          3604875100: 1,
          339366994: 1,
          2890452365: 1,
          849340123: 1,
          173872646: 1,
          2343947156: 1,
          655012937: 1,
          3724710748: 1,
          3364370932: 1,
          1996539654: 1,
          2065498185: 1,
          823651274: 1,
          12282461: 1,
          1555719328: 1,
          1417229093: 1,
          138396985: 1,
          3015043526: 1
        },
        Eu = C(
          'lt.p',
          pb('lt.p', function (a) {
            var c
            if (Ca('PerformanceObserver', a.PerformanceObserver)) {
              var b = 0,
                d = new a.PerformanceObserver(
                  D(a, 'lt.o', function (e) {
                    e &&
                      e.getEntries &&
                      ((e = e.getEntries()),
                      (b = M(
                        function (f, g) {
                          return f + g.duration
                        },
                        b,
                        e
                      )),
                      Nd(a).C('lt', b))
                  })
                )
              try {
                d.observe(
                  ((c = {}), (c.type = 'longtask'), (c.buffered = !0), c)
                )
              } catch (e) {
                return B
              }
              return function () {
                return d.disconnect()
              }
            }
            return B
          })
        ),
        Fu = x(u(V('performance.memory.jsHeapSizeLimit'), qa('concat', ''))),
        Gu = ['availWidth', 'availHeight', 'availTop'],
        Hu =
          'appName vendor deviceMemory hardwareConcurrency maxTouchPoints appVersion productSub appCodeName vendorSub'.split(
            ' '
          ),
        Iu = ['webgl', 'experimental-webgl'],
        Gm = [-0.2, -0.9, 0, 0.4, -0.26, 0, 0, 0.732134444, 0],
        qf = w(Sa('ccf'), Ta),
        Fm =
          'prefers-reduced-motion;prefers-reduced-transparency;prefers-color-scheme: dark;prefers-color-scheme: light;pointer: none;pointer: coarse;pointer: fine;any-pointer: none;any-pointer: coarse;any-pointer: fine;scan: interlace;scan: progressive;color-gamut: srgb;color-gamut: p3;color-gamut: rec2020;update: fast;update: slow;update: none;grid: 0;grid: 2;hover: hover;inverted-colors: inverted;inverted-colors: none'.split(
            ';'
          ),
        Gh =
          'video/ogg video/mp4 video/webm audio/x-aiff audio/x-m4a audio/mpeg audio/aac audio/wav audio/ogg audio/mp4'.split(
            ' '
          ),
        Dm = 'theora vorbis 1 avc1.4D401E mp4a.40.2 vp8.0 mp4a.40.5'.split(' '),
        xm = x(Ci),
        Fh = x(tb, zb),
        Ju = C('phc.p', function (a, c) {
          return $k(a)
            ? B
            : ra(c, function (b) {
                var d = c.id,
                  e = Dc(a, void 0, d),
                  f = e.o('phc_settings') || ''
                if ((b = n(b, 'settings.phchange'))) {
                  var g = lb(a, b) || ''
                  g !== f && e.C('phc_settings', g)
                } else f && (b = Fh(a, f))
                e = n(b, 'clientId')
                f = n(b, 'orderId')
                b = n(b, 'phones') || []
                e &&
                  f &&
                  b.length &&
                  ((f = {
                    Pb: '',
                    ac: '',
                    yg: 0,
                    qa: {},
                    Ca: [],
                    Rf: !1,
                    tb: !0,
                    l: a,
                    xc: c
                  }),
                  y(f, { Rf: !0 }),
                  Eh(a, d, f),
                  (b = wd(a)),
                  (e = Ei(a, b, 1e3)),
                  (d = G(Eh, null, a, d, f)),
                  e.D(d),
                  Fi(a, b))
              })
        }),
        qh = x(
          function (a, c) {
            var b = H(a),
              d = Ra(a),
              e = [],
              f = E([a, c, b, d], ep)
            pd(a) || fp(a, '14.1') || e.push(E([um, 'pp', ''], f))
            var g = bl(a) && !of(a, 68)
            g || e.push(E([wm, 'pu', ''], f))
            g ||
              d.$d ||
              Qd(a) ||
              (e.push(E([tm, 'zzlc', 'na'], f)), e.push(E([sm, 'cc', ''], f)))
            return e.length
              ? {
                  Fa: function (h, k) {
                    if (0 === b.o('isEU'))
                      try {
                        z(Si, e)
                      } catch (l) {}
                    k()
                  },
                  Z: function (h, k) {
                    var l = h.H
                    if (l && 0 === b.o('isEU'))
                      try {
                        z(Aa(l), e)
                      } catch (m) {}
                    k()
                  }
                }
              : {}
          },
          function (a, c) {
            return N(c)
          }
        ),
        Ku = u(function (a) {
          a = n(a, 'navigator.plugins') || []
          return Pa(a)
            ? u(
                za,
                Na,
                Dr(function (c, b) {
                  return c.name > b.name ? 1 : 2
                }),
                hb(bp)
              )(a)
            : ''
        }, qd(',')),
        Lu = (function (a) {
          return function (c) {
            var b = ab(c)
            if (!b) return ''
            b = b('canvas')
            var d = [],
              e = a(),
              f = e.Mh
            e = e.Ch
            try {
              var g = qa('getContext', b)
              d = A(u(O, g), e)
            } catch (h) {
              return ''
            }
            return (g = bb(O, d)) ? f(c, { canvas: b, qh: g }) : ''
          }
        })(function () {
          return { Ch: Iu, Mh: om }
        }),
        mm = ['name', 'lang', 'localService', 'voiceURI', 'default'],
        Mu = C('p.tfs', function (a) {
          var c = H(a)
          if (!c.o('tfs')) {
            c.C('tfs', !0)
            c = ia(a)
            var b = B
            b = c.D(a, ['message'], function (d) {
              try {
                var e = d.origin
              } catch (h) {}
              if (
                e &&
                'https://iframe-toloka.com' === e &&
                ((d = tb(a, d.data)), La(d) && 'appendremote' === d.action)
              )
                if (
                  ((d = Ra(a)),
                  d.o('tfsc') ||
                    a.confirm(
                      '\u0414\u043e\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 \u201c\u0420\u0430\u0437\u043c\u0435\u0442\u043a\u0430 \u0441\u0430\u0439\u0442\u043e\u0432\u201c \u043e\u0442 toloka.ai \u0437\u0430\u043f\u0440\u0430\u0448\u0438\u0432\u0430\u0435\u0442 \u0434\u043e\u0441\u0442\u0443\u043f \u043a \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u043c\u0443 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b. \u0420\u0430\u0437\u0440\u0435\u0448\u0438\u0442\u044c?'
                    ))
                ) {
                  d.C('tfsc', 1)
                  var f, g
                  H(a).C(
                    '_u',
                    ((f = {}),
                    (f.getCachedTags = Tf),
                    (f.button =
                      ((g = {}),
                      (g.closest = w(a, Uf)),
                      (g.select = Vf),
                      (g.getData = w(a, Wf)),
                      g)),
                    f)
                  )
                  mc(a, {
                    src: 'https://yastatic.net/s3/metrika/2.1540128042.1/form-selector/button_ru.js'
                  })
                  b()
                } else a.close()
            })
          }
        }),
        Nu = Ya(/[a-z\u0430-\u044f,.]/gi),
        Ou = C('ice', function (a, c, b) {
          var d = Ha(a, c)
          if (d) {
            var e = n(b, 'target')
            if (e && ((c = n(e, 'value')), (c = ob(c)) && !(100 <= Pa(c)))) {
              b = Mb(c)
              var f = 0 < c.indexOf('@'),
                g = 'tel' === n(e, 'type') || (!f && Pa(b))
              if (f || g) {
                if (g) {
                  if (Nu(c)) return
                  g = c[0]
                  var h = b[0]
                  if (g !== h && '+' !== g) return
                  var k = c[1]
                  if ('+' === g && k !== h) return
                  c = c[Pa(c) - 1]
                  g = b[Pa(b) - 1]
                  if (c !== g) return
                  c = b
                }
                b = f ? 5 : 11
                g = f ? 100 : 16
                Pa(c) < b ||
                  Pa(c) > g ||
                  hj(a, c).then(function (l) {
                    var m,
                      p,
                      q,
                      r = qg(a, e)
                    d.params(
                      ((m = {}),
                      (m.__ym =
                        ((p = {}),
                        (p.fi = ug(
                          ((q = {}), (q.a = f ? 1 : 0), (q.b = r), (q.c = l), q)
                        ).Da()),
                        p)),
                      m)
                    )
                  }, D(a, 'ice.s'))
              }
            }
          }
        }),
        Pu = ['text', 'email', 'tel'],
        Qu = ['cc-', 'name', 'shipping'],
        Ru = C('icei', function (a, c) {
          if (Id(a) && Xk(a)) {
            var b = !1,
              d = []
            cc(a)(
              Ua(
                B,
                E(
                  [
                    c,
                    function (e) {
                      var f = n(e, 'settings.cf')
                      e = wf(a) || n(e, 'settings.eu')
                      if (f && !e && !b) {
                        var g = ia(a)
                        f = yb('input', a.document.body)
                        z(function (h) {
                          Ff(a, h) ||
                            !K(h.type, Pu) ||
                            Ja(O, A(w(h.autocomplete, Fc), Qu)) ||
                            d.push(g.D(h, ['blur'], E([a, c], Ou)))
                        }, f)
                      }
                    }
                  ],
                  ra
                )
              )
            )
            return function () {
              z(ha, d)
              b = !0
            }
          }
        }),
        Bh,
        Su = C('p.ai', function (a, c) {
          return new J(function (b) {
            ;(pd(a) || hf(a)) &&
              b(
                ra(c, function (d) {
                  var e
                  return (d = n(d, 'settings.sbp'))
                    ? Ah(a, y({}, d, ((e = {}), (e.c = c.id), e)), 10)
                    : B
                })
              )
            b(B)
          })
        }),
        Tu =
          'architecture bitness model platformVersion uaFullVersion fullVersionList'.split(
            ' '
          ),
        zl = pb('uah', function (a) {
          if (
            !Ca(
              'getHighEntropyValues',
              n(a, 'navigator.userAgentData.getHighEntropyValues')
            )
          )
            return J.reject('0')
          try {
            return a.navigator.userAgentData.getHighEntropyValues(Tu).then(
              function (c) {
                if (!La(c)) throw '2'
                return c
              },
              function () {
                throw '1'
              }
            )
          } catch (c) {
            return J.reject('3')
          }
        }),
        Al = new RegExp(
          I(
            '|',
            'yandex.com/bots;Googlebot;APIs-Google;Mediapartners-Google;AdsBot-Google;FeedFetcher-Google;Google-Read-Aloud;DuplexWeb-Google;Google Favicon;googleweblight;Lighthouse;Mail.RU_Bot;StackRambler;Slurp;msnbot;bingbot;www.baidu.com/search/spi_?der.htm'.split(
              ';'
            )
          ).replace(/[./]/g, '\\$&')
        ),
        cm = x(function (a) {
          var c = gb(a)
          return (c = Al.test(c))
            ? J.resolve(c)
            : zl(a).then(function (b) {
                try {
                  return M(
                    function (d, e) {
                      return d || Al.test(e.brand)
                    },
                    !1,
                    b.brands
                  )
                } catch (d) {
                  return !1
                }
              }, w(!1, O))
        }),
        Wb = ['0', '1', '2', '3'],
        Ec = Wb[0],
        gf = Wb[1],
        Uu = Wb[2],
        lf = A(u(O, qa('concat', 'GDPR-ok-view-detailed-')), Wb),
        be = ya(
          'GDPR-ok GDPR-cross GDPR-cancel 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 GDPR-settings GDPR-ok-view-default GDPR-ok-view-detailed 21 22 23'.split(
            ' '
          ),
          lf,
          ['28', '29', '30']
        ),
        Vu = '3 13 14 15 16 17 28'.split(' '),
        kf = u(hb(V('ymetrikaEvent.type')), Rg(uc(be))),
        jm = {
          url: 'https://yastatic.net/s3/gdpr/popup/v2/',
          Uf: 'ru en et fi lt lv pl fr no sr'.split(' '),
          cg: '_two_main_buttons'
        },
        Vb,
        im =
          ((Vb = {}),
          (Vb['GDPR-ok'] = 'ok'),
          (Vb['GDPR-ok-view-default'] = 'ok-default'),
          (Vb['GDPR-ok-view-detailed'] = 'ok-detailed'),
          (Vb['GDPR-ok-view-detailed-0'] = 'ok-detailed-all'),
          (Vb['GDPR-ok-view-detailed-1'] = 'ok-detailed-tech'),
          (Vb['GDPR-ok-view-detailed-2'] = 'ok-detailed-tech-analytics'),
          (Vb['GDPR-ok-view-detailed-3'] = 'ok-detailed-tech-other'),
          Vb),
        de = [],
        wh = u(kf, hb(Cr(be)), qd(',')),
        xh = u(Rg(uc(be)), Pa, Boolean),
        am = x(function (a, c) {
          var b = c.o('gdpr')
          return K(b, Wb) ? '-' + b : ''
        }),
        bd = {},
        Bl = x(Ac),
        Yl = u(qa('exec', /counterID=(\d+)/), V('1')),
        Cl = la(function (a, c) {
          var b = Bl(a),
            d = za(c),
            e = d[0],
            f = d[1],
            g = d.slice(2)
          if (f) {
            d = Xl(a, e)
            var h = d[0],
              k = d[1]
            d = N(k)
            b[d] || (b[d] = {})
            b = b[d]
            c.wf ||
              (bd[f] &&
                M(
                  function (l, m) {
                    return l || !!m(a, k, g, h)
                  },
                  !1,
                  bd[f]
                )) ||
              ('init' === f
                ? ((c.wf = !0),
                  h
                    ? Eb(
                        a,
                        '' + e,
                        'Duplicate counter ' + e + ' initialization'
                      )
                    : (a['yaCounter' + k.id] = new a.Ya[ta.vc](y({}, g[0], k))))
                : h && h[f] && b.Ei
                ? (h[f].apply(h, g), (c.wf = !0))
                : ((d = b.zg),
                  d || ((d = []), (b.zg = d)),
                  d.push(ya([e, f], g))))
          }
        }),
        Wu = pb('is', function (a) {
          var c = $b(a)
          if (Be(a, '0')) c.Sb('debug_build')
          else {
            var b = Be(a, '2'),
              d = c.o('debug_build') === ta.pb
            if (b || d)
              return (
                c.C('debug_build', ta.pb), mc(a, { src: gl + '/tag_debug.js' })
              )
          }
        })
      'function' == typeof Promise && Promise.resolve()
      Na([
        void 0,
        void 0,
        void 0,
        void 0,
        void 0,
        void 0,
        void 0,
        void 0,
        void 0
      ])
      var Dl = x(vd),
        Xu = x(function () {
          var a = M(
            function (c, b) {
              'ru' !== b && (c[b] = fl + '.' + b)
              return c
            },
            {},
            ng
          )
          z(function (c) {
            a[c] = c
          }, da(il))
          return a
        }),
        Sl = x(function (a) {
          a = S(a).hostname
          return (a = bb(u(V('1'), Di('test'), Ib(ha)(a)), pa(il))) && a[0]
        }),
        El = (function (a, c) {
          return function (b, d) {
            var e = N(d)
            e = Xu(e)
            var f = Ql(b, e),
              g = H(b),
              h = eb(b)
            return Qd(b) || Kd(b)
              ? {}
              : {
                  Z: function (k, l) {
                    var m = k.H,
                      p = uh(b)
                    m = !(m && m.o('pv'))
                    if (!p || h || m || !f.length) return l()
                    if (g.o('startSync')) Dl(b).push(l)
                    else {
                      g.C('startSync', !0)
                      p = E([b, f, B, !1], a)
                      m = jf[0]
                      if (!m) return l()
                      m(b)
                        .then(p)
                        .then(l, u(gd(l), D(b, c)))
                        ['catch'](B)
                    }
                  }
                }
          }
        })(function (a, c, b, d) {
          var e = fa(a),
            f = H(a),
            g = Ra(a)
          b = bh(a, 'c')
          var h = Rb(a, b)
          return M(
            function (k, l) {
              function m () {
                var r = g.o('synced')
                f.C('startSync', !1)
                r && ((r[l.Ri] = p), g.C('synced', r))
                r = Dl(a)
                z(ha, r)
                Dd(r)
              }
              var p,
                q = h({ Y: { ja: ['sync.cook'], Wa: 1500 } }, [
                  ta.$a +
                    '//' +
                    l.Ej +
                    '/sync_cookie_image_check' +
                    (d ? '_secondary' : '')
                ])
                  .then(function () {
                    p = e(kb)
                    m()
                  })
                  ['catch'](function () {
                    p = e(kb) - 1435
                    m()
                  })
              q = w(q, O)
              return k.then(q)
            },
            J.resolve(),
            c
          )['catch'](D(a, 'ctl'))
        }, 'sy.c'),
        Cb,
        Ol =
          ((Cb = {}),
          (Cb.brands = 'chu'),
          (Cb.architecture = 'cha'),
          (Cb.bitness = 'chb'),
          (Cb.uaFullVersion = 'chf'),
          (Cb.fullVersionList = 'chl'),
          (Cb.mobile = 'chm'),
          (Cb.model = 'cho'),
          (Cb.platform = 'chp'),
          (Cb.platformVersion = 'chv'),
          Cb),
        Yu = pb('ot', function (a, c) {
          return ia(a).D(a, ['message'], C('ot', w(E([a, c], ed), Ll)))
        }),
        Kl = C('destruct.e', function (a, c, b) {
          return function () {
            var d = H(a),
              e = c.id
            z(function (f, g) {
              return T(f) && D(a, 'dest.fr.' + g, f)()
            }, b)
            delete d.o('counters')[N(c)]
            delete a['yaCounter' + e]
          }
        }),
        ad = H(window)
      ad.Va('hitParam', {})
      ad.Va('lastReferrer', window.location.href)
      ;(function () {
        U.push(function (a, c) {
          var b
          return (
            (b = {}),
            (b.firstPartyParams = qs(a, c)),
            (b.firstPartyParamsHashed = Sp(a, c)),
            b
          )
        })
        Ue.push('fpp', 'fpmh')
      })()
      ;(function () {
        var a = H(window)
        a.Va('getCounters', rs(window))
        Cc.push(ss)
        Ug.push(function (c, b) {
          b.counters = a.o('getCounters')
        })
      })()
      ;(function () {
        U.push(function (a, c) {
          var b,
            d,
            e = c.id,
            f = c.$,
            g = c.ob,
            h = c.nf,
            k = c.Kg
          nb(
            a,
            ((b = {}),
            (b.counterKey = N(c)),
            (b.name = 'counter'),
            (b.data =
              ((d = {}),
              (d.id = e),
              (d.counterType = f),
              (d.webvisor = g),
              (d.trustedDomains = k),
              (d.clickmap = h),
              d)),
            b)
          )
        })
      })()
      Ba['1'] = jb
      U.push(ts)
      wa['1'] = Ye
      Ab(cj, -1)
      Ob['1'] = [
        [cj, -1],
        [Ke, 1],
        [De, 2],
        [Hb(), 3]
      ]
      U.push(us)
      U.push(
        C('p.ar', function (a, c) {
          var b,
            d = sa(a, 'a', c)
          return (
            (b = {}),
            (b.hit = function (e, f, g, h, k, l) {
              var m,
                p,
                q = { G: {}, H: Ea(((m = {}), (m.pv = 1), (m.ar = 1), m)) }
              if (e)
                return (
                  (f = La(f)
                    ? {
                        title: f.title,
                        gg: f.referer,
                        da: f.params,
                        qc: f.callback,
                        l: f.ctx
                      }
                    : { title: f, gg: g, da: h, qc: k, l: l }),
                  (g = Bd(c)),
                  g.url !== e && ((g.ref = g.url), (g.url = e)),
                  (e = e || S(a).href),
                  (g = f.gg || g.ref || a.document.referrer),
                  (h = Gb(
                    a,
                    c,
                    'PageView. Counter ' +
                      c.id +
                      '. URL: ' +
                      e +
                      '. Referrer: ' +
                      g,
                    f.da
                  )),
                  (k = y(q.V || {}, { da: f.da, title: f.title })),
                  (q = d(
                    y(q, {
                      V: k,
                      G: y(
                        q.G || {},
                        ((p = {}), (p['page-url'] = e), (p['page-ref'] = g), p)
                      )
                    }),
                    c
                  ).then(h)),
                  Mc(a, 'p.ar.s', q, f.qc || B, f.l)
                )
            }),
            b
          )
        })
      )
      Ba.a = jb
      Ob.a = Pb
      wa.a = Ye
      U.push(ue)
      Ba.g = jb
      wa.g = Ye
      Ob.g = Pb
      U.push(vs)
      U.push(ws)
      Ob.t = Pb
      Ba.t = jb
      wa.t = Xc
      U.push(ys)
      Ob['2'] = Pb
      Ba['2'] = jb
      wa['2'] = Xc
      Ba.r = wg('r')
      wa.r = Ye
      Db.push(
        C('p.r', function (a, c) {
          var b = As(a),
            d = sa(a, 'r', c),
            e = D(a, 'rts.p')
          return ra(
            c,
            E(
              [
                function (f, g) {
                  var h = { id: g.zh, $: g.$ },
                    k = {
                      Y: { ea: g.nj },
                      H: Ea(g.nh),
                      G: g.da,
                      V: { cc: g.cc },
                      ia: { ta: g.ta }
                    }
                  g.La && (k.La = ug(g.La))
                  h = d(k, h)['catch'](e)
                  return f.then(w(h, O))
                },
                J.resolve(),
                b
              ],
              M
            )
          )['catch'](e)
        })
      )
      ba(
        'r',
        function (a) {
          return {
            Z: function (c, b) {
              var d = c.H,
                e = void 0 === d ? Ea() : d,
                f = c.V.cc,
                g = Ad(a)
              d = e.o('rqnl', 0) + 1
              e.C('rqnl', d)
              if ((e = n(g, I('.', [f, 'browserInfo'])))) (e.rqnl = d), Zf(a)
              b()
            },
            Fa: function (c, b) {
              Yi(a, c)
              b()
            }
          }
        },
        1
      )
      Ab(ve, 100)
      ba('1', ve, 100)
      U.push(Bs)
      ba('n', Ke, 1)
      ba('n', De, 2)
      ba('n', Hb(), 3)
      ba('n', ve, 100)
      Ba.n = jb
      wa.n = Xc
      fc({ ef: { ga: 'accurateTrackBounce' } })
      U.push(Cs)
      Ba.m = wg('cm')
      wa.m = ls
      ba('m', Hb(['u', 'v', 'vf']), 1)
      ba('m', ve, 2)
      fc({ nf: { ga: 'clickmap' } })
      U.push(Ds)
      U.push(Es)
      U.push(Gs)
      U.push(Hs)
      ;(function () {
        U.push(Is)
        Ue.push('ecommerce')
        fc({
          Hd: {
            ga: 'ecommerce',
            fb: function (a) {
              if (a) return !0 === a ? 'dataLayer' : '' + a
            }
          }
        })
      })()
      U.push(Js)
      Db.push(Ls)
      U.push(Ms)
      Ue.push('user_id')
      Cc.push(C('p.st', Ns))
      U.push(Os)
      Ab(function (a, c) {
        return {
          Fa: function (b, d) {
            var e = Ha(a, c)
            e = e && e.userParams
            var f = (b.V || {}).Ye
            e && f && e(f)
            d()
          }
        }
      }, 0)
      Yd.push(os)
      U.push(Rs)
      U.push(Ss)
      We.push(function (a) {
        var c = H(a)
        c.o('i') || (c.C('i', !0), ia(a).D(a, ['message'], w(a, jp)))
      })
      ;(function () {
        var a,
          c = ((a = {}), (a.tp = u(zb, ak, Fb)), (a.tpid = u(zb, Tq)), a)
        y(Ee, c)
      })()
      Ab(sd, 20)
      ba('n', sd, 20)
      ba('1', sd, 20)
      ;(function () {
        var a
        Ti.push('impressions', 'click', 'promoView', 'promoClick')
        var c =
          ((a = {}),
          (a.promotion_name = 'name'),
          (a.promotion_id = 'id'),
          (a.item_id = 'product_id'),
          (a.item_name = 'product_name'),
          a)
        yd.view_item_list = { event: 'impressions', Aa: vc }
        yd.select_item = { event: 'click', Ma: 'products', Aa: c }
        yd.view_promotion = { event: 'promoView', Ma: 'promotions', Aa: c }
        yd.select_promotion = { event: 'promoClick', Ma: 'promotions', Aa: c }
      })()
      U.push(function (a, c) {
        var b
        return (
          (b = {}),
          (b.ecommerceAdd = C('ecm.a', Ts(a, c))),
          (b.ecommerceRemove = C('ecm.r', Us(a, c))),
          (b.ecommerceDetail = C('ecm.d', Vs(a, c))),
          (b.ecommercePurchase = C('ecm.p', Ws(a, c))),
          b
        )
      })
      ;(function () {
        var a,
          c = {}
        c.bu = dt
        c.pri = So
        c.wv = w(2, O)
        c.ds = Vo
        c.co = function (b) {
          return hd(H(b).o('jn'))
        }
        c.td = ft
        y(
          c,
          ((a = {}),
          (a.iss = u(Or, Fb)),
          (a.hdl = u(Pr, Fb)),
          (a.iia = u(Qr, Fb)),
          (a.cpf = u(ct, Fb)),
          (a.ntf = x(function (b) {
            a: switch (n(b, 'Notification.permission')) {
              case 'denied':
                b = !1
                break a
              case 'granted':
                b = !0
                break a
              default:
                b = null
            }
            return Va(b) ? null : b ? 2 : 1
          })),
          (a.eu = ic('isEU')),
          (a.ns = Uk),
          (a.np = function (b) {
            if (Wa(b, 0, 100)) b = null
            else {
              b = ob(Pf(b), 100)
              for (var d = [], e = 0; e < b.length; e++) {
                var f = b.charCodeAt(e)
                128 > f
                  ? d.push(f)
                  : (127 < f && 2048 > f
                      ? d.push((f >> 6) | 192)
                      : (d.push((f >> 12) | 224),
                        d.push(((f >> 6) & 63) | 128)),
                    d.push((f & 63) | 128))
              }
              b = Th(d)
            }
            return b
          }),
          a)
        )
        y(Ee, c)
      })()
      ;(function () {
        var a = {}
        a.hc = ic('hc')
        a.oo = ic('oo')
        a.pmc = ic('cmc')
        a.lt = function (c) {
          var b = Nd(c).o('lt', null)
          return b ? c.Math.round(100 * b) : b
        }
        a.re = u(pq, Fb)
        a.aw = function (c) {
          c = bb(u(ma, Sb), [
            c.document.hidden,
            c.document.msHidden,
            c.document.webkitHidden
          ])
          return ma(c) ? null : hd(!c)
        }
        a.yu = function (c) {
          var b = S(c).hostname
          return K(b, ['dzen.ru', 'ya.ru'])
            ? (Dc(c, '').o('yandexuid') || '').substring(0, 25)
            : null
        }
        a.ifc = ic('ifc')
        a.ifb = ic('ifb')
        a.ecs = ic('ecs')
        a.csi = ic('scip')
        y(ig, a)
      })()
      wa.er = Yc
      ;(function (a) {
        try {
          var c = bh(a, 'er'),
            b = Oo(a, c)
          Yj.push(function (d, e, f, g) {
            var h, k, l, m, p
            0.01 >= a.Math.random() ||
              b(
                ((h = {}),
                (h[d] =
                  ((k = {}),
                  (k[ta.pb] =
                    ((l = {}),
                    (l[e] =
                      ((m = {}),
                      (m[f] = g
                        ? ((p = {}), (p[a.location.href] = g), p)
                        : a.location.href),
                      m)),
                    l)),
                  k)),
                h)
              )
          })
        } catch (d) {}
      })(window)
      ;(function () {
        Yd.push(Ro)
        Ce.unshift(No)
        fh.push(function (a) {
          var c = void 0
          void 0 === c && (c = !0)
          H(a).C('oo', c)
        })
      })()
      Ab(function (a, c) {
        return {
          Z: function (b, d) {
            var e = b.G,
              f = b.H
            !jl[c.id] &&
              f.o('pv') &&
              c.exp &&
              !e.nohit &&
              ((e.exp = c.exp), (jl[c.id] = !0))
            d()
          }
        }
      }, -99)
      U.push(kt)
      Ob.e = Pb
      Ba.e = jb
      wa.e = Xc
      fc({ exp: { ga: 'experiments' } })
      nk.experiments = 'ex'
      ;(function () {
        var a
        jf.push(lt)
        Ba.f = jb
        y(wa, ((a = {}), (a.f = Wk), a))
        ba('f', Hb(), 1)
        ba('f', rj, 2)
        ba('f', sd, 20)
      })()
      Yd.push(function (a, c) {
        var b = { va: N(c), Cd: Ha(a, c), Gg: fa(a), ke: Ra(a) },
          d = b.Gg(kb)
        if (!b.ke.$d) {
          var e = b.ke.o('ymoo' + b.va)
          if (e && 30 > d - e)
            (b = b.va), delete H(a).o('counters', {})[b], Ta(Sa('uws'))
          else ra(c, mt(b))['catch'](D(a, 'd.f'))
        }
      })
      ;(function () {
        var a,
          c,
          b = [xb]
        y(wa, ((a = {}), (a.s = b), (a.S = b), (a.u = Yc), a))
        y(Ba, ((c = {}), (c.s = Rb), (c.S = jb), (c.u = Rb), c))
        ba('s')
        ba('u')
        ba('S', Hb(['v', 'hid', 'u', 'vf', 'rn']), 1)
        U.push(C('s', Ao))
      })()
      Ba['8'] = Rb
      wa['8'] = [gg]
      Vk.push([gg, 0])
      U.push(
        C('p.us', function (a, c) {
          return ra(c, function (b) {
            var d,
              e = n(b, 'settings.sbp')
            return (
              e &&
              oi(a, b, {
                qb: c,
                bd: '8',
                data: y({}, e, ((d = {}), (d.c = c.id), d)),
                ie: 'cs'
              })
            )
          })
        })
      )
      ba('p', Hb(gh), 1)
      Ba.p = function (a, c, b) {
        return function (d, e) {
          var f,
            g = y({ H: Ea() }, d)
          g.G || (g.G = {})
          var h = g.G,
            k = g.Sa
          k = void 0 === k ? {} : k
          h['wv-hit'] = h['wv-hit'] || '' + ac(a)
          h['page-url'] = h['page-url'] || a.location.href
          h.wmode = '0'
          h['wv-part'] = '0'
          h['page-url'] = h['page-url'] || a.location.href
          h['wv-type'] || (h['wv-type'] = k.Zd ? '5' : '4')
          h = {
            ia: { ta: 'webvisor/' + e.id },
            Y: y(g.Y, {
              Ta: ((f = {}), (f['Content-Type'] = 'text/plain'), f),
              lc: 'POST'
            }),
            G: h
          }
          f = Oa(Of(a, 'pub', e), b)
          return oe(a, c, f)(y(g, h))
        }
      }
      wa.p = Na([wb, xb])
      Db.push(rt)
      fc({
        ob: { ga: 'webvisor', fb: Boolean },
        Eh: { ga: 'disableFormAnalytics', fb: Boolean }
      })
      ba('4', Hb(gh), 1)
      Ba['4'] = ni
      wa['4'] = Na([wb, xb, Oc])
      Db.push(xt)
      ;(function () {
        ba('W', Hb(gh), 1)
        wa.W = Na([wb, xb])
        Ba.W = ni
        Db.push(iu)
        U.push(ju)
        fc({ ob: { ga: 'webvisor' } })
        fc({
          Kg: { ga: 'trustedDomains' },
          tc: { ga: 'childIframe', fb: Boolean }
        })
        fh.push(function (a) {
          H(a).o('stopRecorder', B)()
        })
        Pk('wv')
      })()
      U.push(lu)
      ba('pi')
      Ba.pi = Rb
      wa.pi = Yc
      Pk(
        'w',
        function (a, c) {
          return {
            Z: function (b, d) {
              if (b.H) {
                var e = ul(c),
                  f = e.status
                'rt' === e.bd &&
                  f &&
                  (b.H.C('rt', f),
                  b.ia || (b.ia = {}),
                  (b.ia.Bi = 1 === f ? Qh(a, c) + '.' : ''))
              }
              d()
            }
          }
        },
        2
      )
      U.push(nu)
      U.push(yu)
      wa['6'] = Na([wb, xb])
      Ba['6'] = Rb
      U.push(zu)
      U.push(gt)
      ;(function () {
        Ug.push(function (a, c) {
          c.informer = Km(a)
        })
      })()
      Ab(sf, 6)
      ba('1', sf, 6)
      ba('adb')
      ba('n', sf, 4)
      wa.adb = Yc
      Ba.adb = oe
      Cc.push(Bu)
      wa['5'] = Xc
      Ba['5'] = jb
      Ob['5'] = Z(u(xc, uc([Ke, De]), Sb), Pb)
      U.push(Cu)
      ba('5', sd, 20)
      Ab(Jh, 7)
      ba('n', Jh, 6)
      Db.push(Du)
      Ba.d = jb
      ba('d', Hb(['hid', 'u', 'v', 'vf']), 1)
      wa.d = Yc
      ba(
        'n',
        function (a, c) {
          return {
            Fa: function (b, d) {
              if (!b.V || !b.V.force) {
                var e = 0.002,
                  f = c.id === ta.ah ? 1 : 0.002,
                  g,
                  h,
                  k,
                  l,
                  m
                void 0 === e && (e = 1)
                void 0 === f && (f = 1)
                var p = Qf(a)
                if (
                  p &&
                  T(p.getEntriesByType) &&
                  ((e = Math.random() > e), (f = Math.random() > f), !e || !f)
                ) {
                  p = p.getEntriesByType('resource')
                  for (
                    var q = {}, r = {}, t = {}, v = Im(), F = S(a).href, Y = 0;
                    Y < p.length;
                    Y += 1
                  ) {
                    var Q = p[Y],
                      oa = Q.name.replace(/^https?:\/\//, '').split('?')[0],
                      ua = pc(oa),
                      vb =
                        ((g = {}),
                        (g.dns = Math.round(
                          Q.domainLookupEnd - Q.domainLookupStart
                        )),
                        (g.tcp = Math.round(Q.connectEnd - Q.connectStart)),
                        (g.duration = Math.round(Q.duration)),
                        (g.response = Math.round(
                          Q.responseEnd - Q.requestStart
                        )),
                        g)
                    'script' !== Q.initiatorType ||
                      e ||
                      (r[oa] = y(
                        vb,
                        ((h = {}),
                        (h.name = Q.name),
                        (h.decodedBodySize = Q.decodedBodySize),
                        h)
                      ))
                    ;(!Ih[ua] && !v[ua]) ||
                      q[oa] ||
                      f ||
                      (q[oa] = y(vb, ((k = {}), (k.pages = F), k)))
                  }
                  da(q).length && (t.timings8 = q)
                  da(r).length && (t.scripts = r)
                  if (da(t).length)
                    sa(
                      a,
                      'd',
                      c
                    )(
                      {
                        H: Ea(((l = {}), (l.ar = 1), (l.pv = 1), l)),
                        Y: { ea: lb(a, t) || void 0 },
                        G: ((m = {}), (m['page-url'] = F), m)
                      },
                      { id: ta.eh, $: '0' }
                    )['catch'](D(a, 'r.tim.ng2'))
                }
              }
              d()
            }
          }
        },
        7
      )
      wa.ci = [xb]
      Ba.ci = Rb
      Db.push(
        C('p.sci', function (a, c) {
          return ra(c, w(a, Hm))['catch'](D(a, 'ins.cs'))
        })
      )
      U.push(Eu)
      Db.push(bt)
      U.push(Ju)
      Ab(qh, 8)
      ba('f', qh, 3)
      ba('n', qh, 5)
      Cc.push(
        (function (a) {
          return C('fip', function (c) {
            if (!bl(c) || Kd(c)) {
              var b = Ra(c)
              if (!b.o('fip')) {
                var d = u(
                  hb(
                    u(function (e, f) {
                      return C('fip.' + f, e)(c)
                    }, G(nr, null))
                  ),
                  qd('-')
                )(a)
                b.C('fip', d)
              }
            }
          })
        })([
          Lu,
          Ku,
          function (a) {
            var c = n(a, 'ApplePaySession'),
              b = S(a).protocol
            a = c && 'https:' === b && !eb(a) ? c : void 0
            c = ''
            if (!a) return c
            try {
              c = '' + a.canMakePayments()
              b = ''
              var d = a.supportsVersion
              if (T(d))
                for (var e = 1; 20 >= e; e += 1)
                  b += d.call(a, e) ? '' + e : '0'
              return b + c
            } catch (f) {
              return c
            }
          },
          function (a) {
            a = n(a, 'navigator') || {}
            return a.doNotTrack || a.msDoNotTrack || 'unknown'
          },
          function (a) {
            if ((a = $s(a)))
              try {
                for (var c = [], b = 0; b < cl.length; b += 1) {
                  var d = a(cl[b])
                  c.push(d)
                }
                var e = c
              } catch (f) {
                e = []
              }
            else e = []
            return e ? I('x', e) : ''
          },
          function (a) {
            var c = void 0
            void 0 === c && (c = Hu)
            var b = n(a, 'navigator') || {}
            c = A(w(b, n), c)
            c = I('x', c)
            try {
              var d = n(a, 'navigator.getGamepads')
              var e = (Ma(d, 'getGamepads') && a.navigator.getGamepads()) || []
            } catch (f) {
              e = []
            }
            return c + 'x' + Pa(e)
          },
          Fu,
          function (a) {
            a = n(a, 'screen') || {}
            return I('x', A(w(a, n), Gu))
          },
          function (a) {
            return I('x', lm(a) || [])
          },
          function (a) {
            a = Cm(a)
            return ca(a) ? I('x', a) : a
          },
          function (a) {
            return (a = Em(a))
              ? u(
                  Fr,
                  Rg(O),
                  hb(E(['', ['matches', 'media']], nm)),
                  w('x', I)
                )(a)
              : ''
          }
        ])
      )
      Ab(function (a) {
        return {
          Z: function (c, b) {
            var d = c.H,
              e = Ra(a).o('fip')
            e && d && (d.C('fip', e), ae(c, 'fip', hd(e)))
            b()
          }
        }
      }, 9)
      ba(
        'h',
        function (a) {
          return {
            Fa: function (c, b) {
              var d = c.tj
              se(c) && d && H(a).C('isEU', n(d, 'settings.eu'))
              b()
            }
          }
        },
        3
      )
      Cc.push(hu)
      We.push(Mu)
      Db.push(Ru)
      U.push(Su)
      fc({ Zj: { ga: 'yaDisableGDPR' }, $j: { ga: 'yaGDPRLang' } })
      Ce.push(function (a, c) {
        return { Z: E([a, c], $l) }
      })
      mg.push('gdpr', 'gdpr_popup')
      lg.push(function (a, c) {
        var b = $d(a)
        b = kf(b)
        if (Z(uc(Vu), b).length) return !0
        b = c(a, 'gdpr')
        return K(b, [Ec, Uu])
      })
      Ce.push(function (a) {
        return {
          Z: function (c, b) {
            var d = c.ia || {},
              e
            ;(e = n(a, 'document.referrer'))
              ? ((e = Hc(a, e).host), (e = ij(e)), (e = fl + '.' + (e || ht)))
              : (e = bc)
            c.ia = y(d, { Ci: [e] })
            b()
          }
        }
      })
      ;(function () {
        mg.push('_ym_debug_build')
        Zl('init', function (a, c) {
          var b = '1' === c.$,
            d = dg(c)
          return eb(a) || b || d || !Wu(a) ? !1 : !0
        })
      })()
      Ab(El, 5)
      ba('1', El, 6)
      wa.c = Yc
      Ba.c = Rb
      ba(
        'h',
        function (a) {
          return {
            Z: function (c, b) {
              se(c)
                ? zl(a)
                    .then(Ml, Pl)
                    .then(function (d) {
                      c.G || (c.G = {})
                      c.G.uah = d
                      b()
                    }, b)
                : b()
            }
          }
        },
        7
      )
      ;(function () {
        function a (c) {
          var b = qc('canvas', c.document)
          if (b && (b = Ic(b))) {
            var d = Je(c) || Rc(c),
              e = d[0]
            d = d[1]
            if (0.3 <= (Fj(c, b, { Qa: d, qd: e }) / d) * e)
              return H(c).C('hc', 1), !0
          }
          return !1
        }
        U.push(
          C('hcp', function (c) {
            a(c) || W(c, w(c, a), 3e3)
          })
        )
      })()
      U.push(C('p.ot', Yu))
      U.push(function (a, c) {
        var b = Bl(a),
          d = N(c),
          e = b[d]
        e || ((e = {}), (b[d] = e))
        e.Ei = !0
        if ((b = e.zg)) (d = Cl(a)), z(d, b)
      })
      We.push(function (a) {
        var c = n(a, 'ym')
        if (c) {
          var b = n(c, 'a')
          b || ((c.a = []), (b = c.a))
          var d = Cl(a)
          ye(
            a,
            b,
            function (e) {
              e.Ba.D(d)
            },
            !0
          )
        }
      })
      if (window.Ya && df) {
        var Fl = ta.vc
        window.Ya[Fl] = df
        ps(window)
        z(u(Pc([window, window.Ya[Fl]]), ha), Ug)
      }
      z(u(Pc([window]), ha), We)
    })()
  } catch (df) {}
}.call(this))
