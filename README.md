# Swift DocC Action

[![Dist](https://github.com/fwcd/swift-docc-action/actions/workflows/dist.yml/badge.svg)](https://github.com/fwcd/swift-docc-action/actions/workflows/dist.yml)

Generates documentation for a Swift package using the [`swift-docc-plugin`](https://github.com/apple/swift-docc-plugin).

## Usage

To use, make sure that your package includes a dependency on the plugin in your `Package.swift`:

```swift
.package(url: "https://github.com/apple/swift-docc-plugin.git", from: "1.0.0"),
```

Then include the action in your workflow (make sure that a Swift 5.6+ toolchain is on your PATH, on macOS this should be given, but on Linux you may need to first install it e.g. using [`setup-swift`](https://github.com/swift-actions/setup-swift)):

```yaml
- uses: fwcd/swift-docc-action@v1
  with:
    target: YourTarget
    output: ./docs
    hosting-base-path: yourproject
    disable-indexing: 'true'
    transform-for-static-hosting: 'true'
```

The generated documentation will be in the `./docs` folder. If you wish to host your docs on GitHub Pages, check out [this tutorial from the official docs](https://apple.github.io/swift-docc-plugin/documentation/swiftdoccplugin/publishing-to-github-pages/). An example of a workflow that deploys directly to GitHub Pages [can be found here](https://github.com/ProjectLighthouseCAU/lighthouse-swift/blob/de20cd3a9fe14a71986419858caed835702190c6/.github/workflows/docs.yml).
