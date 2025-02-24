package com.maruf.offlinebudget

import android.os.Bundle
import android.webkit.WebView
import android.webkit.WebViewClient
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.Scaffold
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.viewinterop.AndroidView
import com.maruf.offlinebudget.ui.theme.OfflineBudgetTheme

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContent {
            OfflineBudgetTheme {
                Scaffold(modifier = Modifier.fillMaxSize()) { innerPadding ->
                    // Load the WebViewScreen with DOM storage enabled.
                    WebViewScreen(modifier = Modifier.padding(innerPadding))
                }
            }
        }
    }
}

@Composable
fun WebViewScreen(modifier: Modifier = Modifier) {
    AndroidView(
        modifier = modifier,
        factory = { context ->
            WebView(context).apply {
                // Enable JavaScript if your HTML requires it.
                settings.javaScriptEnabled = true
                // Enable DOM storage to allow localStorage to work.
                settings.domStorageEnabled = true
                // Ensure links load within the WebView instead of the default browser.
                webViewClient = WebViewClient()
                // Load the HTML file from the assets folder.
                loadUrl("file:///android_asset/index.html")
            }
        }
    )
}

@Preview(showBackground = true)
@Composable
fun DefaultPreview() {
    OfflineBudgetTheme {
        WebViewScreen()
    }
}
